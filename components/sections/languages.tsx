import { Badge } from "@/components/ui/badge";

import { Section } from "./section";

// TODO: confirm languages and proficiency levels.
const languages = [
  { language: "Spanish", proficiency: "Native" },
  { language: "English", proficiency: "Professional" },
  { language: "Language", proficiency: "Proficiency" },
];

export function Languages() {
  return (
    <Section id="languages" title="Languages">
      <ul className="flex flex-wrap gap-2">
        {languages.map(({ language, proficiency }) => (
          <li key={language}>
            <Badge variant="outline" className="h-auto gap-1.5 px-3 py-1 text-sm">
              <span className="font-medium">{language}</span>
              <span className="text-muted-foreground">— {proficiency}</span>
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
