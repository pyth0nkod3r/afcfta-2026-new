import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  Star,
  Users,
  Utensils,
  Wifi,
  Shield,
  Car,
  Coffee,
  Gift,
  Camera,
  Music,
  Heart,
  Zap,
} from "lucide-react";

const attendeeHighlights = [
  {
    category: "Networking & Community",
    icon: Users,
    highlights: [
      "Connect with 5,000+ innovators from across Africa",
      "Meet government officials and policy makers",
      "Network with investors and venture capitalists",
      "Collaborate with industry leaders and mentors",
      "Join exclusive networking events and mixers",
      "Access to alumni network of past participants",
    ],
  },
  {
    category: "Learning & Development",
    icon: Star,
    highlights: [
      "Attend masterclasses by industry experts",
      "Participate in technical workshops and training",
      "Learn about AfCFTA protocols and opportunities",
      "Access to cutting-edge development tools and platforms",
      "Receive mentorship from successful entrepreneurs",
      "Gain insights into African market dynamics",
    ],
  },
  {
    category: "Cultural Experience",
    icon: Heart,
    highlights: [
      "Experience Nigerian hospitality and culture",
      "Enjoy traditional and international cuisine",
      "Participate in cultural exchange activities",
      "Explore Abuja's landmarks and attractions",
      "Attend cultural performances and entertainment",
      "Connect with diverse African communities",
    ],
  },
  {
    category: "Professional Growth",
    icon: Zap,
    highlights: [
      "Showcase your skills to potential employers",
      "Build your professional portfolio and reputation",
      "Gain recognition in the African tech ecosystem",
      "Access to job opportunities and career advancement",
      "Develop leadership and teamwork skills",
      "Receive certificates and professional credentials",
    ],
  },
];

const experienceFeatures = [
  {
    title: "Premium Hospitality",
    icon: Coffee,
    description:
      "24/7 food service, comfortable lounges, and hospitality support",
    details: [
      "International and local cuisine",
      "Dietary accommodations",
      "Comfortable rest areas",
      "Refreshment stations",
    ],
  },
  {
    title: "Technical Excellence",
    icon: Wifi,
    description: "State-of-the-art technical infrastructure and support",
    details: [
      "High-speed internet (1Gbps)",
      "Power backup systems",
      "Technical help desk",
      "Development tools access",
    ],
  },
  {
    title: "Safety & Security",
    icon: Shield,
    description: "Comprehensive security measures and health protocols",
    details: [
      "24/7 security personnel",
      "Medical support on-site",
      "Emergency response protocols",
      "Health and safety compliance",
    ],
  },
  {
    title: "Transportation",
    icon: Car,
    description: "Convenient transportation and logistics support",
    details: [
      "Airport shuttle services",
      "Local transportation coordination",
      "Parking facilities",
      "Accessibility support",
    ],
  },
  {
    title: "Documentation",
    icon: Camera,
    description: "Professional event documentation and media coverage",
    details: [
      "Professional photography",
      "Video documentation",
      "Live streaming",
      "Social media coverage",
    ],
  },
  {
    title: "Entertainment",
    icon: Music,
    description: "Cultural entertainment and social activities",
    details: [
      "Cultural performances",
      "Live music events",
      "Social mixers",
      "Recreational activities",
    ],
  },
];

const specialPerks = [
  {
    perk: "Welcome Package",
    description: "Branded merchandise, local gifts, and event materials",
    icon: Gift,
  },
  {
    perk: "Certificate of Participation",
    description: "Official recognition of your participation in the hackathon",
    icon: Star,
  },
  {
    perk: "Networking Directory",
    description:
      "Access to contact information of all participants and mentors",
    icon: Users,
  },
  {
    perk: "Post-Event Support",
    description: "Continued access to resources and community after the event",
    icon: Heart,
  },
];

const testimonialPreview = {
  quote:
    "The AfCFTA Hackathon was a transformative experience. The networking opportunities, cultural exchange, and learning environment exceeded all my expectations. I made connections that continue to benefit my career and business today.",
  author: "Amina Kone",
  title: "2024 Participant & Startup Founder",
  country: "Ivory Coast",
};

export function AttendeeHighlights() {
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
            Key Highlights for Attendees
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Beyond the competition, experience unparalleled networking,
            learning, and cultural exchange opportunities that will transform
            your career and expand your horizons.
          </Body>
        </motion.div>

        {/* Main Highlights Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {attendeeHighlights.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
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
                        as="h3"
                        level="h5"
                        className="text-gray-900 dark:text-gray-50"
                      >
                        {category.category}
                      </Heading>
                    </div>

                    <ul className="space-y-2">
                      {category.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                          <Body
                            size="sm"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {highlight}
                          </Body>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Features */}
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
              Premium Experience Features
            </Heading>
            <Body color="muted" className="mt-2">
              World-class amenities and services for all participants
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceFeatures.map((feature, index) => {
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
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="size-5 text-primary" />
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

                      <div className="space-y-1">
                        {feature.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                            <Body
                              size="xs"
                              className="text-gray-700 dark:text-gray-300"
                            >
                              {detail}
                            </Body>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Special Perks */}
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
              Special Perks & Benefits
            </Heading>
            <Body color="muted" className="mt-2">
              Additional benefits that make your participation even more
              valuable
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specialPerks.map((perk, index) => {
              const IconComponent = perk.icon;
              return (
                <motion.div
                  key={perk.perk}
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
                          {perk.perk}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {perk.description}
                        </Body>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-primary text-white rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="space-y-4">
                <Body size="lg" className="italic text-white/95">
                  "{testimonialPreview.quote}"
                </Body>
                <div className="space-y-1">
                  <Body weight="semibold" className="text-white">
                    {testimonialPreview.author}
                  </Body>
                  <Body size="sm" className="text-white/80">
                    {testimonialPreview.title}
                  </Body>
                  <Body size="sm" className="text-white/70">
                    {testimonialPreview.country}
                  </Body>
                </div>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              More Than Just a Competition
            </Heading>
            <Body className="max-w-2xl mx-auto">
              The AfCFTA Hackathon 2026 is a transformative experience that goes
              beyond coding and innovation. It's an opportunity to build lasting
              relationships, gain invaluable insights, and become part of a
              movement that's reshaping Africa's economic future.
            </Body>
            <Body size="sm" color="muted">
              Join us for an unforgettable journey of innovation, collaboration,
              and growth.
            </Body>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
