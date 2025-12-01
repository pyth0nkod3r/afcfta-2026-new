import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import {
  Users,
  FileText,
  GraduationCap,
  Award,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    text: "Network with continental policymakers and investors",
  },
  {
    icon: FileText,
    text: "Get direct insights on AfCFTA Digital Trade Protocol implementation",
  },
  {
    icon: GraduationCap,
    text: "Access world-class mentors and capacity-building sessions",
  },
  {
    icon: Award,
    text: "Compete for ₦60 million in prizes and growth opportunities",
  },
  {
    icon: Rocket,
    text: "Attend the launch of the Nigeria AfCFTA Whitepaper on Digital Trade and AI",
  },
];

export function AttendeeHighlights() {
  return (
    \u003cSection spacing="lg" className="bg-white text-black"\u003e
      \u003cdiv className="space-y-12 md:space-y-16"\u003e
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        \u003e
          \u003cHeading as="h2" level="h2" className="text-black"\u003e
            Key Highlights for Attendees
          \u003c/Heading\u003e
        \u003c/motion.div\u003e

        {/* Highlights List */}
        \u003cdiv className="max-w-4xl mx-auto space-y-4"\u003e
          {highlights.map((highlight, index) =\u003e {
            const IconComponent = highlight.icon;
            return (
              \u003cmotion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-black/5"
              \u003e
                \u003cdiv className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center"\u003e
                  \u003cIconComponent className="size-6 text-primary" /\u003e
                \u003c/div\u003e
                \u003cBody className="text-black/80 pt-2"\u003e{highlight.text}\u003c/Body\u003e
              \u003c/motion.div\u003e
            );
          })}
        \u003c/div\u003e
      \u003c/div\u003e
    \u003c/Section\u003e
  );
}
