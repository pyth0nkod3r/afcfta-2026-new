import { Section } from "../ui/section";

const cities = ["Lagos", "Nairobi", "Kigali", "Cairo", "Cape Town", "Accra"];

export function ContinentalImpactSection() {
  return (
    <Section className="py-16 md:py-24 bg-gray-900 text-white">
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

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-xl leading-relaxed">
                From{" "}
                <strong className="text-yellow-400">Lagos to Nairobi</strong>,
                <strong className="text-yellow-400"> Kigali to Cairo</strong>,
                <strong className="text-yellow-400"> Cape Town to Accra</strong>
                , innovators will come together to design solutions that power
                intra-African trade.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                This collaboration strengthens regional integration and ensures
                that Nigeria&apos;s innovations connect seamlessly with the rest of
                Africa, creating shared growth opportunities and a unified
                digital market.
              </p>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 mt-8">
                <p className="text-2xl font-semibold text-yellow-400">
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
