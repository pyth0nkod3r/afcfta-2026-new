import { Section } from "../ui/section";
import { Card, CardContent } from "../ui/card";
import { Target, TrendingUp, FileText, Network } from "lucide-react";

const initiatives = [
  {
    icon: Target,
    text: "Promote Nigeria as a continental center for digital trade and innovation.",
  },
  {
    icon: TrendingUp,
    text: "Enable Nigerian startups to scale solutions across African markets.",
  },
  {
    icon: FileText,
    text: "Launch the AfCFTA Nigeria Whitepaper on Digital Trade, Technology, and Innovation.",
  },
  {
    icon: Network,
    text: "Connect policy, innovation, and trade across borders through collaboration.",
  },
];

export function NigeriaLeadershipSection() {
  return (
    <Section className="py-16 md:py-24 bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200 text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Nigeria&apos;s Strategic Leadership
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              As Africa&apos;s largest economy and tech hub, Nigeria plays a pivotal
              role in advancing the AfCFTA Digital Trade Protocol.
            </p>
          </div>

          <Card className="mb-8 bg-white/60 border-white/40">
            <CardContent className="p-8">
              <p className="text-lg text-black leading-relaxed mb-6">
                The Nigeria AfCFTA Coordination Office, in partnership with the
                Federal Ministry of Industry, Trade and Investment, is
                championing this hackathon to:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {initiatives.map((initiative, index) => {
                  const IconComponent = initiative.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-black leading-relaxed">
                        {initiative.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-lg text-black italic">
              Through collaboration, Nigerian innovators will lead the charge in
              connecting policy, innovation, and trade across borders.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
