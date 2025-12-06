import { motion } from "framer-motion";

export function ChallengeTracksIntro() {
  return (
    <section className="w-full bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-3xl border border-white/40 bg-white/60 p-8 sm:p-12 shadow-xl">
            <div className="text-center space-y-5">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
                🧭 Introduction
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                Shaping the Future of African Trade through Innovation
              </h2>
              <p className="text-base sm:text-lg text-black/80">
                Each challenge track focuses on a critical pillar of Africa’s
                digital trade ecosystem. From cross-border payments to smart
                logistics and AI-driven compliance, participants will design,
                prototype, and showcase scalable innovations that bridge policy
                and technology.
                <br />
                <br />
                Teams are encouraged to align their ideas with the AfCFTA
                Digital Trade Protocol, the Pan-African Payment and Settlement
                System (PAPSS), and the Agenda 2063 vision for a unified African
                market.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
