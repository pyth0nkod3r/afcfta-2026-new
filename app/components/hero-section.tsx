// app/components/hero-section.tsx
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Radio } from "lucide-react";
import { CountdownTimer } from "./ui/countdown-timer";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

// Countdown from launch date: April 10, 2026
const launchDate = new Date("2026-04-10T09:00:00+01:00");

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center opacity-40 md:opacity-60" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-background/85" />
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                AfCFTA Hackathon 2026
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Digital Trade, Technology & AI — The New Trade Frontier
              </h1>
              <p className="max-w-2xl text-base text-white/80 sm:text-lg">
                Join innovators, developers, policymakers, and entrepreneurs to
                build technology-driven trade solutions that accelerate
                Africa&apos;s digital transformation under the AfCFTA framework.
              </p>
            </div>

            <ul className="flex flex-row gap-4 text-sm sm:text-base">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Abuja, Nigeria",
                },
                {
                  icon: CalendarDays,
                  label: "Dates",
                  value: "April 8–10, 2026",
                },
                {
                  icon: Radio,
                  label: "Format",
                  value: "Hybrid Event",
                },
              ].map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm flex-1 min-w-0"
                >
                  <Icon className="mt-0.5 size-5 text-secondary" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white sm:text-base">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/40 text-white hover:text-primary sm:w-auto"
              >
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="w-full text-white hover:bg-white/10 hover:text-primary sm:w-auto"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={cn(
              "rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-8",
              "border border-white/20",
            )}
          >
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Launches in
            </p>
            <CountdownTimer
              targetDate={launchDate}
              className="mt-6"
              completionMessage="AfCFTA Hackathon 2026 is live!"
            />
            <p className="mt-6 text-center text-xs text-white/70">
              Secure your spot before the schedule fills up.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-secondary/40 blur-3xl sm:w-72"
      />
    </section>
  );
}
