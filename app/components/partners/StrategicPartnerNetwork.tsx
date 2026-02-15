import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Eye,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title: "Maximum Visibility",
    icon: Eye,
    description:
      "Continental and regional exposure for your brand across all hackathon platforms, events, and media channels.",
  },
  {
    title: "Co-Creation Opportunities",
    icon: Lightbulb,
    description:
      "Collaborate directly with innovators on solutions aligned with the AfCFTA Digital Trade Protocol.",
  },
  {
    title: "Impact & Legacy",
    icon: TrendingUp,
    description:
      "Contribute to sustainable innovation, inclusive trade, and MSME empowerment across Africa.",
  },
];

export function StrategicPartnerNetwork() {
  return (
    <Section spacing="lg" className="bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 text-black">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-black"
          >
            🌐 Connecting Africa&apos;s Ecosystem for Maximum Impact
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black/80">
            The AfCFTA Hackathon Partner Network brings together strategic partners across finance, technology, telecommunications, policy, and innovation ecosystems, providing:
          </Body>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-all group bg-white/60 border-white/40">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="size-6 text-blue-700" />
                      </div>
                      <Heading
                        as="h3"
                        level="h5"
                        className="text-black"
                      >
                        {benefit.title}
                      </Heading>
                    </div>

                    <Body
                      size="sm"
                      className="text-black/80"
                    >
                      {benefit.description}
                    </Body>
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
