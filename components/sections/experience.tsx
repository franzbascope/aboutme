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
      "Full-stack work across modern Angular and TypeScript on the front end and Java / Spring Boot on the back end, including Spring Cloud Gateway. Hands-on with JWKS-based authentication, and deploying and operating services on OpenShift and Kubernetes in a large-scale enterprise environment.",
  },
  {
    company: "Credible",
    role: "Software Engineer",
    period: "Jan 2022 – May 2023",
    summary:
      "Full-stack development with Ruby on Rails and React, building backend services and third-party API integrations, plus front-end features and content tooling.",
  },
  {
    company: "Infinity Sales Group",
    role: "Software Engineer",
    period: "Mar 2020 – Dec 2021",
    summary:
      "Front-end development in Angular and REST/SOAP API integrations, with hands-on AWS experience (Elastic Beanstalk, RDS, S3) and maintenance of legacy PHP and AngularJS code. (Boca Raton, FL)",
  },
  {
    company: "TOTVS",
    role: "System Analyst",
    period: "Jul 2017 – Dec 2019",
    summary:
      "Backend development in C# / ASP.NET with ERP integration, advanced MSSQL stored procedures, and mobile development in React Native.",
  },
  {
    company: "Consensus",
    role: "QA Engineer",
    period: "Dec 2015 – Jun 2017",
    summary:
      "Quality engineering — building and maintaining automated regression tests and coordinating production deployments. (Utah — remote)",
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
