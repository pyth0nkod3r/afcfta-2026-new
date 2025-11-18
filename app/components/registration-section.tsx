import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Handshake,
  Users,
  UserPlus,
  CalendarDays,
  MapPin,
  Radio,
  Globe2,
  Lightbulb,
  Network,
  Sparkles,
  Brain,
  Leaf,
  Users2,
  Calendar,
  Rocket,
  Trophy,
  Medal,
  Award,
  Star,
  BadgeCheck,
  Building2,
  Gem,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router";

import { Section } from "./ui/section";
import { Heading, Body } from "./ui/typography";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";
import { CountdownTimer } from "./ui/countdown-timer";
import { Timeline, type TimelineItem } from "./ui/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Countdown from launch date: November 10, 2025
const launchDate = new Date("2025-11-10T09:00:00+01:00");

const registrationCTAs = [
  {
    label: "Register Your Team",
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
    label: "Partner Signup",
    href: "/register/partner",
    icon: Handshake,
    accent: "outline",
  },
];

const registrationDetails = [
  {
    title: "Teams of 3–4 innovators",
    description:
      "Form teams of 3-4 members with diverse skills in technology, business, and policy.",
    icon: Users,
  },
  {
    title: "Pan-African participation encouraged",
    description:
      "Open to innovators, developers, and entrepreneurs from across all African countries.",
    icon: Globe2,
  },
  {
    title: "Hybrid format (Physical & Virtual)",
    description:
      "Participate in-person in Abuja or join virtually from anywhere in Africa.",
    icon: Radio,
  },
  {
    title: "Deadline: March 15, 2026",
    description:
      "Registration closes on March 15, 2026. Early registration recommended.",
    icon: CalendarCheck,
  },
];

const objectives = [
  {
    title: "Inspire innovation around digital trade",
    description:
      "Foster creative solutions that transform how Africa trades digitally.",
    icon: Sparkles,
  },
  {
    title: "Build cross-border trade solutions",
    description:
      "Develop technology-driven solutions that accelerate intra-African commerce.",
    icon: Globe2,
  },
  {
    title: "Connect Africa's tech ecosystem",
    description:
      "Bring together innovators, developers, policymakers, and entrepreneurs.",
    icon: Network,
  },
  {
    title: "Showcase AI, fintech, and logistics innovations",
    description:
      "Highlight cutting-edge technologies shaping Africa's digital trade future.",
    icon: Lightbulb,
  },
];

const pillars = [
  {
    title: "Innovation for Digital Trade",
    description:
      "Championing innovative solutions that transform how Africa conducts digital commerce.",
    icon: Lightbulb,
  },
  {
    title: "AI for Trade Facilitation",
    description:
      "Leveraging artificial intelligence to streamline and optimize cross-border trade processes.",
    icon: Brain,
  },
  {
    title: "Technology for MSMEs",
    description:
      "Empowering micro, small, and medium enterprises with accessible digital trade tools.",
    icon: Users2,
  },
  {
    title: "Sustainability & Inclusion",
    description:
      "Ensuring equitable growth and sustainable practices across Africa&apos;s digital trade ecosystem.",
    icon: Leaf,
  },
];

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

const prizeTiers = [
  {
    id: "grand",
    title: "Grand Prize",
    amount: "₦20,000,000",
    description: "Trophy + Pilot Project + Accelerator Admission",
    highlights: [
      "Trophy recognition",
      "Pilot project deployment opportunity",
      "Accelerator program admission",
    ],
    icon: Trophy,
    featured: true,
  },
  {
    id: "second",
    title: "2nd Prize",
    amount: "₦10,000,000",
    description: "Cash + Mentorship",
    highlights: [
      "Cash prize",
      "Dedicated mentorship program",
      "Innovation hub access",
    ],
    icon: Medal,
  },
  {
    id: "third",
    title: "3rd Prize",
    amount: "₦7,000,000",
    description: "Cash + Innovation Hub Access",
    highlights: ["Cash prize", "Innovation hub access", "Technical support"],
    icon: Award,
  },
  {
    id: "top10",
    title: "Top 10 Teams",
    amount: "Share ₦23,000,000",
    description: "Cash prizes distributed among top teams",
    highlights: [
      "Shared prize pool",
      "Recognition certificates",
      "Mentorship opportunities",
    ],
    icon: Star,
  },
  {
    id: "category",
    title: "Category Awards",
    amount: "Multiple Categories",
    description:
      "FinTech, AgriTech, Logistics, AI Tools, Women & Youth Innovation",
    highlights: [
      "FinTech Innovation Award",
      "AgriTech Excellence Award",
      "Logistics & Supply Chain Award",
      "AI Tools for Trade Award",
      "Women & Youth Innovation Award",
    ],
    icon: Sparkles,
  },
];

