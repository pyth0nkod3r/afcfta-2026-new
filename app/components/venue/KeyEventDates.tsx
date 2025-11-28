import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Calendar,
  Clock,
  Users,
  Trophy,
  UserPlus,
  BookOpen,
  Rocket,
  Award,
} from "lucide-react";

const eventPhases = [
  {
    phase: "Pre-Hackathon Phase",
    duration: "January - April 2026",
    icon: BookOpen,
    color: "bg-blue-500",
    events: [
      {
        date: "January 15, 2026",
        event: "Registration Opens",
        description: "Team and individual registration portal launches",
        type: "Registration",
        importance: "Critical",
      },
      {
        date: "February 1-28, 2026",
        event: "Team Formation Period",
        description: "Networking events and team building activities",
        type: "Networking",
        importance: "High",
      },
      {
        date: "March 1-31, 2026",
        event: "Training & Preparation",
        description: "Workshops, masterclasses, and skill development",
        type: "Training",
        importance: "High",
      },
      {
        date: "April 1-15, 2026",
        event: "Challenge Selection Final",
        description: "Final deadline for challenge track selection",
        type: "Deadline",
        importance: "Critical",
      },
    ],
  },
  {
    phase: "Hackathon Weekend",
    duration: "May 10-12, 2026",
    icon: Rocket,
    color: "bg-green-500",
    events: [
      {
        date: "May 10, 2026 - 9:00 AM",
        event: "Opening Ceremony",
        description: "Welcome, keynotes, and official hackathon launch",
        type: "Ceremony",
        importance: "Critical",
      },
      {
        date: "May 10, 2026 - 2:00 PM",
        event: "Development Begins",
        description: "Teams start working on their solutions",
        type: "Development",
        importance: "Critical",
      },
      {
        date: "May 12, 2026 - 12:00 PM",
        event: "Submission Deadline",
        description: "Final deadline for solution submissions",
        type: "Deadline",
        importance: "Critical",
      },
      {
        date: "May 12, 2026 - 7:00 PM",
        event: "Awards Ceremony",
        description: "Winner announcements and celebration",
        type: "Ceremony",
        importance: "High",
      },
    ],
  },
  {
    phase: "Post-Hackathon Phase",
    duration: "May 2026 - Ongoing",
    icon: Award,
    color: "bg-purple-500",
    events: [
      {
        date: "May 13-19, 2026",
        event: "Winner Recognition Week",
        description: "Media coverage and recognition activities",
        type: "Recognition",
        importance: "High",
      },
      {
        date: "May 20, 2026",
        event: "Incubation Program Begins",
        description: "Winners enter comprehensive support programs",
        type: "Program",
        importance: "High",
      },
      {
        date: "June - August 2026",
        event: "Market Validation Phase",
        description: "Product development and market testing",
        type: "Development",
        importance: "Medium",
      },
      {
        date: "September 2026+",
        event: "Scaling & Investment",
        description: "Investment preparation and business scaling",
        type: "Growth",
        importance: "Medium",
      },
    ],
  },
];

const timeZoneInfo = {
  primary: "West Africa Time (WAT)",
  utc: "UTC+1",
  note: "All times are in West Africa Time. Virtual participants should convert to their local time zones.",
};

export function KeyEventDates() {
  return (
    <Section background="muted" spacing="lg">
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
            Key Event Dates
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            A comprehensive timeline of all critical dates and activities
            throughout the AfCFTA Hackathon 2026 journey, from registration to
            post-event support.
          </Body>
        </motion.div>

        {/* Time Zone Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-primary/5 rounded-2xl p-6"
        >
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Clock className="size-5 text-primary" />
              <Heading
                as="h3"
                level="h5"
                className="text-gray-900 dark:text-gray-50"
              >
                {timeZoneInfo.primary} ({timeZoneInfo.utc})
              </Heading>
            </div>
            <Body size="sm" color="muted">
              {timeZoneInfo.note}
            </Body>
          </div>
        </motion.div>

        {/* Event Phases */}
        <div className="space-y-12">
          {eventPhases.map((phase, phaseIndex) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: phaseIndex * 0.2 }}
                className="space-y-6"
              >
                {/* Phase Header */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center`}
                  >
                    <IconComponent className="size-8 text-white" />
                  </div>
                  <div>
                    <Heading
                      as="h3"
                      level="h3"
                      className="text-gray-900 dark:text-gray-50"
                    >
                      {phase.phase}
                    </Heading>
                    <Body color="muted">{phase.duration}</Body>
                  </div>
                </div>

                {/* Phase Events */}
                <div className="grid gap-4">
                  {phase.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: eventIndex * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                          <div className="w-24 shrink-0 text-center">
                            <Badge
                              variant="outline"
                              className="text-xs mb-1 block w-full"
                            >
                              {event.date.split(",")[0]}
                            </Badge>
                            {event.date.includes("AM") ||
                            event.date.includes("PM") ? (
                              <Badge
                                variant="secondary"
                                className="text-xs block w-full"
                              >
                                {event.date.split(" - ")[1]}
                              </Badge>
                            ) : null}
                          </div>

                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between gap-4">
                              <Heading
                                as="h4"
                                level="h6"
                                className="text-gray-900 dark:text-gray-50"
                              >
                                {event.event}
                              </Heading>
                              <div className="flex gap-2 shrink-0">
                                <Badge
                                  variant={
                                    event.importance === "Critical"
                                      ? "destructive"
                                      : event.importance === "High"
                                        ? "default"
                                        : "secondary"
                                  }
                                  className="text-xs"
                                >
                                  {event.importance}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {event.type}
                                </Badge>
                              </div>
                            </div>
                            <Body
                              size="sm"
                              className="text-gray-600 dark:text-gray-400"
                            >
                              {event.description}
                            </Body>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Reference Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center">
            <Heading
              as="h3"
              level="h3"
              className="text-gray-900 dark:text-gray-50"
            >
              Quick Reference
            </Heading>
            <Body color="muted" className="mt-2">
              Key dates at a glance for easy planning
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center">
              <div className="space-y-2">
                <UserPlus className="size-8 mx-auto text-primary" />
                <Heading
                  as="h4"
                  level="h5"
                  className="text-gray-900 dark:text-gray-50"
                >
                  Registration Opens
                </Heading>
                <Body weight="semibold" color="primary">
                  January 15, 2026
                </Body>
                <Body size="sm" color="muted">
                  Early registration recommended
                </Body>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="space-y-2">
                <Users className="size-8 mx-auto text-primary" />
                <Heading
                  as="h4"
                  level="h5"
                  className="text-gray-900 dark:text-gray-50"
                >
                  Team Formation
                </Heading>
                <Body weight="semibold" color="primary">
                  February 28, 2026
                </Body>
                <Body size="sm" color="muted">
                  Final team deadline
                </Body>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="space-y-2">
                <Rocket className="size-8 mx-auto text-primary" />
                <Heading
                  as="h4"
                  level="h5"
                  className="text-gray-900 dark:text-gray-50"
                >
                  Hackathon Begins
                </Heading>
                <Body weight="semibold" color="primary">
                  May 10, 2026
                </Body>
                <Body size="sm" color="muted">
                  9:00 AM WAT
                </Body>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="space-y-2">
                <Trophy className="size-8 mx-auto text-primary" />
                <Heading
                  as="h4"
                  level="h5"
                  className="text-gray-900 dark:text-gray-50"
                >
                  Awards Ceremony
                </Heading>
                <Body weight="semibold" color="primary">
                  May 12, 2026
                </Body>
                <Body size="sm" color="muted">
                  7:00 PM WAT
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
