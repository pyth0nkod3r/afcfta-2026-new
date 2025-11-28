import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  MapPin,
  Building,
  Wifi,
  Car,
  Utensils,
  Shield,
  Zap,
  Users,
  Monitor,
  Coffee,
} from "lucide-react";

const venueHighlights = [
  "Nigeria's capital and political center",
  "Modern infrastructure and facilities",
  "Central location in West Africa",
  "Excellent connectivity and transportation",
  "Rich cultural heritage and diversity",
  "Growing tech and innovation ecosystem",
];

const tentativeVenues = [
  {
    name: "Abuja International Conference Centre",
    type: "Primary Venue Option",
    capacity: "2,000+ participants",
    features: [
      "State-of-the-art auditoriums and meeting rooms",
      "High-speed internet and technical infrastructure",
      "Ample parking and transportation access",
      "On-site catering and hospitality services",
      "Security and accessibility compliance",
      "Audio-visual equipment and streaming capabilities",
    ],
    advantages: [
      "Central Abuja location",
      "Government event experience",
      "International standard facilities",
      "Hybrid event capabilities",
    ],
  },
  {
    name: "University of Abuja Innovation Hub",
    type: "Alternative Venue Option",
    capacity: "1,500+ participants",
    features: [
      "Modern innovation and technology facilities",
      "Collaborative workspaces and labs",
      "Academic partnership opportunities",
      "Student accommodation nearby",
      "Research and development resources",
      "Startup incubation facilities",
    ],
    advantages: [
      "Academic environment",
      "Innovation-focused facilities",
      "Student engagement opportunities",
      "Research collaboration potential",
    ],
  },
  {
    name: "Transcorp Hilton Abuja",
    type: "Premium Venue Option",
    capacity: "1,000+ participants",
    features: [
      "Luxury conference and event facilities",
      "Premium accommodation options",
      "World-class hospitality services",
      "Business center and meeting rooms",
      "Fine dining and catering options",
      "Concierge and guest services",
    ],
    advantages: [
      "International hotel standards",
      "Premium participant experience",
      "Central business district location",
      "Comprehensive event services",
    ],
  },
];

const venueFeatures = [
  {
    title: "High-Speed Connectivity",
    icon: Wifi,
    description:
      "Dedicated fiber internet with backup connections ensuring 99.9% uptime",
    specs: "1Gbps primary, 500Mbps backup",
  },
  {
    title: "Power & Infrastructure",
    icon: Zap,
    description: "Uninterrupted power supply with generators and UPS systems",
    specs: "24/7 power guarantee",
  },
  {
    title: "Collaboration Spaces",
    icon: Users,
    description:
      "Flexible workspaces designed for team collaboration and innovation",
    specs: "50+ team workstations",
  },
  {
    title: "Presentation Facilities",
    icon: Monitor,
    description:
      "Multiple presentation theaters with live streaming capabilities",
    specs: "5 theaters, 4K streaming",
  },
  {
    title: "Catering Services",
    icon: Utensils,
    description:
      "24/7 food service with local and international cuisine options",
    specs: "Halal, vegetarian options",
  },
  {
    title: "Security & Safety",
    icon: Shield,
    description:
      "Comprehensive security measures and emergency response protocols",
    specs: "24/7 security, medical support",
  },
  {
    title: "Transportation",
    icon: Car,
    description:
      "Shuttle services and transportation coordination for participants",
    specs: "Airport transfers included",
  },
  {
    title: "Hospitality Lounge",
    icon: Coffee,
    description:
      "Dedicated spaces for networking, relaxation, and informal meetings",
    specs: "Multiple lounge areas",
  },
];

export function VenueSection() {
  return (
    <Section id="venue-details" spacing="lg">
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
            Venue: Abuja, Nigeria
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Experience the hackathon in Nigeria's capital city, a modern
            metropolis that serves as the political and administrative heart of
            Africa's most populous nation.
          </Body>
        </motion.div>

        {/* Abuja Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary/5 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="size-6 text-primary" />
                <Heading
                  as="h3"
                  level="h3"
                  className="text-gray-900 dark:text-gray-50"
                >
                  Why Abuja?
                </Heading>
              </div>
              <Body color="muted">
                Strategic advantages of hosting in Nigeria's capital
              </Body>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {venueHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                  <Body size="sm" className="text-gray-700 dark:text-gray-300">
                    {highlight}
                  </Body>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tentative Venue Options */}
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
              Tentative Venue Options
            </Heading>
            <Body color="muted" className="mt-2">
              We're evaluating multiple world-class venues to ensure the best
              experience
            </Body>
          </div>

          <div className="space-y-6">
            {tentativeVenues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Heading
                          as="h4"
                          level="h5"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {venue.name}
                        </Heading>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          <Badge variant="outline">{venue.type}</Badge>
                          <Badge variant="secondary">{venue.capacity}</Badge>
                        </div>
                      </div>
                      <Building className="size-8 text-primary shrink-0" />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Key Features:
                        </Body>
                        <ul className="space-y-1">
                          {venue.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
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

                      <div className="space-y-2">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Key Advantages:
                        </Body>
                        <ul className="space-y-1">
                          {venue.advantages.map((advantage, advantageIndex) => (
                            <li
                              key={advantageIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0"></div>
                              <Body
                                size="sm"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {advantage}
                              </Body>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Venue Features & Amenities */}
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
              Venue Features & Amenities
            </Heading>
            <Body color="muted" className="mt-2">
              World-class facilities designed for optimal hackathon experience
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {venueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow text-center">
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
                          {feature.title}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {feature.description}
                        </Body>
                        <Badge variant="outline" className="text-xs">
                          {feature.specs}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Location & Accessibility
              </Heading>
              <Body color="muted" className="mt-2">
                Interactive map and transportation information
              </Body>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="size-12 mx-auto text-gray-400" />
                <Body color="muted">Interactive Map Coming Soon</Body>
                <Body size="sm" color="muted">
                  Detailed venue location and transportation guide
                </Body>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 text-center">
              <div className="space-y-1">
                <Body size="sm" weight="semibold">
                  Distance from Airport
                </Body>
                <Body size="sm" color="muted">
                  45 minutes by car
                </Body>
              </div>
              <div className="space-y-1">
                <Body size="sm" weight="semibold">
                  Public Transportation
                </Body>
                <Body size="sm" color="muted">
                  BRT and taxi services
                </Body>
              </div>
              <div className="space-y-1">
                <Body size="sm" weight="semibold">
                  Accommodation
                </Body>
                <Body size="sm" color="muted">
                  50+ hotels within 10km
                </Body>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
