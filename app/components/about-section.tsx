import { motion } from "framer-motion";
import { Globe2, Network, ShieldCheck, Sparkles } from "lucide-react";

import { Section } from "./ui/section";
import { Heading, Body } from "./ui/typography";
import { cn } from "~/lib/utils";

const objectives = [
  {
    title: "Unlock Digital Trade",
    description:
      "Design products that lower market-entry barriers and streamline AfCFTA-aligned cross-border commerce.",
    icon: Globe2,
  },
  {
    title: "Empower SMEs",
    description:
      "Build tools that give small businesses actionable data, frictionless payments, and scalable logistics.",
    icon: Network,
  },
  {
    title: "Strengthen Trust",
    description:
      "Prototype secure, transparent systems that boost confidence in continental supply chains and governance.",
    icon: ShieldCheck,
  },
  {
    title: "Ignite Innovation",
    description:
      "Showcase frontier ideas that connect Africa’s builders, investors, and policy leaders across all regions.",
    icon: Sparkles,
  },
];

export function AboutSection() {
  return (
    <Section id="about" background="muted" className="bg-black!">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <Heading as="h2" level="h2" align="center" className="text-white!">
            About the AfCFTA Hackathon
          </Heading>
          <Body size="lg" align="center" className="text-white!">
            The AfCFTA Hackathon brings technologists, policymakers, and
            industry partners together to co-create digital infrastructure that
            accelerates intra-African trade and inclusive growth.
          </Body>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {objectives.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                "group flex h-full flex-col gap-4 rounded-2xl border border-border/80 bg-gray-50! p-6 shadow-sm",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
              )}
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="size-5" aria-hidden />
              </div>
              <Heading as="h3" level="h4" className="text-lg text-gray-900!">
                {title}
              </Heading>
              <Body size="sm" className="text-gray-900!">
                {description}
              </Body>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
