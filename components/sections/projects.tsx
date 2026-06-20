import {
  Code2,
  ExternalLink,
  ShoppingCart,
  Trophy,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "./section";

// Source: public GitHub repos at github.com/franzbascope.
const projects: {
  name: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
}[] = [
  {
    name: "Fruit Store",
    icon: ShoppingCart,
    description:
      "A small fruit-store app that demonstrates CQRS and Event Sourcing — every interaction is saved as an event so the full history can be replayed.",
    tags: ["React", "CQRS", "Event Sourcing"],
    repo: "https://github.com/franzbascope/fruit_store",
    demo: "https://franzbascope.github.io/fruit_store/",
  },
  {
    name: "South Park Avatar",
    icon: UserRound,
    description:
      "A React app for creating and customizing South Park–style avatars — hats, eyes, shoes, pants and more — built around a clean component design.",
    tags: ["React", "JavaScript"],
    repo: "https://github.com/franzbascope/Avatar",
    demo: "https://franzbascope.github.io/Avatar/",
  },
  {
    name: "Formula 1 SQL",
    icon: Trophy,
    description:
      "Transforms raw Formula 1 CSV data into a highly structured Oracle SQL database — enforcing integrity with constraints and tuning performance via indexes and partitions.",
    tags: ["SQL", "Oracle", "Data Modeling"],
    repo: "https://github.com/franzbascope/formula1_sql",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="A few things I've built — code and live demos below."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground ring-1 ring-foreground/10">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-wrap content-start gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  nativeButton={false}
                  render={
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 />
                      Code
                    </a>
                  }
                />
                {project.demo ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    nativeButton={false}
                    render={
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                        Demo
                      </a>
                    }
                  />
                ) : null}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
