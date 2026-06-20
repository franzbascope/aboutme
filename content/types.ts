/**
 * Shared content types for the whole site.
 *
 * Every user-facing string and data list lives in a per-locale file
 * (`en.ts`, `es.ts`, `pt.ts`); each one `satisfies SiteContent` so the three
 * stay structurally in sync — add or remove a field in one and the others
 * fail to compile until they match.
 *
 * Locale-invariant fields (URLs, `iconKey`, social `label`, `flag`, `emoji`)
 * are intentionally not translated and must be identical across all locales.
 */

export type NavItem = { label: string; href: string };
export type SocialLink = { label: string; href: string };

export type Job = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

/** `iconKey` maps to a LucideIcon in projects.tsx (keeps content plain data). */
export type ProjectIconKey = "shoppingCart" | "userRound" | "trophy";
export type Project = {
  name: string;
  iconKey: ProjectIconKey;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
};

export type Education = {
  school: string;
  credential: string;
  period: string;
  note: string;
};

export type Language = {
  language: string;
  proficiency: string;
  flag: string;
};

export type Hobby = {
  title: string;
  emoji: string;
  blurb: string;
};

export type SiteContent = {
  site: {
    metaTitle: string;
    metaDescription: string;
    htmlLang: string;
    footer: string;
  };
  nav: {
    homeLabel: string;
    ariaLabel: string;
    /** aria-label for the language switcher trigger. */
    languageLabel: string;
    items: NavItem[];
  };
  social: {
    ariaLabel: string;
    links: SocialLink[];
  };
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    headshotAlt: string;
    bio: string[];
  };
  experience: {
    title: string;
    description: string;
    jobs: Job[];
  };
  education: {
    title: string;
    items: Education[];
  };
  projects: {
    title: string;
    description: string;
    codeLabel: string;
    demoLabel: string;
    items: Project[];
  };
  languages: {
    title: string;
    items: Language[];
  };
  hobbies: {
    title: string;
    description: string;
    items: Hobby[];
  };
};
