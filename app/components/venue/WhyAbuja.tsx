import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  MapPin,
  Building2,
  TrendingUp,
  Network,
} from "lucide-react";

export function WhyAbuja() {
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
            Why Abuja, Nigeria?
          </Heading>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <Body className="text-center text-black/80 text-lg">
            Abuja stands at the crossroads of policy influence, regional trade
            leadership, and technology innovation. As the headquarters of
            Nigeria&apos;s AfCFTA Coordination Office and several regional
            economic institutions, Abuja provides a fitting environment to host
            this continental collaboration of innovators and decision-makers.
          </Body>

          <Body className="text-center text-black/80 text-lg">
            Nigeria&apos;s leadership in digital payments, fintech innovation,
            and startup ecosystems positions it as a key driver of the AfCFTA
            Digital Trade Protocol, linking local solutions to continental
            opportunities.
          </Body>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
        >
          <Card className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="size-6 text-primary" />
              </div>
              <Body size="sm" weight="semibold" className="text-black">
                Policy Influence
              </Body>
            </div>
          </Card>

          <Card className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="size-6 text-primary" />
              </div>
              <Body size="sm" weight="semibold" className="text-black">
                Trade Leadership
              </Body>
            </div>
          </Card>

          <Card className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <Network className="size-6 text-primary" />
              </div>
              <Body size="sm" weight="semibold" className="text-black">
                Tech Innovation
              </Body>
            </div>
          </Card>

          <Card className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="size-6 text-primary" />
              </div>
              <Body size="sm" weight="semibold" className="text-black">
                Strategic Location
              </Body>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
