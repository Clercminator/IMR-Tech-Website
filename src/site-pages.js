export const SITE_URL = "https://www.imrtech.xyz";

const shared = {
  es: {
    contact: "Agendar diagnóstico",
    evidenceTitle: "Evidencia que podemos publicar",
    evidenceNote:
      "No publicamos nombres, cifras ni testimonios de clientes sin autorización. La evidencia disponible describe el alcance, la ventana de evaluación y la métrica operacional utilizada.",
    deliverablesTitle: "Qué incluye",
    processTitle: "Cómo se implementa",
    relatedTitle: "Contenido relacionado",
    faqTitle: "Preguntas frecuentes",
    testimonialTitle: "Referencias y testimonios",
    testimonialBody:
      "Las referencias de clientes se coordinan durante el proceso comercial cuando existe autorización. Hasta contar con una cita pública verificable, preferimos no atribuir testimonios anónimos.",
    phases: [
      "Diagnóstico del proceso, línea base y priorización.",
      "Diseño del flujo, controles humanos, arquitectura y métrica.",
      "Piloto controlado con usuarios, logs y criterios de aceptación.",
      "Producción monitoreada, transferencia y mejora continua.",
    ],
  },
  en: {
    contact: "Schedule a diagnostic",
    evidenceTitle: "Evidence we can publish",
    evidenceNote:
      "We do not publish client names, figures, or testimonials without authorization. Available evidence describes the scope, evaluation window, and operational metric used.",
    deliverablesTitle: "What is included",
    processTitle: "How implementation works",
    relatedTitle: "Related content",
    faqTitle: "Frequently asked questions",
    testimonialTitle: "References and testimonials",
    testimonialBody:
      "Client references are coordinated during the commercial process when authorization exists. Until a public quote can be verified, we prefer not to attribute anonymous testimonials.",
    phases: [
      "Process diagnostic, baseline, and prioritization.",
      "Target workflow, human controls, architecture, and metric design.",
      "Controlled pilot with users, logs, and acceptance criteria.",
      "Monitored production, knowledge transfer, and continuous improvement.",
    ],
  },
};

