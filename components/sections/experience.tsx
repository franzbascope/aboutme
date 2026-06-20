import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { content } from "@/content/content";

import { Section } from "./section";

const { title, description, jobs } = content.experience;

export function Experience() {
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
