import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Target,
  ArrowRight,
  Award,
  Rocket,
} from "lucide-react";

const deliveryPhases = [
  {
    phase: "Immediate",
    timeline: "Within 48 hours",
    icon: CheckCircle,
    color: "bg-green-500",
    activities: [
      "Winner announcement and recognition",
      "Initial prize disbursement (50% of cash prizes)",
      "Media coverage and press releases",
      "Social media celebration campaigns",
      "Winner certificate and trophy presentation",
    ],
  },
  {
    phase: "Short-term",
    timeline: "1-4 weeks",
    icon: Clock,
    color: "bg-blue-500",
    activities: [
      "Remaining cash prize disbursement",
      "Incubation program enrollment",
      "Mentor assignment and first meetings",
      "Legal documentation and agreements",
      "Technical resource provisioning",
      "Partnership introduction meetings",
    ],
  },
  {
    phase: "Medium-term",
    timeline: "1-6 months",
    icon: Target,
    color: "bg-purple-500",
    activities: [
      "Intensive incubation program participation",
      "Regular mentorship sessions and reviews",
      "Pilot program development and testing",
      "Investment readiness preparation",
      "Market validation and customer acquisition",
      "Product development and iteration",
    ],
  },
  {
    phase: "Long-term",
    timeline: "6-12 months",
    icon: Rocket,
    color: "bg-orange-500",
    activities: [
      "Market launch and scaling support",
      "Investment facilitation and funding rounds",
      "Partnership execution and expansion",
      "Cross-border market entry assistance",
      "Ongoing advisory and strategic support",
      "Alumni network integration and leadership",
    ],
  },
];

const integrationFramework = [
  {
    title: "AfCFTA Integration",
    description: "Direct integration with AfCFTA initiatives and programs",
    components: [
      "AfCFTA Secretariat collaboration",
      "Continental trade protocol alignment",
      "Policy development input opportunities",
      "Trade facilitation pilot programs",
    ],
  },
  {
    title: "Government Partnerships",
    description: "Integration with national and regional government programs",
    components: [
      "National digitization initiatives",
      "Public-private partnership opportunities",
      "Regulatory sandbox participation",
      "Government procurement considerations",
    ],
  },
  {
    title: "Private Sector Integration",
    description: "Commercial partnerships and market integration",
    components: [
      "Corporate pilot program participation",
      "Supply chain integration opportunities",
      "Technology platform partnerships",
      "Revenue-sharing agreements",
    ],
  },
  {
    title: "Academic Collaboration",
    description: "Research and development partnerships with institutions",
    components: [
      "University research collaborations",
      "Student internship programs",
      "Academic publication opportunities",
      "Curriculum development input",
    ],
  },
];

export function DeliveryFramework() {
  return (
    <Section spacing="lg">
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
            Delivery & Integration Framework
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Our structured approach ensures winners receive maximum value from
            their rewards through a carefully orchestrated delivery timeline and
            comprehensive integration with the African trade ecosystem.
          </Body>
        </motion.div>

        {/* Delivery Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Reward Delivery Timeline
            </Heading>
            <Body color="muted" className="mt-2">
              Structured phases ensure optimal value realization and support
            </Body>
          </div>

          <div className="space-y-6">
            {deliveryPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center`}
                        >
                          <IconComponent className="size-6 text-white" />
                        </div>
                        {index < deliveryPhases.length - 1 && (
                          <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 mt-4"></div>
                        )}
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-4 flex-wrap">
                          <Heading
                            as="h4"
                            level="h5"
                            className="text-gray-900 dark:text-gray-50"
                          >
                            {phase.phase} Phase
                          </Heading>
                          <Badge variant="outline">{phase.timeline}</Badge>
                        </div>

                        <div className="grid gap-2 md:grid-cols-2">
                          {phase.activities.map((activity, activityIndex) => (
                            <div
                              key={activityIndex}
                              className="flex items-center gap-2"
                            >
                              <ArrowRight className="size-4 text-primary shrink-0" />
                              <Body
                                size="sm"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {activity}
                              </Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Integration Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Integration Framework
            </Heading>
            <Body color="muted" className="mt-2">
              Multi-stakeholder integration ensures sustainable impact and
              growth
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {integrationFramework.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div>
                      <Heading
                        as="h4"
                        level="h6"
                        className="text-gray-900 dark:text-gray-50"
                      >
                        {framework.title}
                      </Heading>
                      <Body
                        size="sm"
                        className="text-gray-600 dark:text-gray-400 mt-1"
                      >
                        {framework.description}
                      </Body>
                    </div>

                    <div className="space-y-2">
                      <Body
                        size="sm"
                        weight="semibold"
                        transform="uppercase"
                        color="muted"
                      >
                        Key Components:
                      </Body>
                      <ul className="space-y-1">
                        {framework.components.map(
                          (component, componentIndex) => (
                            <li
                              key={componentIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                              <Body
                                size="sm"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {component}
                              </Body>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="text-center">
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Success Metrics & Tracking
              </Heading>
              <Body color="muted" className="mt-2">
                We measure success through comprehensive tracking and regular
                reviews
              </Body>
            </div>

            <div className="grid gap-4 md:grid-cols-4 text-center">
              <div className="space-y-2">
                <Award className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Quarterly Reviews
                </Body>
                <Body size="xs" color="muted">
                  Progress assessments
                </Body>
              </div>
              <div className="space-y-2">
                <Users className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Mentor Feedback
                </Body>
                <Body size="xs" color="muted">
                  Continuous guidance
                </Body>
              </div>
              <div className="space-y-2">
                <Target className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  KPI Tracking
                </Body>
                <Body size="xs" color="muted">
                  Measurable outcomes
                </Body>
              </div>
              <div className="space-y-2">
                <Rocket className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Impact Assessment
                </Body>
                <Body size="xs" color="muted">
                  Long-term evaluation
                </Body>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
