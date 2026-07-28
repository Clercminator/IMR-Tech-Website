import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Cloud,
  Cpu,
  Factory,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Languages,
  Linkedin,
  Loader2,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import "./styles.css";

const SCHEDULE_URL = "https://calendar.app.google/MbgLStQBeqJT3MYy5";
const WHATSAPP_URL = "https://wa.me/message/JDI5GLAII5DCG1";
const LINKEDIN_URL = "https://www.linkedin.com/company/clerc-limited";
const SITE_URL = "https://imrtech.xyz";

const content = {
  es: {
    metaTitle: "IMR Tech | Implementación de IA para PyMEs",
    nav: {
      solutions: "Soluciones",
      cases: "Casos",
      how: "Proceso",
      services: "Servicios",
      why: "Por qué IMR",
      contact: "Contacto",
      schedule: "Agenda una reunión",
      whatsapp: "WhatsApp",
      menu: "Abrir menú",
      close: "Cerrar menú",
      language: "English",
    },
    hero: {
      title: "Llevemos tu IA del piloto a producción real.",
      body: "Ayudamos a PyMEs a implementar agentes de IA que mejoran procesos administrativos, financieros, operacionales y comerciales con control humano, seguridad y métricas claras.",
      primary: "Agendar diagnóstico",
      secondary: "Hablar por WhatsApp",
      proof: "Diagnóstico inicial de 45 minutos",
      audience:
        "Para gerentes generales, CFOs, COOs y líderes de áreas que ya usan IA o tienen pilotos congelados, pero todavía no ven impacto operacional medible.",
      outcome:
        "Después de la sesión recibes un mapa de oportunidades priorizado, una estimación inicial de esfuerzo/impacto y los próximos pasos para llevar un caso real a producción.",
      details: ["FP&A", "Logística", "RR.HH.", "TI", "Customer success", "Legal"],
      assurances: [
        "Arquitectura agnóstica al proveedor",
        "Modelos abiertos o locales cuando conviene",
        "Seguridad, auditoría y control humano",
      ],
    },
    trust: {
      label: "Confianza operativa",
      title: "Elegimos el stack que conviene al negocio, no al proveedor.",
      body:
        "IMR Tech puede trabajar con nubes públicas, modelos comerciales, modelos open-source e infraestructura local. La decisión depende de datos, seguridad, costo, latencia y operación, no de una alianza exclusiva.",
      items: [
        {
          title: "Proveedor correcto para cada caso",
          body: "Diseñamos sobre Google Cloud, Azure, AWS, servicios SaaS o infraestructura propia cuando el caso lo requiere.",
        },
        {
          title: "Modelos abiertos y despliegue local",
          body: "Cuando seguridad, costos o residencia de datos lo justifican, priorizamos modelos open-source, inferencia local y uso eficiente de infraestructura existente.",
        },
        {
          title: "Gobierno humano",
          body: "Diseñamos aprobaciones, límites de acción, auditoría y métricas desde el inicio, no al final del proyecto.",
        },
      ],
    },
    caseStudies: {
      label: "Casos anónimos",
      title: "Proyectos reales, resultados contables sin exponer a los clientes.",
      body:
        "Por confidencialidad no nombramos empresas. Sí podemos describir el tipo de problema, el enfoque y el resultado operacional conseguido.",
      items: [
        {
          sector: "Retail óptico",
          title: "Forecast y abastecimiento por sucursal",
          result: "Menos quiebres y mejor lectura de demanda por tienda.",
          body:
            "Se ordenaron datos comerciales y de inventario para anticipar necesidades de reposición, priorizar excepciones y entregar al equipo una vista accionable de demanda.",
        },
        {
          sector: "Servicios funerarios",
          title: "Automatización de back-office documental",
          result: "Menos retrabajo manual y seguimiento más claro.",
          body:
            "Se diseñó un flujo asistido para clasificar solicitudes, extraer información de documentos y preparar respuestas o tareas con revisión humana.",
        },
        {
          sector: "Agroindustria y distribución",
          title: "Control operacional y reporting ejecutivo",
          result: "Reportes más rápidos y decisiones con mejor contexto.",
          body:
            "Se conectaron fuentes dispersas para generar reportes de gestión, alertas tempranas y análisis de desviaciones en procesos operativos.",
        },
      ],
    },
    howWork: {
      label: "Cómo trabajamos",
      title: "Un camino corto, controlado y medible hacia producción.",
      body:
        "No empezamos instalando herramientas. Empezamos eligiendo un proceso donde la IA pueda generar valor y donde el negocio pueda medirlo.",
      phases: [
        {
          title: "1. Diagnóstico",
          timeline: "30 min + revisión inicial",
          deliverable: "Mapa de oportunidades y priorización esfuerzo/impacto.",
          clientNeeds: "Acceso a líderes del proceso y contexto del dolor actual.",
        },
        {
          title: "2. Diseño del caso",
          timeline: "1 a 2 semanas",
          deliverable: "Flujo objetivo, controles humanos, arquitectura y métrica de éxito.",
          clientNeeds: "Ejemplos de datos, reglas de negocio y restricciones operativas.",
        },
        {
          title: "3. Piloto controlado",
          timeline: "3 a 6 semanas",
          deliverable: "Agente funcional con usuarios piloto, logs y criterios de aceptación.",
          clientNeeds: "Usuarios referentes, feedback semanal y acceso seguro a sistemas.",
        },
        {
          title: "4. Producción y mejora",
          timeline: "6 a 12 semanas",
          deliverable: "Operación monitoreada, tablero de impacto y backlog de mejoras.",
          clientNeeds: "Responsable interno, gobierno de cambios y métricas de negocio.",
        },
      ],
      deliverableLabel: "Entregable",
      clientNeedsLabel: "Qué necesitamos del cliente",
    },
    useCases: {
      label: "De la tecnología al proceso",
      title: "El negocio no compra IA, compra procesos resueltos.",
      body: "Un chatbot responde preguntas. Un agente se conecta a tus sistemas, propone una acción y la ejecuta cuando tiene autorización para hacerlo. Así se ve la IA cuando sale del laboratorio y entra a la operación.",
      cta: "Ver casos de uso aplicados",
      disclaimer:
        "Casos referenciales basados en implementaciones documentadas en banca, retail, telco y servicios profesionales. Los resultados específicos varían según el caso.",
      items: [
        {
          area: "Finanzas & back-office",
          title: "Agente de conciliación",
          body: "Cruza extractos bancarios con el core contable, propone matches automáticos y escala solo las excepciones que requieren juicio humano.",
        },
        {
          area: "Operaciones & logística",
          title: "Agente de supply chain",
          body: "Anticipa quiebres de stock y propone órdenes de reabastecimiento al planner con aprendizaje de cada decisión validada.",
        },
        {
          area: "Ventas & propuestas",
          title: "Agente cotizador",
          body: "Lee RFPs y correos, recupera información del catálogo y arma el borrador de propuesta para revisión comercial.",
        },
        {
          area: "Recursos humanos",
          title: "Agente de selección masiva",
          body: "Filtra postulaciones, resume perfiles y prioriza candidatos según criterios definidos por el equipo de talento.",
        },
        {
          area: "TI & soporte interno",
          title: "Agente de nivel 1",
          body: "Resuelve solicitudes frecuentes, documenta tickets y deriva los casos complejos con contexto completo.",
        },
        {
          area: "Legal & compliance",
          title: "Agente auditor KYC",
          body: "Revisa documentación corporativa, detecta inconsistencias y prepara expedientes para revisión del área legal.",
        },
      ],
    },
    framework: {
      title: "Dejar de improvisar. Empezar a operar.",
      body: "La diferencia entre un piloto abandonado y un agente que genera valor está en la arquitectura, el gobierno y la adopción detrás de la solución.",
      manifesto: {
        lead:
          "La IA no falla por falta de capacidad. Falla cuando se introduce en sistemas ",
        muted: "no diseñados para absorberla.",
        body:
          "En entornos regulados, la adopción de IA no es un problema de poder computacional, sino de fricción sistémica. La mayoría de los fracasos ocurren en la última milla: la integración.",
        quote: "La integridad estructural no es algo que se agregue al final.",
        paragraphs: [
          "No construimos cajas negras. Diseñamos arquitectura para que la IA opere con transparencia, auditabilidad y supervisión humana efectiva. Entendemos que la tecnología debe servir al juicio humano, no reemplazarlo a ciegas.",
          "Construimos sistemas resilientes capaces de adaptarse a regulaciones cambiantes sin sacrificar velocidad de innovación.",
        ],
      },
      traditional: "Enfoque tradicional",
      imr: "Framework IMR",
      traditionalItems: [
        "Pilotos aislados que nunca salen del laboratorio.",
        "Costos de API impredecibles y sin control presupuestario.",
        "Modelos genéricos sin seguridad ni contexto del negocio.",
      ],
      imrItems: [
        "Transición ordenada hacia infraestructura cloud, local o híbrida.",
        "Guardrails de presupuesto, uso y autorización humana.",
        "Seguridad, trazabilidad y cumplimiento desde el diseño.",
      ],
    },
    services: {
      label: "Nuestros servicios",
      title: "Tres frentes para que la IA opere en el negocio.",
      body:
        "IMR no vende licencias ni workshops sueltos. Entramos donde la IA está trabada: adopción real, pilotos que no escalan y operación con arquitectura, costos y gobierno.",
      tabs: [
        {
          title: "Adopción operativa de IA",
          body: "Convertimos herramientas de IA en uso por rol. Levantamos línea base, diseñamos casos por área, entrenamos referentes internos y medimos adopción con datos del negocio.",
          bullets: ["Catálogo de casos por rol", "Talleres con datos reales", "Reporte de adopción e impacto"],
          image: "/images/image2.png",
          alt: "Equipo de trabajo adoptando herramientas de IA en una oficina",
        },
        {
          title: "Agentes a producción",
          body: "Tomamos pilotos, prototipos o ideas priorizadas y los convertimos en agentes conectados a procesos reales, con permisos, aprobaciones humanas, logs y criterios de aceptación.",
          bullets: ["Arquitectura de integración", "Controles humanos y trazabilidad", "Runbook para operar el agente"],
          image: "/images/image3.png",
          alt: "Diseño de flujo para pasar agentes de IA a producción",
        },
        {
          title: "Gobierno, costos y mejora",
          body: "Diseñamos la capa de operación: tableros, alertas, FinOps, revisión de excepciones y backlog de mejora. La IA deja de ser experimento y empieza a administrarse en el stack correcto.",
          bullets: ["Control de consumo y calidad", "Alertas y revisión de excepciones", "Backlog mensual de mejora"],
          image: "/images/image1.png",
          alt: "Visualización de datos para operación, costos y gobierno de IA",
        },
      ],
    },
    why: {
      title: "Para llevar IA a producción no da lo mismo quién la construye.",
      body: "La diferencia entre un piloto abandonado y un agente que genera valor está en el equipo que lo crea, opera y mejora.",
      items: [
        {
          title: "No llegamos a vender, llegamos a ejecutar.",
          body: "Diseñamos agentes que trabajan, no presentaciones bonitas. Cada iniciativa nace desde un proceso concreto y una métrica de negocio.",
        },
        {
          title: "Buscamos subsidios e incentivos cuando aplican.",
          body: "Evaluamos programas de apoyo de proveedores o ecosistemas tecnológicos para reducir fricción sin amarrar la arquitectura a un solo camino.",
        },
        {
          title: "La calidad del equipo no queda en la venta.",
          body: "Nos involucramos en implementación, capacitación, medición y mejora continua.",
        },
        {
          title: "Respuesta local, mirada global.",
          body: "Combinamos cercanía operacional con estándares modernos de arquitectura, seguridad y operación.",
        },
      ],
    },
    proof: {
      title: "Por qué trabajar con IMR Tech cambia el resultado.",
      body: "La ventaja no es solo técnica. Es tener un equipo que conecta adopción, arquitectura, operación y métricas en un solo camino a producción.",
      columns: ["Equipo interno", "Implementación generalista", "IMR Tech"],
      rows: [
        ["Del diagnóstico a producción", "Depende de capacidad interna", "Suele cerrar en recomendaciones", "Diseño, build, despliegue y operación"],
        ["Adopción real por área", "Fragmentada por equipo", "Capacitación genérica", "Casos por rol, referentes y medición de uso"],
        ["Arquitectura y seguridad", "Puede faltar experiencia específica", "Variable según proveedor", "Controles humanos, trazabilidad y gobierno desde el diseño"],
        ["Costos y FinOps", "Difícil de monitorear al inicio", "A menudo fuera de alcance", "Tableros, alertas y políticas de consumo"],
        ["Continuidad operacional", "Compite con prioridades internas", "Traspaso parcial", "Runbooks, seguimiento y mejora mensual"],
        ["Stack abierto, cloud o local", "Curva de aprendizaje", "No siempre especializado", "Fluidez técnica para elegir proveedor, modelo e infraestructura"],
      ],
    },
    founder: {
      title: "Un equipo senior para bajar la IA a tierra.",
      body: "IMR Tech es liderado por David Clerc y un equipo orientado a ejecución: estrategia de negocio, arquitectura cloud, automatización e implementación de agentes. Trabajamos con líderes de negocio y equipos técnicos para identificar procesos, diseñar agentes útiles y llevarlos a operación sin perder control sobre datos, costos y decisiones.",
      quote: "La IA solo importa cuando cambia la forma en que opera el negocio.",
    },
    contact: {
      title: "El primer paso es identificar qué está fallando.",
      body: "Cuéntanos dónde está trabada la IA en tu empresa, aunque no calce perfecto en una categoría. Guardaremos tu solicitud y te mostraremos los próximos pasos para agendar o continuar por WhatsApp.",
      fields: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Email corporativo",
        phone: "Teléfono",
        size: "Tamaño de la organización",
        pain: "Dolor actual",
        message: "Mensaje",
      },
      options: {
        size: ["1-50 empleados", "51-200 empleados", "201+ empleados"],
        pain: [
          "Datos dispersos o poco confiables",
          "Procesos manuales repetitivos",
          "Reportes lentos o poco accionables",
          "Pilotos estancados",
          "Integraciones difíciles con sistemas actuales",
          "Riesgos de seguridad, privacidad o auditoría",
          "Costos de IA o APIs descontrolados",
          "Licencias de IA subutilizadas",
          "Problemas en logística u operaciones",
          "Soporte interno o customer success saturado",
          "Necesitamos modelos locales u open-source",
          "No sé cómo clasificarlo todavía",
          "Otro problema raro o difícil de explicar",
        ],
      },
      submit: "Enviar solicitud",
      schedule: "Agendar diagnóstico",
      sending: "Enviando...",
      successTitle: "Solicitud recibida.",
      successBody:
        "Ya quedó registrada en nuestra hoja de leads. Elige el siguiente paso: agenda el diagnóstico o continúa por WhatsApp con el contexto listo.",
      error:
        "No pudimos guardar la solicitud en este momento. Puedes agendar directamente o escribirnos por WhatsApp.",
      privacy:
        "IMR Tech tratará tus datos solo para responder tu solicitud y coordinar servicios relacionados. Puedes ejercer tus derechos sobre tus datos por los canales indicados en la Política de Privacidad.",
    },
    legal: {
      privacyTitle: "Política de Privacidad",
      legalTitle: "Términos y Aviso Legal",
      back: "Volver al sitio",
      updated: "Última actualización: 28 de julio de 2026",
      privacySections: [
        {
          title: "Responsable del tratamiento",
          body:
            "IMR Tech trata los datos enviados a través de este sitio para responder solicitudes comerciales, coordinar reuniones y prestar servicios relacionados con implementación de IA.",
        },
        {
          title: "Datos que recopilamos",
          body:
            "Podemos recopilar nombre, apellido, email corporativo, teléfono, tamaño de organización, dolor declarado, mensaje libre, idioma y fuente de la solicitud.",
        },
        {
          title: "Finalidad y base de uso",
          body:
            "Usamos estos datos para contactarte, preparar el diagnóstico, dar seguimiento comercial y mejorar la calidad de nuestras comunicaciones. No vendemos tus datos.",
        },
        {
          title: "Encargados y herramientas",
          body:
            "Podemos usar proveedores como Google Sheets, Vercel, Google Calendar, WhatsApp y LinkedIn para operar el sitio, registrar leads y coordinar conversaciones.",
        },
        {
          title: "Derechos del titular",
          body:
            "Puedes solicitar acceso, rectificación, eliminación u oposición al tratamiento escribiendo por los canales publicados por IMR Tech.",
        },
      ],
      termsSections: [
        {
          title: "Información del sitio",
          body:
            "El contenido de este sitio es informativo y no constituye una propuesta contractual, asesoría legal, financiera ni garantía de resultados específicos.",
        },
        {
          title: "Casos y resultados",
          body:
            "Los casos descritos son anónimos y referenciales. Los resultados pueden variar según datos disponibles, madurez operativa, integraciones, adopción y restricciones de cada organización.",
        },
        {
          title: "Tecnologías mencionadas",
          body:
            "Las referencias a proveedores, nubes, modelos comerciales, modelos open-source o infraestructura local describen tecnologías que IMR Tech puede utilizar según el caso. No implican una relación comercial oficial salvo que se indique expresamente.",
        },
        {
          title: "Propiedad intelectual",
          body:
            "El diseño, textos, estructura y materiales del sitio pertenecen a IMR Tech o se usan con autorización. No pueden reutilizarse sin permiso escrito.",
        },
      ],
    },
    faq: {
      label: "Preguntas frecuentes sobre IA agéntica para empresas",
      title: "Preguntas que probablemente te estás haciendo",
      items: [
        {
          question: "¿Qué es la IA agéntica?",
          answer:
            "Es una forma de implementar IA que no solo responde, sino que razona sobre un objetivo, consulta sistemas, propone acciones y ejecuta pasos con autorización y trazabilidad.",
        },
        {
          question: "¿Por qué los pilotos de IA no llegan a producción?",
          answer:
            "Normalmente fallan por falta de integración con sistemas reales, ausencia de gobierno, métricas débiles, costos inciertos o baja adopción del equipo operativo.",
        },
        {
          question: "¿Cuánto demora llevar un agente a producción?",
          answer:
            "Depende del proceso y las integraciones, pero una primera implementación controlada suele poder diseñarse, probarse y medirse en ciclos de 6 a 12 semanas.",
        },
        {
          question: "¿Cómo se mide el retorno de la inversión?",
          answer:
            "Medimos tiempo ahorrado, reducción de errores, adopción por rol, costos de operación, volumen procesado y calidad de las decisiones escaladas a humanos.",
        },
        {
          question: "¿Por dónde empezamos si ya compramos licencias de IA?",
          answer:
            "Con una línea base de uso, selección de procesos repetitivos de alto impacto y una ruta de adopción por área. Puede ser Gemini, Copilot, ChatGPT Enterprise u otra herramienta; el punto es convertir licencia en operación.",
        },
        {
          question: "¿Bajo qué marcos de seguridad construyen los agentes?",
          answer:
            "Usamos como referencia buenas prácticas de cloud, identidad y acceso, trazabilidad de acciones, revisión humana y principios de frameworks como NIST AI RMF, OWASP para LLMs e ISO/IEC 42001 cuando aplica al caso.",
        },
        {
          question: "¿Cómo se conectan con la Ley 21.663 y la Ley 21.719?",
          answer:
            "Tu equipo legal interpreta la norma. Nosotros producimos evidencia técnica: arquitectura, trazabilidad, residencia de datos, controles de acceso y registro de decisiones para apoyar la revisión de ciberseguridad y protección de datos.",
        },
        {
          question: "¿Qué pasa si ya tenemos agentes construidos por otro proveedor?",
          answer:
            "Podemos partir desde lo existente. Inventariamos agentes, evaluamos observabilidad, riesgos, costos y dependencias, y proponemos un plan de operación o mejora sin reescribir lo que ya funciona.",
        },
        {
          question: "¿Cómo es el modelo contractual y qué pasa si decidimos salir?",
          answer:
            "Trabajamos por fases con puntos de decisión claros. Los entregables, propiedad intelectual, condiciones de salida y responsabilidades quedan definidos antes de iniciar, sin letra chica.",
        },
        {
          question: "¿Necesitamos compartir datos sensibles para empezar?",
          answer:
            "No para el diagnóstico. Para implementación definimos ambientes, permisos y muestras de datos según el caso. La regla es mínimo acceso necesario y controles explícitos antes de conectar sistemas productivos.",
        },
      ],
    },
    footer: {
      privacy: "Privacidad",
      terms: "Términos",
      security: "Seguridad",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    metaTitle: "IMR Tech | AI Implementation for SMBs",
    nav: {
      solutions: "Solutions",
      cases: "Cases",
      how: "Process",
      services: "Services",
      why: "Why IMR",
      contact: "Contact",
      schedule: "Schedule a meeting",
      whatsapp: "WhatsApp",
      menu: "Open menu",
      close: "Close menu",
      language: "Español",
    },
    hero: {
      title: "Move AI from pilot projects to real production.",
      body: "We help SMBs implement AI agents that improve administrative, financial, operational, and commercial workflows with human control, security, and measurable outcomes.",
      primary: "Schedule diagnostic",
      secondary: "Talk on WhatsApp",
      proof: "30-minute initial diagnostic",
      audience:
        "For CEOs, CFOs, COOs, and area leaders who already use AI or have frozen pilots, but still do not see measurable operational impact.",
      outcome:
        "After the session you receive a prioritized opportunity map, an initial effort/impact estimate, and next steps to move one real use case into production.",
      details: ["FP&A", "Logistics", "HR", "IT", "Customer success", "Legal"],
      assurances: [
        "Provider-agnostic architecture",
        "Open-source or local models when useful",
        "Security, auditability and human oversight",
      ],
    },
    trust: {
      label: "Operational trust",
      title: "We choose the stack that fits the business, not the vendor.",
      body:
        "IMR Tech can work with public cloud, commercial models, open-source models, and local infrastructure. The decision depends on data, security, cost, latency, and operations, not on an exclusive partnership.",
      items: [
        {
          title: "The right provider for each case",
          body: "We design on Google Cloud, Azure, AWS, SaaS platforms, or owned infrastructure when the use case requires it.",
        },
        {
          title: "Open models and local deployment",
          body: "When security, cost, or data residency justify it, we prioritize open-source models, local inference, and efficient use of existing infrastructure.",
        },
        {
          title: "Human governance",
          body: "We design approvals, action limits, auditability, and metrics from the beginning, not at the end of the project.",
        },
      ],
    },
    caseStudies: {
      label: "Anonymous case studies",
      title: "Real projects and measurable outcomes without exposing clients.",
      body:
        "Because of confidentiality, we do not name companies. We can describe the problem type, the approach, and the operational outcome.",
      items: [
        {
          sector: "Optical retail",
          title: "Branch-level forecasting and replenishment",
          result: "Fewer stockouts and better demand visibility by store.",
          body:
            "Commercial and inventory data were organized to anticipate replenishment needs, prioritize exceptions, and give the team an actionable demand view.",
        },
        {
          sector: "Funeral services",
          title: "Document back-office automation",
          result: "Less manual rework and clearer follow-up.",
          body:
            "An assisted flow classified requests, extracted information from documents, and prepared responses or tasks with human review.",
        },
        {
          sector: "Agribusiness and distribution",
          title: "Operational control and executive reporting",
          result: "Faster reporting and decisions with better context.",
          body:
            "Dispersed sources were connected to generate management reports, early alerts, and deviation analysis for operational processes.",
        },
      ],
    },
    howWork: {
      label: "How we work",
      title: "A short, controlled, measurable path to production.",
      body:
        "We do not start by installing tools. We start by choosing a process where AI can create value and where the business can measure it.",
      phases: [
        {
          title: "1. Diagnostic",
          timeline: "30 min + initial review",
          deliverable: "Opportunity map and effort/impact prioritization.",
          clientNeeds: "Access to process leaders and context around the current pain.",
        },
        {
          title: "2. Use-case design",
          timeline: "1 to 2 weeks",
          deliverable: "Target workflow, human controls, architecture, and success metric.",
          clientNeeds: "Data examples, business rules, and operational constraints.",
        },
        {
          title: "3. Controlled pilot",
          timeline: "3 to 6 weeks",
          deliverable: "Working agent with pilot users, logs, and acceptance criteria.",
          clientNeeds: "Reference users, weekly feedback, and secure access to systems.",
        },
        {
          title: "4. Production and improvement",
          timeline: "6 to 12 weeks",
          deliverable: "Monitored operation, impact dashboard, and improvement backlog.",
          clientNeeds: "Internal owner, change governance, and business metrics.",
        },
      ],
      deliverableLabel: "Deliverable",
      clientNeedsLabel: "What we need from the client",
    },
    useCases: {
      label: "From technology to process",
      title: "Businesses do not buy AI. They buy resolved processes.",
      body: "A chatbot answers questions. An agent connects to your systems, proposes an action, and executes it when authorized. That is what AI looks like when it leaves the lab and enters the operation.",
      cta: "See applied use cases",
      disclaimer:
        "Reference cases based on documented implementations in banking, retail, telecom, and professional services. Specific results vary by case.",
      items: [
        {
          area: "Finance & back office",
          title: "Reconciliation agent",
          body: "Matches bank statements with accounting systems, suggests automatic matches, and escalates only the exceptions that require human judgment.",
        },
        {
          area: "Operations & logistics",
          title: "Supply chain agent",
          body: "Anticipates stockouts and proposes replenishment orders to planners while learning from each validated decision.",
        },
        {
          area: "Sales & proposals",
          title: "Quoting agent",
          body: "Reads RFPs and emails, retrieves catalog information, and prepares proposal drafts for commercial review.",
        },
        {
          area: "Human resources",
          title: "High-volume hiring agent",
          body: "Screens applications, summarizes profiles, and prioritizes candidates using criteria defined by the talent team.",
        },
        {
          area: "IT & internal support",
          title: "Level 1 agent",
          body: "Handles frequent requests, documents tickets, and routes complex cases with complete context.",
        },
        {
          area: "Legal & compliance",
          title: "KYC audit agent",
          body: "Reviews corporate documentation, detects inconsistencies, and prepares files for legal review.",
        },
      ],
    },
    framework: {
      title: "Stop improvising. Start operating.",
      body: "The difference between an abandoned pilot and a value-generating agent is the architecture, governance, and adoption model behind it.",
      manifesto: {
        lead:
          "AI doesn't fail from lack of capability. It fails when introduced into systems ",
        muted: "not designed to absorb it.",
        body:
          "In regulated environments, AI adoption isn't a computing power problem, but one of systemic friction. Most failures occur in the last mile: integration.",
        quote: "Structural integrity is not an afterthought.",
        paragraphs: [
          "We don't build black boxes. We design architecture that allows AI to operate with transparency, auditability, and effective human oversight. We understand that technology must serve human judgment, not blindly replace it.",
          "We build resilient systems capable of adapting to changing regulations without sacrificing innovation speed.",
        ],
      },
      traditional: "Traditional approach",
      imr: "IMR framework",
      traditionalItems: [
        "Isolated pilots stuck in lab environments.",
        "Unpredictable API costs without budget control.",
        "Generic models without security or business context.",
      ],
      imrItems: [
        "Structured path to cloud, local, or hybrid infrastructure.",
        "Budget, usage, and human-authorization guardrails.",
        "Security, traceability, and compliance by design.",
      ],
    },
    services: {
      label: "Our services",
      title: "Three workstreams to make AI operate in the business.",
      body:
        "IMR does not sell licenses or isolated workshops. We enter where AI gets stuck: real adoption, pilots that do not scale, and operation with architecture, cost, and governance control.",
      tabs: [
        {
          title: "Operational AI adoption",
          body: "We turn AI tools into role-based usage. We establish a baseline, design use cases by area, train internal champions, and measure adoption with business data.",
          bullets: ["Use-case catalog by role", "Workshops with real data", "Adoption and impact report"],
          image: "/images/image2.png",
          alt: "Business team adopting AI tools in an office",
        },
        {
          title: "Agents to production",
          body: "We take pilots, prototypes, or prioritized ideas and turn them into agents connected to real processes, with permissions, human approvals, logs, and acceptance criteria.",
          bullets: ["Integration architecture", "Human controls and traceability", "Runbook to operate the agent"],
          image: "/images/image3.png",
          alt: "Workflow design for moving AI agents into production",
        },
        {
          title: "Governance, costs and improvement",
          body: "We design the operating layer: dashboards, alerts, FinOps, exception review, and the improvement backlog. AI stops being an experiment and starts being managed on the right stack.",
          bullets: ["Consumption and quality control", "Alerts and exception review", "Monthly improvement backlog"],
          image: "/images/image1.png",
          alt: "Data visualization for AI operations, costs and governance",
        },
      ],
    },
    why: {
      title: "Who builds your AI matters once it reaches production.",
      body: "The difference between an abandoned pilot and a value-generating agent is the team that creates, operates, and improves it.",
      items: [
        {
          title: "We arrive to execute, not just to sell.",
          body: "We design agents that work, not pretty decks. Every initiative starts from a real process and a business metric.",
        },
        {
          title: "We look for subsidies and incentives when they apply.",
          body: "We evaluate support programs from providers or technology ecosystems to reduce friction without locking the architecture into one path.",
        },
        {
          title: "The senior team stays after the sale.",
          body: "We stay involved in implementation, enablement, measurement, and continuous improvement.",
        },
        {
          title: "Local response, global perspective.",
          body: "We combine operational proximity with modern architecture, security, and delivery standards.",
        },
      ],
    },
    proof: {
      title: "Why working with IMR Tech changes the outcome.",
      body: "The advantage is not only technical. It is having one team connect adoption, architecture, operations, and metrics into a single path to production.",
      columns: ["Internal team", "Generalist implementation", "IMR Tech"],
      rows: [
        ["From diagnostic to production", "Depends on internal bandwidth", "Often ends in recommendations", "Design, build, deployment and operation"],
        ["Real adoption by area", "Fragmented by team", "Generic enablement", "Role-based cases, champions and usage measurement"],
        ["Architecture and security", "Specific experience may be missing", "Varies by provider", "Human controls, traceability and governance by design"],
        ["Costs and FinOps", "Hard to monitor early", "Often out of scope", "Dashboards, alerts and consumption policies"],
        ["Operational continuity", "Competes with internal priorities", "Partial handoff", "Runbooks, follow-up and monthly improvement"],
        ["Open, cloud, or local stack", "Learning curve", "Not always specialized", "Technical fluency to choose provider, model, and infrastructure"],
      ],
    },
    founder: {
      title: "A senior team to bring AI down to earth.",
      body: "IMR Tech is led by David Clerc and a team focused on execution: business strategy, cloud architecture, automation, and agent implementation. We work with business leaders and technical teams to identify processes, design useful agents, and move them into operation without losing control over data, costs, or decisions.",
      quote: "AI only matters when it changes how the business operates.",
    },
    contact: {
      title: "The first step is identifying what is stuck.",
      body: "Tell us where AI is blocked in your company, even if it does not fit neatly into a category. We will save your request and show the next steps to schedule or continue on WhatsApp.",
      fields: {
        firstName: "First name",
        lastName: "Last name",
        email: "Work email",
        phone: "Phone",
        size: "Organization size",
        pain: "Current pain point",
        message: "Message",
      },
      options: {
        size: ["1-50 employees", "51-200 employees", "201+ employees"],
        pain: [
          "Scattered or unreliable data",
          "Repetitive manual processes",
          "Slow or non-actionable reporting",
          "Stalled pilots",
          "Hard integrations with current systems",
          "Security, privacy, or auditability risk",
          "Uncontrolled AI or API costs",
          "Underused AI licenses",
          "Logistics or operations problems",
          "Internal support or customer success overload",
          "We need local or open-source models",
          "I am not sure how to classify it yet",
          "Other weird or hard-to-explain problem",
        ],
      },
      submit: "Send request",
      schedule: "Schedule diagnostic",
      sending: "Sending...",
      successTitle: "Request received.",
      successBody:
        "It has been saved in our lead sheet. Choose the next step: schedule the diagnostic or continue on WhatsApp with the context ready.",
      error:
        "We could not save the request right now. You can schedule directly or write to us on WhatsApp.",
      privacy:
        "IMR Tech will use your data only to respond to your request and coordinate related services. You may exercise your data rights through the channels listed in the Privacy Policy.",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      legalTitle: "Terms and Legal Notice",
      back: "Back to website",
      updated: "Last updated: July 28, 2026",
      privacySections: [
        {
          title: "Data controller",
          body:
            "IMR Tech processes data submitted through this website to respond to commercial requests, coordinate meetings, and provide AI implementation-related services.",
        },
        {
          title: "Data we collect",
          body:
            "We may collect first name, last name, work email, phone, organization size, declared pain point, free-form message, language, and request source.",
        },
        {
          title: "Purpose and use",
          body:
            "We use this data to contact you, prepare the diagnostic, follow up commercially, and improve the quality of our communications. We do not sell your data.",
        },
        {
          title: "Processors and tools",
          body:
            "We may use providers such as Google Sheets, Vercel, Google Calendar, WhatsApp, and LinkedIn to operate the site, record leads, and coordinate conversations.",
        },
        {
          title: "Data subject rights",
          body:
            "You may request access, correction, deletion, or objection to processing through the channels published by IMR Tech.",
        },
      ],
      termsSections: [
        {
          title: "Website information",
          body:
            "The content on this site is informational and does not constitute a contractual proposal, legal advice, financial advice, or a guarantee of specific results.",
        },
        {
          title: "Cases and results",
          body:
            "Cases described are anonymous and referential. Results may vary depending on data availability, operational maturity, integrations, adoption, and each organization's constraints.",
        },
        {
          title: "Technologies mentioned",
          body:
            "References to vendors, clouds, commercial models, open-source models, or local infrastructure describe technologies IMR Tech may use depending on the case. They do not imply an official commercial relationship unless expressly stated.",
        },
        {
          title: "Intellectual property",
          body:
            "The site's design, text, structure, and materials belong to IMR Tech or are used with authorization. They may not be reused without written permission.",
        },
      ],
    },
    faq: {
      label: "Frequently asked questions about agentic AI for companies",
      title: "Questions you are probably asking",
      items: [
        {
          question: "What is agentic AI?",
          answer:
            "It is an AI implementation pattern that does more than answer. It reasons about a goal, consults systems, proposes actions, and executes steps with authorization and traceability.",
        },
        {
          question: "Why do AI pilots fail to reach production?",
          answer:
            "They usually fail because they are not integrated with real systems, lack governance, have weak metrics, create cost uncertainty, or are not adopted by operating teams.",
        },
        {
          question: "How long does it take to move an agent to production?",
          answer:
            "It depends on the process and integrations, but a controlled first implementation can often be designed, tested, and measured in 6 to 12 week cycles.",
        },
        {
          question: "How do you measure ROI?",
          answer:
            "We measure time saved, error reduction, adoption by role, operating costs, processed volume, and the quality of decisions escalated to humans.",
        },
        {
          question: "Where should we start if we already bought AI licenses?",
          answer:
            "Start with a usage baseline, high-impact repetitive processes, and an adoption route by area. It may be Gemini, Copilot, ChatGPT Enterprise, or another tool; the point is turning licenses into operation.",
        },
        {
          question: "What security frameworks guide the agents?",
          answer:
            "We use cloud, identity, and access-control practices, action traceability, human review, and principles from frameworks such as NIST AI RMF, OWASP for LLMs, and ISO/IEC 42001 when relevant to the use case.",
        },
        {
          question: "How does this connect with Chilean cybersecurity and data protection laws?",
          answer:
            "Your legal team interprets the regulation. We produce the technical evidence: architecture, traceability, data residency, access controls, and decision logs to support cybersecurity and data-protection review.",
        },
        {
          question: "What if another provider already built our agents?",
          answer:
            "We can start from what exists. We inventory agents, assess observability, risks, costs, and dependencies, then propose an operating or improvement plan without rewriting what already works.",
        },
        {
          question: "How does the contract work and what happens if we exit?",
          answer:
            "We work in phases with clear decision points. Deliverables, intellectual property, exit terms, and responsibilities are defined before starting, without fine print.",
        },
        {
          question: "Do we need to share sensitive data to start?",
          answer:
            "Not for the diagnostic. For implementation, we define environments, permissions, and data samples according to the use case. The rule is minimum necessary access and explicit controls before connecting production systems.",
        },
      ],
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      security: "Security",
      rights: "All rights reserved.",
    },
  },
};

