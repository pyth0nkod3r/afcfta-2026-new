import { motion } from "framer-motion";
import { Calendar, Rocket, Trophy } from "lucide-react";
import { Link } from "react-router";

import { Section } from "../ui/section";
import { Heading, Body } from "../ui/typography";
import { Button } from "../ui/button";
import { Timeline, type TimelineItem } from "../ui/timeline";

const timelinePhases: TimelineItem[] = [
  {
    id: "phase-1",
    title: "Pre-Hackathon",
    date: "Nov 2025 – Mar 2026",
    description:
      "Launch, registration, team selection, and outreach activities to prepare participants.",
    status: "upcoming",
    icon: <Calendar className="size-4" />,
  },
  {
    id: "phase-2",
    title: "Hackathon",
    date: "Apr 8–10, 2026",
    description:
      "Live competition, mentorship sessions, judging, and awards ceremony in Abuja and virtual hubs.",
    status: "upcoming",
    icon: <Rocket className="size-4" />,
  },
  {
    id: "phase-3",
    title: "Post-Hackathon",
    date: "Apr – Oct 2026",
    description:
      "Incubation programs, implementation support, evaluation, and final reporting for winning teams.",
    status: "upcoming",
    icon: <Trophy className="size-4" />,
  },
];

export function TimelinePreviewSection() {
  return (
    <Section id="timeline-preview" background="muted" className="bg-black!">
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4 text-center mx-auto"
        >
          <Heading as="h2" level="h2" align="center" className="text-white!">
            Hackathon Journey — From Vision to Impact
          </Heading>
          <Body size="lg" align="center" className="text-white!">
            Three phases structure the AfCFTA Hackathon 2026, from preparation
            through execution to post-event scaling and integration.
          </Body>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="[&_[data-slot='timeline-item']_div]:bg-gray-50! [&_[data-slot='timeline-item']_div]:text-gray-900! [&_[data-slot='timeline-item']_h3]:text-gray-900! [&_[data-slot='timeline-item']_p]:text-gray-900! [&_[data-slot='timeline-item']>div:last-child]:h-full [&_[data-slot='timeline-item']>div:last-child]:flex"
        >
          <Timeline
            items={timelinePhases}
            orientation="horizontal"
            mobileOrientation="vertical"
            className="w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white hover:text-black"
          >
            <Link to="/timeline-format">See Full Schedule</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
