import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";

export function ChallengesTracksHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface text-white"
      aria-labelledby="challenge-tracks-hero-heading"
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
              PAGE TITLE: Challenge Tracks
            </span>
            <h1
              id="challenge-tracks-hero-heading"
              className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Build Solutions that Power Africa’s Borderless Digital Economy
            </h1>
            <p className="max-w-2xl text-base text-white/80 sm:text-lg">
              The AfCFTA Hackathon 2026 invites Africa’s brightest innovators to
              co-create solutions that accelerate the implementation of the
              AfCFTA Digital Trade Protocol — advancing inclusive,
              technology-driven trade across the continent.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="lg">
              Submit Your Idea
            </Button>
            <Button variant="outline" size="lg">
              Download Track Guide
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
