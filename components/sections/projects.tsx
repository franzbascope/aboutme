"use client";

import {
  Code2,
  ExternalLink,
  ShoppingCart,
  Trophy,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { type ProjectIconKey } from "@/content";
import { useContent } from "@/lib/i18n";
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

// Maps the plain-data icon key in content to the actual lucide icon component.
const iconMap: Record<ProjectIconKey, LucideIcon> = {
  shoppingCart: ShoppingCart,
  userRound: UserRound,
  trophy: Trophy,
};

export function Projects() {
  const { title, description, codeLabel, demoLabel, items } =
    useContent().projects;
  return (
    <Section id="projects" title={title} description={description}>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((project) => {
          const Icon = iconMap[project.iconKey];
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
                      {codeLabel}
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
                        {demoLabel}
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
