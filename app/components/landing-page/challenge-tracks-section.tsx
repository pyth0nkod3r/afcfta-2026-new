import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileCheck2,
  Globe2,
  Leaf,
  type LucideIcon,
  Network,
  Radar,
  ScanBarcode,
  ServerCog,
  ShieldCheck,
  Store,
  Users2,
} from "lucide-react";
import { Link } from "react-router";

import { Section } from "../ui/section";
import { Heading, Body } from "../ui/typography";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

type ChallengeTrack = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
  detail: {
    context: string;
    deliverables: string[];
  };
};

type JudgingCriterion = {
  id: string;
  title: string;
  description: string;
  weight: number;
};

const challengeTracks: ChallengeTrack[] = [
  {
    id: "digital-trade-rails",
    title: "Pan-African Digital Trade Rails",
    summary:
      "Interoperable payments, FX, and escrow services aligned with AfCFTA clearing systems.",
    tags: ["Payments", "PAPSS", "FX"],
    icon: Globe2,
    detail: {
      context:
        "Create rails that let SMEs collect, settle, and reconcile multi-currency payments in seconds.",
      deliverables: [
        "API layer that bridges PAPSS, card, and mobile money switches",
        "Risk + treasury dashboard for settlement visibility",
      ],
    },
  },
  {
    id: "smart-customs",
    title: "Smart Customs & Logistics",
    summary:
      "Digitized manifests, automated inspections, and cross-border tracking for faster clearance.",
    tags: ["Logistics", "Tracking", "AI"],
    icon: ScanBarcode,
    detail: {
      context:
        "Slash port dwell time and leakages by combining IoT telemetry with customs risk models.",
      deliverables: [
        "Unified cargo identity plus paperless declaration workflow",
        "AI inspection assistant that scores anomalies in real time",
      ],
    },
  },
  {
    id: "trusted-identity",
    title: "Trusted Digital Identity",
    summary:
      "Privacy-first identity wallets that travel with founders, teams, and products.",
    tags: ["KYC", "Wallets", "Compliance"],
    icon: ShieldCheck,
    detail: {
      context:
        "Enable instant onboarding for traders using verifiable credentials mapped to AfCFTA protocols.",
      deliverables: [
        "Self-sovereign ID wallet with consent layer",
        "Verifier portal that issues role-based access to border services",
      ],
    },
  },
  {
    id: "trade-intelligence",
    title: "Trade Intelligence & Forecasting",
    summary:
      "Data copilots that surface demand gaps, price spreads, and policy updates per corridor.",
    tags: ["AI", "Insights", "Data"],
    icon: Radar,
    detail: {
      context:
        "Give founders live, trusted market intelligence so they can decide where to launch next.",
      deliverables: [
        "Predictive model that scores corridor attractiveness",
        "Narrative briefings (text + charts) consumable by policy teams",
      ],
    },
  },
  {
    id: "regtech",
    title: "RegTech & Compliance Automation",
    summary:
      "Rule engines and reporting pipelines that keep teams compliant across 54 markets.",
    tags: ["Policy", "Automation", "Security"],
    icon: FileCheck2,
    detail: {
      context:
        "Automate repetitive regulatory filings and make AfCFTA compliance programmable.",
      deliverables: [
        "No-code rule builder tied to AfCFTA annex updates",
        "Secure evidence vault + submission APIs to regulators",
      ],
    },
  },
  {
    id: "green-corridors",
    title: "Green Trade & Sustainability",
    summary:
      "Climate-aligned logistics, carbon accounting, and circular economy marketplaces.",
    tags: ["Climate", "Traceability"],
    icon: Leaf,
    detail: {
      context:
        "Track sustainability KPIs per shipment and unlock incentives for low-carbon operations.",
      deliverables: [
        "Embedded MRV (measurement, reporting, verification) toolkit",
        "Carbon credit or incentive exchange rails for compliant SMEs",
      ],
    },
  },
  {
    id: "sme-marketplaces",
    title: "SME Enablement Marketplaces",
    summary:
      "B2B exchanges that bundle talent, tooling, and financing for export-ready SMEs.",
    tags: ["SMEs", "Marketplaces"],
    icon: Store,
    detail: {
      context:
        "Blueprint onboarding + matchmaking so 10,000 SMEs can sell services across the bloc.",
      deliverables: [
        "Composable storefront + onboarding checklist",
        "Integrated working capital offers per transaction risk score",
      ],
    },
  },
  {
    id: "infrastructure",
    title: "Infrastructure & API Connectivity",
    summary:
      "Developer platforms, observability, and policy sandboxes for continent-scale builders.",
    tags: ["DevTools", "APIs"],
    icon: ServerCog,
    detail: {
      context:
        "Abstract away infrastructure so teams can focus on customer value, not plumbing.",
      deliverables: [
        "One-click AfCFTA sandbox environment with seeded data",
        "Observability console for cross-border latency + uptime",
      ],
    },
  },
  {
    id: "policy-simulator",
    title: "Policy Co-Creation Simulator",
    summary:
      "Scenario engines that let governments and founders co-design trade interventions.",
    tags: ["Simulation", "GovTech"],
    icon: Network,
    detail: {
      context:
        "Translate complex policy drafts into interactive sandboxes with measurable outcomes.",
      deliverables: [
        "Scenario builder with adjustable policy levers",
        "Impact reports comparing compliance cost vs. trade volume",
      ],
    },
  },
  {
    id: "talent-coalitions",
    title: "Talent & Workforce Coalitions",
    summary:
      "Collaboration hubs for mentors, diaspora experts, and technical reviewers.",
    tags: ["Community", "Mentorship"],
    icon: Users2,
    detail: {
      context:
        "Keep teams supported beyond demo day with structured mentorship and peer reviews.",
      deliverables: [
        "Mentor marketplace with verified expertise signals",
        "Async review workflow for prototypes and policy drafts",
      ],
    },
  },
];

