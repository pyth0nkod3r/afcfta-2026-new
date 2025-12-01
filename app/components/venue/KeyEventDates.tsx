import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";

const eventDates = [
  {
    phase: "Application Opens",
    activity: "Call for innovators \u0026 teams across Africa",
    date: "January 10, 2026",
  },
  {
    phase: "Application Closes",
    activity: "Deadline for registration \u0026 idea submission",
    date: "March 1, 2026",
  },
  {
    phase: "Selection \u0026 Team Announcement",
    activity: "Final shortlisted participants notified",
    date: "March 15, 2026",
  },
  {
    phase: "Virtual Onboarding \u0026 Mentorship",
    activity: "Access to mentors, training, and technical prep",
    date: "March 20–April 5, 2026",
  },
  {
    phase: "Main Hackathon Event",
    activity: "AfCFTA Hackathon 2026 (Hybrid Format)",
    date: "April 8–10, 2026",
  },
  {
    phase: "Demo Day \u0026 Awards",
    activity: "Pitching session, Whitepaper launch, and recognition",
    date: "April 10, 2026",
  },
];

export function KeyEventDates() {
  return (
    \u003cSection id="event-dates" background="muted" spacing="lg" className="bg-black!"\u003e
      \u003cdiv className="space-y-12 md:space-y-16"\u003e
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        \u003e
          \u003cHeading as="h2" level="h2" className="text-white!"\u003e
            Key Event Dates
          \u003c/Heading\u003e
          \u003cBody size="lg" className="max-w-3xl mx-auto text-white/80!"\u003e
            Present the full timeline and important deadlines clearly.
          \u003c/Body\u003e
        \u003c/motion.div\u003e

        {/* Event Dates Table */}
        \u003cmotion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        \u003e
          \u003ctable className="w-full border-collapse"\u003e
            \u003cthead\u003e
              \u003ctr className="border-b border-white/20"\u003e
                \u003cth className="text-left py-4 px-4 text-white! font-semibold"\u003e
                  Phase
                \u003c/th\u003e
                \u003cth className="text-left py-4 px-4 text-white! font-semibold"\u003e
                  Activity
                \u003c/th\u003e
                \u003cth className="text-left py-4 px-4 text-white! font-semibold"\u003e
                  Date
                \u003c/th\u003e
              \u003c/tr\u003e
            \u003c/thead\u003e
            \u003ctbody\u003e
              {eventDates.map((event, index) =\u003e (
                \u003cmotion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                \u003e
                  \u003ctd className="py-4 px-4 text-white! font-medium"\u003e
                    {event.phase}
                  \u003c/td\u003e
                  \u003ctd className="py-4 px-4 text-white/80!"\u003e{event.activity}\u003c/td\u003e
                  \u003ctd className="py-4 px-4 text-white/80!"\u003e{event.date}\u003c/td\u003e
                \u003c/motion.tr\u003e
              ))}
            \u003c/tbody\u003e
          \u003c/table\u003e
        \u003c/motion.div\u003e
      \u003c/div\u003e
    \u003c/Section\u003e
  );
}
