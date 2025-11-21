import { Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

export function ChallengesTracksCTA() {
  return (
    <section className="relative bg-linear-to-tr from-slate-800 via-slate-800 to-slate-900 py-14 sm:py-18">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-2 text-white font-semibold text-sm">
            <Rocket className="w-5 h-5" aria-hidden />
            Ready to Build?
          </div>
          <h2 className="font-heading text-white text-2xl sm:text-3xl font-bold mb-2">
            Register Now or Explore All Challenge Tracks
          </h2>
          <p className="max-w-2xl text-white/80 mb-5">
            Join Africa’s brightest innovators at the AfCFTA Hackathon 2026.
            Start your journey by registering your team, or dive deeper to find
            your perfect challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              <Users className="w-5 h-5" />
              Register Your Team
            </a>
            <a
              href="/challenge-tracks"
              className="inline-flex items-center gap-2 border border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              <Rocket className="w-5 h-5" />
              See All Challenge Tracks
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
