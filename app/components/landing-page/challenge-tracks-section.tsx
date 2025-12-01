import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileCheck2,
  Globe2,
  Leaf,
  type LucideIcon,
  Radar,
  ShieldCheck,
  Store,
  Brain,
  CreditCard,
  Truck,
  GraduationCap,
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
    id: "digital-trade-facilitation",
    title: "Digital Trade Facilitation",
    summary:
      "Simplify and digitize cross-border trade processes through smart automation, blockchain, and real-time customs coordination.",
    tags: ["Automation", "Blockchain", "Customs"],
    icon: Globe2,
    detail: {
      context:
        "Focus areas: trade document exchange, border integration, data interoperability, and single-window systems.",
      deliverables: [
        "Smart automation for trade document exchange",
        "Real-time customs coordination systems",
        "Data interoperability solutions",
        "Single-window system implementations",
      ],
    },
  },
  {
    id: "ai-trade-intelligence",
    title: "AI for Trade Intelligence",
    summary:
      "Leverage Artificial Intelligence to generate insights on trade trends, policy impact, and market opportunities across Africa.",
    tags: ["AI", "Analytics", "Insights"],
    icon: Brain,
    detail: {
      context:
        "Focus areas: predictive analytics, trade data visualization, policy simulation, and smart decision support.",
      deliverables: [
        "Predictive analytics for trade trends",
        "Trade data visualization platforms",
        "Policy simulation tools",
        "Smart decision support systems",
      ],
    },
  },
  {
    id: "fintech-msme-financing",
    title: "FinTech & MSME Financing",
    summary:
      "Bridge Africa's financing gap by building inclusive digital financial tools for MSMEs and informal traders.",
    tags: ["FinTech", "MSME", "Financing"],
    icon: CreditCard,
    detail: {
      context:
        "Focus areas: credit scoring, alternative lending models, blockchain-based financing, and regional remittances.",
      deliverables: [
        "Credit scoring algorithms for MSMEs",
        "Alternative lending model platforms",
        "Blockchain-based financing solutions",
        "Regional remittance systems",
      ],
    },
  },
  {
    id: "ecommerce-msme-empowerment",
    title: "E-Commerce & MSME Empowerment",
    summary:
      "Enable small businesses to access continental markets through digital commerce and inclusive marketplaces.",
    tags: ["E-Commerce", "Marketplaces", "Digital"],
    icon: Store,
    detail: {
      context:
        "Focus areas: multi-currency e-commerce, logistics integration, digital payments, and merchant support tools.",
      deliverables: [
        "Multi-currency e-commerce platforms",
        "Logistics integration systems",
        "Digital payment solutions",
        "Merchant support tools",
      ],
    },
  },
  {
    id: "smart-logistics-supply-chains",
    title: "Smart Logistics & Supply Chains",
    summary:
      "Design logistics innovations that improve the movement of goods and reduce trade bottlenecks across borders.",
    tags: ["Logistics", "IoT", "Supply Chain"],
    icon: Truck,
    detail: {
      context:
        "Focus areas: smart routing, IoT-enabled tracking, digital warehousing, and cross-border coordination.",
      deliverables: [
        "Smart routing algorithms",
        "IoT-enabled tracking systems",
        "Digital warehousing solutions",
        "Cross-border coordination platforms",
      ],
    },
  },
  {
    id: "documentation-compliance-automation",
    title: "Documentation & Compliance Automation",
    summary:
      "Build digital solutions that simplify trade documentation, certifications, and regulatory compliance.",
    tags: ["Documentation", "Compliance", "Automation"],
    icon: FileCheck2,
    detail: {
      context:
        "Focus areas: digital certificates of origin, automated customs clearance, and trade data verification.",
      deliverables: [
        "Digital certificates of origin systems",
        "Automated customs clearance solutions",
        "Trade data verification platforms",
        "Regulatory compliance automation tools",
      ],
    },
  },
  {
    id: "sustainable-inclusive-trade",
    title: "Sustainable & Inclusive Trade",
    summary:
      "Promote green, gender-inclusive, and equitable trade practices through technology-driven solutions.",
    tags: ["Sustainability", "Inclusion", "Green"],
    icon: Leaf,
    detail: {
      context:
        "Focus areas: carbon tracking, circular economy solutions, women-led trade platforms, and green supply chains.",
      deliverables: [
        "Carbon tracking systems",
        "Circular economy solution platforms",
        "Women-led trade platforms",
        "Green supply chain management tools",
      ],
    },
  },
  {
    id: "digital-identity-verification",
    title: "Digital Identity & Verification",
    summary:
      "Strengthen trust and traceability in trade through interoperable digital identity frameworks.",
    tags: ["Identity", "KYC", "Verification"],
    icon: ShieldCheck,
    detail: {
      context:
        "Focus areas: cross-border KYC systems, digital credentials, and identity-linked payment authorization.",
      deliverables: [
        "Cross-border KYC systems",
        "Digital credential platforms",
        "Identity-linked payment authorization",
        "Interoperable identity frameworks",
      ],
    },
  },
  {
    id: "agriculture-trade-value-chain",
    title: "Agriculture & Trade Value Chain",
    summary:
      "Boost agribusiness trade by digitizing agricultural value chains and improving market access for smallholder farmers.",
    tags: ["Agriculture", "Value Chain", "Farmers"],
    icon: Radar,
    detail: {
      context:
        "Focus areas: traceability, commodity pricing, digital cooperatives, and export facilitation.",
      deliverables: [
        "Agricultural traceability systems",
        "Commodity pricing platforms",
        "Digital cooperative management tools",
        "Export facilitation solutions",
      ],
    },
  },
  {
    id: "knowledge-learning-ecosystem",
    title: "Knowledge & Learning Ecosystem",
    summary:
      "Foster digital trade literacy and innovation through accessible learning tools and capacity-building platforms.",
    tags: ["Education", "Learning", "Capacity"],
    icon: GraduationCap,
    detail: {
      context:
        "Focus areas: digital trade education, mentorship platforms, and AI-driven learning ecosystems.",
      deliverables: [
        "Digital trade education platforms",
        "Mentorship and networking systems",
        "AI-driven learning ecosystems",
        "Capacity-building tools",
      ],
    },
  },
];