const PARTNER_TIERS = [
  {
    name: "Platinum",
    icon: BadgeCheck,
    perks: [
      "VIP keynote & branding at showcase",
      "Dedicated demo booth",
      "Strategic 1:1 with AfCFTA leadership",
      "Continental PR amplification",
    ],
    highlight: true,
  },
  {
    name: "Diamond",
    icon: Gem, // You may need to import Gem from lucide-react
    perks: [
      "Premium branding across all media",
      "Investor matchmaking session",
      "Host private roundtable event",
      "Priority access to winning teams",
    ],
  },
  {
    name: "Gold",
    icon: Building2,
    perks: [
      "Official partner logo placement",
      "Participate in mentor clinics",
      "Post-event reporting inclusion",
    ],
  },
  {
    name: "Silver",
    icon: Handshake,
    perks: [
      "Partner logo on website",
      "Social media mentions",
      "Event program listing",
    ],
  },
];

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-surface text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero-placeholder.png')] bg-cover bg-center opacity-40 md:opacity-60" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-background/85" />
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                AfCFTA Hackathon 2026
              </p>
              <h1
                id="hero-heading"
                className="text-3xl font-heading font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Digital Trade, Technology & AI — The New Trade Frontier
              </h1>
              <p className="max-w-2xl text-base text-white/80 sm:text-lg">
                Join innovators, developers, policymakers, and entrepreneurs to
                build technology-driven trade solutions that accelerate
                Africa&apos;s digital transformation under the AfCFTA framework.
              </p>
            </div>

            <ul className="flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:text-base">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Abuja, Nigeria",
                },
                {
                  icon: CalendarDays,
                  label: "Dates",
                  value: "April 8–10, 2026",
                },
                {
                  icon: Radio,
                  label: "Format",
                  value: "Hybrid Event",
                },
              ].map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm sm:min-w-[220px]"
                >
                  <Icon className="mt-0.5 size-5 text-secondary" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white sm:text-base">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/40 text-white hover:text-primary sm:w-auto"
              >
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="w-full text-white hover:bg-white/10 hover:text-primary sm:w-auto"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={cn(
              "rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-8",
              "border border-white/20",
            )}
          >
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Launches in
            </p>
            <CountdownTimer
              targetDate={launchDate}
              className="mt-6"
              completionMessage="AfCFTA Hackathon 2026 is live!"
            />
            <p className="mt-6 text-center text-xs text-white/70">
              Secure your spot before the schedule fills up.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-secondary/40 blur-3xl sm:w-72"
      />
    </section>
  );
}

