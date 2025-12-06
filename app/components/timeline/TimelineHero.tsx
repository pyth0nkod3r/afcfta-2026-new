import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

export function TimelineHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface text-white"
      aria-labelledby="timeline-hero-heading"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero-placeholder.png')] bg-cover bg-center opacity-40 md:opacity-60" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-background/85" />
      </div>

      <div className="relative container mx-auto px-4 py-20 sm:py-28 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 border border-white/20"
            >
              <Clock className="mr-2 size-4" aria-hidden />A Three-Phase Journey
              to Power Africa&apos;s Digital Trade Future
            </motion.span>
            <h1
              id="timeline-hero-heading"
              className="text-4xl font-heading font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              From Ideas to Impact: The AfCFTA Hackathon 2026 Journey
            </h1>
            <p className="max-w-2xl text-lg text-white/90 sm:text-xl leading-relaxed">
              The AfCFTA Hackathon 2026 follows a structured three-phase process
              — from ideation and preparation to innovation and deployment —
              designed to enable meaningful collaboration among Africa&apos;s
              brightest innovators, developers, entrepreneurs, and policymakers.
            </p>
          </div>

          {/* Event Overview Cards */}
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="size-9 mx-auto mb-3 text-accent" />
              </motion.div>
              <div className="text-xl font-bold">January – April 2026</div>
              <div className="text-sm text-white/80 mt-1">Event Duration</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="size-9 mx-auto mb-3 text-accent" />
              </motion.div>
              <div className="text-xl font-bold">Hybrid</div>
              <div className="text-sm text-white/80 mt-1">Physical + Virtual</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:shadow-accent/20 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="size-9 mx-auto mb-3 text-accent" />
              </motion.div>
              <div className="text-xl font-bold">Abuja, Nigeria</div>
              <div className="text-sm text-white/80 mt-1">Main Venue</div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 flex-wrap pt-2"
          >
            <Button
              variant="primary"
              size="lg"
              asChild
              className="inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="/register">🔗 Register for the Hackathon</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <a href="#full-schedule">📘 Download Full Schedule</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
