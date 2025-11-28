import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Globe,
  Monitor,
  Wifi,
  Users,
  Headphones,
  Camera,
  MessageSquare,
  Clock,
  MapPin,
  Zap,
} from "lucide-react";

const virtualFeatures = [
  {
    title: "HD Live Streaming",
    icon: Camera,
    description:
      "High-definition streaming of all main sessions, presentations, and ceremonies",
    benefits: [
      "4K video quality",
      "Multiple camera angles",
      "Real-time switching",
      "Recorded sessions",
    ],
  },
  {
    title: "Interactive Collaboration",
    icon: Users,
    description:
      "Advanced collaboration tools enabling seamless teamwork across borders",
    benefits: [
      "Virtual whiteboards",
      "Screen sharing",
      "Breakout rooms",
      "File sharing",
    ],
  },
  {
    title: "24/7 Technical Support",
    icon: Headphones,
    description:
      "Round-the-clock technical assistance for virtual participants",
    benefits: [
      "Live chat support",
      "Video troubleshooting",
      "Platform tutorials",
      "Emergency hotline",
    ],
  },
  {
    title: "Real-time Communication",
    icon: MessageSquare,
    description:
      "Multiple communication channels connecting virtual and physical participants",
    benefits: [
      "Live chat rooms",
      "Voice channels",
      "Q&A sessions",
      "Networking lounges",
    ],
  },
  {
    title: "Synchronized Schedule",
    icon: Clock,
    description:
      "Perfectly synchronized activities ensuring equal participation opportunities",
    benefits: [
      "Unified timeline",
      "Time zone support",
      "Calendar integration",
      "Reminder system",
    ],
  },
  {
    title: "Cloud Resources",
    icon: Zap,
    description:
      "Access to cloud computing resources and development platforms",
    benefits: [
      "Free cloud credits",
      "Development tools",
      "API access",
      "Storage solutions",
    ],
  },
];

const participatingCountries = [
  {
    region: "West Africa",
    countries: [
      "Nigeria",
      "Ghana",
      "Senegal",
      "Mali",
      "Burkina Faso",
      "Ivory Coast",
      "Guinea",
      "Sierra Leone",
      "Liberia",
      "Togo",
      "Benin",
      "Niger",
      "Mauritania",
      "Gambia",
      "Guinea-Bissau",
      "Cape Verde",
    ],
  },
  {
    region: "East Africa",
    countries: [
      "Kenya",
      "Ethiopia",
      "Tanzania",
      "Uganda",
      "Rwanda",
      "Burundi",
      "South Sudan",
      "Somalia",
      "Eritrea",
      "Djibouti",
      "Comoros",
      "Seychelles",
      "Mauritius",
      "Madagascar",
    ],
  },
  {
    region: "Central Africa",
    countries: [
      "Democratic Republic of Congo",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Republic of Congo",
      "Gabon",
      "Equatorial Guinea",
      "São Tomé and Príncipe",
    ],
  },
  {
    region: "Southern Africa",
    countries: [
      "South Africa",
      "Zimbabwe",
      "Botswana",
      "Namibia",
      "Zambia",
      "Malawi",
      "Mozambique",
      "Angola",
      "Lesotho",
      "Eswatini",
    ],
  },
  {
    region: "North Africa",
    countries: ["Egypt", "Libya", "Tunisia", "Algeria", "Morocco", "Sudan"],
  },
];

const technicalRequirements = [
  {
    category: "Internet Connection",
    requirement: "Minimum 10 Mbps download, 5 Mbps upload",
    recommended: "25+ Mbps for optimal experience",
    icon: Wifi,
  },
  {
    category: "Hardware",
    requirement: "Computer/laptop with webcam and microphone",
    recommended: "Dedicated workspace with external monitor",
    icon: Monitor,
  },
  {
    category: "Software",
    requirement: "Modern web browser (Chrome, Firefox, Safari, Edge)",
    recommended: "Latest version with hardware acceleration enabled",
    icon: Globe,
  },
  {
    category: "Environment",
    requirement: "Quiet space with good lighting",
    recommended: "Dedicated office/workspace with backup power",
    icon: MapPin,
  },
];

export function VirtualParticipation() {
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
            Virtual Participation Across Africa
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Join from anywhere across the African continent. Our advanced
            virtual platform ensures you have the same opportunities and
            experience as physical participants in Abuja.
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
          <Card className="p-6">
            <div className="space-y-2">
              <Globe className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                54
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                African Countries
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Users className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                4,500+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Virtual Participants
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Clock className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                6
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Time Zones Supported
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <MessageSquare className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                24/7
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Support Available
              </Body>
            </div>
          </Card>
        </motion.div>

        {/* Virtual Platform Features */}
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
              Virtual Platform Features
            </Heading>
            <Body color="muted" className="mt-2">
              Advanced technology ensuring seamless virtual participation
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                          Includes:
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

        {/* Participating Countries */}
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
              Participating Countries
            </Heading>
            <Body color="muted" className="mt-2">
              Virtual participation open to all African Union member states
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {participatingCountries.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <Heading
                        as="h4"
                        level="h5"
                        className="text-gray-900 dark:text-gray-50"
                      >
                        {region.region}
                      </Heading>
                      <Badge variant="secondary" className="mt-1">
                        {region.countries.length} Countries
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {region.countries.map((country, countryIndex) => (
                          <Badge
                            key={countryIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Technical Requirements
            </Heading>
            <Body color="muted" className="mt-2">
              Ensure you have the right setup for optimal virtual participation
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {technicalRequirements.map((req, index) => {
              const IconComponent = req.icon;
              return (
                <motion.div
                  key={req.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="size-5 text-primary" />
                        </div>
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {req.category}
                        </Heading>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <Body
                            size="sm"
                            weight="semibold"
                            color="muted"
                            transform="uppercase"
                          >
                            Minimum:
                          </Body>
                          <Body
                            size="sm"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {req.requirement}
                          </Body>
                        </div>
                        <div>
                          <Body
                            size="sm"
                            weight="semibold"
                            color="muted"
                            transform="uppercase"
                          >
                            Recommended:
                          </Body>
                          <Body
                            size="sm"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {req.recommended}
                          </Body>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Support Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-primary/5 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Virtual Participation Support
            </Heading>
            <Body className="max-w-2xl mx-auto">
              Our dedicated virtual support team will help you set up and
              troubleshoot any technical issues. Pre-event testing sessions will
              be available to ensure you're ready for the hackathon.
            </Body>
            <Body size="sm" color="muted">
              Technical setup guides and platform tutorials will be provided
              upon registration.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