const cases = {
  es: [
    {
      slug: "agente-retail-optico",
      title: "Agente de atención, pedidos y recordatorios para retail óptico",
      description:
        "Caso de implementación de un agente de IA para consultas, captura de pedidos, recordatorios y escalamiento comercial en retail óptico.",
      intro:
        "Una operación de retail óptico necesitaba responder consultas con mayor consistencia y convertir conversaciones en tareas operativas. IMR Tech conectó la capa conversacional con reglas comerciales y flujos de atención para capturar pedidos, programar recordatorios y escalar excepciones con contexto.",
      audience:
        "Equipos de customer success, ventas y operaciones que reciben conversaciones repetitivas y necesitan ejecutar acciones sin perder supervisión.",
      deliverables: [
        "Flujo conversacional conectado a reglas comerciales.",
        "Captura estructurada de pedidos y datos faltantes.",
        "Recordatorios automáticos y escalamiento humano.",
        "Logs de conversación, acción y resultado.",
      ],
      evidence: [
        ["Alcance", "Consultas, toma de pedidos, recordatorios y escalamiento comercial."],
        ["Ventana", "Piloto controlado y primeras semanas de operación."],
        ["Métrica", "Conversaciones que terminan en pedido capturado o escalamiento con contexto completo."],
        ["Estado de cifras", "La línea base y el resultado numérico no están autorizados para publicación."],
      ],
      faqs: [
        ["¿El agente puede tomar decisiones comerciales?", "Opera dentro de reglas aprobadas y escala excepciones. Las acciones sensibles conservan autorización humana."],
        ["¿Se integra con CRM o sistemas de pedidos?", "Sí, cuando existen APIs o mecanismos seguros de integración. El diseño parte por los sistemas y permisos disponibles."],
      ],
    },
    {
      slug: "agente-ticketing-ti",
      title: "Agente de ticketing para soporte TI multi-sucursal",
      description:
        "Caso de agente de IA que estructura tickets, solicita antecedentes faltantes y resuelve solicitudes repetitivas de soporte TI.",
      intro:
        "Una empresa de servicios con múltiples sucursales recibía solicitudes de soporte incompletas y casos repetitivos. IMR Tech diseñó un flujo que clasifica la solicitud, pide la información que falta, crea un ticket estructurado y resuelve automáticamente los casos autorizados.",
      audience:
        "Mesas de ayuda y equipos de TI que necesitan reducir la ida y vuelta inicial sin ocultar riesgos ni cerrar tickets sin evidencia.",
      deliverables: [
        "Taxonomía de solicitudes y criterios de derivación.",
        "Captura guiada de antecedentes y creación de tickets.",
        "Resolución controlada de solicitudes repetitivas de nivel 1.",
        "Trazabilidad de respuestas, acciones y escalamiento.",
      ],
      evidence: [
        ["Alcance", "Solicitudes entrantes de soporte y casos repetitivos de nivel 1 en una operación multi-sucursal."],
        ["Ventana", "Piloto controlado y primeras semanas de operación."],
        ["Métrica", "Tickets con contexto completo y tasa de resolución automática de solicitudes repetitivas."],
        ["Estado de cifras", "La línea base y el resultado numérico no están autorizados para publicación."],
      ],
      faqs: [
        ["¿El agente reemplaza la mesa de ayuda?", "No. Resuelve casos delimitados y entrega contexto completo al equipo cuando se requiere juicio o acceso privilegiado."],
        ["¿Cómo evita acciones incorrectas?", "Cada herramienta tiene permisos mínimos, reglas de autorización, logs y criterios explícitos de escalamiento."],
      ],
    },
    {
      slug: "planificacion-pallets-farmaceutica",
      title: "Planificación automática de pallets para un laboratorio farmacéutico",
      description:
        "Caso de automatización para planificar pallets usando restricciones de despacho, volumen, prioridades y reglas operativas.",
      intro:
        "Un laboratorio farmacéutico necesitaba reducir el trabajo manual requerido para construir planes de pallets. La solución combinó datos operativos, restricciones de despacho, volumen, prioridades y reglas de negocio para producir un plan revisable antes de su ejecución.",
      audience:
        "Equipos de logística y planificación que coordinan restricciones múltiples y necesitan reducir ajustes manuales antes del despacho.",
      deliverables: [
        "Modelo de restricciones y reglas operativas.",
        "Integración de datos necesarios para cada ciclo.",
        "Generación de un plan accionable y revisable.",
        "Registro de ajustes humanos para mejorar el proceso.",
      ],
      evidence: [
        ["Alcance", "Planificación de pallets con restricciones de despacho, volumen, prioridades y reglas operativas."],
        ["Ventana", "Comparación por ciclo entre línea base y piloto controlado."],
        ["Métrica", "Tiempo de planificación por ciclo y cantidad de ajustes manuales antes del despacho."],
        ["Estado de cifras", "La línea base y el resultado numérico no están autorizados para publicación."],
      ],
      faqs: [
        ["¿Es un caso de IA generativa?", "La arquitectura puede combinar optimización, reglas y modelos de IA. Se elige la técnica que mejor resuelve la decisión operacional."],
        ["¿Qué ocurre cuando cambian las restricciones?", "Las reglas se versionan y los cambios se validan antes de aplicarlos a planificación productiva."],
      ],
    },
  ],
  en: [
    {
      slug: "optical-retail-agent",
      title: "Customer service, ordering, and reminder agent for optical retail",
      description:
        "AI implementation case covering customer questions, order capture, reminders, and commercial escalation in optical retail.",
      intro:
        "An optical retail operation needed more consistent answers and a way to turn conversations into operational tasks. IMR Tech connected the conversational layer to commercial rules and service workflows so it could capture orders, schedule reminders, and escalate exceptions with context.",
      audience:
        "Customer success, sales, and operations teams that handle repetitive conversations and need actions to remain supervised.",
      deliverables: [
        "Conversation flow connected to commercial rules.",
        "Structured order capture and missing-data collection.",
        "Automated reminders and human escalation.",
        "Conversation, action, and outcome logs.",
      ],
      evidence: [
        ["Scope", "Questions, order capture, reminders, and escalation to the commercial team."],
        ["Window", "Controlled pilot and first weeks of operation."],
        ["Metric", "Conversations ending in a captured order or an escalation with complete context."],
        ["Figures", "Baseline and numerical results are not authorized for publication."],
      ],
      faqs: [
        ["Can the agent make commercial decisions?", "It operates within approved rules and escalates exceptions. Sensitive actions retain human authorization."],
        ["Can it integrate with a CRM or order system?", "Yes, when secure APIs or integration mechanisms are available. The design starts with existing systems and permissions."],
      ],
    },
    {
      slug: "it-ticketing-agent",
      title: "AI ticketing agent for multi-site IT support",
      description:
        "AI agent case that structures tickets, gathers missing information, and resolves repetitive IT support requests.",
      intro:
        "A multi-site services company received incomplete support requests and repetitive cases. IMR Tech designed a flow that classifies each request, asks for missing information, creates a structured ticket, and automatically resolves authorized cases.",
      audience:
        "Help desks and IT teams that need to reduce initial back-and-forth without concealing risk or closing tickets without evidence.",
      deliverables: [
        "Request taxonomy and routing criteria.",
        "Guided information collection and ticket creation.",
        "Controlled resolution of repetitive level-one requests.",
        "Traceability of answers, actions, and escalations.",
      ],
      evidence: [
        ["Scope", "Incoming support requests and repetitive level-one cases across a multi-site operation."],
        ["Window", "Controlled pilot and first weeks of operation."],
        ["Metric", "Tickets with complete context and automatic resolution rate for repetitive requests."],
        ["Figures", "Baseline and numerical results are not authorized for publication."],
      ],
      faqs: [
        ["Does the agent replace the help desk?", "No. It resolves bounded cases and gives the team complete context when judgment or privileged access is required."],
        ["How are incorrect actions prevented?", "Every tool uses minimum permissions, authorization rules, logs, and explicit escalation criteria."],
      ],
    },
    {
      slug: "pharma-pallet-planning",
      title: "Automated pallet planning for a pharmaceutical laboratory",
      description:
        "Automation case for pallet planning using dispatch constraints, volume, priorities, and operational rules.",
      intro:
        "A pharmaceutical laboratory needed to reduce the manual work required to build pallet plans. The solution combined operational data, dispatch constraints, volume, priorities, and business rules to produce a reviewable plan before execution.",
      audience:
        "Logistics and planning teams coordinating multiple constraints that need fewer manual adjustments before dispatch.",
      deliverables: [
        "Constraint and operational-rule model.",
        "Integration of the data required for each cycle.",
        "Generation of an actionable, reviewable plan.",
        "Logging of human adjustments to improve the process.",
      ],
      evidence: [
        ["Scope", "Pallet planning using dispatch, volume, priority, and operational constraints."],
        ["Window", "Cycle-by-cycle comparison between baseline and controlled pilot."],
        ["Metric", "Planning time per cycle and manual adjustments required before dispatch."],
        ["Figures", "Baseline and numerical results are not authorized for publication."],
      ],
      faqs: [
        ["Is this a generative AI use case?", "The architecture may combine optimization, rules, and AI models. We select the technique that best supports the operational decision."],
        ["What happens when constraints change?", "Rules are versioned and changes are validated before they affect production planning."],
      ],
    },
  ],
};

