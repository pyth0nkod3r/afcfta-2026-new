import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  MapPin,
  Building2,
  Wifi,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react";

const venueHighlights = [
  {
    icon: Wifi,
    title: "High-Speed Connectivity",
    description: "Modern innovation space with high-speed connectivity",
  },
  {
    icon: Users,
    title: "Breakout Zones",
    description: "Access to breakout zones, demo areas, and investor lounges",
  },
  {
    icon: Lightbulb,
    title: "On-Site Mentorship",
    description: "On-site mentorship and side events featuring trade and tech experts",
  },
  {
    icon: Globe,
    title: "Exhibition Spaces",
    description: "Exhibition spaces showcasing solutions from Nigeria and other African countries",
  },
];

const tentativeVenues = [
  "Abuja Continental Hotel Conference Centre",
  "NITDA Technology & Innovation Complex",
  "AfCFTA Nigeria Coordination Office Event Pavilion",
];

export function VenueSection() {
  return (
    <Section id="venue-details" spacing="lg" className="bg-white text-black">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading as="h2" level="h2" className="text-black">
            Venue — Abuja, Nigeria (Physical Hub)
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black/80">
            The physical component of AfCFTA Hackathon 2026 will be hosted in
            Abuja, Nigeria, Africa&apos;s policy and innovation capital — a
            symbolic location connecting trade, technology, and continental
            collaboration.
          </Body>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Body className="text-center text-black/80">
            The venue has been selected to enable seamless interaction between
            innovators and policymakers, reflecting the spirit of the AfCFTA
            Digital Trade Protocol.
          </Body>
        </motion.div>

        {/* Venue Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="text-center">
            <Heading as="h3" level="h3" className="text-black">
              Venue Highlights
            </Heading>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {venueHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow text-center border-black/10">
                    <div className="space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="size-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <Heading as="h4" level="h6" className="text-black">
                          {highlight.title}
                        </Heading>
                        <Body size="sm" className="text-black/70">
                          {highlight.description}
                        </Body>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tentative Venue Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center">
            <Heading as="h3" level="h4" className="text-black">
              Tentative Venue Options
            </Heading>
          </div>

          <Card className="p-6 max-w-2xl mx-auto border-black/10">
            <ul className="space-y-3">
              {tentativeVenues.map((venue, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Building2 className="size-5 text-primary mt-0.5 shrink-0" />
                  <Body className="text-black/80">{venue}</Body>
                </motion.li>
              ))}
            </ul>
            <Body size="sm" color="muted" className="mt-6 text-center italic">
              (Final venue details to be confirmed and published by March 2026.)
            </Body>
          </Card>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-100 rounded-2xl p-8"
        >
          <div className="space-y-4">
            <div className="text-center">
              <Heading as="h3" level="h4" className="text-black">
                Location & Map
              </Heading>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="size-12 mx-auto text-gray-400" />
                <Body color="muted">Interactive Map Coming Soon</Body>
                <Body size="sm" color="muted">
                  Detailed venue location and transportation guide
                </Body>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
