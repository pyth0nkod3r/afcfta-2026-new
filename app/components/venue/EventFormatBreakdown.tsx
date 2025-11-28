import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Building,
  Monitor,
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Wifi,
  MapPin,
} from "lucide-react";

const formatComponents = [
  {
    title: "Physical Hub Experience",
    subtitle: "Abuja, Nigeria",
    icon: Building,
    color: "bg-blue-500",
    capacity: "500+ teams",
    description:
      "Immersive in-person experience with premium facilities and direct networking opportunities",
    features: [
      "Face-to-face collaboration and networking",
      "Access to premium development facilities",
      "Direct mentor and judge interactions",
      "Real-time technical support and assistance",
      "Cultural exchange and community building",
      "Exclusive physical event activities",
    ],
    advantages: [
      "Immediate problem-solving and support",
      "Enhanced team bonding and collaboration",
      "Direct access to government officials and partners",
      "Immersive hackathon atmosphere and energy",
    ],
    requirements: [
      "Valid travel documents and visa (if required)",
      "Accommodation arrangements in Abuja",
      "Local transportation planning",
      "Health and safety compliance",
    ],
  },
  {
    title: "Virtual Platform Experience",
    subtitle: "Across 54 African Countries",
    icon: Monitor,
    color: "bg-green-500",
    capacity: "4,500+ teams",
    description:
      "Comprehensive virtual experience with advanced collaboration tools and global connectivity",
    features: [
      "HD live streaming of all main sessions",
      "Advanced collaboration and development tools",
      "Virtual networking and breakout rooms",
      "24/7 technical support and assistance",
      "Recorded sessions for flexible access",
      "Cross-border team formation opportunities",
    ],
    advantages: [
      "No travel or accommodation costs",
      "Participate from familiar environment",
      "Broader networking across the continent",
      "Flexible scheduling and time zone support",
    ],
    requirements: [
      "Stable internet connection (minimum 10 Mbps)",
      "Computer/laptop with webcam and microphone",
      "Quiet workspace with good lighting",
      "Collaboration software installation",
    ],
  },
  {
    title: "Hybrid Integration",
    subtitle: "Seamless Connection",
    icon: Users,
    color: "bg-purple-500",
    capacity: "5,000+ total",
    description:
      "Unified experience connecting physical and virtual participants through advanced technology",
    features: [
      "Real-time synchronization of all activities",
      "Mixed physical-virtual team formations",
      "Unified communication and collaboration platforms",
      "Equal access to mentors, judges, and resources",
      "Integrated presentation and judging processes",
      "Shared networking and social activities",
    ],
    advantages: [
      "Best of both physical and virtual experiences",
      "Continental diversity in team compositions",
      "Equal opportunities regardless of location",
      "Innovative collaboration across borders",
    ],
    requirements: [
      "Platform registration and setup",
      "Technology compatibility testing",
      "Time zone coordination and planning",
      "Communication protocol adherence",
    ],
  },
];

const integrationFeatures = [
  {
    feature: "Unified Schedule",
    description: "All participants follow the same timeline and activities",
    icon: CheckCircle,
  },
  {
    feature: "Cross-Format Teams",
    description: "Teams can include both physical and virtual members",
    icon: Users,
  },
  {
    feature: "Equal Resources",
    description:
      "Same access to mentors, tools, and support regardless of format",
    icon: Globe,
  },
  {
    feature: "Synchronized Judging",
    description: "Unified evaluation process for all participants",
    icon: ArrowRight,
  },
];

export function EventFormatBreakdown() {
  return (
    <Section background="muted" spacing="lg">
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
            Event Format Breakdown
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Choose your participation mode or understand how our innovative
            hybrid format creates equal opportunities for all participants
            across Africa.
          </Body>
        </motion.div>

        {/* Format Components */}
        <div className="space-y-8">
          {formatComponents.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    {/* Component Header */}
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-full ${component.color} flex items-center justify-center shrink-0`}
                      >
                        <IconComponent className="size-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <Heading
                              as="h3"
                              level="h4"
                              className="text-gray-900 dark:text-gray-50"
                            >
                              {component.title}
                            </Heading>
                            <Body
                              size="sm"
                              color="muted"
                              className="flex items-center gap-1"
                            >
                              <MapPin className="size-4" />
                              {component.subtitle}
                            </Body>
                          </div>
                          <Badge variant="secondary">
                            {component.capacity}
                          </Badge>
                        </div>
                        <Body className="text-gray-600 dark:text-gray-400">
                          {component.description}
                        </Body>
                      </div>
                    </div>

                    {/* Component Details */}
                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* Features */}
                      <div className="space-y-3">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Key Features:
                        </Body>
                        <ul className="space-y-2">
                          {component.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                              <Body
                                size="sm"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {feature}
                              </Body>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Advantages */}
                      <div className="space-y-3">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Key Advantages:
                        </Body>
                        <ul className="space-y-2">
                          {component.advantages.map(
                            (advantage, advantageIndex) => (
                              <li
                                key={advantageIndex}
                                className="flex items-start gap-2"
                              >
                                <ArrowRight className="size-4 text-primary mt-0.5 shrink-0" />
                                <Body
                                  size="sm"
                                  className="text-gray-700 dark:text-gray-300"
                                >
                                  {advantage}
                                </Body>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="space-y-3">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Requirements:
                        </Body>
                        <ul className="space-y-2">
                          {component.requirements.map(
                            (requirement, requirementIndex) => (
                              <li
                                key={requirementIndex}
                                className="flex items-start gap-2"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                                <Body
                                  size="sm"
                                  className="text-gray-700 dark:text-gray-300"
                                >
                                  {requirement}
                                </Body>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Hybrid Integration Features
            </Heading>
            <Body color="muted" className="mt-2">
              How we ensure seamless collaboration between physical and virtual
              participants
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {integrationFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {feature.feature}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {feature.description}
                        </Body>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Format Selection Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-primary/5 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="text-center">
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Choosing Your Format
              </Heading>
              <Body color="muted" className="mt-2">
                Consider these factors when deciding between physical and
                virtual participation
              </Body>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="size-5 text-primary" />
                    <Heading
                      as="h4"
                      level="h6"
                      className="text-gray-900 dark:text-gray-50"
                    >
                      Choose Physical If:
                    </Heading>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">You can travel to Abuja, Nigeria</Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">
                        You prefer face-to-face collaboration
                      </Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">
                        You want direct access to government officials
                      </Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">
                        You value immersive hackathon atmosphere
                      </Body>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Monitor className="size-5 text-primary" />
                    <Heading
                      as="h4"
                      level="h6"
                      className="text-gray-900 dark:text-gray-50"
                    >
                      Choose Virtual If:
                    </Heading>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">Travel to Abuja is not feasible</Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">
                        You prefer working from familiar environment
                      </Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">
                        You want to minimize costs and logistics
                      </Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
                      <Body size="sm">
                        You have reliable internet and workspace
                      </Body>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
