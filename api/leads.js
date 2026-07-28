import { GoogleAuth } from "google-auth-library";
import fs from "node:fs";

const DEFAULT_SHEET_ID = "1Oxn0qfxFE3AyampreDfSfpuU5QrPkCDMP4C2UKBBdA4";
const DEFAULT_SHEET_TAB = "Leads Website";
const REQUIRED_FIELDS = ["firstName", "lastName", "email", "phone", "size", "pain"];

function parseJsonBody(req) {
  if (typeof req.body === "object" && req.body !== null) {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body);
  }

  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function normalizePrivateKey(privateKey) {
  return privateKey?.replace(/\\n/g, "\n");
}

function loadCredentials() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);

  if (clientEmail && privateKey) {
    return {
      client_email: clientEmail,
      private_key: privateKey,
    };
  }

  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (credentialsPath && fs.existsSync(credentialsPath)) {
    return JSON.parse(fs.readFileSync(credentialsPath, "utf8"));
  }

  throw new Error("Missing Google Sheets credentials.");
}

function validateLead(lead) {
  const missing = REQUIRED_FIELDS.filter((field) => !String(lead[field] || "").trim());
  if (missing.length > 0) {
    return { ok: false, message: "Missing required fields.", missing };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(lead.email || ""))) {
    return { ok: false, message: "Invalid email address.", missing: ["email"] };
  }

  return { ok: true };
}

function sanitize(value) {
  return String(value || "").trim().slice(0, 2000);
}

function buildRow(lead) {
  return [
    new Date().toISOString(),
    sanitize(lead.language),
    sanitize(lead.firstName),
    sanitize(lead.lastName),
    sanitize(lead.email),
    sanitize(lead.phone),
    sanitize(lead.size),
    sanitize(lead.pain),
    sanitize(lead.message),
    sanitize(lead.source || "website"),
  ];
}

async function appendLead(lead) {
  const credentials = loadCredentials();
  const sheetId = process.env.GOOGLE_SHEET_ID || DEFAULT_SHEET_ID;
  const sheetTab = process.env.GOOGLE_SHEET_TAB || DEFAULT_SHEET_TAB;

  const auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  const range = encodeURIComponent(`${sheetTab}!A:J`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [buildRow(lead)],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Google Sheets append failed: ${response.status} ${details}`);
  }

  return response.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed." });
  }

  try {
    const lead = await parseJsonBody(req);

    if (lead.companyWebsite) {
      return res.status(200).json({ ok: true });
    }

    const validation = validateLead(lead);
    if (!validation.ok) {
      return res.status(400).json(validation);
    }

    await appendLead(lead);
    return res.status(200).json({ ok: true, message: "Lead saved." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "Lead could not be saved." });
  }
}

