import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Building,
  FileCheck,
  Rocket,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const frameworkStages = [
  {
    stage: "Incubation & Capacity Development",
    description: "Top teams onboarded into the AfCFTA Innovation & Policy Lab.",
    leadPartners: "AfCFTA Secretariat, AfCFTA Nigeria Coordination Office",
    icon: Building,
    color: "bg-blue-500",
  },
  {
    stage: "Policy Alignment & Technical Review",
    description: "Ensuring innovations meet continental regulatory standards.",
    leadPartners: "NITDA, Ministry of Industry, Trade & Investment",
    icon: FileCheck,
    color: "bg-purple-500",
  },
  {
    stage: "Pilot Implementation",
    description: "Testing solutions across select African markets and corridors.",
    leadPartners: "Regional Economic Communities (ECOWAS, COMESA, etc.)",
    icon: Rocket,
    color: "bg-green-500",
  },
  {
    stage: "Integration & Scale-Up",
    description: "Integrating viable innovations into AfCFTA Digital Trade systems.",
    leadPartners: "PAPSS, Afreximbank, TradeTech Partners",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
  {
    stage: "Whitepaper & Research Dissemination",
    description: "Featuring key insights in the AfCFTA Nigeria Digital Trade & AI Whitepaper 2026.",
    leadPartners: "AfCFTA Secretariat, Think Tanks, Academia",
    icon: BookOpen,
    color: "bg-indigo-500",
  },
];

export function DeliveryFramework() {
  return (
    <Section spacing="lg" background="muted" className="bg-white text-black">
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
            className="text-gray-900 dark:text-gray-50"
          >
            Turning Innovation into Action
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Winning solutions will be integrated into the AfCFTA Digital Trade 
            Innovation Ecosystem, linking innovators to implementation pathways 
            through partnerships, pilots, and incubation.
          </Body>
        </motion.div>

        {/* Framework Stages */}
        <div className="space-y-6">
          {frameworkStages.map((stage, index) => {
            const IconComponent = stage.icon;
            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center`}
                      >
                        <IconComponent className="size-6 text-white" />
                      </div>
                      {index < frameworkStages.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 mt-4"></div>
                      )}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          Stage {index + 1}
                        </Badge>
                        <Heading
                          as="h3"
                          level="h5"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {stage.stage}
                        </Heading>
                      </div>

                      <Body
                        size="sm"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {stage.description}
                      </Body>

                      <div>
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Lead Partner(s):
                        </Body>
                        <Body
                          size="sm"
                          className="text-primary font-medium"
                        >
                          {stage.leadPartners}
                        </Body>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Outcome Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-primary/5 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Outcome: Sustainable, Scalable Solutions
            </Heading>
            <Body className="max-w-2xl mx-auto">
              Our framework ensures the development of sustainable, scalable 
              solutions that strengthen Africa&apos;s digital trade ecosystem and 
              empower local innovators to drive the AfCFTA&apos;s implementation.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
