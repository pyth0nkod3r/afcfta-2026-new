import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";

const scheduleOverview = [
  {
    milestone: "Call for Applications Opens",
    date: "January 10, 2026",
    description: "Innovators and startups invited to apply",
  },
  {
    milestone: "Application Closes",
    date: "March 1, 2026",
    description: "Deadline for team and project submissions",
  },
  {
    milestone: "Finalists Announced",
    date: "March 15, 2026",
    description: "Shortlisted teams notified",
  },
  {
    milestone: "Pre-event Mentorship & Training",
    date: "March 20–April 5, 2026",
    description: "Virtual sessions on AfCFTA Digital Trade, AI, and Policy",
  },
  {
    milestone: "Main Hackathon (Hybrid)",
    date: "April 8–10, 2026",
    description: "3-day event in Abuja & online",
  },
  {
    milestone: "Demo Day & Awards",
    date: "April 10, 2026",
    description: "Final pitches and recognition",
  },
  {
    milestone: "Post-Hackathon Incubation",
    date: "May–July 2026",
    description: "Continued support, pilot testing, and policy integration",
  },
];

const criticalDates = [
  {
    date: "January 15, 2026",
    event: "Registration Opens",
    description: "Team and individual registration portal launches",
    importance: "High",
    action: "Register early for best team matching opportunities",
  },
  {
    date: "February 28, 2026",
    event: "Team Formation Deadline",
    description: "Final deadline for team composition and registration",
    importance: "Critical",
    action: "Ensure your team is complete and registered",
  },
  {
    date: "April 15, 2026",
    event: "Challenge Selection Final",
    description: "Last day to select and confirm challenge track",
    importance: "High",
    action: "Finalize your challenge track and begin preparation",
  },
  {
    date: "May 10, 2026",
    event: "Hackathon Begins",
    description: "Opening ceremony and official start of hackathon",
    importance: "Critical",
    action: "Be present (physically or virtually) for the opening",
  },
  {
    date: "May 12, 2026",
    event: "Submission Deadline",
    description: "Final deadline for solution submission",
    importance: "Critical",
    action: "Submit your solution before 12:00 PM WAT",
  },
  {
    date: "May 12, 2026",
    event: "Awards Ceremony",
    description: "Winner announcement and celebration",
    importance: "High",
    action: "Attend the ceremony for networking and recognition",
  },
];

export function FullScheduleSnapshot() {
  return (
    <Section
      id="full-schedule"
      background="muted"
      spacing="lg"
      className="bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 text-black"
    >
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >

          <Heading as="h2" level="h2" className="text-black">
            Timeline Milestone Overview
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black">
            Complete timeline of key milestones and deadlines for the AfCFTA
            Hackathon 2026 journey.
          </Body>
        </motion.div>

        {/* Schedule Overview Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="text-center">
            <Heading as="h3" level="h3" className="text-black">
              Phase Overview
            </Heading>
            <Body className="mt-2 text-black">
              Complete timeline of key milestones and deadlines
            </Body>
          </div>

          <div className="space-y-4">
            {scheduleOverview.map((item, index) => (
              <motion.div
                key={item.milestone}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow bg-white/60 border-white/40">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <Heading as="h4" level="h6" className="text-black">
                        {item.milestone}
                      </Heading>
                      <Body size="sm" className="text-black mt-1">
                        {item.description}
                      </Body>
                    </div>
                    <Badge
                      variant="outline"
                      className="shrink-0 border-black/20 text-black"
                    >
                      {item.date}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Critical Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="text-center">
            <Heading as="h3" level="h3" className="text-black">
              Critical Dates & Deadlines
            </Heading>
            <Body className="mt-2 text-black">
              Mark your calendar - these dates are essential for participation
            </Body>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {criticalDates.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-md transition-shadow bg-white/60 border-white/40">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Heading as="h4" level="h6" className="text-black">
                          {item.event}
                        </Heading>
                        <Body
                          size="sm"
                          weight="semibold"
                          className="text-blue-600"
                        >
                          {item.date}
                        </Body>
                      </div>
                      <Badge
                        variant={
                          item.importance === "Critical"
                            ? "destructive"
                            : "secondary"
                        }
                        className="shrink-0"
                      >
                        {item.importance}
                      </Badge>
                    </div>

                    <Body size="sm" className="text-black">
                      {item.description}
                    </Body>

                    <div className="bg-white/50 rounded-lg p-3 border border-white/40">
                      <Body
                        size="xs"
                        weight="semibold"
                        transform="uppercase"
                        className="text-black"
                      >
                        Action Required:
                      </Body>
                      <Body size="sm" className="text-black mt-1">
                        {item.action}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid gap-6 md:grid-cols-4 text-center"
        >
          <Card className="p-6 bg-white/60 border-white/40">
            <div className="space-y-2">
              <Clock className="size-8 mx-auto text-blue-600" />
              <Heading as="h3" level="h3" className="text-blue-600">
                12+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                className="text-black"
              >
                Total Months
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/60 border-white/40">
            <div className="space-y-2">
              <Users className="size-8 mx-auto text-blue-600" />
              <Heading as="h3" level="h3" className="text-blue-600">
                5,000+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                className="text-black"
              >
                Participants
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/60 border-white/40">
            <div className="space-y-2">
              <MapPin className="size-8 mx-auto text-blue-600" />
              <Heading as="h3" level="h3" className="text-blue-600">
                54
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                className="text-black"
              >
                Countries
              </Body>
            </div>
          </Card>
          <Card className="p-6 bg-white/60 border-white/40">
            <div className="space-y-2">
              <Calendar className="size-8 mx-auto text-blue-600" />
              <Heading as="h3" level="h3" className="text-blue-600">
                100+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                className="text-black"
              >
                Events & Sessions
              </Body>
            </div>
          </Card>
        </motion.div>

        {/* Download & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-white/60 rounded-2xl p-8 border border-white/40"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <Heading as="h3" level="h4" className="text-black">
                Stay Updated & Prepared
              </Heading>
              <Body className="max-w-2xl mx-auto text-black">
                Download the complete schedule and set up calendar reminders to
                ensure you don&apos;t miss any critical dates or opportunities.
              </Body>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href="/assets/complete-schedule.pdf" download>
                  <Download className="size-4" />
                  Download Full Schedule
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="inline-flex items-center gap-2"
              >
                <a href="/register">
                  <ExternalLink className="size-4" />
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
