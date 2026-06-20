import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "./section";

const education = [
  {
    school: "University of Tampa",
    credential: "MBA",
    period: "In progress",
    note: "Just getting started — pairing the engineering background with the business side.",
  },
  {
    school: "University of South Florida",
    credential: "M.S. Computer Engineering (focus on AI)",
    period: "2025",
    note: "Earned my Master's in Computer Engineering while working full-time, with a focus on AI — NLP and deep learning.",
  },
  {
    school: "Universidad NUR, Bolivia",
    credential: "B.S. Computer Sciences",
    period: "2020",
    note: "",
  },
  {
    school: "Universidad NUR, Bolivia",
    credential: "Certificate — Microservices",
    period: "2022",
    note: "",
  },
];

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        {education.map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span>
                  {item.credential}{" "}
                  <span className="text-muted-foreground">
                    @ {item.school}
                  </span>
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </CardTitle>
              {item.note ? (
                <CardDescription>{item.note}</CardDescription>
              ) : null}
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
