import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Handshake,
  ShieldCheck,
  Users,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router";

import { Section } from "./ui/section";
import { Heading, Body } from "./ui/typography";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

const registrationCTAs = [
  {
    label: "Register a Team",
    href: "/register/team",
    icon: Users,
    accent: "primary",
  },
  {
    label: "Mentor Signup",
    href: "/register/mentor",
    icon: UserPlus,
    accent: "muted",
  },
  {
    label: "Become a Partner",
    href: "/register/partner",
    icon: Handshake,
    accent: "outline",
  },
];

const registrationDetails = [
  {
    title: "Three-person core squads",
    description:
      "Each team confirms a lead, technical builder, and policy/market anchor by Feb 15.",
    icon: ShieldCheck,
  },
  {
    title: "Hybrid qualifying sprints",
    description:
      "Virtual onboarding kicks off Mar 3, followed by in-person Abuja immersion for finalists.",
    icon: CalendarCheck,
  },
  {
    title: "Pan-African mentor pod",
    description:
      "Mentors receive curated playbooks and weekly office hours to guide teams across trade corridors.",
    icon: Handshake,
  },
];

export function RegistrationSection() {
  return (
    <Section
      id="registration"
      background="muted"
      spacing="xl"
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/12 via-white/5 to-transparent" />
      <div className="rounded-[36px] border border-white/15 bg-black/60 p-10 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Body
              as="p"
              size="sm"
              transform="uppercase"
              className="tracking-[0.4em] text-white/65"
            >
              Registration
            </Body>

            <Heading as="h2" level="h2" className="text-white!">
              Secure Your Spot for the AfCFTA Hackathon 2026
            </Heading>

            <Body size="lg" className="text-white/80">
              Lock in your place for the continent’s flagship digital trade
              buildathon. Whether you are a startup team, mentor, or corporate
              ally, the 2026 cohort blends virtual prep with on-ground showcases
              to accelerate deployment-ready solutions.
            </Body>

            <div className="flex flex-wrap gap-3">
              {registrationCTAs.map((cta) => {
                const Icon = cta.icon;
                return (
                  <Button
                    key={cta.label}
                    asChild
                    size="lg"
                    className={cn(
                      "group flex items-center gap-2 rounded-2xl px-5",
                      cta.accent === "primary" &&
                        "bg-white text-black hover:bg-white/90",
                      cta.accent === "muted" &&
                        "bg-white/10 text-white hover:bg-white/20",
                      cta.accent === "outline" &&
                        "border border-white/30 text-white hover:bg-white hover:text-black",
                    )}
                  >
                    <Link to={cta.href}>
                      <Icon className="size-4" aria-hidden />
                      {cta.label}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                );
              })}
            </div>

            <Body size="sm" className="text-white/65">
              Registration closes April 28, 2026. Accepted teams receive cohort
              onboarding packs and mentorship pairings within five business
              days.
            </Body>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {registrationDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-4 rounded-3xl border border-white/15 bg-white/5 p-5 text-white backdrop-blur-sm"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/12 text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xl font-semibold text-white">
                      {detail.title}
                    </p>
                    <p className="text-sm text-white/70">
                      {detail.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
