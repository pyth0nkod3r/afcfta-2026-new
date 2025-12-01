import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Laptop,
  Users,
  Video,
  MessageSquare,
  Cloud,
  Globe,
} from "lucide-react";

const virtualFeatures = [
  {
    icon: Laptop,
    title: "Virtual Hackathon Workspace",
    description: "A dedicated virtual hackathon workspace and collaboration tools",
  },
  {
    icon: Users,
    title: "Real-time Mentorship",
    description: "Real-time mentorship sessions and technical clinics",
  },
  {
    icon: Video,
    title: "Live Broadcasts",
    description: "Live broadcasts of keynote sessions and panel discussions",
  },
  {
    icon: Cloud,
    title: "Submission Platform",
    description: "Online submission and judging platforms",
  },
];

export function VirtualParticipation() {
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
            Virtual Participation Across Africa
          \u003c/Heading\u003e
          \u003cBody size="lg" className="max-w-3xl mx-auto text-white/80!"\u003e
            A Truly Pan-African Digital Event
          \u003c/Body\u003e
        \u003c/motion.div\u003e

        {/* Description */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6"
        \u003e
          \u003cBody className="text-center text-white/80!"\u003e
            To ensure inclusive participation, AfCFTA Hackathon 2026 will run
            concurrently online, connecting innovators across all 55 African
            countries.
          \u003c/Body\u003e

          \u003cBody className="text-center text-white/80!"\u003e
            Registered virtual participants will have access to:
          \u003c/Body\u003e
        \u003c/motion.div\u003e

        {/* Virtual Features */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
        \u003e
          {virtualFeatures.map((feature, index) =\u003e {
            const IconComponent = feature.icon;
            return (
              \u003cmotion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              \u003e
                \u003cCard className="h-full p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all"\u003e
                  \u003cdiv className="space-y-4 text-center"\u003e
                    \u003cdiv className="w-12 h-12 mx-auto rounded-lg bg-primary/20 flex items-center justify-center"\u003e
                      \u003cIconComponent className="size-6 text-primary" /\u003e
                    \u003c/div\u003e
                    \u003cdiv className="space-y-2"\u003e
                      \u003cHeading as="h4" level="h6" className="text-white!"\u003e
                        {feature.title}
                      \u003c/Heading\u003e
                      \u003cBody size="sm" className="text-white/70!"\u003e
                        {feature.description}
                      \u003c/Body\u003e
                    \u003c/div\u003e
                  \u003c/div\u003e
                \u003c/Card\u003e
              \u003c/motion.div\u003e
            );
          })}
        \u003c/motion.div\u003e

        {/* Closing Statement */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-white/5 rounded-2xl p-8 max-w-4xl mx-auto border border-white/10"
        \u003e
          \u003cdiv className="flex items-center justify-center gap-3 mb-4"\u003e
            \u003cGlobe className="size-8 text-primary" /\u003e
            \u003cHeading as="h3" level="h4" className="text-white!"\u003e
              Borderless Innovation
            \u003c/Heading\u003e
          \u003c/div\u003e
          \u003cBody className="text-white/80!"\u003e
            This hybrid approach ensures that no innovator is left behind —
            reflecting AfCFTA\u0026apos;s commitment to a borderless, digitally
            integrated Africa.
          \u003c/Body\u003e
        \u003c/motion.div\u003e
      \u003c/div\u003e
    \u003c/Section\u003e
  );
}