const topics = {
  es: [
    {
      kind: "service",
      slug: "servicios/implementacion-ia-empresas",
      title: "Implementación de IA para empresas",
      description:
        "IMR Tech diseña, construye e integra sistemas de IA para procesos empresariales, desde el diagnóstico hasta una operación medible.",
      intro:
        "Ayudamos a empresas a convertir un problema de negocio en un sistema de IA que funciona dentro de la operación. El trabajo incluye selección del caso, rediseño del proceso, integraciones, controles humanos, despliegue y medición.",
      audience:
        "Organizaciones que parten desde cero o necesitan pasar de una demostración aislada a un proceso conectado con responsables, permisos y métricas.",
      deliverables: ["Mapa de oportunidades priorizado.", "Proceso objetivo y arquitectura.", "Piloto con criterios de aceptación.", "Despliegue, logs, runbook y tablero de impacto."],
      evidenceCase: 0,
      faqs: [
        ["¿Cuánto demora una primera implementación?", "Un piloto controlado suele requerir entre 3 y 6 semanas; la llegada a producción normalmente se trabaja en ciclos de 6 a 12 semanas, según integraciones y riesgo."],
        ["¿Con qué modelos trabajan?", "La arquitectura se decide por calidad, privacidad, control, velocidad y costo. Puede usar modelos comerciales, open-source, cloud, locales o una combinación."],
      ],
    },
    {
      kind: "service",
      slug: "servicios/rescate-pilotos-ia",
      title: "Rescate de pilotos de IA y paso a producción",
      description:
        "Auditoría y rescate de pilotos de IA estancados por problemas de datos, integración, seguridad, costos, gobierno o adopción.",
      intro:
        "Un piloto puede funcionar en una demo y aun así fallar en producción. Auditamos el flujo existente, identificamos el bloqueo real y definimos el camino mínimo para operar con permisos, observabilidad, criterios de aceptación y responsables.",
      audience:
        "Empresas con prototipos que no superaron la prueba interna, agentes difíciles de gobernar o proyectos cuyo costo e impacto no pueden explicarse.",
      deliverables: ["Inventario técnico y operacional.", "Diagnóstico de datos, prompts, herramientas e integraciones.", "Matriz de riesgos y controles.", "Plan de estabilización, producción o cierre."],
      evidenceCase: 1,
      faqs: [
        ["¿Hay que reconstruir todo?", "No. Preservamos lo que funciona y proponemos cambios solo donde existe una brecha demostrable."],
        ["¿Pueden auditar agentes de otro proveedor?", "Sí. El análisis se enfoca en comportamiento, permisos, datos, costos, observabilidad y operación, no en quién construyó el prototipo."],
      ],
    },
    {
      kind: "service",
      slug: "servicios/infraestructura-ia-privada",
      title: "Infraestructura de IA privada, local o multimodelo",
      description:
        "Diseño de infraestructura de IA privada, local, híbrida o multimodelo para controlar datos, dependencia, costo y calidad.",
      intro:
        "Cuando privacidad, independencia o residencia de datos son prioritarias, diseñamos infraestructura local, privada o híbrida. Cuando importan más la velocidad y el costo, evaluamos arquitecturas multimodelo con routing, límites de consumo y medición de calidad.",
      audience:
        "Organizaciones que necesitan evaluar modelos locales u open-source, reducir dependencia de un proveedor o controlar el consumo de múltiples APIs.",
      deliverables: ["Evaluación de requisitos y cargas.", "Arquitectura objetivo y modelo de amenazas.", "Pruebas comparables de calidad, latencia y costo.", "Despliegue, observabilidad y políticas de uso."],
      evidenceCase: 2,
      faqs: [
        ["¿Un modelo local siempre es más privado?", "No por sí solo. La privacidad depende también de identidad, red, almacenamiento, logs, acceso administrativo y operación."],
        ["¿Pueden cambiar de modelo sin rehacer el sistema?", "Diseñamos interfaces y evaluaciones para reducir el acoplamiento cuando esa flexibilidad tiene valor para el negocio."],
      ],
    },
    {
      kind: "industry",
      slug: "industrias/retail",
      title: "IA para retail y customer success",
      description:
        "Agentes e integraciones de IA para atención, pedidos, seguimiento y operaciones de retail con supervisión y métricas.",
      intro:
        "En retail, responder no basta: la conversación debe conectarse con catálogo, pedido, seguimiento y excepción. Diseñamos flujos que ejecutan tareas delimitadas y conservan trazabilidad para los equipos comerciales y operativos.",
      audience:
        "Retailers y equipos de customer success que necesitan gestionar volumen sin convertir la experiencia del cliente en una caja negra.",
      deliverables: ["Mapa de conversaciones y acciones.", "Integración con datos y reglas comerciales.", "Escalamiento con contexto.", "Medición de captura, resolución y calidad."],
      evidenceCase: 0,
      faqs: [["¿Puede operar por WhatsApp?", "Sí, si la empresa dispone de los canales, permisos e integraciones apropiados."], ["¿Cómo se controla la calidad?", "Se definen pruebas, categorías de error, revisión humana y métricas por intención y acción."]],
    },
    {
      kind: "industry",
      slug: "industrias/logistica",
      title: "IA y automatización para logística",
      description:
        "Sistemas de IA, optimización y automatización para planificación, restricciones operativas, excepciones y coordinación logística.",
      intro:
        "Los procesos logísticos combinan datos incompletos, restricciones y decisiones con tiempo limitado. Integramos reglas, optimización y modelos de IA para producir planes revisables, registrar excepciones y reducir trabajo manual.",
      audience:
        "Equipos de planificación, distribución y operaciones que coordinan reglas complejas y necesitan una métrica por ciclo.",
      deliverables: ["Modelo de restricciones y decisiones.", "Integración de fuentes operativas.", "Flujo de revisión y excepción.", "Comparación controlada contra la línea base."],
      evidenceCase: 2,
      faqs: [["¿Todo se resuelve con un LLM?", "No. Muchos problemas requieren optimización, reglas o modelos predictivos; un LLM puede ser solo una parte de la interfaz."], ["¿Cómo se valida el plan?", "Se compara con la línea base, se prueban casos límite y se mantiene aprobación humana donde corresponde."]],
    },
    {
      kind: "industry",
      slug: "industrias/servicios-profesionales",
      title: "IA para empresas de servicios profesionales",
      description:
        "Implementación de IA para soporte interno, propuestas, documentos y flujos administrativos en empresas de servicios.",
      intro:
        "Las empresas de servicios concentran conocimiento en correos, documentos y personas. Diseñamos agentes que recuperan contexto, estructuran solicitudes y preparan acciones sin eliminar la revisión profesional.",
      audience:
        "Firmas y empresas multi-sucursal con procesos documentales, soporte interno, propuestas o coordinación administrativa.",
      deliverables: ["Inventario de conocimiento y permisos.", "Flujos de consulta y acción.", "Integraciones con sistemas internos.", "Gobierno, trazabilidad y adopción por rol."],
      evidenceCase: 1,
      faqs: [["¿Pueden usar documentos internos?", "Sí, con controles de acceso, recuperación autorizada y registro de las fuentes utilizadas."], ["¿Cómo evitan respuestas sin respaldo?", "Diseñamos respuestas con fuentes, umbrales de confianza y escalamiento cuando falta evidencia."]],
    },
    {
      kind: "location",
      slug: "implementacion-ia-chile",
      title: "Implementación de IA para empresas en Chile",
      description:
        "IMR Tech ayuda a empresas chilenas a diagnosticar, construir y llevar sistemas de inteligencia artificial a producción.",
      intro:
        "Trabajamos con líderes de negocio y equipos técnicos en Chile para seleccionar procesos, integrar datos y sistemas, definir controles y medir la operación. La arquitectura puede ser cloud, local, privada o multimodelo según el caso.",
      audience:
        "Empresas en Chile que buscan un equipo local para implementar IA, rescatar un piloto o evaluar infraestructura con mayor control.",
      deliverables: ["Diagnóstico en español y zona horaria local.", "Diseño del caso y responsabilidades.", "Implementación con usuarios referentes.", "Evidencia técnica para revisión de seguridad y privacidad."],
      evidenceCase: 2,
      faqs: [["¿Trabajan solo en Santiago?", "El trabajo puede realizarse de forma remota o coordinada con equipos en distintas regiones, según las necesidades del proyecto."], ["¿La solución considera normativa chilena?", "El equipo legal del cliente interpreta la norma; nosotros entregamos arquitectura, trazabilidad, controles y registros para apoyar su revisión."]],
    },
  ],
};

