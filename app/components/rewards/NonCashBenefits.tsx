import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Users,
  FlaskConical,
  Building,
  Globe,
  Handshake,
  FileText,
  TrendingUp,
  Wrench,
} from "lucide-react";

const keyBenefits = [
  {
    icon: Users,
    title: "Mentorship & Advisory",
    description: "Ongoing guidance from trade, tech, and policy experts.",
  },
  {
    icon: FlaskConical,
    title: "AfCFTA Innovation Sandbox Access",
    description: "Opportunity to test and integrate solutions within regional digital frameworks.",
  },
  {
    icon: Building,
    title: "Incubation & Acceleration",
    description: "Entry into a 3-month structured support program for top-performing teams.",
  },
  {
    icon: Globe,
    title: "Continental Exposure",
    description: "Media and conference features across Africa's digital economy platforms.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Matchmaking with governments, investors, and trade institutions.",
  },
  {
    icon: FileText,
    title: "Policy Integration",
    description: "Inclusion in AfCFTA and national digital trade whitepapers or pilots.",
  },
  {
    icon: TrendingUp,
    title: "Investment Readiness",
    description: "Access to investors, venture funds, and grant opportunities.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Integration assistance and access to cloud credits or APIs.",
  },
];

export function NonCashBenefits() {
  return (
    <Section background="muted" spacing="lg" className="bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200">
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
            Beyond Prizes — Empowering Long-Term Impact
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black">
            The AfCFTA Hackathon 2026 provides extensive post-event benefits to 
            ensure innovators continue to grow, deploy, and scale.
          </Body>
        </motion.div>

        {/* Key Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {keyBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow bg-white/60 border-white/40">
                  <div className="space-y-4">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/50 flex items-center justify-center">
                        <IconComponent className="size-8 text-blue-700" />
                      </div>
                      <div>
                        <Heading
                          as="h3"
                          level="h6"
                          className="text-black"
                        >
                          {benefit.title}
                        </Heading>
                      </div>
                      <Body
                        size="sm"
                        className="text-black"
                      >
                        {benefit.description}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-white/60 border border-white/40 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-black"
            >
              Comprehensive Post-Event Support
            </Heading>
            <Body className="max-w-2xl mx-auto text-black">
              Winners gain access to invaluable resources, networks, and opportunities 
              that can accelerate their growth and impact across African markets. The 
              total value of support extends far beyond monetary prizes.
            </Body>
            <Body size="sm" className="text-black">
              Benefits are allocated based on prize category, with customized packages 
              tailored to team needs and solution focus areas.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
