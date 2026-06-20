import type { SiteContent } from "./types";

/**
 * English content (the default locale and the canonical shape).
 *
 * `satisfies SiteContent` keeps this in sync with `es.ts` / `pt.ts` — the
 * three locale files share one structural type (see `./types`), so adding or
 * removing a field here surfaces as a type error in the translations until
 * they match.
 *
 * Presentational, non-serializable bits (lucide icons, inline brand-icon SVGs)
 * stay in the components; content references them by a stable string key
 * (`iconKey` / social `label`) that the component maps back to a component.
 * Those keys, URLs, flags and emoji are locale-invariant and must match across
 * all three files.
 */
export const en = {
  site: {
    metaTitle: "💻 Franz Bascope — Full-Stack Developer",
    metaDescription:
      "Personal site of Franz Bascope, a full-stack developer working with Java/Spring, React/Angular, and AI/NLP.",
    htmlLang: "en",
    // Rendered as: © {year} {footer}. The year is computed at render time.
    footer: "Franz Bascope — handcrafted by a human, vibe-coded with Claude 🤖",
  },

  nav: {
    homeLabel: "~/franz",
    ariaLabel: "Sections",
    languageLabel: "Language",
    items: [
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Projects", href: "#projects" },
      { label: "Languages", href: "#languages" },
      { label: "Hobbies", href: "#hobbies" },
    ],
  },

  social: {
    ariaLabel: "Social profiles",
    // `label` doubles as the key the component uses to pick the brand icon.
    links: [
      { label: "GitHub", href: "https://github.com/franzbascope" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/franzbascope" },
      { label: "YouTube", href: "https://www.youtube.com/@franzbasco" },
    ],
  },

  hero: {
    greeting: "Hi, I'm",
    name: "Franz Bascope",
    tagline:
      "Full-stack developer — Java/Spring & React/Angular, lately poking at AI & NLP.",
    headshotAlt: "Headshot of Franz Bascope",
    bio: [
      "Full-stack dev who talks to both ends of the stack — Java/Spring in the back, React/Angular up front. Started in QA breaking other people's code, then figured I'd build my own and somehow ended up at a global bank.",
      "Lately I've been teaching machines to read with AI & NLP, and I earned a Master's while working full-time — mostly a crash course in functioning on very little sleep. ☕",
    ],
  },

  experience: {
    title: "Experience",
    description: "6+ years across fintech and global finance.",
    // Source: docs/resume.pdf (work history only; contact details omitted).
    jobs: [
      {
        company: "Citibank",
        role: "Applications Development Sr Programmer",
        period: "Jun 2023 – Present",
        summary:
          "Full-stack work across modern Angular and TypeScript on the front end and Java / Spring Boot on the back end, including Spring Cloud Gateway. Hands-on with JWKS-based authentication, and deploying and operating services on OpenShift and Kubernetes in a large-scale enterprise environment.",
      },
      {
        company: "Credible",
        role: "Software Engineer",
        period: "Jan 2022 – May 2023",
        summary:
          "Full-stack development with Ruby on Rails and React, building backend services and third-party API integrations, plus front-end features and content tooling.",
      },
      {
        company: "Infinity Sales Group",
        role: "Software Engineer",
        period: "Mar 2020 – Dec 2021",
        summary:
          "Front-end development in Angular and REST/SOAP API integrations, with hands-on AWS experience (Elastic Beanstalk, RDS, S3) and maintenance of legacy PHP and AngularJS code. (Boca Raton, FL)",
      },
      {
        company: "TOTVS",
        role: "System Analyst",
        period: "Jul 2017 – Dec 2019",
        summary:
          "Backend development in C# / ASP.NET with ERP integration, advanced MSSQL stored procedures, and mobile development in React Native.",
      },
      {
        company: "Consensus",
        role: "QA Engineer",
        period: "Dec 2015 – Jun 2017",
        summary:
          "Quality engineering — building and maintaining automated regression tests and coordinating production deployments. (Utah — remote)",
      },
    ],
  },

  education: {
    title: "Education",
    items: [
      {
        school: "University of Tampa",
        credential: "MBA",
        period: "In progress",
        note: "Just getting started — pairing the engineering background with the business side.",
      },
      {
        school: "University of South Florida",
        credential: "M.S. Computer Engineering (focus on AI)",
        period: "2025",
        note: "Earned my Master's in Computer Engineering while working full-time, with a focus on AI — NLP and deep learning.",
      },
      {
        school: "Universidad NUR, Bolivia",
        credential: "B.S. Computer Sciences",
        period: "2020",
        note: "",
      },
      {
        school: "Universidad NUR, Bolivia",
        credential: "Certificate — Microservices",
        period: "2022",
        note: "",
      },
    ],
  },

  projects: {
    title: "Projects",
    description: "A few things I've built — code and live demos below.",
    codeLabel: "Code",
    demoLabel: "Demo",
    // Source: public GitHub repos at github.com/franzbascope.
    items: [
      {
        name: "Fruit Store",
        iconKey: "shoppingCart",
        description:
          "A small fruit-store app that demonstrates CQRS and Event Sourcing — every interaction is saved as an event so the full history can be replayed.",
        tags: ["React", "CQRS", "Event Sourcing"],
        repo: "https://github.com/franzbascope/fruit_store",
        demo: "https://franzbascope.github.io/fruit_store/",
      },
      {
        name: "South Park Avatar",
        iconKey: "userRound",
        description:
          "A React app for creating and customizing South Park–style avatars — hats, eyes, shoes, pants and more — built around a clean component design.",
        tags: ["React", "JavaScript"],
        repo: "https://github.com/franzbascope/Avatar",
        demo: "https://franzbascope.github.io/Avatar/",
      },
      {
        name: "Formula 1 SQL",
        iconKey: "trophy",
        description:
          "Transforms raw Formula 1 CSV data into a highly structured Oracle SQL database — enforcing integrity with constraints and tuning performance via indexes and partitions.",
        tags: ["SQL", "Oracle", "Data Modeling"],
        repo: "https://github.com/franzbascope/formula1_sql",
      },
    ],
  },

  languages: {
    title: "Languages",
    items: [
      { language: "Spanish", proficiency: "Native", flag: "🇪🇸" },
      { language: "English", proficiency: "Professional", flag: "🇺🇸" },
      { language: "Portuguese", proficiency: "Conversational", flag: "🇧🇷" },
    ],
  },

  hobbies: {
    title: "Hobbies",
    description: "What I get up to away from the keyboard.",
    items: [
      {
        title: "Running",
        emoji: "🏃",
        blurb:
          "Running my first half marathon in Buenos Aires this August 23 — 21K and counting down.",
      },
      {
        title: "Gym",
        emoji: "🏋️",
        blurb:
          "Bench press PR: 225 lbs. Deadlift PR: 315 lbs. I'm told these are numbers and not personality traits, but I disagree.",
      },
      {
        title: "Surfing",
        emoji: "🏄",
        blurb:
          "Recently took surfing classes in Natal, Brazil — fully hooked and planning to keep chasing waves.",
      },
    ],
  },
} satisfies SiteContent;
