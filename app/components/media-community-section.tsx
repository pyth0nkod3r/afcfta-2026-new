// app/components/media-community-section.tsx
import { motion } from "framer-motion";
import {
  Facebook,
  Globe,
  Heart,
  Instagram,
  MessageSquare,
  Share2,
  Twitter,
  Users,
} from "lucide-react";
import { Link } from "react-router";

import { Section } from "./ui/section";
import { Heading, Body } from "./ui/typography";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const socialPlatforms = [
  {
    name: "Twitter/X",
    icon: Twitter,
    handle: "@AfCFTAHackathon",
    url: "https://twitter.com/AfCFTAHackathon",
    description: "Live updates and announcements",
  },
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@afcfta.hackathon",
    url: "https://instagram.com/afcfta.hackathon",
    description: "Behind-the-scenes and highlights",
  },
  {
    name: "Facebook",
    icon: Facebook,
    handle: "AfCFTA Hackathon",
    url: "https://facebook.com/AfCFTAHackathon",
    description: "Community discussions and events",
  },
  {
    name: "LinkedIn",
    icon: Globe,
    handle: "AfCFTA Hackathon",
    url: "https://linkedin.com/company/afcfta-hackathon",
    description: "Professional networking and insights",
  },
];

const communityStats = [
  { label: "Active Participants", value: "2,500+" },
  { label: "Countries Represented", value: "54" },
  { label: "Community Channels", value: "8" },
];

export function MediaCommunitySection() {
  return (
    <Section
      id="media-community"
      background="muted"
      className="relative overflow-hidden bg-black! text-white!"
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/12 via-white/6 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Body
                as="p"
                size="sm"
                transform="uppercase"
                className="tracking-[0.35em] text-white/60"
              >
                Stay Connected
              </Body>
              <Heading as="h2" level="h2" className="text-white!">
                Join the AfCFTA Community
              </Heading>
              <Body size="lg" className="text-white/80">
                Connect with innovators, policymakers, and entrepreneurs from
                across Africa. Follow our social channels for live updates,
                behind-the-scenes content, and community discussions.
              </Body>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {socialPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="group h-full border-white/15 bg-white/5 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/15 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                          <Icon className="size-5" aria-hidden />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-semibold text-white">
                            {platform.name}
                          </p>
                          <p className="text-sm text-white/70">
                            {platform.handle}
                          </p>
                          <p className="text-xs text-white/60">
                            {platform.description}
                          </p>
                        </div>
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="shrink-0 text-white hover:bg-white hover:text-black"
                        >
                          <Link
                            to={platform.url}
                            target="_blank"
                            rel="noopener"
                          >
                            Follow
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link to="/community">
                  <Users className="size-4" aria-hidden />
                  Join Community
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-black"
              >
                <Link to="/media">
                  <Share2 className="size-4" aria-hidden />
                  View All Media
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border-white/15 bg-white/5 shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Users className="size-5 text-white" />
                  <Heading as="h3" level="h4" className="text-white!">
                    Community Impact
                  </Heading>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {communityStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/15 bg-black/40 p-4 text-center shadow-sm"
                    >
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Twitter spotlight */}
            <Card className="border-white/15 bg-white/5 text-white shadow-xl">
              <CardContent className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="inline-flex size-16 items-center justify-center rounded-full bg-white/15 text-white">
                  <Twitter className="size-8" />
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level="h5" className="text-white!">
                    Live Twitter Feed
                  </Heading>
                  <Body size="sm" className="text-white/70">
                    Real-time updates and conversations using #AfCFTAHackathon
                  </Body>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white hover:text-black"
                >
                  <MessageSquare className="size-4" aria-hidden />
                  View Feed
                </Button>
              </CardContent>
            </Card>

            {/* Instagram spotlight */}
            <Card className="border-white/15 bg-white/5 text-white shadow-xl">
              <CardContent className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="inline-flex size-16 items-center justify-center rounded-full bg-white/15 text-white">
                  <Instagram className="size-8" />
                </div>
                <div className="space-y-2">
                  <Heading as="h4" level="h5" className="text-white!">
                    Instagram Stories
                  </Heading>
                  <Body size="sm" className="text-white/70">
                    Behind-the-scenes highlights and participant spotlights
                  </Body>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white hover:text-black"
                >
                  <Heart className="size-4" aria-hidden />
                  View Stories
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
