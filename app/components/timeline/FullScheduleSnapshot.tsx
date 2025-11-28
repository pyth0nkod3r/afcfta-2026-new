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
    phase: "Pre-Hackathon",
    duration: "January - April 2026",
    timeline: "4 months",
    participants: "5,000+ registered",
    keyMilestones: [
      "Registration Opens (Jan 15)",
      "Team Formation Complete (Feb 28)",
      "Training Phase Complete (Mar 31)",
      "Challenge Selection Final (Apr 15)",
    ],
    deliverables: "Registered teams, Training completion, Challenge selection",
  },
  {
    phase: "Hackathon Weekend",
    duration: "May 10-12, 2026",
    timeline: "72 hours",
    participants: "1,000+ active teams",
    keyMilestones: [
      "Opening Ceremony (May 10, 9:00 AM)",
      "Development Sprint Begins (May 10, 2:00 PM)",
      "Submission Deadline (May 12, 12:00 PM)",
      "Awards Ceremony (May 12, 7:00 PM)",
    ],
    deliverables: "Working prototypes, Presentations, Winner selection",
  },
  {
    phase: "Post-Hackathon",
    duration: "May - December 2026",
    timeline: "8 months",
    participants: "Top 100 teams",
    keyMilestones: [
      "Winner Recognition (May 13-19)",
      "Incubation Begins (May 20)",
      "Market Validation (Jun-Aug)",
      "Investment Readiness (Sep-Nov)",
    ],
    deliverables: "Market-ready solutions, Investment pipeline, Scaling plans",
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
    <Section id="full-schedule" spacing="lg">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            Full Schedule Snapshot
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            A comprehensive overview of the entire AfCFTA Hackathon 2026
            journey, from initial registration through post-hackathon support
            and scaling.
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
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Phase Overview
            </Heading>
            <Body color="muted" className="mt-2">
              Three distinct phases spanning 12+ months of innovation and growth
            </Body>
          </div>

          <div className="space-y-6">
            {scheduleOverview.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <Heading
                          as="h4"
                          level="h5"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {phase.phase}
                        </Heading>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          <Badge variant="outline">{phase.duration}</Badge>
                          <Badge variant="secondary">{phase.timeline}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <Body size="sm" weight="semibold" color="primary">
                          {phase.participants}
                        </Body>
                        <Body size="xs" color="muted">
                          Expected participation
                        </Body>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Key Milestones:
                        </Body>
                        <ul className="space-y-1">
                          {phase.keyMilestones.map(
                            (milestone, milestoneIndex) => (
                              <li
                                key={milestoneIndex}
                                className="flex items-start gap-2"
                              >
                                <Calendar className="size-4 text-primary mt-0.5 shrink-0" />
                                <Body
                                  size="sm"
                                  className="text-gray-700 dark:text-gray-300"
                                >
                                  {milestone}
                                </Body>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <Body
                          size="sm"
                          weight="semibold"
                          transform="uppercase"
                          color="muted"
                        >
                          Key Deliverables:
                        </Body>
                        <Body
                          size="sm"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          {phase.deliverables}
                        </Body>
                      </div>
                    </div>
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
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Critical Dates & Deadlines
            </Heading>
            <Body color="muted" className="mt-2">
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
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Heading
                          as="h4"
                          level="h6"
                          className="text-gray-900 dark:text-gray-50"
                        >
                          {item.event}
                        </Heading>
                        <Body size="sm" color="primary" weight="semibold">
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

                    <Body
                      size="sm"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {item.description}
                    </Body>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <Body
                        size="xs"
                        weight="semibold"
                        color="muted"
                        transform="uppercase"
                      >
                        Action Required:
                      </Body>
                      <Body
                        size="sm"
                        className="text-gray-700 dark:text-gray-300 mt-1"
                      >
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
          <Card className="p-6">
            <div className="space-y-2">
              <Clock className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                12+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Total Months
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Users className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                5,000+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Participants
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <MapPin className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                54
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
              >
                Countries
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Calendar className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h3" color="primary">
                100+
              </Heading>
              <Body
                size="sm"
                weight="semibold"
                transform="uppercase"
                color="muted"
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
          className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Stay Updated & Prepared
              </Heading>
              <Body className="max-w-2xl mx-auto">
                Download the complete schedule and set up calendar reminders to
                ensure you don't miss any critical dates or opportunities.
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
