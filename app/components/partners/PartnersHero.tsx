import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Handshake, ArrowRight, FileText } from "lucide-react";

export function PartnersHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface text-white"
      aria-labelledby="partners-hero-heading"
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
              <Handshake className="mr-2 size-4" aria-hidden />
              Partners
            </span>
            <h1
              id="partners-hero-heading"
              className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Driving Africa&apos;s Digital Trade Ecosystem Together
            </h1>
            <p className="text-2xl font-semibold text-white sm:text-3xl">
              Our Partners Power Innovation Across Africa
            </p>
            <p className="max-w-2xl text-lg text-white/90 sm:text-xl">
              The AfCFTA Hackathon 2026 thrives on strategic partnerships. From global corporates to regional innovation hubs, partners play a crucial role in enabling Africa&apos;s brightest innovators to build solutions for digital trade, AI, fintech, logistics, and MSME empowerment.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="inline-flex items-center gap-2"
            >
              <a href="#become-partner">
                Become a Partner
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="inline-flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <a href="#partnership-tiers">
                <FileText className="size-4" aria-hidden />
                View Partnership Benefits
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
