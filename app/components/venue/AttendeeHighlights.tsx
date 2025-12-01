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
    <Section spacing="lg" className="bg-white text-black">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading as="h2" level="h2" className="text-black">
            Key Highlights for Attendees
          </Heading>
        </motion.div>

        {/* Highlights List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-black/5"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconComponent className="size-6 text-primary" />
                </div>
                <Body className="text-black/80 pt-2">{highlight.text}</Body>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
