import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import {
  MapPin,
  Building2,
  TrendingUp,
  Network,
} from "lucide-react";

export function WhyAbuja() {
  return (
    \u003cSection spacing="lg" className="bg-white text-black"\u003e
      \u003cdiv className="space-y-12 md:space-y-16"\u003e
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        \u003e
          \u003cHeading as="h2" level="h2" className="text-black"\u003e
            Why Abuja, Nigeria?
          \u003c/Heading\u003e
        \u003c/motion.div\u003e

        {/* Main Content */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6"
        \u003e
          \u003cBody className="text-center text-black/80 text-lg"\u003e
            Abuja stands at the crossroads of policy influence, regional trade
            leadership, and technology innovation. As the headquarters of
            Nigeria\u0026apos;s AfCFTA Coordination Office and several regional
            economic institutions, Abuja provides a fitting environment to host
            this continental collaboration of innovators and decision-makers.
          \u003c/Body\u003e

          \u003cBody className="text-center text-black/80 text-lg"\u003e
            Nigeria\u0026apos;s leadership in digital payments, fintech innovation,
            and startup ecosystems positions it as a key driver of the AfCFTA
            Digital Trade Protocol, linking local solutions to continental
            opportunities.
          \u003c/Body\u003e
        \u003c/motion.div\u003e

        {/* Key Points */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
        \u003e
          \u003cCard className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow"\u003e
            \u003cdiv className="space-y-4"\u003e
              \u003cdiv className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center"\u003e
                \u003cBuilding2 className="size-6 text-primary" /\u003e
              \u003c/div\u003e
              \u003cBody size="sm" weight="semibold" className="text-black"\u003e
                Policy Influence
              \u003c/Body\u003e
            \u003c/div\u003e
          \u003c/Card\u003e

          \u003cCard className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow"\u003e
            \u003cdiv className="space-y-4"\u003e
              \u003cdiv className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center"\u003e
                \u003cTrendingUp className="size-6 text-primary" /\u003e
              \u003c/div\u003e
              \u003cBody size="sm" weight="semibold" className="text-black"\u003e
                Trade Leadership
              \u003c/Body\u003e
            \u003c/div\u003e
          \u003c/Card\u003e

          \u003cCard className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow"\u003e
            \u003cdiv className="space-y-4"\u003e
              \u003cdiv className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center"\u003e
                \u003cNetwork className="size-6 text-primary" /\u003e
              \u003c/div\u003e
              \u003cBody size="sm" weight="semibold" className="text-black"\u003e
                Tech Innovation
              \u003c/Body\u003e
            \u003c/div\u003e
          \u003c/Card\u003e

          \u003cCard className="p-6 text-center border-black/10 hover:shadow-lg transition-shadow"\u003e
            \u003cdiv className="space-y-4"\u003e
              \u003cdiv className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center"\u003e
                \u003cMapPin className="size-6 text-primary" /\u003e
              \u003c/div\u003e
              \u003cBody size="sm" weight="semibold" className="text-black"\u003e
                Strategic Location
              \u003c/Body\u003e
            \u003c/div\u003e
          \u003c/Card\u003e
        \u003c/motion.div\u003e
      \u003c/div\u003e
    \u003c/Section\u003e
  );
}
