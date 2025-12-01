import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { MapPin, Calendar, Globe, Users } from "lucide-react";

export function VenueHero() {
  return (
    \u003csection
      className="relative isolate overflow-hidden bg-surface text-white"
      aria-labelledby="venue-hero-heading"
    \u003e
      {/* Background Image \u0026 Overlay */}
      \u003cdiv className="absolute inset-0"\u003e
        \u003cdiv className="absolute inset-0 bg-[url('/images/hero-placeholder.png')] bg-cover bg-center opacity-40 md:opacity-60" /\u003e
        \u003cdiv className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-background/85" /\u003e
      \u003c/div\u003e

      \u003cdiv className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-36"\u003e
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        \u003e
          \u003cdiv className="space-y-4"\u003e
            \u003cspan className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"\u003e
              \u003cCalendar className="mr-2 size-4" aria-hidden /\u003e
              Venue \u0026 Dates
            \u003c/span\u003e
            \u003ch1
              id="venue-hero-heading"
              className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            \u003e
              Join Africa\u0026apos;s Largest Digital Trade Innovation Challenge
            \u003c/h1\u003e
            \u003cp className="max-w-3xl text-base text-white/80 sm:text-lg"\u003e
              The AfCFTA Hackathon 2026 brings together innovators, entrepreneurs, policymakers, and investors from across Africa — virtually and in-person — to build solutions that power Africa\u0026apos;s Digital Trade future.
            \u003c/p\u003e
          \u003c/div\u003e

          {/* Event Overview Cards */}
          \u003cdiv className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl"\u003e
            \u003cmotion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 rounded-lg p-4 text-center"
            \u003e
              \u003cCalendar className="size-8 mx-auto mb-2 text-accent" /\u003e
              \u003cdiv className="text-lg font-bold"\u003eApril 8–10, 2026\u003c/div\u003e
              \u003cdiv className="text-sm text-white/80"\u003eDates\u003c/div\u003e
            \u003c/motion.div\u003e
            \u003cmotion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 rounded-lg p-4 text-center"
            \u003e
              \u003cMapPin className="size-8 mx-auto mb-2 text-accent" /\u003e
              \u003cdiv className="text-lg font-bold"\u003eAbuja, Nigeria\u003c/div\u003e
              \u003cdiv className="text-sm text-white/80"\u003eMain Venue\u003c/div\u003e
            \u003c/motion.div\u003e
            \u003cmotion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 rounded-lg p-4 text-center"
            \u003e
              \u003cGlobe className="size-8 mx-auto mb-2 text-accent" /\u003e
              \u003cdiv className="text-lg font-bold"\u003eHybrid Format\u003c/div\u003e
              \u003cdiv className="text-sm text-white/80"\u003ePhysical + Virtual\u003c/div\u003e
            \u003c/motion.div\u003e
          \u003c/div\u003e

          \u003cdiv className="flex gap-4 flex-wrap"\u003e
            \u003cButton
              variant="primary"
              size="lg"
              asChild
              className="inline-flex items-center gap-2"
            \u003e
              \u003ca href="/register"\u003eRegister to Attend\u003c/a\u003e
            \u003c/Button\u003e
            \u003cButton
              variant="outline"
              size="lg"
              asChild
              className="inline-flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            \u003e
              \u003ca href="#event-dates"\u003eView Event Timeline\u003c/a\u003e
            \u003c/Button\u003e
          \u003c/div\u003e
        \u003c/motion.div\u003e
      \u003c/div\u003e
    \u003c/section\u003e
  );
}
