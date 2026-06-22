import type { SiteContent } from "./types";

/**
 * Spanish (es) content. Natural, conversational translation of `en.ts` that
 * keeps the same retro-personal tone — phrased by meaning, not word-for-word.
 * "Hobbies" is intentionally left in English (it reads as a loanword in
 * Spanish); gym PRs are given in kilograms rather than pounds. Locale-invariant
 * fields (URLs, iconKey, social label, flag, emoji) match `en.ts` exactly;
 * `period` dates are left as written there since they're proper-noun-like
 * labels on the site.
 */
export const es = {
  site: {
    metaTitle: "💻 Franz Bascope — Desarrollador Full-Stack",
    metaDescription:
      "Sitio personal de Franz Bascope, desarrollador full-stack que trabaja con Java/Spring, React/Angular e IA/PLN.",
    htmlLang: "es",
    footer: "Franz Bascope — hecho a mano por un humano, vibe-coding con Claude 🤖",
  },

  nav: {
    homeLabel: "~/franz",
    ariaLabel: "Secciones",
    languageLabel: "Idioma",
    items: [
      { label: "Experiencia", href: "#experience" },
      { label: "Educación", href: "#education" },
      { label: "Proyectos", href: "#projects" },
      { label: "Idiomas", href: "#languages" },
      { label: "Hobbies", href: "#hobbies" },
    ],
  },

  social: {
    ariaLabel: "Perfiles sociales",
    links: [
      { label: "GitHub", href: "https://github.com/franzbascope" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/franzbascope" },
      { label: "YouTube", href: "https://www.youtube.com/@franzbasco" },
    ],
  },

  hero: {
    greeting: "Hola, soy",
    name: "Franz Bascope",
    tagline:
      "Desarrollador full-stack — Java/Spring y React/Angular, y últimamente experimentando con IA y PLN.",
    headshotAlt: "Foto de Franz Bascope",
    bio: [
      "Desarrollador full-stack que se mueve con soltura en los dos extremos del stack — Java/Spring por detrás, React/Angular por delante. Empecé en QA rompiendo el código de los demás, después se me ocurrió construir el mío propio y de algún modo terminé en un banco global.",
      "Últimamente ando enseñando a las máquinas a leer con IA y PLN, y saqué un máster mientras trabajaba a tiempo completo — más que nada, un curso intensivo de cómo funcionar durmiendo poquísimo. ☕",
    ],
  },

  experience: {
    title: "Experiencia",
    description: "Más de 6 años entre fintech y finanzas globales.",
    jobs: [
      {
        company: "Citibank",
        role: "Programador Sr. de Desarrollo de Aplicaciones",
        period: "Jun 2023 – Presente",
        summary:
          "Trabajo full-stack con Angular moderno y TypeScript en el front-end y Java / Spring Boot en el back-end, incluido Spring Cloud Gateway. Experiencia práctica con autenticación basada en JWKS, y con el despliegue y la operación de servicios en OpenShift y Kubernetes en un entorno empresarial a gran escala.",
      },
      {
        company: "Credible",
        role: "Ingeniero de Software",
        period: "Ene 2022 – May 2023",
        summary:
          "Desarrollo full-stack con Ruby on Rails y React, construyendo servicios de backend e integraciones con APIs de terceros, además de funcionalidades de front-end y herramientas de contenido.",
      },
      {
        company: "Infinity Sales Group",
        role: "Ingeniero de Software",
        period: "Mar 2020 – Dic 2021",
        summary:
          "Desarrollo de front-end en Angular e integraciones de APIs REST/SOAP, con experiencia práctica en AWS (Elastic Beanstalk, RDS, S3) y mantenimiento de código heredado en PHP y AngularJS. (Boca Raton, FL)",
      },
      {
        company: "TOTVS",
        role: "Analista de Sistemas",
        period: "Jul 2017 – Dic 2019",
        summary:
          "Desarrollo de backend en C# / ASP.NET con integración de ERP, procedimientos almacenados avanzados en MSSQL y desarrollo móvil en React Native.",
      },
      {
        company: "Consensus",
        role: "Ingeniero de QA",
        period: "Dic 2015 – Jun 2017",
        summary:
          "Ingeniería de calidad — creando y manteniendo pruebas de regresión automatizadas y coordinando despliegues a producción. (Utah — remoto)",
      },
    ],
  },

  education: {
    title: "Educación",
    items: [
      {
        school: "University of Tampa",
        credential: "MBA",
        period: "En curso",
        note: "Recién empezando — combinando la base de ingeniería con el lado de los negocios.",
      },
      {
        school: "University of South Florida",
        credential: "M.S. en Ingeniería Informática (enfoque en IA)",
        period: "2025",
        note: "Obtuve mi máster en Ingeniería Informática mientras trabajaba a tiempo completo, con un enfoque en IA — PLN y aprendizaje profundo.",
      },
      {
        school: "Universidad NUR, Bolivia",
        credential: "Certificado — Microservicios",
        period: "2022",
        note: "",
      },
      {
        school: "Universidad NUR, Bolivia",
        credential: "Lic. en Ciencias de la Computación",
        period: "2020",
        note: "",
      },
    ],
  },

  projects: {
    title: "Proyectos",
    description: "Algunas cosas que he construido — código y demos en vivo abajo.",
    codeLabel: "Código",
    demoLabel: "Demo",
    items: [
      {
        name: "Fruit Store",
        iconKey: "shoppingCart",
        description:
          "Una pequeña app de frutería que demuestra CQRS y Event Sourcing — cada interacción se guarda como un evento para poder reproducir todo el historial.",
        tags: ["React", "CQRS", "Event Sourcing"],
        repo: "https://github.com/franzbascope/fruit_store",
        demo: "https://franzbascope.github.io/fruit_store/",
      },
      {
        name: "South Park Avatar",
        iconKey: "userRound",
        description:
          "Una app de React para crear y personalizar avatares al estilo de South Park — gorros, ojos, zapatos, pantalones y más — con un diseño de componentes limpio.",
        tags: ["React", "JavaScript"],
        repo: "https://github.com/franzbascope/Avatar",
        demo: "https://franzbascope.github.io/Avatar/",
      },
      {
        name: "Formula 1 SQL",
        iconKey: "trophy",
        description:
          "Transforma datos CSV en bruto de Fórmula 1 en una base de datos Oracle SQL muy estructurada — garantizando la integridad con restricciones y afinando el rendimiento con índices y particiones.",
        tags: ["SQL", "Oracle", "Modelado de Datos"],
        repo: "https://github.com/franzbascope/formula1_sql",
      },
    ],
  },

  languages: {
    title: "Idiomas",
    items: [
      { language: "Español", proficiency: "Nativo", flag: "🇪🇸" },
      { language: "Inglés", proficiency: "Profesional", flag: "🇺🇸" },
      { language: "Portugués", proficiency: "Conversacional", flag: "🇧🇷" },
    ],
  },

  hobbies: {
    title: "Hobbies",
    description: "Lo que hago cuando me alejo del teclado.",
    items: [
      {
        title: "Correr",
        emoji: "🏃",
        blurb:
          "Voy a correr mi primera media maratón en Buenos Aires el 23 de agosto — 21K y la cuenta regresiva ya empezó.",
      },
      {
        title: "Gimnasio",
        emoji: "🏋️",
        blurb:
          "Récord en press de banca: 100 kg. Récord en peso muerto: 140 kg. Me dicen que son solo números y no rasgos de personalidad, pero no opino lo mismo.",
      },
      {
        title: "Surf",
        emoji: "🏄",
        blurb:
          "Hace poco tomé clases de surf en Natal, Brasil — totalmente enganchado y con planes de seguir persiguiendo olas.",
      },
    ],
  },
} satisfies SiteContent;
