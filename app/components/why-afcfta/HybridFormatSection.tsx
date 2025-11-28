import { Section } from "../ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Building2, Globe2, Users, Video, Handshake, Zap } from "lucide-react";

export function HybridFormatSection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hybrid Format — Physical + Virtual Participation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The AfCFTA Hackathon 2026 embraces a hybrid format, ensuring
              inclusive participation from innovators across all African
              countries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Physical Event */}
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">
                  Physical Event (Abuja, Nigeria)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Main venue for live sessions, mentorship, pitching, and the
                    Whitepaper launch.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Networking with policymakers, investors, and innovation
                    leaders.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Virtual Participation */}
            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Globe2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-900">
                  Virtual Participation (Across Africa)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Remote hackathon access for registered teams.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Real-time collaboration tools, live workshops, and online
                    judging.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              This hybrid model reflects AfCFTA's vision of a digitally
              connected Africa —
              <strong className="text-blue-600">borderless</strong>,
              <strong className="text-green-600"> inclusive</strong>, and
              <strong className="text-purple-600"> innovation-driven</strong>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
