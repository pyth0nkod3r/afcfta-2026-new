import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Globe,
  Brain,
  Wallet,
  ShoppingCart,
  Truck,
  FileCheck,
  Leaf,
  IdCard,
  Wheat,
  GraduationCap,
} from "lucide-react";

const thematicAwards = [
  {
    title: "Best Solution for Digital Trade Facilitation",
    icon: Globe,
    focus: "Trade documentation, border automation, and customs interoperability.",
    recognition: "Certificate + Pilot Integration Support",
  },
  {
    title: "AI for Trade Intelligence Award",
    icon: Brain,
    focus: "Smart analytics and AI-driven trade data insights.",
    recognition: "Thematic Trophy + Technical Partnership",
  },
  {
    title: "FinTech & MSME Finance Award",
    icon: Wallet,
    focus: "Financial inclusion, cross-border payments, digital credit access.",
    recognition: "Recognition + FinTech Sandbox Access",
  },
  {
    title: "E-Commerce & MSME Empowerment Award",
    icon: ShoppingCart,
    focus: "Digital marketplaces, inclusive commerce tools.",
    recognition: "Digital Promotion & Market Access",
  },
  {
    title: "Smart Logistics & Supply Chain Award",
    icon: Truck,
    focus: "Cross-border goods movement and smart routing.",
    recognition: "Partnership with Logistics Hubs",
  },
  {
    title: "Compliance & Documentation Award",
    icon: FileCheck,
    focus: "Simplifying customs, certification, and trade compliance.",
    recognition: "Pilot with Regulatory Partners",
  },
  {
    title: "Sustainability & Inclusion Award",
    icon: Leaf,
    focus: "Gender-inclusive and green trade innovation.",
    recognition: "Special Feature in AfCFTA Whitepaper",
  },
  {
    title: "Digital Identity & Verification Award",
    icon: IdCard,
    focus: "Identity-driven trade trust and traceability.",
    recognition: "Collaboration with ID4Africa partners",
  },
  {
    title: "Agriculture & Trade Value Chain Award",
    icon: Wheat,
    focus: "Digitizing agricultural exports and cooperatives.",
    recognition: "Pilot with Agritech Networks",
  },
  {
    title: "Knowledge & Learning Innovation Award",
    icon: GraduationCap,
    focus: "Building digital trade literacy and learning systems.",
    recognition: "Partnership with Training Institutions",
  },
];

export function ThematicAwards() {
  return (
    <Section spacing="lg" background="muted" className="bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 text-black">
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
            Recognizing Excellence Across Innovation Themes
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black">
            These awards highlight outstanding solutions across key challenge tracks 
            and strategic focus areas within the AfCFTA Digital Trade ecosystem.
          </Body>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {thematicAwards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-all group bg-white/60 border-white/40">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors shrink-0">
                        <IconComponent className="size-6 text-blue-700" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <Heading
                          as="h3"
                          level="h6"
                          className="text-black"
                        >
                          {award.title}
                        </Heading>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="default"
                          className="text-black"
                        >
                          Focus Area:
                        </Body>
                        <Body
                          size="sm"
                          className="text-black mt-1"
                        >
                          {award.focus}
                        </Body>
                      </div>

                      <div>
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="default"
                          className="text-black"
                        >
                          Recognition:
                        </Body>
                        <Body
                          size="sm"
                          className="text-blue-700 font-medium mt-1"
                        >
                          {award.recognition}
                        </Body>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Awards Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-white/60 border border-white/40 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-black"
            >
              Multiple Recognition Opportunities
            </Heading>
            <Body className="max-w-2xl mx-auto text-black/90">
              Teams can win multiple thematic awards in addition to main prize
              categories. Outstanding solutions across different themes receive
              recognition, partnerships, and integration support to maximize impact.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
