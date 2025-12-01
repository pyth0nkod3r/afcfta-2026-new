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
  "NITDA Technology \u0026 Innovation Complex",
  "AfCFTA Nigeria Coordination Office Event Pavilion",
];

export function VenueSection() {
  return (
    \u003cSection id="venue-details" spacing="lg" className="bg-white text-black"\u003e
      \u003cdiv className="space-y-12 md:space-y-16"\u003e
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        \u003e
          \u003cHeading as="h2" level="h2" className="text-black"\u003e
            Venue — Abuja, Nigeria (Physical Hub)
          \u003c/Heading\u003e
          \u003cBody size="lg" className="max-w-3xl mx-auto text-black/80"\u003e
            The physical component of AfCFTA Hackathon 2026 will be hosted in
            Abuja, Nigeria, Africa\u0026apos;s policy and innovation capital — a
            symbolic location connecting trade, technology, and continental
            collaboration.
          \u003c/Body\u003e
        \u003c/motion.div\u003e

        {/* Description */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        \u003e
          \u003cBody className="text-center text-black/80"\u003e
            The venue has been selected to enable seamless interaction between
            innovators and policymakers, reflecting the spirit of the AfCFTA
            Digital Trade Protocol.
          \u003c/Body\u003e
        \u003c/motion.div\u003e

        {/* Venue Highlights */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        \u003e
          \u003cdiv className="text-center"\u003e
            \u003cHeading as="h3" level="h3" className="text-black"\u003e
              Venue Highlights
            \u003c/Heading\u003e
          \u003c/div\u003e

          \u003cdiv className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"\u003e
            {venueHighlights.map((highlight, index) =\u003e {
              const IconComponent = highlight.icon;
              return (
                \u003cmotion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                \u003e
                  \u003cCard className="h-full p-6 hover:shadow-lg transition-shadow text-center border-black/10"\u003e
                    \u003cdiv className="space-y-4"\u003e
                      \u003cdiv className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center"\u003e
                        \u003cIconComponent className="size-6 text-primary" /\u003e
                      \u003c/div\u003e
                      \u003cdiv className="space-y-2"\u003e
                        \u003cHeading as="h4" level="h6" className="text-black"\u003e
                          {highlight.title}
                        \u003c/Heading\u003e
                        \u003cBody size="sm" className="text-black/70"\u003e
                          {highlight.description}
                        \u003c/Body\u003e
                      \u003c/div\u003e
                    \u003c/div\u003e
                  \u003c/Card\u003e
                \u003c/motion.div\u003e
              );
            })}
          \u003c/div\u003e
        \u003c/motion.div\u003e

        {/* Tentative Venue Options */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        \u003e
          \u003cdiv className="text-center"\u003e
            \u003cHeading as="h3" level="h4" className="text-black"\u003e
              Tentative Venue Options
            \u003c/Heading\u003e
          \u003c/div\u003e

          \u003cCard className="p-6 max-w-2xl mx-auto border-black/10"\u003e
            \u003cul className="space-y-3"\u003e
              {tentativeVenues.map((venue, index) =\u003e (
                \u003cmotion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                \u003e
                  \u003cBuilding2 className="size-5 text-primary mt-0.5 shrink-0" /\u003e
                  \u003cBody className="text-black/80"\u003e{venue}\u003c/Body\u003e
                \u003c/motion.li\u003e
              ))}
            \u003c/ul\u003e
            \u003cBody size="sm" color="muted" className="mt-6 text-center italic"\u003e
              (Final venue details to be confirmed and published by March 2026.)
            \u003c/Body\u003e
          \u003c/Card\u003e
        \u003c/motion.div\u003e

        {/* Map Placeholder */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-100 rounded-2xl p-8"
        \u003e
          \u003cdiv className="space-y-4"\u003e
            \u003cdiv className="text-center"\u003e
              \u003cHeading as="h3" level="h4" className="text-black"\u003e
                Location \u0026 Map
              \u003c/Heading\u003e
            \u003c/div\u003e

            {/* Map Placeholder */}
            \u003cdiv className="bg-gray-200 rounded-lg h-64 flex items-center justify-center"\u003e
              \u003cdiv className="text-center space-y-2"\u003e
                \u003cMapPin className="size-12 mx-auto text-gray-400" /\u003e
                \u003cBody color="muted"\u003eInteractive Map Coming Soon\u003c/Body\u003e
                \u003cBody size="sm" color="muted"\u003e
                  Detailed venue location and transportation guide
                \u003c/Body\u003e
              \u003c/div\u003e
            \u003c/div\u003e
          \u003c/div\u003e
        \u003c/motion.div\u003e
      \u003c/div\u003e
    \u003c/Section\u003e
  );
}
