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
      "Teams work intensively to prototype solutions aligned with AfCFTA&apos;s Digital Trade goals.",
  },
  {
    icon: Mic,
    title: "Policy & Innovation Forum",
    description:
      "Thought leaders discuss Digital Trade, Technology, and AI – shaping the AfCFTA Whitepaper.",
  },
  {
    icon: Trophy,
    title: "Demo & Awards",
    description:
      "Finalists pitch to investors, governments, and partners. Top solutions receive funding and mentorship.",
  },
];

export function EventFormatBreakdown() {
  return (
    <Section background="muted" spacing="lg" className="bg-black!">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading as="h2" level="h2" className="text-white!">
            Event Format Breakdown
          </Heading>
        </motion.div>

        {/* Three Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {eventFormats.map((format, index) => {
            const IconComponent = format.icon;
            return (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full p-8 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                  <div className="space-y-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                      <IconComponent className="size-8 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <Heading as="h3" level="h4" className="text-white!">
                        {format.title}
                      </Heading>
                      <Body className="text-white/80!">
                        {format.description}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
