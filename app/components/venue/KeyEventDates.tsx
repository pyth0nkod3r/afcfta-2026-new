import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";

const eventDates = [
  {
    phase: "Application Opens",
    activity: "Call for innovators & teams across Africa",
    date: "January 10, 2026",
  },
  {
    phase: "Application Closes",
    activity: "Deadline for registration & idea submission",
    date: "March 1, 2026",
  },
  {
    phase: "Selection & Team Announcement",
    activity: "Final shortlisted participants notified",
    date: "March 15, 2026",
  },
  {
    phase: "Virtual Onboarding & Mentorship",
    activity: "Access to mentors, training, and technical prep",
    date: "March 20–April 5, 2026",
  },
  {
    phase: "Main Hackathon Event",
    activity: "AfCFTA Hackathon 2026 (Hybrid Format)",
    date: "April 8–10, 2026",
  },
  {
    phase: "Demo Day & Awards",
    activity: "Pitching session, Whitepaper launch, and recognition",
    date: "April 10, 2026",
  },
];

export function KeyEventDates() {
  return (
    <Section id="event-dates" background="muted" spacing="lg" className="bg-black!">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading as="h2" level="h2" className="text-white!">
            Key Event Dates
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-white/80!">
            Present the full timeline and important deadlines clearly.
          </Body>
        </motion.div>

        {/* Event Dates Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 text-white! font-semibold">
                  Phase
                </th>
                <th className="text-left py-4 px-4 text-white! font-semibold">
                  Activity
                </th>
                <th className="text-left py-4 px-4 text-white! font-semibold">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {eventDates.map((event, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 text-white! font-medium">
                    {event.phase}
                  </td>
                  <td className="py-4 px-4 text-white/80!">{event.activity}</td>
                  <td className="py-4 px-4 text-white/80!">{event.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </Section>
  );
}
