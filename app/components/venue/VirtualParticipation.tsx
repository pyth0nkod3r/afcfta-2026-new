import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Laptop,
  Users,
  Video,
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
    <Section background="muted" spacing="lg" className="bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading as="h2" level="h2" className="text-black">
            Virtual Participation Across Africa
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black/80">
            A Truly Pan-African Digital Event
          </Body>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <Body className="text-center text-black/80">
            To ensure inclusive participation, AfCFTA Hackathon 2026 will run
            concurrently online, connecting innovators across all 55 African
            countries.
          </Body>

          <Body className="text-center text-black/80">
            Registered virtual participants will have access to:
          </Body>
        </motion.div>

        {/* Virtual Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
        >
          {virtualFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white/60 border-white/40 hover:bg-white/70 transition-all">
                  <div className="space-y-4 text-center">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-blue-100 flex items-center justify-center">
                      <IconComponent className="size-6 text-blue-700" />
                    </div>
                    <div className="space-y-2">
                      <Heading as="h4" level="h6" className="text-black">
                        {feature.title}
                      </Heading>
                      <Body size="sm" className="text-black/70">
                        {feature.description}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-white/60 rounded-2xl p-8 max-w-4xl mx-auto border border-white/40"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="size-8 text-blue-700" />
            <Heading as="h3" level="h4" className="text-black">
              Borderless Innovation
            </Heading>
          </div>
          <Body className="text-black/80">
            This hybrid approach ensures that no innovator is left behind —
            reflecting AfCFTA&apos;s commitment to a borderless, digitally
            integrated Africa.
          </Body>
        </motion.div>
      </div>
    </Section>
  );
}
