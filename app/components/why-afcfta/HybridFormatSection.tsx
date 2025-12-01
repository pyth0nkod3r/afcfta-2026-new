import { Section } from "../ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Building2, Globe2, Users, Video, Handshake, Zap } from "lucide-react";

export function HybridFormatSection() {
  return (
    <Section background="muted" className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hybrid Format — Physical + Virtual Participation
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The AfCFTA Hackathon 2026 embraces a hybrid format, ensuring
              inclusive participation from innovators across all African
              countries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Physical Event */}
            <Card className="border-2 border-white/20 hover:border-white/30 transition-colors bg-white/10">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-white">
                  Physical Event (Abuja, Nigeria)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Main venue for live sessions, mentorship, pitching, and the
                    Whitepaper launch.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Networking with policymakers, investors, and innovation
                    leaders.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Virtual Participation */}
            <Card className="border-2 border-white/20 hover:border-white/30 transition-colors bg-white/10">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Globe2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-white">
                  Virtual Participation (Across Africa)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Remote hackathon access for registered teams.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-white/80">
                    Real-time collaboration tools, live workshops, and online
                    judging.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white/10 rounded-xl p-8 border border-white/20">
            <p className="text-lg text-white/90 leading-relaxed">
              This hybrid model reflects AfCFTA&apos;s vision of a digitally
              connected Africa —
              <strong className="text-blue-400">borderless</strong>,
              <strong className="text-green-400"> inclusive</strong>, and
              <strong className="text-purple-400"> innovation-driven</strong>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