export function AboutSection() {
  return (
    <Section id="about" background="muted" className="bg-black!">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <Heading as="h2" level="h2" align="center" className="text-white!">
            Empowering Africa&apos;s Digital Trade Future
          </Heading>
          <Body size="lg" align="center" className="text-white!">
            The AfCFTA Hackathon 2026 brings together innovators, developers,
            policymakers, and entrepreneurs to build technology-driven trade
            solutions that accelerate Africa&apos;s digital transformation under
            the African Continental Free Trade Area (AfCFTA) framework.
          </Body>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {objectives.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                "group flex h-full flex-col gap-4 rounded-2xl border border-border/80 bg-gray-50! p-6 shadow-sm",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
              )}
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="size-5" aria-hidden />
              </div>
              <Heading as="h3" level="h4" className="text-lg text-gray-900!">
                {title}
              </Heading>
              <Body size="sm" className="text-gray-900!">
                {description}
              </Body>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function PillarsSection() {
  return (
    <Section id="pillars" background="muted" className="bg-white text-black">
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4 text-center mx-auto"
        >
          <Heading as="h2" level="h2" align="center" className="text-black">
            Hackathon Pillars
          </Heading>
          <Body size="lg" align="center" className="text-black/80">
            Four strategic pillars guide every track, mentorship initiative, and
            partnership activation throughout the AfCFTA Hackathon.
          </Body>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card className="h-full border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <CardHeader className="flex flex-col gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-lg font-semibold text-white">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <Body size="sm" className="text-white/80">
                    {description}
                  </Body>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

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

export function RewardsPreviewSection() {
  return (
    <Section id="rewards" background="muted" spacing="lg" className="bg-black!">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <Heading as="h2" level="h2" align="center" className="text-white!">
          ₦60 Million in Prizes + Mentorship & Acceleration Opportunities
        </Heading>
        <Body size="lg" align="center" className="text-white/80">
          Significant cash prizes, implementation grants, and non-cash benefits
          accelerate winning teams from prototype to pilot across the continent.
        </Body>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {prizeTiers.map((tier) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: prizeTiers.indexOf(tier) * 0.05,
            }}
            className="group flex h-full flex-col gap-4 rounded-2xl border border-border/80 bg-gray-50! p-6 shadow-sm"
          >
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <tier.icon className="size-5" aria-hidden />
            </div>
            <Heading as="h3" level="h4" className="text-lg text-gray-900!">
              {tier.title}
            </Heading>
            <Body size="sm" className="text-gray-900!">
              <p className="text-lg font-semibold text-gray-900!">
                {tier.amount}
              </p>
              <p className="text-sm text-gray-900!">{tier.description}</p>
            </Body>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-gray-900!">
              {tier.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>
                  <span className="inline-flex size-4 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle className="size-3" aria-hidden />
                  </span>{" "}
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function PartnershipPreviewSection() {
  return (
    <Section
      id="partnership"
      background="muted"
      spacing="lg"
      className="bg-black!"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <Heading as="h2" level="h2" align="center" className="text-white!">
          Partnership Opportunities
        </Heading>
        <Body size="lg" align="center" className="text-white/80">
          Join us as an official partner to amplify your brand, reach, and
          impact in the AfCFTA ecosystem.
        </Body>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {PARTNER_TIERS.map((tier) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: PARTNER_TIERS.indexOf(tier) * 0.05,
            }}
            className="group flex h-full flex-col gap-4 rounded-2xl border border-border/80 bg-gray-50! p-6 shadow-sm"
          >
            <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <tier.icon className="size-5" aria-hidden />
            </div>
            <Heading as="h3" level="h4" className="text-lg text-gray-900!">
              {tier.name}
            </Heading>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-gray-900!">
              {tier.perks.map((perk, perkIndex) => (
                <li key={perkIndex}>
                  <span className="inline-flex size-4 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle className="size-3" aria-hidden />
                  </span>{" "}
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function WhitepaperLaunchSection() {
  return (
    <Section
      id="whitepaper"
      background="muted"
      spacing="lg"
      className="relative bg-black! text-white! pb-32 min-h-[600px]"
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/12 via-white/5 to-transparent" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <Body
            as="p"
            size="sm"
            transform="uppercase"
            className="tracking-[0.35em] text-white/60"
          >
            Whitepaper Launch
          </Body>
          <Heading as="h2" level="h2" className="text-white!">
            Launch of the AfCFTA Nigeria Whitepaper on Digital Trade, Technology
            & Innovation
          </Heading>
          <Body size="lg" className="text-white/80">
            Strengthen Nigeria&apos;s leadership in AfCFTA Digital Trade. This
            whitepaper aligns policy with innovation and launches during the
            Hackathon Opening Ceremony.
          </Body>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Download Whitepaper
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/40 text-white hover:text-primary sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Key Points */}
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
              <span>
                Strengthen Nigeria&apos;s leadership in AfCFTA Digital Trade
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
              <span>Align policy with innovation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
              <span>Launch during Hackathon Opening Ceremony</span>
            </li>
          </ul>
        </motion.div>

        {/* ... right side with placeholder for minister photo and Nigeria AfCFTA Coordination Office logo ... */}
      </div>
    </Section>
  );
}

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
              Ready to Shape Africa&apos;s Trade Future?
            </Heading>

            <Body size="lg" className="text-white/80">
              Join the AfCFTA Hackathon 2026 and be part of building
              technology-driven solutions that accelerate Africa&apos;s digital
              transformation. Register your team, become a mentor, or partner
              with us.
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
              Registration closes March 15, 2026. Accepted teams receive
              onboarding information and mentorship pairings within five
              business days.
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
