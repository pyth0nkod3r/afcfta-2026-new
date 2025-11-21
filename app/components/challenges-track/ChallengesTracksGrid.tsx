import { motion, AnimatePresence } from "framer-motion";
import { challengeTracks } from "./challengeTracksData";

export function ChallengesTracksGrid() {
  return (
    <section className="w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            ⚙️ All Challenge Tracks
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {challengeTracks.map((track) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                layout
                className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 p-6">
                  <Icon className="w-8 h-8 text-white shrink-0" aria-hidden />
                  <div className="flex flex-col flex-1">
                    <h3 className="font-semibold text-lg text-white">
                      {track.title}
                    </h3>
                    <p className="text-sm text-white/80">{track.description}</p>
                  </div>
                  <span className="ml-auto transition-transform duration-300 group-hover:rotate-180 text-white">
                    ▼
                  </span>
                </div>
                <AnimatePresence>
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-white/80 text-sm"
                  >
                    <div>
                      <strong className="text-white">Focus Areas:</strong>
                      <ul className="list-disc pl-5 mt-2">
                        {track.focus.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
