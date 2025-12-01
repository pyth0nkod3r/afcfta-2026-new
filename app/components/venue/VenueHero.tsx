import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { MapPin, Calendar, Globe } from "lucide-react";

export function VenueHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface text-white"
      aria-labelledby="venue-hero-heading"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero-placeholder.png')] bg-cover bg-center opacity-40 md:opacity-60" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-background/85" />
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <Calendar className="mr-2 size-4" aria-hidden />
              Venue & Dates
            </span>
            <h1
              id="venue-hero-heading"
              className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Join Africa&apos;s Largest Digital Trade Innovation Challenge
            </h1>
            <p className="max-w-3xl text-base text-white/80 sm:text-lg">
              The AfCFTA Hackathon 2026 brings together innovators, entrepreneurs, policymakers, and investors from across Africa — virtually and in-person — to build solutions that power Africa&apos;s Digital Trade future.
            </p>
          </div>

          {/* Event Overview Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 rounded-lg p-4 text-center"
            >
              <Calendar className="size-8 mx-auto mb-2 text-accent" />
              <div className="text-lg font-bold">April 8–10, 2026</div>
              <div className="text-sm text-white/80">Dates</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 rounded-lg p-4 text-center"
            >
              <MapPin className="size-8 mx-auto mb-2 text-accent" />
              <div className="text-lg font-bold">Abuja, Nigeria</div>
              <div className="text-sm text-white/80">Main Venue</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 rounded-lg p-4 text-center"
            >
              <Globe className="size-8 mx-auto mb-2 text-accent" />
              <div className="text-lg font-bold">Hybrid Format</div>
              <div className="text-sm text-white/80">Physical + Virtual</div>
            </motion.div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button
              variant="primary"
              size="lg"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="/register">Register to Attend</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="inline-flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <a href="#event-dates">View Event Timeline</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