topics.en = [
  {
    kind: "service",
    slug: "services/enterprise-ai-implementation",
    title: "Enterprise AI implementation",
    description: "IMR Tech designs, builds, and integrates AI systems for business processes, from diagnostic to measurable operation.",
    intro: "We help companies turn a business problem into an AI system that works inside the operation. The engagement covers use-case selection, process redesign, integrations, human controls, deployment, and measurement.",
    audience: "Organizations starting from zero or moving from an isolated demo to a connected process with owners, permissions, and metrics.",
    deliverables: ["Prioritized opportunity map.", "Target process and architecture.", "Pilot with acceptance criteria.", "Deployment, logs, runbook, and impact dashboard."],
    evidenceCase: 0,
    faqs: [["How long does a first implementation take?", "A controlled pilot often takes 3 to 6 weeks; production is normally reached in 6 to 12 week cycles depending on integrations and risk."], ["Which models do you use?", "Architecture follows quality, privacy, control, speed, and cost requirements. It may use commercial, open-source, cloud, local, or combined models."]],
  },
  {
    kind: "service",
    slug: "services/ai-pilot-rescue",
    title: "AI pilot rescue and production readiness",
    description: "Audit and rescue of AI pilots blocked by data, integration, security, cost, governance, or adoption problems.",
    intro: "A pilot may work in a demo and still fail in production. We audit the existing workflow, identify the real blocker, and define the minimum path to operation with permissions, observability, acceptance criteria, and owners.",
    audience: "Companies with prototypes that did not pass internal testing, difficult-to-govern agents, or projects whose cost and impact cannot be explained.",
    deliverables: ["Technical and operational inventory.", "Data, prompt, tool, and integration diagnostic.", "Risk and control matrix.", "Stabilization, production, or closure plan."],
    evidenceCase: 1,
    faqs: [["Does everything need to be rebuilt?", "No. We preserve what works and propose changes only where there is a demonstrable gap."], ["Can you audit another provider's agents?", "Yes. The analysis focuses on behavior, permissions, data, cost, observability, and operation rather than who built the prototype."]],
  },
  {
    kind: "service",
    slug: "services/private-ai-infrastructure",
    title: "Private, local, and multi-model AI infrastructure",
    description: "Private, local, hybrid, or multi-model AI infrastructure designed to control data, dependency, cost, and quality.",
    intro: "When privacy, independence, or data residency come first, we design local, private, or hybrid infrastructure. When speed and cost matter more, we evaluate multi-model architectures with routing, usage limits, and quality measurement.",
    audience: "Organizations evaluating local or open-source models, reducing provider dependency, or controlling consumption across multiple APIs.",
    deliverables: ["Requirements and workload assessment.", "Target architecture and threat model.", "Comparable quality, latency, and cost tests.", "Deployment, observability, and usage policies."],
    evidenceCase: 2,
    faqs: [["Is a local model automatically private?", "No. Privacy also depends on identity, network, storage, logs, administrative access, and operations."], ["Can models be changed without rebuilding the system?", "We design interfaces and evaluations that reduce coupling when that flexibility has business value."]],
  },
  {
    kind: "industry",
    slug: "industries/retail",
    title: "AI for retail and customer success",
    description: "AI agents and integrations for retail service, orders, follow-up, and operations with supervision and measurable outcomes.",
    intro: "In retail, answering is not enough: a conversation must connect to catalog, order, follow-up, and exception handling. We design flows that perform bounded tasks and preserve traceability for commercial and operational teams.",
    audience: "Retailers and customer-success teams that need to handle volume without turning the customer experience into a black box.",
    deliverables: ["Conversation and action map.", "Commercial data and rule integration.", "Escalation with context.", "Capture, resolution, and quality measurement."],
    evidenceCase: 0,
    faqs: [["Can it operate through WhatsApp?", "Yes, when the company has the appropriate channels, permissions, and integrations."], ["How is quality controlled?", "We define tests, error categories, human review, and metrics for each intent and action."]],
  },
  {
    kind: "industry",
    slug: "industries/logistics",
    title: "AI and automation for logistics",
    description: "AI, optimization, and automation for planning, operational constraints, exceptions, and logistics coordination.",
    intro: "Logistics processes combine incomplete data, constraints, and time-sensitive decisions. We integrate rules, optimization, and AI models to produce reviewable plans, record exceptions, and reduce manual work.",
    audience: "Planning, distribution, and operations teams coordinating complex rules that need a measurable result for each cycle.",
    deliverables: ["Constraint and decision model.", "Operational data integration.", "Review and exception workflow.", "Controlled comparison with the baseline."],
    evidenceCase: 2,
    faqs: [["Is every problem solved with an LLM?", "No. Many problems require optimization, rules, or predictive models; an LLM may be only one part of the interface."], ["How is the plan validated?", "It is compared with the baseline, tested on edge cases, and kept under human approval where appropriate."]],
  },
  {
    kind: "industry",
    slug: "industries/professional-services",
    title: "AI for professional-services companies",
    description: "AI implementation for internal support, proposals, documents, and administrative workflows in services companies.",
    intro: "Services companies concentrate knowledge in email, documents, and people. We design agents that retrieve context, structure requests, and prepare actions without removing professional review.",
    audience: "Firms and multi-site services companies with document, internal-support, proposal, or administrative coordination workflows.",
    deliverables: ["Knowledge and permission inventory.", "Query and action workflows.", "Internal system integrations.", "Governance, traceability, and role-based adoption."],
    evidenceCase: 1,
    faqs: [["Can internal documents be used?", "Yes, with access controls, authorized retrieval, and logs of the sources used."], ["How do you prevent unsupported answers?", "We design sourced responses, confidence thresholds, and escalation when evidence is missing."]],
  },
  {
    kind: "location",
    slug: "ai-implementation-chile",
    title: "AI implementation for companies in Chile",
    description: "IMR Tech helps companies in Chile diagnose, build, and move artificial intelligence systems into production.",
    intro: "We work with business leaders and technical teams in Chile to select processes, integrate data and systems, define controls, and measure operations. Architecture may be cloud, local, private, or multi-model depending on the use case.",
    audience: "Companies in Chile looking for a local team to implement AI, rescue a pilot, or evaluate infrastructure with greater control.",
    deliverables: ["Diagnostic in Spanish and a local time zone.", "Use-case design and responsibilities.", "Implementation with reference users.", "Technical evidence for security and privacy review."],
    evidenceCase: 2,
    faqs: [["Do you only work in Santiago?", "Work can be remote or coordinated with teams in different regions according to project needs."], ["Does the solution consider Chilean regulation?", "The client's legal team interprets regulation; we provide architecture, traceability, controls, and records to support its review."]],
  },
];

