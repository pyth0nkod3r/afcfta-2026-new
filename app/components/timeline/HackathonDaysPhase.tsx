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
    day: "Day 1",
    date: "April 8",
    theme: "Launch & Ideation Sprint",
    icon: Rocket,
    color: "bg-blue-500",
    sessions: [
      {
        time: "",
        title: "Opening Ceremony",
        description: "Keynote by AfCFTA Secretariat",
        format: "Hybrid",
        location: "",
      },
      {
        time: "",
        title: "Policy Forum on Digital Trade",
        description: "",
        format: "Hybrid",
        location: "",
      },
      {
        time: "",
        title: "Team Setup & Ideation Workshops",
        description: "",
        format: "Team-based",
        location: "",
      },
    ],
  },
  {
    day: "Day 2",
    date: "April 9",
    theme: "Build & Validate",
    icon: Code,
    color: "bg-green-500",
    sessions: [
      {
        time: "",
        title: "Solution Design",
        description: "",
        format: "Team-based",
        location: "",
      },
      {
        time: "",
        title: "Mentorship Clinics",
        description: "",
        format: "Hybrid",
        location: "",
      },
      {
        time: "",
        title: "Prototype Development",
        description: "",
        format: "Team-based",
        location: "",
      },
      {
        time: "",
        title: "AI & API Support Sessions",
        description: "",
        format: "Hybrid",
        location: "",
      },
    ],
  },
  {
    day: "Day 3",
    date: "April 10",
    theme: "Pitch & Celebrate",
    icon: Presentation,
    color: "bg-purple-500",
    sessions: [
      {
        time: "",
        title: "Demo Day",
        description: "",
        format: "Hybrid",
        location: "",
      },
      {
        time: "",
        title: "Final Pitches",
        description: "",
        format: "Hybrid",
        location: "",
      },
      {
        time: "",
        title: "Judging",
        description: "",
        format: "Closed",
        location: "",
      },
      {
        time: "",
        title: "Awards Ceremony",
        description: "",
        format: "Hybrid",
        location: "",
      },
      {
        time: "",
        title: "Launch of the Nigeria AfCFTA Whitepaper on Digital Trade & AI",
        description: "",
        format: "Hybrid",
        location: "",
      },
    ],
  },
];

export function HackathonDaysPhase() {
  return (
    <Section background="muted" spacing="lg" className="bg-white text-black">
      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Badge variant="outline" className="mb-4 border-black/20 text-black">
            💡 2️⃣ Phase Two
          </Badge>
          <Heading as="h2" level="h2" className="text-black">
            Three Days of Innovation, Collaboration, and Action
          </Heading>
          <Body size="lg" className="max-w-3xl mx-auto text-black">
            This is the heart of the AfCFTA Hackathon — where innovation meets
            execution. Participants will co-create and prototype digital
            solutions addressing continental trade challenges under expert
            mentorship and policy guidance.
          </Body>
        </motion.div>

        {/* Event Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 text-center"
        >
          <Card className="p-6">
            <div className="space-y-2">
              <Clock className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h4" className="text-black">
                April 8–10, 2026
              </Heading>
              <Body size="sm" className="text-black/70">
                Hackathon Days
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <MapPin className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h4" className="text-black">
                Hybrid Format
              </Heading>
              <Body size="sm" className="text-black/70">
                Physical (Abuja) + Virtual (Online)
              </Body>
            </div>
          </Card>
          <Card className="p-6">
            <div className="space-y-2">
              <Wifi className="size-8 mx-auto text-primary" />
              <Heading as="h3" level="h4" className="text-black">
                Across Africa
              </Heading>
              <Body size="sm" className="text-black/70">
                Online participation
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
                    <Heading as="h3" level="h3" className="text-black">
                      {day.day} - {day.theme}
                    </Heading>
                    <Body className="text-black/70">{day.date}</Body>
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
                                className="text-black"
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
                            <Body size="sm" className="text-black/70">
                              {session.description}
                            </Body>
                            <Body size="xs" className="text-black/60">
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

        {/* Special Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="text-center">
              <Heading as="h3" level="h4" className="text-black">
                Special Sessions
              </Heading>
              <Body className="mt-2 text-black/70">
                Additional activities throughout the hackathon
              </Body>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="space-y-2">
                <Users className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold" className="text-black">
                  Policy Dialogues
                </Body>
                <Body size="xs" className="text-black/60">
                  AfCFTA and Nigeria Coordination Office
                </Body>
              </div>
              <div className="space-y-2">
                <Code className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold" className="text-black">
                  Mentorship Huddles
                </Body>
                <Body size="xs" className="text-black/60">
                  Trade, tech, and startup leaders
                </Body>
              </div>
              <div className="space-y-2">
                <Wifi className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold" className="text-black">
                  Investor Networking
                </Body>
                <Body size="xs" className="text-black/60">
                  Ecosystem networking forum
                </Body>
              </div>
              <div className="space-y-2">
                <Trophy className="size-8 mx-auto text-primary" />
                <Body size="sm" weight="semibold" className="text-black">
                  Continental Demo
                </Body>
                <Body size="xs" className="text-black/60">
                  Hybrid broadcast showcase
                </Body>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
