// app/components/partnership-preview-section.tsx
import { motion } from "framer-motion";
import { BadgeCheck, Building2, Handshake, Users } from "lucide-react";
import { Link } from "react-router";
import { Section } from "./ui/section";
import { Heading, Body } from "./ui/typography";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

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
    name: "Gold",
    icon: Building2,
    perks: [
      "Premium branding across all media",
      "Investor matchmaking session",
      "Host private roundtable event",
    ],
  },
  {
    name: "Silver",
    icon: Handshake,
    perks: [
      "Official partner logo placement",
      "Participate in mentor clinics",
      "Post-event reporting inclusion",
    ],
  },
  {
    name: "Community",
    icon: Users,
    perks: ["Grassroots & university partners", "Open mentoring invitation"],
  },
];

export function PartnershipPreviewSection() {
  return (
    <Section
      id="partnership"
      background="muted"
      className="relative bg-linear-to-b from-black via-neutral-950 to-neutral-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl flex flex-col gap-10"
      >
        <div className="space-y-5 text-center">
          <Heading as="h2" level="h2" align="center" className="text-white!">
            Join as a Partner
          </Heading>
          <Body
            size="lg"
            align="center"
            className="mx-auto max-w-2xl text-white/70"
          >
            Support Africa’s next generation of innovators, policy pilots, and
            digital entrepreneurs. Multi-tiered partnerships offer branding,
            recruiting, and networking benefits.
          </Body>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PARTNER_TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <Card
                key={tier.name}
                className="h-full border border-gray-200 bg-gray-50! text-gray-900! shadow-md"
              >
                <CardHeader className="flex flex-col items-center gap-2">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gray-200 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-gray-900! text-xl">
                    {tier.name} Partner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-900!">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-secondary" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    variant={tier.highlight ? "primary" : "outline"}
                    className={cn(
                      "w-full",
                      tier.highlight &&
                        "bg-primary text-white hover:bg-primary/90",
                      !tier.highlight &&
                        "border-gray-300 bg-white text-gray-700 hover:bg-primary hover:text-white",
                    )}
                  >
                    <Link to="/partners">Become a Partner</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
