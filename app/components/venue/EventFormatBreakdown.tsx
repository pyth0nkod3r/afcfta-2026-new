import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Code,
  Mic,
  Trophy,
} from "lucide-react";

const eventFormats = [
  {
    icon: Code,
    title: "Hackathon Sessions",
    description:
      "Teams work intensively to prototype solutions aligned with AfCFTA\u0026apos;s Digital Trade goals.",
  },
  {
    icon: Mic,
    title: "Policy \u0026 Innovation Forum",
    description:
      "Thought leaders discuss Digital Trade, Technology, and AI – shaping the AfCFTA Whitepaper.",
  },
  {
    icon: Trophy,
    title: "Demo \u0026 Awards",
    description:
      "Finalists pitch to investors, governments, and partners. Top solutions receive funding and mentorship.",
  },
];

export function EventFormatBreakdown() {
  return (
    \u003cSection background="muted" spacing="lg" className="bg-black!"\u003e
      \u003cdiv className="space-y-12 md:space-y-16"\u003e
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        \u003e
          \u003cHeading as="h2" level="h2" className="text-white!"\u003e
            Event Format Breakdown
          \u003c/Heading\u003e
        \u003c/motion.div\u003e

        {/* Three Cards */}
        \u003cdiv className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"\u003e
          {eventFormats.map((format, index) =\u003e {
            const IconComponent = format.icon;
            return (
              \u003cmotion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              \u003e
                \u003cCard className="h-full p-8 bg-white/5 border-white/10 hover:bg-white/10 transition-all"\u003e
                  \u003cdiv className="space-y-6 text-center"\u003e
                    \u003cdiv className="w-16 h-16 mx-auto rounded-xl bg-primary/20 flex items-center justify-center"\u003e
                      \u003cIconComponent className="size-8 text-primary" /\u003e
                    \u003c/div\u003e
                    \u003cdiv className="space-y-3"\u003e
                      \u003cHeading as="h3" level="h4" className="text-white!"\u003e
                        {format.title}
                      \u003c/Heading\u003e
                      \u003cBody className="text-white/80!"\u003e
                        {format.description}
                      \u003c/Body\u003e
                    \u003c/div\u003e
                  \u003c/div\u003e
                \u003c/Card\u003e
              \u003c/motion.div\u003e
            );
          })}
        \u003c/div\u003e
      \u003c/div\u003e
    \u003c/Section\u003e
  );
}
