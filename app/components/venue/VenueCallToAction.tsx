import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Download,
  Mail,
  ExternalLink,
  Plane,
  Building,
  Globe,
} from "lucide-react";

const actionItems = [
  {
    title: "Register Your Participation",
    description:
      "Secure your spot and choose between physical or virtual participation",
    icon: Users,
    action: "Register Now",
    href: "/register",
    variant: "primary" as const,
    urgency: "Early registration opens January 15, 2026",
  },
  {
    title: "Plan Your Travel",
    description:
      "Get information about travel, accommodation, and logistics for Abuja",
    icon: Plane,
    action: "Travel Guide",
    href: "/assets/travel-guide.pdf",
    variant: "outline" as const,
    urgency: "Book early for better rates and availability",
  },
  {
    title: "Explore Virtual Options",
    description: "Learn about virtual participation and technical requirements",
    icon: Globe,
    action: "Virtual Guide",
    href: "/assets/virtual-participation-guide.pdf",
    variant: "outline" as const,
    urgency: "Test your setup before the event",
  },
];

const quickFacts = [
  {
    label: "Event Dates",
    value: "May 10-12, 2026",
    description: "72 hours of innovation",
  },
  {
    label: "Physical Location",
    value: "Abuja, Nigeria",
    description: "Nigeria's capital city",
  },
  {
    label: "Virtual Access",
    value: "54 Countries",
    description: "All African Union members",
  },
  {
    label: "Expected Participants",
    value: "5,000+",
    description: "Innovators across Africa",
  },
];

const contactInfo = [
  {
    type: "Venue Inquiries",
    contact: "venue@afcfta-hackathon.org",
    description: "Questions about physical venue and facilities",
  },
  {
    type: "Travel Support",
    contact: "travel@afcfta-hackathon.org",
    description: "Assistance with travel planning and logistics",
  },
  {
    type: "Virtual Support",
    contact: "virtual@afcfta-hackathon.org",
    description: "Technical support for virtual participation",
  },
  {
    type: "General Information",
    contact: "info@afcfta-hackathon.org",
    description: "General questions and information requests",
  },
];

export function VenueCallToAction() {
  return (
    <Section background="muted" spacing="lg">
      <div className="space-y-12 md:space-y-16">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-primary text-white rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <Heading as="h2" level="h2" className="text-white">
                Ready to Join Us in Abuja or Virtually?
              </Heading>
              <Body size="lg" className="max-w-3xl mx-auto text-white/90">
                Whether you choose to experience the energy of Abuja in person
                or participate virtually from anywhere in Africa, you'll be part
                of the continent's most significant innovation event.
              </Body>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href="/register">
                  Register Your Team
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="inline-flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
              >
                <a href="/timeline-format">
                  <Calendar className="size-4" />
                  View Full Timeline
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="space-y-2">
                  <Heading as="h3" level="h3" color="primary">
                    {fact.value}
                  </Heading>
                  <Body
                    weight="semibold"
                    className="text-gray-900 dark:text-gray-50"
                  >
                    {fact.label}
                  </Body>
                  <Body size="sm" color="muted">
                    {fact.description}
                  </Body>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Items */}
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
              Next Steps
            </Heading>
            <Body color="muted" className="mt-2">
              Everything you need to prepare for your participation
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {actionItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-all group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {item.title}
                        </Heading>
                        <Body
                          size="sm"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          {item.description}
                        </Body>
                        <Body size="xs" color="muted" className="italic">
                          {item.urgency}
                        </Body>
                      </div>
                      <Button
                        variant={item.variant}
                        size="sm"
                        asChild
                        className="w-full group-hover:shadow-md transition-shadow"
                      >
                        <a
                          href={item.href}
                          className="inline-flex items-center gap-2"
                        >
                          {item.action}
                          <ArrowRight className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Information */}
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
              Need Assistance?
            </Heading>
            <Body color="muted" className="mt-2">
              Our team is here to help with all your questions and needs
            </Body>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-primary mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      <Heading
                        as="h4"
                        level="h6"
                        className="text-gray-900 dark:text-gray-50"
                      >
                        {contact.type}
                      </Heading>
                      <Body size="sm" color="primary" weight="semibold">
                        <a
                          href={`mailto:${contact.contact}`}
                          className="hover:underline"
                        >
                          {contact.contact}
                        </a>
                      </Body>
                      <Body
                        size="sm"
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {contact.description}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h4"
              className="text-gray-900 dark:text-gray-50"
            >
              Additional Resources
            </Heading>
            <Body color="muted" className="mt-2">
              Download guides and access additional information
            </Body>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="/assets/venue-guide.pdf" download>
                <Download className="size-4" />
                Venue Guide
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="/assets/accommodation-guide.pdf" download>
                <Building className="size-4" />
                Accommodation Guide
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="/faq">
                <ExternalLink className="size-4" />
                View FAQ
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Map Placeholder Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Find Us in Abuja
              </Heading>
              <Body color="muted" className="mt-2">
                Interactive map and detailed location information
              </Body>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="size-12 mx-auto text-gray-400" />
                <Body color="muted">Interactive Map Coming Soon</Body>
                <Body size="sm" color="muted">
                  Detailed venue location, transportation, and accommodation
                  information
                </Body>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 text-center">
              <div className="space-y-1">
                <Body size="sm" weight="semibold">
                  Venue Address
                </Body>
                <Body size="sm" color="muted">
                  Central Business District, Abuja
                </Body>
              </div>
              <div className="space-y-1">
                <Body size="sm" weight="semibold">
                  Nearest Airport
                </Body>
                <Body size="sm" color="muted">
                  Nnamdi Azikiwe International Airport
                </Body>
              </div>
              <div className="space-y-1">
                <Body size="sm" weight="semibold">
                  Transportation
                </Body>
                <Body size="sm" color="muted">
                  Shuttle service provided
                </Body>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