const useCaseIcons = [CircleDollarSign, Factory, BriefcaseBusiness, Users, Bot, FileCheck2];
const whyIcons = [Handshake, Sparkles, ClipboardCheck, Globe2];
const trustIcons = [Cloud, Cpu, ShieldCheck];

function resolveInitialLanguage() {
  const saved = window.localStorage.getItem("imr-language");
  if (saved === "en" || saved === "es") return saved;

  const languages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];
  return languages.some((language) => language?.toLowerCase().startsWith("es")) ? "es" : "en";
}

function App() {
  const [language, setLanguage] = useState(resolveInitialLanguage);
  const [path, setPath] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
    window.localStorage.setItem("imr-language", language);
    updateSeo(language, path, t);
  }, [language, t.metaTitle]);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    updateSeo(language, path, t);
  }, [language, path, t]);

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((current) => (current === "es" ? "en" : "es"));
    setIsMenuOpen(false);
  };

  const isLegalRoute = path === "/privacy" || path === "/legal";

  return (
    <>
      <Header
        t={t}
        language={language}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleLanguage={toggleLanguage}
        navigate={navigate}
      />
      <main>
        {isLegalRoute ? (
          <LegalPage t={t} type={path === "/privacy" ? "privacy" : "legal"} navigate={navigate} />
        ) : (
          <>
            <Hero t={t} />
            <TrustProof t={t} />
            <UseCases t={t} />
            <CaseStudies t={t} />
            <Framework t={t} />
            <HowWeWork t={t} />
            <Services
              t={t}
              activeService={activeService}
              setActiveService={setActiveService}
            />
            <WhyUs t={t} />
            <ProofTable t={t} />
            <Founder t={t} />
            <LeadForm t={t} language={language} />
            <Faq t={t} openFaq={openFaq} setOpenFaq={setOpenFaq} />
          </>
        )}
      </main>
      <Footer t={t} navigate={navigate} />
    </>
  );
}

function updateMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function ensureCanonical(url) {
  let canonical = document.head.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

function updateSeo(language, path, t) {
  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
  const title =
    path === "/privacy"
      ? `${t.legal.privacyTitle} | IMR Tech`
      : path === "/legal"
        ? `${t.legal.legalTitle} | IMR Tech`
        : t.metaTitle;
  const description = path === "/"
    ? t.hero.body
    : `${t.metaTitle}. ${t.hero.outcome}`;

  document.title = title;
  ensureCanonical(canonical);
  updateMeta("meta[name='description']", "content", description);
  updateMeta("meta[property='og:title']", "content", title);
  updateMeta("meta[property='og:description']", "content", description);
  updateMeta("meta[property='og:url']", "content", canonical);
  updateMeta("meta[property='og:image']", "content", `${SITE_URL}/images/hero-ai-implementation.jpg`);
  updateMeta("meta[name='twitter:title']", "content", title);
  updateMeta("meta[name='twitter:description']", "content", description);
  updateMeta("meta[name='twitter:image']", "content", `${SITE_URL}/images/hero-ai-implementation.jpg`);

  let structuredData = document.getElementById("structured-data");
  if (!structuredData) {
    structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.id = "structured-data";
    document.head.appendChild(structuredData);
  }

  structuredData.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IMR Tech",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo%20v1.jpg`,
    sameAs: [LINKEDIN_URL],
    description,
    areaServed: language === "es" ? "Latinoamérica" : "Latin America",
    knowsAbout: [
      "AI implementation",
      "Agentic AI",
      "Open-source AI models",
      "Local AI deployment",
      "Process automation",
    ],
  });
}

