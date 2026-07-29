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
  Moon,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
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
    metaTitle: "IMR Tech | Implementación de IA para empresas",
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
      darkTheme: "Tema oscuro",
      lightTheme: "Tema claro",
    },
    hero: {
      title: "Implementamos IA para mejorar tus procesos.",
      body: "Ayudamos a empresas a rediseñar y mejorar procesos con IA para operar más rápido, con menor costo y mejor calidad.",
      primary: "Agendar diagnóstico",
      secondary: "Hablar por WhatsApp",
      proof: "Diagnóstico inicial de 30 minutos",
      audience:
        "Partas desde cero o tengas un piloto estancado, convertimos un problema de negocio en una solución que funciona en la operación.",
      outcome:
        "Diseñamos el proceso, construimos el sistema y elegimos la arquitectura según tu prioridad: más control, independencia, privacidad y seguridad, o más velocidad y menor costo para llegar a producción.",
      details: ["FP&A", "Logística", "RR.HH.", "TI", "Customer success", "Legal"],
      assurances: [
        "De cero a uno o rescate de pilotos",
        "Infraestructura privada o local cuando conviene",
        "Arquitectura multimodelo para velocidad y costo",
      ],
    },
    trust: {
      label: "Implementación de punta a punta",
      title: "Del primer caso a producción, sin quedar atado a un proveedor.",
      body:
        "Trabajamos con tecnologías de Google Cloud, AWS, NVIDIA, Intel, Meta y LangGraph, entre otras. Elegimos cada componente por el proceso, los datos, el nivel de control y la velocidad que necesita el negocio.",
      items: [
        {
          title: "De cero a uno",
          body: "Identificamos el proceso prioritario, reformulamos el flujo y construimos el primer sistema de IA con una métrica de negocio clara.",
        },
        {
          title: "Rescate de proyectos difíciles",
          body: "Auditamos pilotos fallidos o estancados, encontramos el bloqueo en datos, integración, adopción o gobierno y los llevamos a una operación controlada.",
        },
        {
          title: "Infraestructura según la prioridad",
          body: "Diseñamos infraestructura privada o local para maximizar control, o sistemas multimodelo para llegar a producción más rápido y con menor costo.",
        },
      ],
    },
    caseStudies: {
      label: "Casos anónimos",
      title: "Proyectos reales, resultados medibles sin exponer a los clientes.",
      body:
        "Por confidencialidad no nombramos empresas ni publicamos cifras sin una línea base aprobada. Sí mostramos el alcance, la ventana de evaluación y la métrica operacional usada en cada caso.",
      solutionLabel: "Solución real",
      scopeLabel: "Alcance",
      timeframeLabel: "Ventana de evaluación",
      metricLabel: "Métrica operacional",
      items: [
        {
          sector: "Retail óptico",
          title: "Agente de atención, pedidos y recordatorios",
          solution:
            "Agente de customer success para responder consultas, tomar pedidos, enviar recordatorios y escalar excepciones al equipo comercial.",
          result: "Atención más consistente, pedidos mejor capturados y seguimiento automático.",
          body:
            "Se conectó la capa conversacional con reglas comerciales y flujos operativos para que la IA dejara de ser solo soporte informativo y empezara a mover tareas reales.",
          scope: "Consultas, toma de pedidos, recordatorios y escalamiento al equipo comercial.",
          timeframe: "Piloto controlado y primeras semanas de operación.",
          metric: "Tasa de conversaciones que terminan en pedido capturado o escalamiento con contexto completo.",
        },
        {
          sector: "Empresa de servicios multi-sucursal",
          title: "Agente de ticketing para soporte TI",
          solution:
            "Sistema de tickets con agente de IA que transforma problemas reportados por usuarios en tickets estructurados y resuelve automáticamente casos repetitivos cuando tiene suficiente contexto.",
          result: "Tickets creados con más contexto y resolución automática de solicitudes frecuentes.",
          body:
            "Se diseñó un flujo asistido para clasificar solicitudes, pedir información faltante, documentar el problema y derivar solo lo que realmente requiere intervención humana.",
          scope: "Solicitudes entrantes de soporte y casos repetitivos de nivel 1 en una operación multi-sucursal.",
          timeframe: "Piloto controlado y primeras semanas de operación.",
          metric: "Porcentaje de tickets con contexto completo y tasa de resolución automática de solicitudes repetitivas.",
        },
        {
          sector: "Laboratorio farmacéutico",
          title: "Planificación automática de pallets",
          solution:
            "Automatización para planificar pallets combinando restricciones de despacho, volumen, prioridades y reglas operativas del laboratorio.",
          result: "Planificación más rápida, menos ajuste manual y mejor coordinación operacional.",
          body:
            "Se conectaron datos operativos y reglas de negocio para generar planes accionables, reducir fricción entre áreas y acelerar decisiones de distribución.",
          scope: "Planificación de pallets combinando restricciones de despacho, volumen, prioridades y reglas operativas.",
          timeframe: "Comparación por ciclo entre la línea base y el piloto controlado.",
          metric: "Tiempo de planificación por ciclo y cantidad de ajustes manuales antes del despacho.",
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
      title: "Tres maneras de implementar IA según tu punto de partida.",
      body:
        "Partas desde cero, tengas un piloto fallido o necesites más control sobre tus datos, diseñamos el proceso, el sistema y la infraestructura para llegar a una operación medible.",
      tabs: [
        {
          title: "De cero a uno",
          body: "Seleccionamos un proceso de alto impacto, levantamos su línea base, rediseñamos el flujo y construimos el primer caso de IA con usuarios y una métrica de éxito.",
          bullets: ["Mapa de oportunidades priorizado", "Proceso objetivo y caso de uso", "Primer sistema medible en operación"],
          image: "/images/image2.png",
          alt: "Equipo identificando y construyendo su primer caso de IA",
        },
        {
          title: "Rescate y producción",
          body: "Tomamos pilotos, prototipos o proyectos fallidos, identificamos el bloqueo y los convertimos en sistemas conectados a procesos reales, con permisos, logs, controles humanos y criterios de aceptación.",
          bullets: ["Diagnóstico de datos e integración", "Controles humanos y trazabilidad", "Despliegue, runbook y medición"],
          image: "/images/image3.png",
          alt: "Diseño de flujo para rescatar un proyecto de IA y llevarlo a producción",
        },
        {
          title: "Infraestructura privada o multimodelo",
          body: "Construimos infraestructura privada, local o híbrida cuando control, independencia y privacidad son prioritarios. Cuando importan más la velocidad y el costo, diseñamos una arquitectura que puede usar y cambiar entre distintos modelos.",
          bullets: ["Modelos locales y open-source", "Routing y evaluación multimodelo", "Control de consumo, seguridad y calidad"],
          image: "/images/image1.png",
          alt: "Infraestructura de IA privada, local o multimodelo con control de costos y calidad",
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
      title: "El primer paso es elegir el proceso correcto.",
      body: "Cuéntanos qué proceso quieres mejorar, si partes desde cero o dónde está trabado tu proyecto. Guardaremos la solicitud y te mostraremos los próximos pasos para agendar o continuar por WhatsApp.",
      fields: {
        firstName: "Nombre",
        email: "Email corporativo",
        phone: "Teléfono (opcional)",
        size: "Tamaño de la organización (opcional)",
        pain: "Dolor actual",
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
          "Partimos desde cero y necesitamos el primer caso",
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
            "Podemos recopilar nombre, email corporativo, dolor declarado y, cuando decides entregarlos, teléfono y tamaño de organización. También registramos idioma y fuente de la solicitud.",
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
    metaTitle: "IMR Tech | AI Implementation for Businesses",
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
      darkTheme: "Dark theme",
      lightTheme: "Light theme",
    },
    hero: {
      title: "We implement AI to improve your business processes.",
      body: "We help companies redesign and improve processes with AI so they operate faster, at lower cost, and with better quality.",
      primary: "Schedule diagnostic",
      secondary: "Talk on WhatsApp",
      proof: "30-minute initial diagnostic",
      audience:
        "Whether you are starting from zero or have a stalled pilot, we turn a business problem into a solution that works in real operations.",
      outcome:
        "We design the process, build the system, and choose the architecture around your priority: more control, independence, privacy, and security, or more speed and lower cost to reach production.",
      details: ["FP&A", "Logistics", "HR", "IT", "Customer success", "Legal"],
      assurances: [
        "Zero to one or stalled-pilot recovery",
        "Private or local infrastructure when useful",
        "Multi-model architecture for speed and cost",
      ],
    },
    trust: {
      label: "End-to-end implementation",
      title: "From the first use case to production, without vendor lock-in.",
      body:
        "We work with technologies from Google Cloud, AWS, NVIDIA, Intel, Meta, and LangGraph, among others. We choose each component around the process, the data, the required level of control, and the speed the business needs.",
      items: [
        {
          title: "From zero to one",
          body: "We identify the priority process, redesign the workflow, and build the first AI system around a clear business metric.",
        },
        {
          title: "Recovery for difficult projects",
          body: "We audit failed or stalled pilots, find the block in data, integration, adoption, or governance, and move them into controlled operation.",
        },
        {
          title: "Infrastructure that fits the priority",
          body: "We design private or local infrastructure for maximum control, or multi-model systems for faster and lower-cost production.",
        },
      ],
    },
    caseStudies: {
      label: "Anonymous case studies",
      title: "Real projects and measurable outcomes without exposing clients.",
      body:
        "Because of confidentiality, we do not name companies or publish figures without an approved baseline. We do show the scope, evaluation window, and operational metric used for each case.",
      solutionLabel: "Actual solution",
      scopeLabel: "Scope",
      timeframeLabel: "Evaluation window",
      metricLabel: "Operational metric",
      items: [
        {
          sector: "Optical retail",
          title: "Customer support, orders, and reminders agent",
          solution:
            "Customer success AI agent that answers support questions, takes orders, sends reminders, and escalates exceptions to the commercial team.",
          result: "More consistent support, better order capture, and automated follow-up.",
          body:
            "The conversational layer was connected to commercial rules and operating workflows so AI could move real tasks instead of only answering informational questions.",
          scope: "Customer questions, order intake, reminders, and escalation to the commercial team.",
          timeframe: "Controlled pilot and the first weeks of operation.",
          metric: "Share of conversations ending in a captured order or an escalation with complete context.",
        },
        {
          sector: "Multi-site services company",
          title: "IT support ticketing agent",
          solution:
            "Ticketing system with an AI agent that turns user-reported problems into structured tickets and automatically resolves repetitive cases when it has enough context.",
          result: "Tickets created with better context and frequent requests resolved automatically.",
          body:
            "An assisted flow classified requests, asked for missing information, documented the issue, and routed only the cases that truly required human intervention.",
          scope: "Inbound support requests and recurring level-1 cases across a multi-site operation.",
          timeframe: "Controlled pilot and the first weeks of operation.",
          metric: "Percentage of tickets with complete context and automatic-resolution rate for recurring requests.",
        },
        {
          sector: "Pharmaceutical laboratory",
          title: "Automated pallet planning",
          solution:
            "Automation for pallet planning using dispatch constraints, volume, priorities, and the lab's operating rules.",
          result: "Faster planning, less manual adjustment, and better operational coordination.",
          body:
            "Operational data and business rules were connected to generate actionable plans, reduce friction between areas, and accelerate distribution decisions.",
          scope: "Pallet planning across dispatch constraints, volume, priorities, and the laboratory's operating rules.",
          timeframe: "Per-cycle comparison between the baseline and the controlled pilot.",
          metric: "Planning time per cycle and number of manual adjustments before dispatch.",
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
      title: "Three ways to implement AI, based on where you are starting.",
      body:
        "Whether you are starting from zero, have a failed pilot, or need more control over your data, we design the process, system, and infrastructure required for measurable operation.",
      tabs: [
        {
          title: "From zero to one",
          body: "We select a high-impact process, establish its baseline, redesign the workflow, and build the first AI use case with real users and a success metric.",
          bullets: ["Prioritized opportunity map", "Target process and use case", "First measurable system in operation"],
          image: "/images/image2.png",
          alt: "Business team identifying and building its first AI use case",
        },
        {
          title: "Recovery and production",
          body: "We take pilots, prototypes, or failed projects, identify the block, and turn them into systems connected to real processes with permissions, logs, human controls, and acceptance criteria.",
          bullets: ["Data and integration diagnosis", "Human controls and traceability", "Deployment, runbook, and measurement"],
          image: "/images/image3.png",
          alt: "Workflow design for recovering an AI project and moving it into production",
        },
        {
          title: "Private or multi-model infrastructure",
          body: "We build private, local, or hybrid infrastructure when control, independence, and privacy come first. When speed and cost matter more, we design an architecture that can use and switch between different models.",
          bullets: ["Local and open-source models", "Multi-model routing and evaluation", "Consumption, security, and quality controls"],
          image: "/images/image1.png",
          alt: "Private, local, or multi-model AI infrastructure with cost and quality controls",
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
      title: "The first step is choosing the right process.",
      body: "Tell us what process you want to improve, whether you are starting from zero, or where your project is stuck. We will save the request and show the next steps to schedule or continue on WhatsApp.",
      fields: {
        firstName: "Name",
        email: "Work email",
        phone: "Phone (optional)",
        size: "Organization size (optional)",
        pain: "Current pain point",
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
          "We are starting from zero and need the first use case",
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
            "We may collect name, work email, declared pain point and, when you choose to provide them, phone and organization size. We also record language and request source.",
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

function resolveInitialTheme() {
  const saved = window.localStorage.getItem("imr-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function App() {
  const [language, setLanguage] = useState(resolveInitialLanguage);
  const [theme, setTheme] = useState(resolveInitialTheme);
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
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("imr-theme", theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
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
        theme={theme}
        toggleTheme={toggleTheme}
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

function Header({
  t,
  language,
  isMenuOpen,
  setIsMenuOpen,
  toggleLanguage,
  theme,
  toggleTheme,
  navigate,
}) {
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
        <button
          className="theme-button"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.nav.lightTheme : t.nav.darkTheme}
          title={theme === "dark" ? t.nav.lightTheme : t.nav.darkTheme}
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
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
        <button type="button" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === "dark" ? t.nav.lightTheme : t.nav.darkTheme}</span>
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
            <div className="case-solution">
              <span>{t.caseStudies.solutionLabel}</span>
              <p>{item.solution}</p>
            </div>
            <strong>{item.result}</strong>
            <dl className="case-evidence">
              <div>
                <dt>{t.caseStudies.scopeLabel}</dt>
                <dd>{item.scope}</dd>
              </div>
              <div>
                <dt>{t.caseStudies.timeframeLabel}</dt>
                <dd>{item.timeframe}</dd>
              </div>
              <div>
                <dt>{t.caseStudies.metricLabel}</dt>
                <dd>{item.metric}</dd>
              </div>
            </dl>
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
    email: "",
    phone: "",
    size: "",
    pain: "",
    companyWebsite: "",
  });
  const [status, setStatus] = useState("idle");

  const leadSummary = useMemo(() => {
    const labels = t.contact.fields;
    return [
      "IMR Tech lead",
      `${labels.firstName}: ${form.firstName}`,
      `${labels.email}: ${form.email}`,
      `${labels.pain}: ${form.pain}`,
      form.phone ? `${labels.phone}: ${form.phone}` : null,
      form.size ? `${labels.size}: ${form.size}` : null,
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
            label={t.contact.fields.email}
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            maxLength={254}
            required
          />
          <SelectField
            label={t.contact.fields.pain}
            name="pain"
            value={form.pain}
            options={t.contact.options.pain}
            onChange={updateField}
            className="full-span"
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
          />
          <SelectField
            label={t.contact.fields.size}
            name="size"
            value={form.size}
            options={t.contact.options.size}
            onChange={updateField}
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

function FormField({ label, name, type = "text", value, onChange, className = "", ...props }) {
  return (
    <label className={`field ${className}`.trim()}>
      <span>{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} {...props} />
    </label>
  );
}

function SelectField({ label, name, value, options, onChange, className = "", ...props }) {
  return (
    <label className={`field ${className}`.trim()}>
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
