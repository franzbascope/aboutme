import { Badge } from "@/components/ui/badge";

import { Section } from "./section";

const languages = [
  { language: "Spanish", proficiency: "Native", flag: "🇪🇸" },
  { language: "English", proficiency: "Professional", flag: "🇺🇸" },
  { language: "Portuguese", proficiency: "Conversational", flag: "🇧🇷" },
];

export function Languages() {
  return (
    <Section id="languages" title="Languages">
      <ul className="flex flex-wrap gap-2">
        {languages.map(({ language, proficiency, flag }) => (
          <li key={language}>
            <Badge variant="outline" className="h-auto gap-1.5 px-3 py-1 text-sm">
              <span aria-hidden className="text-base leading-none">
                {flag}
              </span>
              <span className="font-medium">{language}</span>
              <span className="text-muted-foreground">— {proficiency}</span>
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
