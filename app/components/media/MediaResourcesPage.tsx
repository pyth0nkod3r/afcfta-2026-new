import { PageHero } from "../ui/page-hero";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { FileText, Download, Image, FileCheck, Mail } from "lucide-react";

export function MediaResourcesPage() {
  return (
    <>
      <PageHero
        title="Media & Resources"
        subtitle="Press materials, brand assets, and documentation"
        description="Access official logos, press releases, and media resources for the AfCFTA Hackathon."
      />

      <Section spacing="lg" className="bg-gradient-to-bl from-blue-200 via-indigo-200 to-cyan-200 text-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Press Kit */}
            <div className="space-y-6">
              <Heading as="h2" level="h3" className="text-black">
                Press Kit
              </Heading>
              <div className="space-y-4">
                <Card className="p-6 bg-white/60 border-white/40 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <FileText className="size-5 text-blue-700" />
                    </div>
                    <div className="space-y-2">
                      <Heading as="h3" level="h6" className="text-black">
                        Official Press Release
                      </Heading>
                      <Body size="sm" className="text-black/70">
                        Latest announcement about the AfCFTA Hackathon
                      </Body>
                      <Button variant="link" className="p-0 h-auto text-blue-700 hover:text-blue-800">
                        Download PDF <Download className="ml-2 size-3" />
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 border-white/40 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <FileCheck className="size-5 text-blue-700" />
                    </div>
                    <div className="space-y-2">
                      <Heading as="h3" level="h6" className="text-black">
                        Event Fact Sheet
                      </Heading>
                      <Body size="sm" className="text-black/70">
                        Key facts and figures about the hackathon
                      </Body>
                      <Button variant="link" className="p-0 h-auto text-blue-700 hover:text-blue-800">
                        Download PDF <Download className="ml-2 size-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Brand Assets */}
            <div className="space-y-6">
              <Heading as="h2" level="h3" className="text-black">
                Brand Assets
              </Heading>
              <div className="space-y-4">
                <Card className="p-6 bg-white/60 border-white/40 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Image className="size-5 text-blue-700" />
                    </div>
                    <div className="space-y-2">
                      <Heading as="h3" level="h6" className="text-black">
                        Logo Package
                      </Heading>
                      <Body size="sm" className="text-black/70">
                        Official logos in various formats and colors
                      </Body>
                      <Button variant="link" className="p-0 h-auto text-blue-700 hover:text-blue-800">
                        Download ZIP <Download className="ml-2 size-3" />
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 border-white/40 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <FileText className="size-5 text-blue-700" />
                    </div>
                    <div className="space-y-2">
                      <Heading as="h3" level="h6" className="text-black">
                        Brand Guidelines
                      </Heading>
                      <Body size="sm" className="text-black/70">
                        Usage guidelines for official branding
                      </Body>
                      <Button variant="link" className="p-0 h-auto text-blue-700 hover:text-blue-800">
                        Download PDF <Download className="ml-2 size-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Media Contact */}
          <div className="space-y-6">
            <Heading as="h2" level="h3" className="text-black">
              Media Contact
            </Heading>
            <Card className="p-8 bg-white/60 border-white/40">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="size-5 text-blue-700" />
                    <Body weight="semibold" className="text-black">
                      Media Relations
                    </Body>
                  </div>
                  <Body className="text-black/80">
                    For press inquiries, interview requests, or additional media resources, please contact our media relations team.
                  </Body>
                </div>
                <Button asChild className="shrink-0">
                  <a href="mailto:media@afcftahackathon.org">
                    Contact Media Team
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
