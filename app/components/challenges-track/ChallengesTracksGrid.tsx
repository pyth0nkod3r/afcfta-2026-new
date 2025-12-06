import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { challengeTracks } from "./challengeTracksData";

export function ChallengesTracksGrid() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
            ⚙️ All Challenge Tracks
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {challengeTracks.map((track) => {
            const Icon = track.icon;
            const isExpanded = hoveredTrack === track.id;
            return (
              <motion.div
                key={track.id}
                className="group overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-xl hover:bg-white/70 transition-all duration-300"
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
                onClick={() => setHoveredTrack(isExpanded ? null : track.id)}
              >
                <div className="flex items-center gap-4 p-6">
                  <Icon className="w-8 h-8 text-blue-700 shrink-0" aria-hidden />
                  <div className="flex flex-col flex-1">
                    <h3 className="font-semibold text-lg text-black">
                      {track.title}
                    </h3>
                    <p className="text-sm text-black/80">{track.description}</p>
                  </div>
                  <motion.span
                    className="ml-auto transition-transform duration-300 text-black"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </div>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-black/80 text-sm">
                        <div>
                          <strong className="text-black">Focus Areas:</strong>
                          <ul className="list-disc pl-5 mt-2">
                            {track.focus.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
