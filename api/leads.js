import { GoogleAuth } from "google-auth-library";
import fs from "node:fs";

const DEFAULT_SHEET_ID = "1Oxn0qfxFE3AyampreDfSfpuU5QrPkCDMP4C2UKBBdA4";
const DEFAULT_SHEET_TAB = "Leads Website";
const REQUIRED_FIELDS = ["firstName", "email", "pain"];
const MAX_BODY_BYTES = 12 * 1024;
const MIN_SUBMIT_TIME_MS = 2500;
const MAX_SUBMIT_AGE_MS = 24 * 60 * 60 * 1000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const FIELD_LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 40,
  size: 40,
  pain: 120,
  language: 10,
  source: 500,
  message: 2000,
};
const ALLOWED_SIZE_VALUES = new Set([
  "1-50 empleados",
  "51-200 empleados",
  "201+ empleados",
  "1-50 employees",
  "51-200 employees",
  "201+ employees",
]);
const ALLOWED_PAIN_VALUES = new Set([
  "Datos dispersos o poco confiables",
  "Procesos manuales repetitivos",
  "Reportes lentos o poco accionables",
  "Pilotos estancados",
  "Integraciones difíciles con sistemas actuales",
  "Riesgos de seguridad, privacidad o auditoría",
  "Costos de IA o APIs descontrolados",
  "Licencias de IA subutilizadas",
  "Partimos desde cero y necesitamos el primer caso",
  "Problemas en logística u operaciones",
  "Soporte interno o customer success saturado",
  "Necesitamos modelos locales u open-source",
  "No sé cómo clasificarlo todavía",
  "Otro problema raro o difícil de explicar",
  "Scattered or unreliable data",
  "Repetitive manual processes",
  "Slow or non-actionable reporting",
  "Stalled pilots",
  "Hard integrations with current systems",
  "Security, privacy, or auditability risk",
  "Uncontrolled AI or API costs",
  "Underused AI licenses",
  "We are starting from zero and need the first use case",
  "Logistics or operations problems",
  "Internal support or customer success overload",
  "We need local or open-source models",
  "I am not sure how to classify it yet",
  "Other weird or hard-to-explain problem",
]);

const rateLimitStore = globalThis.__IMR_LEAD_RATE_LIMIT__ || new Map();
globalThis.__IMR_LEAD_RATE_LIMIT__ = rateLimitStore;

function requestError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function parseJsonBody(req) {
  if (typeof req.body === "object" && req.body !== null) {
    return req.body;
  }

  if (typeof req.body === "string") {
    if (Buffer.byteLength(req.body, "utf8") > MAX_BODY_BYTES) {
      throw requestError(413, "Request body too large.");
    }
    return JSON.parse(req.body);
  }

  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body, "utf8") > MAX_BODY_BYTES) {
        req.destroy();
        reject(requestError(413, "Request body too large."));
      }
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

function getAllowedOrigins(req) {
  const configured = String(process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  const host = req.headers.host;
  return new Set([
    "https://www.imrtech.xyz",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    host ? `https://${host}` : "",
    host?.startsWith("localhost") || host?.startsWith("127.0.0.1") ? `http://${host}` : "",
    ...configured,
  ].filter(Boolean));
}

function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) {
    const host = String(req.headers.host || "");
    return host.startsWith("localhost") || host.startsWith("127.0.0.1");
  }
  return getAllowedOrigins(req).has(origin);
}

function getClientIp(req) {
  const forwardedFor = String(req.headers["x-forwarded-for"] || "");
  return forwardedFor.split(",")[0].trim() || req.socket?.remoteAddress || "unknown";
}

function enforceRateLimit(req, lead = {}) {
  const now = Date.now();
  const ip = getClientIp(req);
  const email = normalizeText(lead.email || "").toLowerCase();
  const keys = [`ip:${ip}`, email ? `email:${email}` : ""].filter(Boolean);

  for (const [key, timestamps] of rateLimitStore.entries()) {
    const recent = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
    if (recent.length > 0) {
      rateLimitStore.set(key, recent);
    } else {
      rateLimitStore.delete(key);
    }
  }

  for (const key of keys) {
    const timestamps = rateLimitStore.get(key) || [];
    if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
      throw requestError(429, "Too many requests.");
    }
    rateLimitStore.set(key, [...timestamps, now]);
  }
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
  if (!lead || typeof lead !== "object" || Array.isArray(lead)) {
    return { ok: false, message: "Invalid request." };
  }

  const missing = REQUIRED_FIELDS.filter((field) => !String(lead[field] || "").trim());
  if (missing.length > 0) {
    return { ok: false, message: "Missing required fields.", missing };
  }

  for (const [field, maxLength] of Object.entries(FIELD_LIMITS)) {
    if (String(lead[field] || "").length > maxLength) {
      return { ok: false, message: "Field is too long.", missing: [field] };
    }
  }

  const email = normalizeText(lead.email || "").toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { ok: false, message: "Invalid email address.", missing: ["email"] };
  }

  if (lead.size && !ALLOWED_SIZE_VALUES.has(normalizeText(lead.size))) {
    return { ok: false, message: "Invalid organization size.", missing: ["size"] };
  }

  if (!ALLOWED_PAIN_VALUES.has(normalizeText(lead.pain))) {
    return { ok: false, message: "Invalid pain point.", missing: ["pain"] };
  }

  if (lead.language && !["en", "es"].includes(normalizeText(lead.language))) {
    return { ok: false, message: "Invalid language.", missing: ["language"] };
  }

  const startedAt = Number(lead.formStartedAt);
  const formAge = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || formAge < MIN_SUBMIT_TIME_MS || formAge > MAX_SUBMIT_AGE_MS) {
    return { ok: false, message: "Invalid form timing." };
  }

  if (!/^imr-\d{13}-[a-zA-Z0-9-]{8,80}$/.test(String(lead.submissionToken || ""))) {
    return { ok: false, message: "Invalid form token." };
  }

  const linkCount = (String(lead.message || "").match(/https?:\/\/|www\./gi) || []).length;
  const hasLinkInIdentityField = ["firstName", "lastName", "phone"].some((field) =>
    /https?:\/\/|www\./i.test(String(lead[field] || "")),
  );
  if (linkCount > 3 || hasLinkInIdentityField) {
    return { ok: false, message: "Message contains too many links." };
  }

  return { ok: true };
}

function normalizeText(value) {
  return String(value || "").replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
}

function sanitize(value) {
  const text = normalizeText(value).slice(0, 2000);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
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
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

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

  const contentType = String(req.headers["content-type"] || "");
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return res.status(415).json({ ok: false, message: "Unsupported media type." });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ ok: false, message: "Forbidden." });
  }

  try {
    const lead = await parseJsonBody(req);

    if (lead.companyWebsite) {
      return res.status(200).json({ ok: true });
    }

    enforceRateLimit(req, lead);
    const validation = validateLead(lead);
    if (!validation.ok) {
      return res.status(400).json(validation);
    }

    await appendLead(lead);
    return res.status(200).json({ ok: true, message: "Lead saved." });
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      return res.status(error.statusCode).json({ ok: false, message: error.message });
    }
    return res.status(500).json({ ok: false, message: "Lead could not be saved." });
  }
}
