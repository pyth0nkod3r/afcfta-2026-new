import { motion } from "framer-motion";
import {
  Award,
  Medal,
  Sparkles,
  Star,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router";

import { Section } from "../ui/section";
import { Heading, Body } from "../ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";

type PrizeTier = {
  id: string;
  title: string;
  amount: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  featured?: boolean;
};

const prizeTiers: PrizeTier[] = [
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

const benefitHighlights = [
  {
    title: "Executive Mentorship Pods",
    description:
      "Monthly clinics with AfCFTA Secretariat, Smart Africa, UNECA, and private-sector operators.",
  },
  {
    title: "Regulatory Fast-Track",
    description:
      "Policy guidance and sandbox access across customs, payments, identity, and logistics regimes.",
  },
  {
    title: "Pilot & Procurement Pathways",
    description:
      "Matching with continental anchor clients plus integration engineers for rollout support.",
  },
  {
    title: "Visibility & Media",
    description:
      "Continental press features, demo-day syndication, and social amplification across the bloc.",
  },
];

const partnerPlaceholders = [
  "AfCFTA Secretariat",
  "African Union",
  "NITDA",
  "Smart Africa",
  "AfDB",
  "GSMA Africa",
];

export function RewardsPreviewSection() {
  return (
    <Section
      id="rewards"
      background="muted"
      spacing="lg"
      className="bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 text-black"
    >
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <Heading as="h2" level="h2" align="center" className="text-black">
            ₦60 Million in Prizes + Mentorship & Acceleration Opportunities
          </Heading>
          <Body size="lg" align="center" className="text-black/80">
            Significant cash prizes, implementation grants, and non-cash
            benefits accelerate winning teams from prototype to pilot across the
            continent.
          </Body>
        </motion.div>

        <Tabs
          defaultValue="cash"
          className="mt-2 flex flex-col gap-6"
          activationMode="automatic"
        >
          <TabsList className="mx-auto flex-wrap gap-2 bg-black/5 text-black/70">
            <TabsTrigger
              value="cash"
              className="text-black data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              Prize Pool
            </TabsTrigger>
            <TabsTrigger
              value="benefits"
              className="text-black data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
            >
              Non-Cash Benefits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cash" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {prizeTiers.map((tier, index) => {
                const Icon = tier.icon;

                return (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className={cn(
                      "h-full",
                      tier.featured && "md:col-span-2 xl:col-span-2",
                    )}
                  >
                    <Card
                      className={cn(
                        "h-full border-black/10 bg-white/60 text-black shadow-xl backdrop-blur-sm",
                        tier.featured &&
                          "bg-linear-to-br from-primary/10 via-primary/5 to-secondary/10 border-black/10",
                      )}
                    >
                      <CardHeader className="gap-4">
                        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <div className="space-y-1">
                          <Body
                            as="p"
                            size="sm"
                            transform="uppercase"
                            className="text-black/70 tracking-[0.3em]"
                          >
                            {tier.title}
                          </Body>
                          <CardTitle className="text-3xl font-bold text-black">
                            {tier.amount}
                          </CardTitle>
                          <CardDescription className="text-black/80">
                            {tier.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-sm text-black/80">
                          {tier.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
              >
                <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-xl backdrop-blur-sm">
                  <Body
                    size="sm"
                    transform="uppercase"
                    className="text-black/60 tracking-[0.3em]"
                  >
                    Beyond Cash
                  </Body>
                  <Heading
                    as="h3"
                    level="h3"
                    className="mt-2 text-black leading-snug"
                  >
                    Non-Cash Benefit Stack
                  </Heading>
                  <Body className="mt-2 text-black/80">
                    Every finalist receives deep operational support to launch
                    in multiple AfCFTA markets, paired with policy and ecosystem
                    partners.
                  </Body>

                  <ul className="mt-6 grid gap-4">
                    {benefitHighlights.map((benefit) => (
                      <li
                        key={benefit.title}
                        className="rounded-2xl border border-black/5 bg-white/40 p-4"
                      >
                        <p className="font-semibold text-black">
                          {benefit.title}
                        </p>
                        <p className="mt-1 text-sm text-black/80">
                          {benefit.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <div className="rounded-3xl border border-dashed border-black/20 bg-white/60 p-6 text-center shadow-xl backdrop-blur-sm">
                  <Body
                    size="sm"
                    transform="uppercase"
                    className="text-black/60 tracking-[0.3em]"
                  >
                    Partner Logos
                  </Body>
                  <Heading
                    as="h3"
                    level="h4"
                    align="center"
                    className="mt-2 text-black"
                  >
                    Implementation Allies
                  </Heading>
                  <Body className="mt-1 text-black/70">
                    Co-delivered with policy institutions, DFIs, and venture
                    studios across Africa.
                  </Body>

                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {partnerPlaceholders.map((partner) => (
                      <div
                        key={partner}
                        className="flex h-20 items-center justify-center rounded-2xl border border-black/10 bg-white/40 px-4 text-sm font-semibold text-black/80"
                      >
                        {partner}
                      </div>
                    ))}
                  </div>
                  <Body size="sm" className="mt-4 text-black/65">
                    Additional partners announced monthly.
                  </Body>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-black text-white hover:bg-black/90"
          >
            <Link to="/rewards-incentives">View Full Rewards Details</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
