import { PageHero } from "../ui/page-hero";
import { Section } from "~/components/ui/section";
import { Card } from "~/components/ui/card";
import { Heading, Body } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Mail, HelpCircle, Newspaper, Send } from "lucide-react";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the AfCFTA Hackathon team"
        description="Have questions about the hackathon? Need support with registration? We're here to help."
      />

      <Section 
        spacing="lg" 
        background="muted" 
        className="bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200"
      >
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <Heading as="h2" level="h2" className="text-black mb-6">
                    Get in Touch
                  </Heading>
                  <Body size="lg" className="text-black/80">
                    We'd love to hear from you. Choose the most relevant channel below for your inquiry.
                  </Body>
                </div>

                <div className="space-y-4">
                  <Card className="p-6 bg-white/60 border-white/40 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-700">
                        <Mail className="size-6" />
                      </div>
                      <div>
                        <Heading as="h3" level="h6" className="text-black mb-1">
                          General Inquiries
                        </Heading>
                        <a href="mailto:info@afcftahackathon.org" className="text-blue-700 hover:underline">
                          info@afcftahackathon.org
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/60 border-white/40 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-700">
                        <HelpCircle className="size-6" />
                      </div>
                      <div>
                        <Heading as="h3" level="h6" className="text-black mb-1">
                          Technical Support
                        </Heading>
                        <a href="mailto:support@afcftahackathon.org" className="text-blue-700 hover:underline">
                          support@afcftahackathon.org
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/60 border-white/40 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-700">
                        <Newspaper className="size-6" />
                      </div>
                      <div>
                        <Heading as="h3" level="h6" className="text-black mb-1">
                          Media & Press
                        </Heading>
                        <a href="mailto:media@afcftahackathon.org" className="text-blue-700 hover:underline">
                          media@afcftahackathon.org
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 bg-white/80 border-white/50 shadow-lg">
                  <Heading as="h2" level="h3" className="text-black mb-6">
                    Send us a Message
                  </Heading>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-black/80"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black/80"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-black/80"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                    >
                      Send Message
                      <Send className="ml-2 size-4" />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
