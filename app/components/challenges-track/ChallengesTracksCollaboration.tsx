import {
  Users,
  ArrowRightLeft,
  Brain,
  Database,
  Globe,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const examples = [
  {
    icons: [
      <Brain key="ai" className="w-6 h-6 text-blue-600" />,
      <Database key="data" className="w-6 h-6 text-blue-600" />,
    ],
    title: "AI + Open Data",
    description:
      "Combine real-time trade data with AI/ML models for market prediction, risk analysis, or supply chain optimization.",
  },
  {
    icons: [
      <Landmark key="customs" className="w-6 h-6 text-blue-600" />,
      <Globe key="value" className="w-6 h-6 text-blue-600" />,
    ],
    title: "Customs + Value Chains",
    description:
      "Digitize customs processes and traceability for integrated, cross-border value chain management.",
  },
  {
    icons: [
      <Users key="sme" className="w-6 h-6 text-blue-600" />,
      <ArrowRightLeft key="payments" className="w-6 h-6 text-blue-600" />,
    ],
    title: "SME Enablement + Payments",
    description:
      "Build wallet solutions and financial access directly into SME business platforms.",
  },
];

export function ChallengesTracksCollaboration() {
  return (
    <section className="w-full bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200 py-14 sm:py-18">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center space-y-6"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-blue-100 text-blue-800 px-5 py-2 mb-3">
            <ArrowRightLeft className="w-5 h-5" />
            <span className="font-semibold">Cross-Track Collaboration</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-black">
            Where Ideas Meet: Build Across Tracks for Greater Impact
          </h2>
          <p className="text-base sm:text-lg text-black/80">
            Tracks are interconnected—teams are encouraged to blend ideas and
            skills from multiple tracks. Cross-collaboration unlocks new value,
            creative solutions, and transformative scale.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {examples.map((ex, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center bg-white/60 rounded-xl p-5 min-h-[150px] shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40"
              >
                <div className="flex items-center gap-2 mb-2">
                  {ex.icons.map((icon, i) => (
                    <div key={i} className="text-blue-600">
                      {icon}
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-black mb-1">{ex.title}</h3>
                <p className="text-sm text-center text-black/80">
                  {ex.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
