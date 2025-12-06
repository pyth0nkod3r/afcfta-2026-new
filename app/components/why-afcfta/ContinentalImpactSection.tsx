import { Section } from "../ui/section";

const cities = ["Lagos", "Nairobi", "Kigali", "Cairo", "Cape Town", "Accra"];

export function ContinentalImpactSection() {
  return (
    <Section className="py-16 md:py-24 bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Continental Impact
          </h2>

          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full text-lg"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-xl leading-relaxed text-black">
                From{" "}
                <strong className="text-blue-600">Lagos to Nairobi</strong>,
                <strong className="text-blue-600"> Kigali to Cairo</strong>,
                <strong className="text-blue-600"> Cape Town to Accra</strong>
                , innovators will come together to design solutions that power
                intra-African trade.
              </p>

              <p className="text-lg leading-relaxed text-black/80">
                This collaboration strengthens regional integration and ensures
                that Nigeria&apos;s innovations connect seamlessly with the rest of
                Africa, creating shared growth opportunities and a unified
                digital market.
              </p>

              <div className="bg-white/60 rounded-xl p-8 mt-8 border border-white/40">
                <p className="text-2xl font-semibold text-black">
                  Together, we&apos;re not just hosting a hackathon —
                  <br className="hidden md:block" />
                  we&apos;re shaping Africa&apos;s digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
