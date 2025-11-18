import { motion } from "framer-motion";
import { Globe2, Lightbulb, Network, Sparkles } from "lucide-react";

import { Section } from "./ui/section";
import { Heading, Body } from "./ui/typography";
import { cn } from "~/lib/utils";

const objectives = [
  {
    title: "Inspire innovation around digital trade",
    description:
      "Foster creative solutions that transform how Africa trades digitally.",
    icon: Sparkles,
  },
  {
    title: "Build cross-border trade solutions",
    description:
      "Develop technology-driven solutions that accelerate intra-African commerce.",
    icon: Globe2,
  },
  {
    title: "Connect Africa's tech ecosystem",
    description:
      "Bring together innovators, developers, policymakers, and entrepreneurs.",
    icon: Network,
  },
  {
    title: "Showcase AI, fintech, and logistics innovations",
    description:
      "Highlight cutting-edge technologies shaping Africa's digital trade future.",
    icon: Lightbulb,
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
            Empowering Africa&apos;s Digital Trade Future
          </Heading>
          <Body size="lg" align="center" className="text-white!">
            The AfCFTA Hackathon 2026 brings together innovators, developers,
            policymakers, and entrepreneurs to build technology-driven trade
            solutions that accelerate Africa&apos;s digital transformation under
            the African Continental Free Trade Area (AfCFTA) framework.
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
