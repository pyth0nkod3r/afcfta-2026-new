import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router";

export function WhyAfcftaHero() {
  return (
    <Section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building Africa's Digital Trade Future —{" "}
                <span className="text-yellow-400">
                  One Innovation at a Time
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                The AfCFTA Hackathon 2026 is Africa's premier innovation
                challenge driving cross-border digital trade, fintech, and AI
                solutions that power the continent's economic future under the
                AfCFTA Digital Trade Protocol.
              </p>
            </div>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">April 8–10, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">
                  Abuja, Nigeria (Hybrid: Physical + Virtual)
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                <Link to="/challenge-tracks">Join the Movement</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link to="/portal/register">Register Now</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Africa Map Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/30 to-blue-500/30 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🌍</div>
                  <p className="text-lg font-medium">Africa Connected</p>
                  <p className="text-sm text-blue-200">
                    Physical + Virtual Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