const judgingCriteria: JudgingCriterion[] = [
  {
    id: "impact",
    title: "AfCFTA Impact & Scale",
    description:
      "Market coverage, policy alignment, and continental relevance of the solution.",
    weight: 30,
  },
  {
    id: "technical-execution",
    title: "Technical Execution",
    description:
      "Architecture quality, interoperability, security, and maturity of the build.",
    weight: 20,
  },
  {
    id: "regulatory-fit",
    title: "Regulatory & Compliance Fit",
    description:
      "Clarity on standards, data protection, and how AfCFTA annexes are embedded.",
    weight: 15,
  },
  {
    id: "sustainability",
    title: "Sustainability & Adoption",
    description:
      "Business model strength, go-to-market motion, and long-term viability.",
    weight: 15,
  },
  {
    id: "team",
    title: "Team & Collaboration",
    description:
      "Cross-functional expertise, ability to partner with governments + private sector.",
    weight: 10,
  },
  {
    id: "story",
    title: "Demo Narrative",
    description:
      "Clarity of storytelling, user journey, and ability to communicate measurable outcomes.",
    weight: 10,
  },
];

export function ChallengeTracksPreviewSection() {
  return (
    <Section
      id="challenge-tracks-preview"
      background="muted"
      className="bg-linear-to-b from-black via-neutral-950 to-neutral-900 text-white"
    >
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <Badge
            variant="secondary"
            className="mx-auto bg-white/10 text-white/80 border-white/15"
          >
            10 Challenge Tracks
          </Badge>
          <Heading as="h2" level="h2" align="center" className="text-white!">
            Challenge Tracks Preview
          </Heading>
          <Body size="lg" align="center" className="text-white/70">
            Explore the AfCFTA Hackathon focus areas spanning trade rails, smart
            customs, regtech, climate readiness, and the ecosystems that power
            continental collaboration.
          </Body>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challengeTracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="h-full"
              >
                <Card className="h-full border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur">
                  <CardHeader className="gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <Body
                        as="p"
                        size="xs"
                        transform="uppercase"
                        className="tracking-[0.25em] text-white/60"
                      >
                        Track {String(index + 1).padStart(2, "0")}
                      </Body>
                      <CardTitle className="text-white text-xl">
                        {track.title}
                      </CardTitle>
                      <CardDescription className="text-white/75">
                        {track.summary}
                      </CardDescription>
                    </div>
                    <CardAction>
                      <Link
                        to="/challenge-tracks"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-white"
                      >
                        Learn more
                        <ArrowUpRight className="size-4" aria-hidden />
                      </Link>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2">
                      {track.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-white/15 bg-white/5 text-white/70"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <Body
              size="sm"
              transform="uppercase"
              className="tracking-[0.25em] text-white/60"
            >
              Deep Dive
            </Body>
            <Heading
              as="h3"
              level="h3"
              className="mt-2 text-white! leading-tight"
            >
              Track details & deliverables
            </Heading>
            <Body className="mt-2 text-white/70">
              Expand a track to see the core problem statement and what judges
              expect to see in your submission.
            </Body>

            <Accordion
              type="single"
              collapsible
              defaultValue="digital-trade-rails"
              className="mt-6 divide-y divide-white/10"
            >
              {challengeTracks.map((track) => (
                <AccordionItem
                  key={track.id}
                  value={track.id}
                  className="border-white/0"
                >
                  <AccordionTrigger className="text-white hover:no-underline">
                    <div className="flex flex-col gap-1 text-left">
                      <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                        {track.tags[0]}
                      </span>
                      <span className="text-base font-semibold">
                        {track.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/75">
                    <p>{track.detail.context}</p>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {track.detail.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                        >
                          <span className="mt-1 size-1.5 rounded-full bg-secondary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <Body
              size="sm"
              transform="uppercase"
              className="tracking-[0.25em] text-white/60"
            >
              Judging Framework
            </Body>
            <Heading
              as="h3"
              level="h4"
              className="mt-2 text-white! leading-tight"
            >
              Weighted criteria table (100 pts)
            </Heading>
            <Body className="mt-2 text-white/70">
              Map your prototype and story to the scoring grid below to maximize
              your pitch.
            </Body>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-4 text-left text-sm">
                <tbody>
                  {judgingCriteria.map((criterion) => (
                    <tr key={criterion.id} className="align-top">
                      <td className="w-2/3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-white font-semibold">
                          {criterion.title}
                        </p>
                        <p className="mt-1 text-white/70 text-sm">
                          {criterion.description}
                        </p>
                      </td>
                      <td className="w-1/3 rounded-2xl border border-white/5 bg-white/10 p-4 align-middle">
                        <div className="flex items-center gap-3 text-white/80">
                          <span className="font-semibold text-white">
                            {criterion.weight}%
                          </span>
                          <div className="h-2 flex-1 rounded-full bg-white/20">
                            <div
                              className="h-full rounded-full bg-linear-to-r from-secondary via-primary to-white"
                              style={{ width: `${criterion.weight}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="flex justify-center"
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link to="/challenge-tracks">View all challenge tracks</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