const judgingCriteria: JudgingCriterion[] = [
  {
    id: "innovation-originality",
    title: "Innovation & Originality",
    description:
      "Novel approach to solving a trade challenge with creative and unique solutions.",
    weight: 25,
  },
  {
    id: "afcfta-relevance",
    title: "Relevance to AfCFTA Goals",
    description:
      "Alignment with Digital Trade Protocol objectives and AfCFTA implementation.",
    weight: 25,
  },
  {
    id: "scalability-sustainability",
    title: "Scalability & Sustainability",
    description:
      "Potential for real-world adoption and impact across African markets.",
    weight: 20,
  },
  {
    id: "technical-execution",
    title: "Technical Execution",
    description:
      "Functionality, design, user experience, and technical implementation quality.",
    weight: 15,
  },
  {
    id: "inclusiveness",
    title: "Inclusiveness",
    description:
      "Promotion of gender, youth, and regional participation in digital trade.",
    weight: 15,
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
          className="mx-auto max-w-4xl space-y-6 text-center"
        >
          <Badge
            variant="secondary"
            className="mx-auto bg-white/10 text-white/80 border-white/15"
          >
            🌍 Challenge Tracks Hero Section
          </Badge>
          <Heading as="h2" level="h1" align="center" className="text-white!">
            Build Solutions that Power Africa&apos;s Borderless Digital Economy
          </Heading>
          <Body size="lg" align="center" className="text-white/70">
            The AfCFTA Hackathon 2026 invites Africa&apos;s brightest innovators
            to co-create solutions that accelerate the implementation of the
            AfCFTA Digital Trade Protocol — advancing inclusive,
            technology-driven trade across the continent.
          </Body>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link to="/submit">🔗 Submit Your Idea</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link to="/track-guide">📘 Download Track Guide</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🧭</span>
            <Heading as="h3" level="h3" className="text-white!">
              Shaping the Future of African Trade through Innovation
            </Heading>
          </div>
          <Body className="text-white/80 leading-relaxed">
            Each challenge track focuses on a critical pillar of Africa&apos;s
            digital trade ecosystem. From cross-border payments to smart
            logistics and AI-driven compliance, participants will design,
            prototype, and showcase scalable innovations that bridge policy and
            technology. Teams are encouraged to align their ideas with the
            AfCFTA Digital Trade Protocol, the Pan-African Payment and
            Settlement System (PAPSS), and the Agenda 2063 vision for a unified
            African market.
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
              ⚙️ All Challenge Tracks
            </Body>
            <Heading
              as="h3"
              level="h3"
              className="mt-2 text-white! leading-tight"
            >
              Official tracks for AfCFTA Hackathon 2026
            </Heading>
            <Body className="mt-2 text-white/70">
              Each represents a frontier for innovation, trade, and
              collaboration across Africa. Expand a track to see focus areas and
              expected deliverables.
            </Body>

            <Accordion
              type="single"
              collapsible
              defaultValue="digital-trade-facilitation"
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
              🏆 Evaluation Criteria
            </Body>
            <Heading
              as="h3"
              level="h4"
              className="mt-2 text-white! leading-tight"
            >
              How solutions will be evaluated
            </Heading>
            <Body className="mt-2 text-white/70">
              Each solution will be evaluated based on these weighted criteria
              to ensure alignment with AfCFTA goals and real-world impact.
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
                          <div className="h-2 flex-1 rounded-full bg-white/20 relative overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r from-secondary via-primary to-white transition-all duration-300 ${
                                criterion.weight >= 30
                                  ? "w-full"
                                  : criterion.weight >= 20
                                    ? "w-4/5"
                                    : criterion.weight >= 15
                                      ? "w-3/5"
                                      : "w-2/5"
                              }`}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🧩</span>
            <Heading as="h3" level="h3" className="text-white!">
              Track Collaboration & Cross-Impact
            </Heading>
          </div>
          <Body className="text-white/80 leading-relaxed">
            Participants are encouraged to form multi-disciplinary teams that
            combine expertise from different tracks — for example, linking
            FinTech + Digital Identity, or AI + Logistics — to develop holistic
            trade solutions that reflect real-world interconnectivity.
          </Body>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto max-w-4xl space-y-6 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">🚀</span>
            <Heading as="h3" level="h2" className="text-white!">
              Your Idea Could Power Africa&apos;s Next Digital Trade
              Breakthrough
            </Heading>
          </div>
          <Body size="lg" className="text-white/70 leading-relaxed">
            Join innovators shaping Africa&apos;s borderless future. Whether
            your focus is AI, FinTech, or logistics — your solution can help
            unlock Africa&apos;s $4 trillion digital trade potential.
          </Body>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link to="/apply">📝 Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link to="/challenge-tracks">📘 Learn More About Tracks</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link to="/partner">🤝 Partner With Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
