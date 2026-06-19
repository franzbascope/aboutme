import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "./section";

// Source: docs/resume.pdf (work history only; contact details intentionally omitted).
const experiences = [
  {
    company: "Citibank",
    role: "Applications Development Sr Programmer",
    period: "Jun 2023 – Present",
    summary:
      "Migrated legacy AngularJS projects to modern Angular with TypeScript, and built Spring Boot services using Spring Cloud Gateway with dynamic routes to cut boilerplate dramatically. Led an auth migration to Ping Access (JWKS token validation) impacting 2000+ users, gaining hands-on Openshift and Kubernetes experience.",
  },
  {
    company: "Credible",
    role: "Software Engineer",
    period: "Jan 2022 – May 2023",
    summary:
      "Built a referral program from scratch on Ruby on Rails and React, integrating Extole and Salesforce. Created backend services for the careers page against the Greenhouse API, and stood up a headless CMS for a new blog.",
  },
  {
    company: "Infinity Sales Group",
    role: "Software Engineer",
    period: "Mar 2020 – Dec 2021",
    summary:
      "Built online shopping carts in Angular and REST/SOAP integrations with providers like AT&T, Verizon, and Hughes. Managed AWS (Elastic Beanstalk, RDS, S3) and maintained legacy YII PHP / AngularJS code. (Boca Raton, FL)",
  },
  {
    company: "TOTVS",
    role: "System Analyst",
    period: "Jul 2017 – Dec 2019",
    summary:
      "Developed advanced reports with MSSQL stored procedures, backend services in C# / ASP.NET integrated with the TOTVS ERP, and mobile features in React Native.",
  },
  {
    company: "Consensus",
    role: "QA Engineer",
    period: "Dec 2015 – Jun 2017",
    summary:
      "Coordinated production deployments and built/maintained the regression test suite. (Utah — remote)",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="6+ years across fintech and global finance."
    >
      <div className="grid gap-4">
        {experiences.map((job, i) => (
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
