import { Bot, Boxes, LayoutTemplate, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "./section";

// TODO: replace placeholders with real projects (source: GitHub, YouTube).
const projects: {
  name: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  href: string;
}[] = [
  {
    name: "Project One",
    icon: Boxes,
    description:
      "Placeholder — what it does, the problem it solves, and your role.",
    tags: ["React", "Spring", "PostgreSQL"],
    href: "https://github.com/franzbascope",
  },
  {
    name: "Project Two",
    icon: Bot,
    description: "Placeholder — short blurb about this project.",
    tags: ["Angular", "Java", "NLP"],
    href: "https://github.com/franzbascope",
  },
  {
    name: "Project Three",
    icon: LayoutTemplate,
    description: "Placeholder — short blurb about this project.",
    tags: ["TypeScript", "Next.js"],
    href: "https://github.com/franzbascope",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="A few things I've built. (Placeholders for now.)"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.name}>
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground ring-1 ring-foreground/10">
                  <Icon className="size-5" />
                </div>
                <CardTitle>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.name}
                  </a>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