function pagePath(language, slug, kind) {
  const base = language === "es" ? "es" : "en";
  if (kind === "case") return `/${base}/${language === "es" ? "casos" : "case-studies"}/${slug}/`;
  return `/${base}/${slug}/`;
}

export const sitePages = ["es", "en"].flatMap((language) => {
  const topicPages = topics[language].map((page) => ({
    ...shared[language],
    ...page,
    language,
    path: pagePath(language, page.slug, page.kind),
  }));
  const casePages = cases[language].map((page) => ({
    ...shared[language],
    ...page,
    kind: "case",
    language,
    path: pagePath(language, page.slug, "case"),
  }));
  return [...topicPages, ...casePages];
});

const pairs = [
  ["servicios/implementacion-ia-empresas", "services/enterprise-ai-implementation"],
  ["servicios/rescate-pilotos-ia", "services/ai-pilot-rescue"],
  ["servicios/infraestructura-ia-privada", "services/private-ai-infrastructure"],
  ["industrias/retail", "industries/retail"],
  ["industrias/logistica", "industries/logistics"],
  ["industrias/servicios-profesionales", "industries/professional-services"],
  ["implementacion-ia-chile", "ai-implementation-chile"],
  ["casos/agente-retail-optico", "case-studies/optical-retail-agent"],
  ["casos/agente-ticketing-ti", "case-studies/it-ticketing-agent"],
  ["casos/planificacion-pallets-farmaceutica", "case-studies/pharma-pallet-planning"],
];

