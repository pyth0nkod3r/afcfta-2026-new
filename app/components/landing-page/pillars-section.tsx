import { motion } from "framer-motion";
import { Brain, Lightbulb, Leaf, Users2 } from "lucide-react";

import { Section } from "../ui/section";
import { Heading, Body } from "../ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const pillars = [
  {
    title: "Innovation for Digital Trade",
    description:
      "Championing innovative solutions that transform how Africa conducts digital commerce.",
    icon: Lightbulb,
  },
  {
    title: "AI for Trade Facilitation",
    description:
      "Leveraging artificial intelligence to streamline and optimize cross-border trade processes.",
    icon: Brain,
  },
  {
    title: "Technology for MSMEs",
    description:
      "Empowering micro, small, and medium enterprises with accessible digital trade tools.",
    icon: Users2,
  },
  {
    title: "Sustainability & Inclusion",
    description:
      "Ensuring equitable growth and sustainable practices across Africa&apos;s digital trade ecosystem.",
    icon: Leaf,
  },
];

export function PillarsSection() {
  return (
    <Section id="pillars" background="muted" className="bg-white text-black">
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4 text-center mx-auto"
        >
          <Heading as="h2" level="h2" align="center" className="text-black">
            Hackathon Pillars
          </Heading>
          <Body size="lg" align="center" className="text-black/80">
            Four strategic pillars guide every track, mentorship initiative, and
            partnership activation throughout the AfCFTA Hackathon.
          </Body>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card className="h-full border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <CardHeader className="flex flex-col gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-lg font-semibold text-white">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <Body size="sm" className="text-white/80">
                    {description}
                  </Body>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
