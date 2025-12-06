// app/components/partnership-preview-section.tsx
import { motion } from "framer-motion";
import { BadgeCheck, Building2, Handshake, Gem } from "lucide-react";
import { Link } from "react-router";
import { Section } from "../ui/section";
import { Heading, Body } from "../ui/typography";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
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

export function PartnershipPreviewSection() {
  return (
    <Section
      id="partnership"
      background="muted"
      spacing="lg"
      className="bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200 text-black"
    >
      {/* <div className="rounded-[36px] border border-white/15 bg-black/60 p-10 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]"> */}

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-7xl flex-col gap-10"
      >
        <div className="space-y-5 text-center">
          <Heading as="h2" level="h2" align="center" className="text-black">
            ₦60 Million in Prizes + Mentorship & Acceleration Opportunities
          </Heading>
          <Body size="lg" align="center" className="text-black/80">
            Significant cash prizes, implementation grants, and non-cash
            benefits accelerate winning teams from prototype to pilot across the
            continent.
          </Body>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PARTNER_TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <Card
                key={tier.name}
                className={cn(
                  "h-full border-black/10 bg-white/60 text-black shadow-xl backdrop-blur-sm",
                  tier.highlight &&
                    "bg-linear-to-br from-primary/10 via-primary/5 to-secondary/10 border-black/10",
                )}
              >
                <CardHeader className="flex flex-col items-center gap-2 text-center">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-xl text-black">
                    {tier.name} Partner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-black/80">
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
                    className={cn(
                      "w-full",
                      tier.highlight
                        ? "bg-black text-white hover:bg-black/90"
                        : "border-black/30 text-black hover:bg-black hover:text-white",
                    )}
                    variant={tier.highlight ? "secondary" : "outline"}
                  >
                    <Link to="/partners">Become a Partner</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </motion.div>
      {/* </div> */}
    </Section>
  );
}
