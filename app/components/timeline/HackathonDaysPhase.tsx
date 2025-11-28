import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Rocket,
  Code,
  Users,
  Presentation,
  Trophy,
  Clock,
  MapPin,
  Wifi,
} from "lucide-react";

const hackathonSchedule = [
  {
    day: "Friday",
    date: "May 10, 2026",
    theme: "Launch & Ideation",
    icon: Rocket,
    color: "bg-blue-500",
    sessions: [
      {
        time: "09:00 - 10:30",
        title: "Opening Ceremony",
        description: "Welcome, keynotes, and challenge presentations",
        format: "Hybrid",
        location: "Main Auditorium / Virtual Stream",
      },
      {
        time: "11:00 - 12:30",
        title: "Team Formation Finalization",
        description: "Last-minute team adjustments and introductions",
        format: "Physical + Virtual",
        location: "Networking Spaces",
      },
      {
        time: "14:00 - 17:00",
        title: "Ideation & Planning",
        description: "Solution brainstorming and project planning",
        format: "Team-based",
        location: "Team Workspaces",
      },
      {
        time: "18:00 - 19:30",
        title: "Mentor Speed Dating",
        description: "Meet mentors and establish advisory relationships",
        format: "Hybrid",
        location: "Mentor Hub",
      },
      {
        time: "20:00 - 22:00",
        title: "Welcome Networking Dinner",
        description: "Cultural exchange and relationship building",
        format: "Physical",
        location: "Event Center",
      },
    ],
  },
  {
    day: "Saturday",
    date: "May 11, 2026",
    theme: "Build & Develop",
    icon: Code,
    color: "bg-green-500",
    sessions: [
      {
        time: "08:00 - 09:00",
        title: "Energizer & Daily Briefing",
        description: "Morning motivation and day's agenda",
        format: "Hybrid",
        location: "Main Stage",
      },
      {
        time: "09:00 - 12:00",
        title: "Intensive Development Sprint 1",
        description: "Core solution development and prototyping",
        format: "Team-based",
        location: "Development Labs",
      },
      {
        time: "13:00 - 16:00",
        title: "Intensive Development Sprint 2",
        description: "Feature implementation and testing",
        format: "Team-based",
        location: "Development Labs",
      },
      {
        time: "16:30 - 17:30",
        title: "Technical Workshops",
        description: "Specialized skills and platform training",
        format: "Hybrid",
        location: "Workshop Rooms",
      },
      {
        time: "18:00 - 19:00",
        title: "Progress Check-ins",
        description: "Mentor consultations and feedback sessions",
        format: "Team-based",
        location: "Mentor Stations",
      },
      {
        time: "19:30 - 21:00",
        title: "Cultural Night",
        description: "Celebrating African diversity and innovation",
        format: "Physical",
        location: "Cultural Pavilion",
      },
    ],
  },
  {
    day: "Sunday",
    date: "May 12, 2026",
    theme: "Finalize & Present",
    icon: Presentation,
    color: "bg-purple-500",
    sessions: [
      {
        time: "08:00 - 09:00",
        title: "Final Day Kickoff",
        description: "Submission guidelines and presentation prep",
        format: "Hybrid",
        location: "Main Stage",
      },
      {
        time: "09:00 - 12:00",
        title: "Final Development Sprint",
        description: "Last-minute features and bug fixes",
        format: "Team-based",
        location: "Development Labs",
      },
      {
        time: "12:00 - 13:00",
        title: "Solution Submission Deadline",
        description: "Final submissions and documentation upload",
        format: "Digital",
        location: "Submission Portal",
      },
      {
        time: "14:00 - 17:00",
        title: "Team Presentations",
        description: "5-minute pitches to judges and audience",
        format: "Hybrid",
        location: "Presentation Theaters",
      },
      {
        time: "17:30 - 18:30",
        title: "Judging & Deliberation",
        description: "Judge evaluation and winner selection",
        format: "Closed",
        location: "Judging Room",
      },
      {
        time: "19:00 - 21:00",
        title: "Awards Ceremony & Closing",
        description: "Winner announcements and celebration",
        format: "Hybrid",
        location: "Main Auditorium",
      },
    ],
  },
];

