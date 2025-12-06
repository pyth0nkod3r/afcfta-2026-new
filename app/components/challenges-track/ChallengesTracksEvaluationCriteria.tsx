import {
  Lightbulb,
  BarChart2,
  Users,
  Globe2,
  Presentation,
} from "lucide-react";
import { motion } from "framer-motion";

const criteria = [
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-600" aria-hidden />,
    title: "Innovation",
    percent: 25,
    description: "How novel, creative, or original is the solution?",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-600" aria-hidden />,
    title: "Feasibility & Scalability",
    percent: 20,
    description:
      "Can this solution be built, launched, and scaled up across Africa?",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-blue-600" aria-hidden />,
    title: "Impact",
    percent: 25,
    description:
      "How strongly does this idea address AfCFTA trade, development, or inclusion goals?",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" aria-hidden />,
    title: "Collaboration",
    percent: 15,
    description:
      "Does the project show teamwork or multi-disciplinary/cross-track collaboration?",
  },
  {
    icon: <Presentation className="w-6 h-6 text-blue-600" aria-hidden />,
    title: "Presentation",
    percent: 15,
    description:
      "How clearly, convincingly, and effectively is the project explained and pitched?",
  },
];

export function ChallengesTracksEvaluationCriteria() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center space-y-6"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4 text-black">
            Evaluation Criteria
          </h2>
          <p className="text-base sm:text-lg text-black/80 mb-8">
            All projects will be judged based on the following criteria and
            their relative weightings. Aim for a balance of creativity,
            execution, and impact!
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {criteria.map((criterion, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start bg-white/60 rounded-xl p-5 shadow-lg min-h-[140px] border border-white/40"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-600">{criterion.icon}</div>
                  <h3 className="font-semibold text-lg text-black">
                    {criterion.title}
                  </h3>
                  <span className="ml-auto text-xs text-black font-bold">
                    {criterion.percent}%
                  </span>
                </div>
                <p className="text-sm text-black/80 mb-3">
                  {criterion.description}
                </p>
                <div className="w-full h-2 rounded bg-black/10 mt-auto">
                  <div
                    className="h-full rounded bg-blue-600 transition-all"
                    style={{ width: `${criterion.percent}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