function Header({ t, language, isMenuOpen, setIsMenuOpen, toggleLanguage, navigate }) {
  const navLinks = [
    [t.nav.solutions, "#solutions"],
    [t.nav.cases, "#cases"],
    [t.nav.how, "#how-we-work"],
    [t.nav.services, "#services"],
    [t.nav.contact, "#contact"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="IMR Tech home" onClick={(event) => {
        event.preventDefault();
        navigate("/");
      }}>
        <img className="brand-logo" src="/images/logo%20v1.jpg" alt="" aria-hidden="true" />
        <span>IMR Tech</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} onClick={() => {
            if (window.location.pathname !== "/") navigate("/");
          }}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="language-button" type="button" onClick={toggleLanguage}>
          <Languages size={16} />
          <span>{t.nav.language}</span>
        </button>
        <a className="nav-cta" href={SCHEDULE_URL} target="_blank" rel="noreferrer">
          {t.nav.schedule}
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? t.nav.close : t.nav.menu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`}>
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href={SCHEDULE_URL} target="_blank" rel="noreferrer">
          {t.nav.schedule}
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          {t.nav.whatsapp}
        </a>
        <button type="button" onClick={toggleLanguage}>
          <Globe2 size={16} />
          <span>{language === "es" ? "English" : "Español"}</span>
        </button>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="hero-proof">
          <ShieldCheck size={18} />
          {t.hero.proof}
        </p>
        <h1>{t.hero.title}</h1>
        <p className="hero-body">{t.hero.body}</p>
        <div className="hero-offer">
          <p>
            <strong>{t.hero.audience}</strong>
          </p>
          <p>{t.hero.outcome}</p>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href={SCHEDULE_URL} target="_blank" rel="noreferrer">
            {t.hero.primary}
            <ArrowRight size={18} />
          </a>
          <a className="secondary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            {t.hero.secondary}
          </a>
        </div>
        <div className="hero-assurance" aria-label="Implementation principles">
          {t.hero.assurances.map((assurance) => (
            <span key={assurance}>
              <CheckCircle2 size={15} />
              {assurance}
            </span>
          ))}
        </div>
        <div className="hero-tags" aria-label="Service areas">
          {t.hero.details.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </div>
      <div className="hero-media">
        <img
          src="/images/hero-ai-implementation.jpg"
          alt="AI implementation dashboard in a modern office"
        />
      </div>
    </section>
  );
}

function TrustProof({ t }) {
  return (
    <section className="trust-band">
      <div className="section-shell trust-proof">
        <SectionIntro label={t.trust.label} title={t.trust.title} body={t.trust.body} />
        <div className="trust-grid">
          {t.trust.items.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <article key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ label, title, body }) {
  return (
    <div className="section-intro">
      {label ? <span>{label}</span> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function UseCases({ t }) {
  return (
    <section className="section-shell use-cases" id="solutions">
      <SectionIntro
        label={t.useCases.label}
        title={t.useCases.title}
        body={t.useCases.body}
      />
      <div className="use-case-grid">
        {t.useCases.items.map((item, index) => {
          const Icon = useCaseIcons[index];
          return (
            <article className="process-card" key={item.title}>
              <Icon size={24} />
              <p>{item.area}</p>
              <h3>{item.title}</h3>
              <span>{item.body}</span>
            </article>
          );
        })}
      </div>
      <div className="center-actions">
        <a className="accent-button" href="#services">
          {t.useCases.cta}
          <ArrowRight size={18} />
        </a>
        <p>{t.useCases.disclaimer}</p>
      </div>
    </section>
  );
}

function CaseStudies({ t }) {
  return (
    <section className="section-shell case-studies" id="cases">
      <SectionIntro
        label={t.caseStudies.label}
        title={t.caseStudies.title}
        body={t.caseStudies.body}
      />
      <div className="case-grid">
        {t.caseStudies.items.map((item) => (
          <article className="case-card" key={item.title}>
            <span>{item.sector}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <strong>{item.result}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function Framework({ t }) {
  return (
    <section className="framework-band">
      <div className="section-shell framework">
        <SectionIntro title={t.framework.title} body={t.framework.body} />
        <div className="framework-grid">
          <ComparisonCard title={t.framework.traditional} items={t.framework.traditionalItems} />
          <ComparisonCard title={t.framework.imr} items={t.framework.imrItems} featured />
        </div>
        <article className="framework-manifesto">
          <h3>
            {t.framework.manifesto.lead}
            <span>{t.framework.manifesto.muted}</span>
          </h3>
          <p>{t.framework.manifesto.body}</p>
          <strong>{t.framework.manifesto.quote}</strong>
          {t.framework.manifesto.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

function ComparisonCard({ title, items, featured = false }) {
  return (
    <article className={`comparison-card ${featured ? "featured" : ""}`}>
      <h3>
        {featured ? <CheckCircle2 size={22} /> : <X size={22} />}
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <ArrowRight size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Services({ t, activeService, setActiveService }) {
  const service = t.services.tabs[activeService];
  return (
    <section className="section-shell services" id="services">
      <SectionIntro label={t.services.label} title={t.services.title} body={t.services.body} />
      <div className="service-tabs" role="tablist" aria-label={t.services.title}>
        {t.services.tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            role="tab"
            aria-selected={activeService === index}
            className={activeService === index ? "active" : ""}
            onClick={() => setActiveService(index)}
          >
            {index === 0 ? <Sparkles size={18} /> : index === 1 ? <Bot size={18} /> : <BarChart3 size={18} />}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
      <article className="service-panel">
        <div>
          <h3>{service.title}</h3>
          <p>{service.body}</p>
          <ul className="service-bullets">
            {service.bullets.map((bullet) => (
              <li key={bullet}>
                <CheckCircle2 size={17} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <a className="text-link" href={SCHEDULE_URL} target="_blank" rel="noreferrer">
            {t.nav.schedule}
            <ArrowRight size={17} />
          </a>
        </div>
        <img src={service.image} alt={service.alt} />
      </article>
    </section>
  );
}

function HowWeWork({ t }) {
  return (
    <section className="section-shell how-work" id="how-we-work">
      <SectionIntro label={t.howWork.label} title={t.howWork.title} body={t.howWork.body} />
      <div className="phase-list">
        {t.howWork.phases.map((phase) => (
          <article className="phase-card" key={phase.title}>
            <div>
              <span>{phase.timeline}</span>
              <h3>{phase.title}</h3>
            </div>
            <p>
              <strong>{t.howWork.deliverableLabel}:</strong> {phase.deliverable}
            </p>
            <p>
              <strong>{t.howWork.clientNeedsLabel}:</strong> {phase.clientNeeds}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs({ t }) {
  return (
    <section className="section-shell why-us" id="why-us">
      <SectionIntro title={t.why.title} body={t.why.body} />
      <div className="why-grid">
        {t.why.items.map((item, index) => {
          const Icon = whyIcons[index];
          return (
            <article key={item.title}>
              <Icon size={23} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProofTable({ t }) {
  return (
    <section className="proof-band">
      <div className="section-shell proof-section">
        <SectionIntro title={t.proof.title} body={t.proof.body} />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                {t.proof.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.proof.rows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  {row.slice(1).map((cell, index) => (
                    <td className={index === 2 ? "imr-cell" : ""} key={`${row[0]}-${index}`}>
                      {index === 2 ? <CheckCircle2 size={17} /> : null}
                      <span>{cell}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Founder({ t }) {
  return (
    <section className="section-shell founder">
      <div>
        <h2>{t.founder.title}</h2>
        <p>{t.founder.body}</p>
        <blockquote>{t.founder.quote}</blockquote>
        <div className="founder-actions">
          <a className="secondary-button dark" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a className="primary-button" href={SCHEDULE_URL} target="_blank" rel="noreferrer">
            {t.nav.schedule}
          </a>
        </div>
      </div>
      <img
        src="/images/David%20Clerc%20Entrepreneur%20Traje%20Pro.png"
        alt="IMR Tech leadership portrait"
      />
    </section>
  );
}

function LeadForm({ t, language }) {
  const [formStartedAt] = useState(() => Date.now());
  const [submissionToken] = useState(() => {
    const randomValue =
      globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
    return `imr-${Date.now()}-${randomValue}`;
  });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    size: "",
    pain: "",
    message: "",
    companyWebsite: "",
  });
  const [status, setStatus] = useState("idle");

  const leadSummary = useMemo(() => {
    const labels = t.contact.fields;
    return [
      "IMR Tech lead",
      `${labels.firstName}: ${form.firstName}`,
      `${labels.lastName}: ${form.lastName}`,
      `${labels.email}: ${form.email}`,
      `${labels.phone}: ${form.phone}`,
      `${labels.size}: ${form.size}`,
      `${labels.pain}: ${form.pain}`,
      form.message ? `${labels.message}: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }, [form, t.contact.fields]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          language,
          source: window.location.href,
          summary: leadSummary,
          formStartedAt,
          submissionToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Lead request failed.");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="contact-band" id="contact">
        <div className="section-shell contact-section">
          <div className="thank-you" role="status">
            <CheckCircle2 size={34} />
            <h2>{t.contact.successTitle}</h2>
            <p>{t.contact.successBody}</p>
            <div className="form-actions">
              <a className="primary-button" href={SCHEDULE_URL} target="_blank" rel="noreferrer">
                {t.contact.schedule}
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                {t.nav.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-band" id="contact">
      <div className="section-shell contact-section">
        <SectionIntro title={t.contact.title} body={t.contact.body} />
        <form className="lead-form" onSubmit={handleSubmit}>
          <FormField
            label={t.contact.fields.firstName}
            name="firstName"
            value={form.firstName}
            onChange={updateField}
            autoComplete="given-name"
            maxLength={80}
            required
          />
          <FormField
            label={t.contact.fields.lastName}
            name="lastName"
            value={form.lastName}
            onChange={updateField}
            autoComplete="family-name"
            maxLength={80}
            required
          />
          <FormField
            label={t.contact.fields.email}
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            maxLength={254}
            required
          />
          <FormField
            label={t.contact.fields.phone}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={updateField}
            autoComplete="tel"
            maxLength={40}
            required
          />
          <SelectField
            label={t.contact.fields.size}
            name="size"
            value={form.size}
            options={t.contact.options.size}
            onChange={updateField}
            required
          />
          <SelectField
            label={t.contact.fields.pain}
            name="pain"
            value={form.pain}
            options={t.contact.options.pain}
            onChange={updateField}
            required
          />
          <label className="field honeypot" aria-hidden="true">
            <span>Company website</span>
            <input
              name="companyWebsite"
              tabIndex="-1"
              autoComplete="off"
              value={form.companyWebsite}
              onChange={updateField}
              maxLength={120}
            />
          </label>
          <label className="field full-span">
            <span>{t.contact.fields.message}</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows={4}
              maxLength={2000}
              dir={language === "es" ? "ltr" : undefined}
            />
          </label>
          <div className="form-footer full-span">
            <p>{t.contact.privacy}</p>
            <div className="form-actions">
              <button className="primary-button" type="submit" disabled={status === "sending"}>
                {status === "sending" ? <Loader2 className="spin" size={18} /> : <Send size={18} />}
                {status === "sending" ? t.contact.sending : t.contact.submit}
              </button>
              <a className="secondary-button" href={SCHEDULE_URL} target="_blank" rel="noreferrer">
                {t.contact.schedule}
              </a>
            </div>
          </div>
          {status === "error" ? (
            <div className="form-status error full-span" role="status">
              <X size={18} />
              <span>{t.contact.error}</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {t.nav.whatsapp}
              </a>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function FormField({ label, name, type = "text", value, onChange, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} {...props} />
    </label>
  );
}

function SelectField({ label, name, value, options, onChange, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select name={name} value={value} onChange={onChange} {...props}>
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="select-icon" size={18} />
    </label>
  );
}

function Faq({ t, openFaq, setOpenFaq }) {
  return (
    <section className="section-shell faq" id="faq">
      <SectionIntro label={t.faq.label} title={t.faq.title} />
      <div className="faq-list">
        {t.faq.items.map((item, index) => {
          const isOpen = openFaq === index;
          return (
            <article className="faq-item" key={item.question}>
              <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                <span>{item.question}</span>
                <ChevronDown className={isOpen ? "rotate" : ""} size={20} />
              </button>
              <div className={isOpen ? "faq-answer open" : "faq-answer"}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function LegalPage({ t, type, navigate }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? t.legal.privacyTitle : t.legal.legalTitle;
  const sections = isPrivacy ? t.legal.privacySections : t.legal.termsSections;

  return (
    <section className="section-shell legal-page">
      <button className="text-link legal-back" type="button" onClick={() => navigate("/")}>
        <ArrowRight size={17} />
        {t.legal.back}
      </button>
      <div className="legal-header">
        <FileText size={30} />
        <h1>{title}</h1>
        <p>{t.legal.updated}</p>
      </div>
      <div className="legal-sections">
        {sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer({ t, navigate }) {
  return (
    <footer className="footer">
      <div className="brand">
        <img className="brand-logo" src="/images/logo%20v1.jpg" alt="" aria-hidden="true" />
        <span>IMR Tech</span>
      </div>
      <div className="footer-links">
        <a href="/privacy" onClick={(event) => {
          event.preventDefault();
          navigate("/privacy");
        }}>{t.footer.privacy}</a>
        <a href="/legal" onClick={(event) => {
          event.preventDefault();
          navigate("/legal");
        }}>{t.footer.terms}</a>
        <a href="/legal" onClick={(event) => {
          event.preventDefault();
          navigate("/legal");
        }}>{t.footer.security}</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <p>© {new Date().getFullYear()} IMR Tech. {t.footer.rights}</p>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
