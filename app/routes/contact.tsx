import { PageHero } from "../components/ui/page-hero";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the AfCFTA Hackathon team"
        description="Have questions about the hackathon? Need support with registration? We're here to help."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    General Inquiries
                  </h3>
                  <p className="text-gray-600">info@afcftahackathon.org</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Technical Support
                  </h3>
                  <p className="text-gray-600">support@afcftahackathon.org</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Media & Press</h3>
                  <p className="text-gray-600">media@afcftahackathon.org</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