const alternateMap = new Map([
  ["/es/", "/en/"],
  ["/en/", "/es/"],
  ["/es/privacidad/", "/en/privacy/"],
  ["/en/privacy/", "/es/privacidad/"],
  ["/es/legal/", "/en/legal/"],
  ["/en/legal/", "/es/legal/"],
]);

pairs.forEach(([esSlug, enSlug]) => {
  const esPath = `/es/${esSlug}/`;
  const enPath = `/en/${enSlug}/`;
  alternateMap.set(esPath, enPath);
  alternateMap.set(enPath, esPath);
});

export function normalizePath(pathname = "/") {
  const clean = pathname.split("?")[0].split("#")[0];
  if (clean === "/") return "/";
  return `${clean.replace(/\/+$/, "")}/`;
}

export function getLanguageFromPath(pathname) {
  const path = normalizePath(pathname);
  if (path.startsWith("/en/")) return "en";
  if (path.startsWith("/es/")) return "es";
  return null;
}

export function getAlternatePath(pathname) {
  return alternateMap.get(normalizePath(pathname)) || (getLanguageFromPath(pathname) === "en" ? "/es/" : "/en/");
}

export function getPageByPath(pathname) {
  const path = normalizePath(pathname);
  return sitePages.find((page) => page.path === path) || null;
}