export function HackathonDaysPhase() {
  return (
    <Section spacing="lg">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4">
            Phase Two
          </Badge>
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            Hackathon Days
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto">
            Three intensive days of innovation, collaboration, and creation.
            Teams work around the clock to transform their ideas into working
            solutions that could reshape African trade.
          </Body>
        </motion.div>

        {/* Event Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-4 text-center"
        >
          <Card className="p-6">
            <div className="space-y-2">
              <Clock className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                72 Hours
              </Heading>
              <Body size="sm" color="muted">
                Non-stop innovation
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <MapPin className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                Abuja, Nigeria
              </Heading>
              <Body size="sm" color="muted">
                Physical hub location
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Wifi className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                54 Countries
              </Heading>
              <Body size="sm" color="muted">
                Virtual participation
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Trophy className="size-8 mx-auto text-primary" />
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                $500K+
              </Heading>
              <Body size="sm" color="muted">
                Prizes at stake
              </Body>
            </div>
          </Card>
        </motion.div>

        {/* Daily Schedule */}
        <div className="space-y-12">
          {hackathonSchedule.map((day, dayIndex) => {
            const IconComponent = day.icon;
            return (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
                className="space-y-6"
              >
                {/* Day Header */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-full ${day.color} flex items-center justify-center`}
                  >
                    <IconComponent className="size-8 text-white" />
                  </div>
                  <div>
                    <Heading
                      as="h3"
                      level="h3"
                      className="text-gray-900 dark:text-gray-50"
                    >
                      {day.day} - {day.theme}
                    </Heading>
                    <Body color="muted">{day.date}</Body>
                  </div>
                </div>

                {/* Day Sessions */}
                <div className="grid gap-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={sessionIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: sessionIndex * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                          <div className="w-20 shrink-0">
                            <Badge variant="outline" className="text-xs">
                              {session.time}
                            </Badge>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between gap-4">
                              <Heading
                                as="h4"
                                level="h6"
                                className="text-gray-900 dark:text-gray-50"
                              >
                                {session.title}
                              </Heading>
                              <div className="flex gap-2 shrink-0">
                                <Badge
                                  variant="secondary"
                                  className={`text-xs ${
                                    session.format === "Hybrid"
                                      ? "bg-blue-100 text-blue-800"
                                      : session.format === "Physical"
                                        ? "bg-green-100 text-green-800"
                                        : session.format === "Virtual"
                                          ? "bg-purple-100 text-purple-800"
                                          : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {session.format}
                                </Badge>
                              </div>
                            </div>
                            <Body
                              size="sm"
                              className="text-gray-600 dark:text-gray-400"
                            >
                              {session.description}
                            </Body>
                            <Body size="xs" color="muted">
                              📍 {session.location}
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

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="text-center">
              <Heading
                as="h3"
                level="h4"
                className="text-gray-900 dark:text-gray-50"
              >
                24/7 Support Services
              </Heading>
              <Body color="muted" className="mt-2">
                Comprehensive support throughout the hackathon weekend
              </Body>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="space-y-2">
                <Users className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Technical Mentors
                </Body>
                <Body size="xs" color="muted">
                  Expert guidance available
                </Body>
              </div>
              <div className="space-y-2">
                <Code className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  Development Tools
                </Body>
                <Body size="xs" color="muted">
                  Cloud platforms & APIs
                </Body>
              </div>
              <div className="space-y-2">
                <Wifi className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  High-Speed Internet
                </Body>
                <Body size="xs" color="muted">
                  Reliable connectivity
                </Body>
              </div>
              <div className="space-y-2">
                <Clock className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold">
                  24/7 Facilities
                </Body>
                <Body size="xs" color="muted">
                  Food, rest areas, security
                </Body>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
