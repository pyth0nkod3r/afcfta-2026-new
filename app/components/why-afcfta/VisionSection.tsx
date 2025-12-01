import { Section } from "../ui/section";

export function VisionSection() {
  return (
    <Section className="py-16 md:py-24 bg-black!">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white! mb-6">
              The Vision Behind the Hackathon
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-white! leading-relaxed space-y-6">
            <p className="text-xl text-white!">
              The African Continental Free Trade Area (AfCFTA) represents the
              most ambitious trade initiative in Africa's history — connecting{" "}
              <strong>55 nations</strong>,<strong>1.4 billion people</strong>,
              and a <strong>$3.4 trillion market</strong>.
            </p>

            <p className="text-white!">
              But to make this vision real, Africa needs digital innovation —
              tools that bridge borders, reduce trade friction, and empower
              MSMEs to compete globally.
            </p>

            <p className="text-white!">
              The AfCFTA Hackathon 2026 was created to transform policy into
              practical technology solutions, connecting Africa's brightest
              innovators to solve real challenges in trade, logistics, payments,
              and policy execution.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