export function getCasePage(language, index) {
  return sitePages.filter((page) => page.language === language && page.kind === "case")[index];
}

export function getServicePage(language, index) {
  return sitePages.filter((page) => page.language === language && page.kind === "service")[index];
}

export function getRelatedPages(page) {
  if (!page) return [];
  if (page.kind === "case") {
    return sitePages.filter((candidate) => candidate.language === page.language && candidate.kind === "service").slice(0, 3);
  }
  const linkedCase = getCasePage(page.language, page.evidenceCase ?? 0);
  const siblings = sitePages.filter(
    (candidate) => candidate.language === page.language && candidate.kind === page.kind && candidate.path !== page.path,
  );
  return [linkedCase, ...siblings].filter(Boolean).slice(0, 3);
}

export const staticRoutes = [
  "/es/",
  "/en/",
  "/es/privacidad/",
  "/en/privacy/",
  "/es/legal/",
  "/en/legal/",
  ...sitePages.map((page) => page.path),
];

export function getRouteSeo(pathname, fallbackLanguage = "es") {
  const path = normalizePath(pathname);
  const language = getLanguageFromPath(path) || fallbackLanguage;
  const page = getPageByPath(path);
  const home = language === "es" ? "/es/" : "/en/";
  const legalTitles = {
    "/es/privacidad/": ["Política de Privacidad | IMR Tech", "Cómo IMR Tech trata los datos enviados a través de este sitio."],
    "/en/privacy/": ["Privacy Policy | IMR Tech", "How IMR Tech handles data submitted through this website."],
    "/es/legal/": ["Términos y Aviso Legal | IMR Tech", "Términos de uso y aviso legal del sitio de IMR Tech."],
    "/en/legal/": ["Terms and Legal Notice | IMR Tech", "Terms of use and legal notice for the IMR Tech website."],
  };
  const homeSeo = language === "es"
    ? ["IMR Tech | Implementación de IA para empresas en Chile", "Diseñamos, construimos e integramos sistemas de IA para mejorar procesos empresariales y llevar pilotos a producción."]
    : ["IMR Tech | AI implementation for companies in Chile", "We design, build, and integrate AI systems that improve business processes and move pilots into production."];
  const [title, description] = page
    ? [`${page.title} | IMR Tech`, page.description]
    : legalTitles[path] || homeSeo;
  return {
    language,
    path: path === "/" ? home : path,
    title,
    description,
    canonical: `${SITE_URL}${path === "/" ? home : path}`,
    alternate: `${SITE_URL}${getAlternatePath(path === "/" ? home : path)}`,
    alternatePath: getAlternatePath(path === "/" ? home : path),
    page,
  };
}
