"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useContent } from "@/lib/i18n";

import { Section } from "./section";

export function Experience() {
  const { title, description, jobs } = useContent().experience;
  return (
    <Section id="experience" title={title} description={description}>
      <div className="grid gap-4">
        {jobs.map((job, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span>
                  {job.role}{" "}
                  <span className="text-muted-foreground">@ {job.company}</span>
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
              </CardTitle>
              <CardDescription>{job.summary}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
