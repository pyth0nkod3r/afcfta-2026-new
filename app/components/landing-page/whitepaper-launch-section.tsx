import { motion } from "framer-motion";
import {
  Download,
  FileText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

import { Section } from "../ui/section";
import { Heading, Body } from "../ui/typography";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const releaseStats = [
  { label: "Pages of deep dives", value: "94" },
  { label: "Policy pilots mapped", value: "18" },
  { label: "Partner interviews", value: "32" },
];

const highlightFeatures = [
  {
    title: "Unified Trade Rail Vision",
    description:
      "How AfCFTA Digital Trade Protocol unlocks shared rails for payments, customs, identity, and data flows.",
    icon: FileText,
  },
  {
    title: "Risk & Compliance Playbooks",
    description:
      "Sandbox-ready guardrails co-authored with Smart Africa, AUDA-NEPAD, and leading regulators.",
    icon: ShieldCheck,
  },
  {
    title: "Founder Field Notes",
    description:
      "Case studies from 2025 pilot teams on scaling across multiple economic blocs and corridors.",
    icon: Sparkles,
  },
];

export function WhitepaperLaunchSection() {
  return (
    <Section
      id="whitepaper"
      background="muted"
      spacing="lg"
      className="relative bg-black! text-white! pb-32 min-h-[600px]"
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/10 via-white/5 to-transparent" />
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

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link to="/assets/afcfta-digital-trade-whitepaper.pdf">
                <Download className="size-4" aria-hidden />
                Download Whitepaper
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black"
            >
              <Link to="/media/whitepaper-briefing">
                <PlayCircle className="size-4" aria-hidden />
                Request Launch Briefing
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {releaseStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center shadow-sm"
              >
                <p className="text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
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

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {highlightFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="overflow-hidden border-white/15 bg-white/5 text-white"
              >
                <CardHeader className="flex items-start gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <CardTitle className="text-xl text-white">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base text-white/70">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                {index === 0 && (
                  <CardContent className="pt-0 text-sm text-white/60">
                    Updated quarterly with field intelligence from AfCFTA pilot
                    corridors.
                  </CardContent>
                )}
              </Card>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
