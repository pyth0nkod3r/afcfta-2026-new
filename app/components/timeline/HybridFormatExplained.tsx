import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  MapPin,
  Wifi,
  Users,
  Globe,
  Building,
  Monitor,
  Headphones,
  Camera,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const formatComparison = {
  physical: {
    title: "Physical Participation",
    location: "Abuja, Nigeria",
    icon: Building,
    color: "bg-blue-500",
    capacity: "500+ teams",
    advantages: [
      "Face-to-face collaboration and networking",
      "Access to premium facilities and resources",
      "Direct mentor interaction and support",
      "Immersive hackathon atmosphere",
      "Real-time technical assistance",
      "Cultural exchange and community building",
    ],
    facilities: [
      "State-of-the-art development labs",
      "High-speed internet and power backup",
      "24/7 food service and rest areas",
      "Dedicated mentor and judge spaces",
      "Presentation theaters and demo areas",
      "Networking lounges and collaboration zones",
    ],
    requirements: [
      "Valid travel documents",
      "Accommodation arrangements",
      "Local transportation planning",
      "Health and safety compliance",
    ],
  },
  virtual: {
    title: "Virtual Participation",
    location: "Across 54 African Countries",
    icon: Monitor,
    color: "bg-green-500",
    capacity: "4,500+ teams",
    advantages: [
      "Participate from anywhere in Africa",
      "No travel or accommodation costs",
      "Flexible working environment",
      "Access to global collaboration tools",
      "Recorded sessions for later review",
      "Broader networking opportunities",
    ],
    facilities: [
      "Dedicated virtual collaboration platform",
      "24/7 technical support chat",
      "Virtual mentor office hours",
      "Online presentation and demo tools",
      "Digital resource libraries",
      "Virtual networking rooms",
    ],
    requirements: [
      "Stable internet connection (minimum 10 Mbps)",
      "Computer/laptop with webcam and microphone",
      "Collaboration software installation",
      "Quiet workspace setup",
    ],
  },
};

const hybridFeatures = [
  {
    title: "Unified Experience",
    icon: Globe,
    description:
      "Seamless integration between physical and virtual participants through shared platforms and synchronized activities.",
    benefits: [
      "Same schedule for all",
      "Equal access to resources",
      "Integrated team formation",
      "Unified judging process",
    ],
  },
  {
    title: "Cross-Border Teams",
    icon: Users,
    description:
      "Teams can include both physical and virtual members, fostering true continental collaboration.",
    benefits: [
      "Mixed team compositions",
      "Cultural diversity",
      "Skill complementarity",
      "Network expansion",
    ],
  },
  {
    title: "Technology Bridge",
    icon: Wifi,
    description:
      "Advanced technology ensures virtual participants have the same quality experience as physical attendees.",
    benefits: [
      "HD video streaming",
      "Real-time collaboration",
      "Cloud-based development",
      "Digital mentorship",
    ],
  },
  {
    title: "Flexible Engagement",
    icon: Headphones,
    description:
      "Multiple ways to engage with content, mentors, and other participants regardless of location.",
    benefits: [
      "Live and recorded sessions",
      "Multiple communication channels",
      "Flexible scheduling",
      "Personalized support",
    ],
  },
];

const participationStats = [
  {
    label: "Physical Hub",
    value: "500+",
    description: "Teams in Abuja, Nigeria",
  },
  {
    label: "Virtual Participants",
    value: "4,500+",
    description: "Teams across Africa",
  },
  {
    label: "Countries Connected",
    value: "54",
    description: "All African Union members",
  },
  {
    label: "Languages Supported",
    value: "6",
    description: "Major African languages",
  },
];

export function HybridFormatExplained() {
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
            Hybrid Format Explained
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Experience the best of both worlds with our innovative hybrid
            format. Whether you join us physically in Abuja or participate
            virtually from anywhere in Africa, you'll have equal opportunities
            to succeed.
          </Body>
        </motion.div>

        {/* Participation Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-4 text-center"
        >
          {participationStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="space-y-2">
                  <Heading as="h3" level="h3" color="primary">
                    {stat.value}
                  </Heading>
                  <Body
                    weight="semibold"
                    className="text-gray-900 dark:text-gray-50"
                  >
                    {stat.label}
                  </Body>
                  <Body size="sm" color="muted">
                    {stat.description}
                  </Body>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Format Comparison */}
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
              Choose Your Participation Mode
            </Heading>
            <Body color="muted" className="mt-2">
              Both formats offer complete hackathon experiences with unique
              advantages
            </Body>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {Object.entries(formatComparison).map(([key, format], index) => {
              const IconComponent = format.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="text-center space-y-3">
                        <div
                          className={`w-16 h-16 mx-auto rounded-full ${format.color} flex items-center justify-center`}
                        >
                          <IconComponent className="size-8 text-white" />
                        </div>
                        <div>
                          <Heading
                            as="h4"
                            level="h4"
                            className="text-gray-900 dark:text-gray-50"
                          >
                            {format.title}
                          </Heading>
                          <Body
                            size="sm"
                            color="muted"
                            className="flex items-center justify-center gap-1 mt-1"
                          >
                            <MapPin className="size-4" />
                            {format.location}
                          </Body>
                          <Badge variant="secondary" className="mt-2">
                            {format.capacity}
                          </Badge>
                        </div>
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
                          {format.advantages.map(
                            (advantage, advantageIndex) => (
                              <li
                                key={advantageIndex}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="size-4 text-green-600 mt-0.5 shrink-0" />
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

                      {/* Facilities */}
                      <div className="space-y-3">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Available Facilities:
                        </Body>
                        <ul className="space-y-1">
                          {format.facilities.map((facility, facilityIndex) => (
                            <li
                              key={facilityIndex}
                              className="flex items-start gap-2"
                            >
                              <ArrowRight className="size-3 text-primary mt-1 shrink-0" />
                              <Body
                                size="sm"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {facility}
                              </Body>
                            </li>
                          ))}
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
                        <ul className="space-y-1">
                          {format.requirements.map(
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
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Hybrid Features */}
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
              Advanced technology ensures seamless collaboration across formats
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {hybridFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="size-6 text-primary" />
                        </div>
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {feature.title}
                        </Heading>
                      </div>

                      <Body
                        size="sm"
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {feature.description}
                      </Body>

                      <div className="space-y-2">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Benefits:
                        </Body>
                        <div className="grid grid-cols-2 gap-1">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                              <Body
                                size="xs"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {benefit}
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

        {/* Technology Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-primary/5 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Camera className="size-6 text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Technology Requirements
              </Heading>
            </div>
            <Body className="max-w-2xl mx-auto">
              To ensure the best hybrid experience, all participants (physical
              and virtual) should have access to reliable internet,
              collaboration tools, and communication platforms. Technical
              support will be available 24/7 during the hackathon.
            </Body>
            <Body size="sm" color="muted">
              Detailed technical requirements and setup guides will be provided
              upon registration.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
