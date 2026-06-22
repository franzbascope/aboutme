import type { SiteContent } from "./types";

/**
 * Portuguese (pt-BR) content. Natural, conversational translation of `en.ts`
 * that keeps the same retro-personal tone — phrased by meaning, not
 * word-for-word. "Hobbies" reads as a common loanword in Brazilian Portuguese,
 * so it stays in English; gym PRs are given in kilograms rather than pounds.
 * Locale-invariant fields (URLs, iconKey, social label, flag, emoji) match
 * `en.ts` exactly; `period` dates are left as written there since they're
 * proper-noun-like labels on the site.
 */
export const pt = {
  site: {
    metaTitle: "💻 Franz Bascope — Desenvolvedor Full-Stack",
    metaDescription:
      "Site pessoal de Franz Bascope, um desenvolvedor full-stack que trabalha com Java/Spring, React/Angular e IA/PLN.",
    htmlLang: "pt-BR",
    footer: "Franz Bascope — feito à mão por um humano, vibe-coding com Claude 🤖",
  },

  nav: {
    homeLabel: "~/franz",
    ariaLabel: "Seções",
    languageLabel: "Idioma",
    items: [
      { label: "Experiência", href: "#experience" },
      { label: "Educação", href: "#education" },
      { label: "Projetos", href: "#projects" },
      { label: "Idiomas", href: "#languages" },
      { label: "Hobbies", href: "#hobbies" },
    ],
  },

  social: {
    ariaLabel: "Perfis sociais",
    links: [
      { label: "GitHub", href: "https://github.com/franzbascope" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/franzbascope" },
      { label: "YouTube", href: "https://www.youtube.com/@franzbasco" },
    ],
  },

  hero: {
    greeting: "Oi, eu sou o",
    name: "Franz Bascope",
    tagline:
      "Desenvolvedor full-stack — Java/Spring e React/Angular, e ultimamente mexendo com IA e PLN.",
    headshotAlt: "Foto de Franz Bascope",
    bio: [
      "Desenvolvedor full-stack que conversa com as duas pontas da stack — Java/Spring no back, React/Angular no front. Comecei em QA quebrando o código dos outros, depois resolvi construir o meu próprio e de algum jeito acabei em um banco global.",
      "Ultimamente venho ensinando máquinas a ler com IA e PLN, e conquistei um mestrado enquanto trabalhava em tempo integral — basicamente um curso intensivo de como funcionar dormindo muito pouco. ☕",
    ],
  },

  experience: {
    title: "Experiência",
    description: "Mais de 6 anos entre fintech e finanças globais.",
    jobs: [
      {
        company: "Citibank",
        role: "Programador Sênior de Desenvolvimento de Aplicações",
        period: "Jun 2023 – Presente",
        summary:
          "Trabalho full-stack com Angular moderno e TypeScript no front-end e Java / Spring Boot no back-end, incluindo Spring Cloud Gateway. Experiência prática com autenticação baseada em JWKS e com a implantação e operação de serviços em OpenShift e Kubernetes em um ambiente corporativo de larga escala.",
      },
      {
        company: "Credible",
        role: "Engenheiro de Software",
        period: "Jan 2022 – Mai 2023",
        summary:
          "Desenvolvimento full-stack com Ruby on Rails e React, construindo serviços de backend e integrações com APIs de terceiros, além de recursos de front-end e ferramentas de conteúdo.",
      },
      {
        company: "Infinity Sales Group",
        role: "Engenheiro de Software",
        period: "Mar 2020 – Dez 2021",
        summary:
          "Desenvolvimento de front-end em Angular e integrações de APIs REST/SOAP, com experiência prática em AWS (Elastic Beanstalk, RDS, S3) e manutenção de código legado em PHP e AngularJS. (Boca Raton, FL)",
      },
      {
        company: "TOTVS",
        role: "Analista de Sistemas",
        period: "Jul 2017 – Dez 2019",
        summary:
          "Desenvolvimento de backend em C# / ASP.NET com integração de ERP, procedures avançadas em MSSQL e desenvolvimento mobile em React Native.",
      },
      {
        company: "Consensus",
        role: "Engenheiro de QA",
        period: "Dez 2015 – Jun 2017",
        summary:
          "Engenharia de qualidade — criando e mantendo testes de regressão automatizados e coordenando implantações em produção. (Utah — remoto)",
      },
    ],
  },

  education: {
    title: "Educação",
    items: [
      {
        school: "University of Tampa",
        credential: "MBA",
        period: "Em andamento",
        note: "Apenas começando — unindo a base de engenharia com o lado dos negócios.",
      },
      {
        school: "University of South Florida",
        credential: "M.S. em Engenharia de Computação (foco em IA)",
        period: "2025",
        note: "Conquistei meu mestrado em Engenharia de Computação enquanto trabalhava em tempo integral, com foco em IA — PLN e aprendizado profundo.",
      },
      {
        school: "Universidad NUR, Bolívia",
        credential: "Certificado — Microsserviços",
        period: "2022",
        note: "",
      },
      {
        school: "Universidad NUR, Bolívia",
        credential: "Bacharelado em Ciência da Computação",
        period: "2020",
        note: "",
      },
    ],
  },

  projects: {
    title: "Projetos",
    description: "Algumas coisas que construí — código e demos ao vivo abaixo.",
    codeLabel: "Código",
    demoLabel: "Demo",
    items: [
      {
        name: "Fruit Store",
        iconKey: "shoppingCart",
        description:
          "Um pequeno app de loja de frutas que demonstra CQRS e Event Sourcing — cada interação é salva como um evento para que todo o histórico possa ser reproduzido.",
        tags: ["React", "CQRS", "Event Sourcing"],
        repo: "https://github.com/franzbascope/fruit_store",
        demo: "https://franzbascope.github.io/fruit_store/",
      },
      {
        name: "South Park Avatar",
        iconKey: "userRound",
        description:
          "Um app em React para criar e personalizar avatares no estilo de South Park — chapéus, olhos, sapatos, calças e mais — construído em torno de um design de componentes limpo.",
        tags: ["React", "JavaScript"],
        repo: "https://github.com/franzbascope/Avatar",
        demo: "https://franzbascope.github.io/Avatar/",
      },
      {
        name: "Formula 1 SQL",
        iconKey: "trophy",
        description:
          "Transforma dados CSV brutos de Fórmula 1 em um banco de dados Oracle SQL altamente estruturado — garantindo a integridade com restrições e ajustando o desempenho com índices e partições.",
        tags: ["SQL", "Oracle", "Modelagem de Dados"],
        repo: "https://github.com/franzbascope/formula1_sql",
      },
    ],
  },

  languages: {
    title: "Idiomas",
    items: [
      { language: "Espanhol", proficiency: "Nativo", flag: "🇪🇸" },
      { language: "Inglês", proficiency: "Profissional", flag: "🇺🇸" },
      { language: "Português", proficiency: "Conversacional", flag: "🇧🇷" },
    ],
  },

  hobbies: {
    title: "Hobbies",
    description: "O que eu faço longe do teclado.",
    items: [
      {
        title: "Corrida",
        emoji: "🏃",
        blurb:
          "Vou correr minha primeira meia maratona em Buenos Aires no dia 23 de agosto — 21K e a contagem regressiva já começou.",
      },
      {
        title: "Academia",
        emoji: "🏋️",
        blurb:
          "Recorde no supino: 100 kg. Recorde no levantamento terra: 140 kg. Dizem que são só números e não traços de personalidade, mas eu discordo.",
      },
      {
        title: "Surfe",
        emoji: "🏄",
        blurb:
          "Recentemente fiz aulas de surfe em Natal, Brasil — totalmente viciado e com planos de continuar atrás das ondas.",
      },
    ],
  },
} satisfies SiteContent;
