import { PageHero } from "../components/ui/page-hero";

export default function MediaResources() {
  return (
    <>
      <PageHero
        title="Media & Resources"
        subtitle="Press materials, brand assets, and documentation"
        description="Access official logos, press releases, and media resources for the AfCFTA Hackathon."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Press Kit</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Official Press Release</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Latest announcement about the AfCFTA Hackathon
                  </p>
                  <button className="text-primary hover:underline">
                    Download PDF
                  </button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Event Fact Sheet</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Key facts and figures about the hackathon
                  </p>
                  <button className="text-primary hover:underline">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Brand Assets</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Logo Package</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Official logos in various formats and colors
                  </p>
                  <button className="text-primary hover:underline">
                    Download ZIP
                  </button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Brand Guidelines</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Usage guidelines for official branding
                  </p>
                  <button className="text-primary hover:underline">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Media Contact</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="mb-2">
                <strong>Media Relations:</strong> media@afcftahackathon.org
              </p>
              <p>
                For press inquiries, interview requests, or additional media
                resources, please contact our media relations team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
