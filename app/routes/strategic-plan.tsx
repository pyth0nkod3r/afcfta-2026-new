import { PageHero } from "../components/ui/page-hero";

export default function StrategicPlan() {
  return (
    <>
      <PageHero
        title="Strategic Plan"
        subtitle="Our roadmap for accelerating digital trade across Africa"
        description="Discover the comprehensive strategy behind the AfCFTA Hackathon and how it aligns with continental trade objectives."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Vision & Mission</h2>
          <p>
            The AfCFTA Hackathon represents a strategic initiative to accelerate
            digital transformation across African trade corridors, fostering
            innovation that directly supports the African Continental Free Trade
            Area objectives.
          </p>

          <h2>Strategic Objectives</h2>
          <ul>
            <li>Develop innovative digital trade solutions</li>
            <li>Foster cross-border collaboration</li>
            <li>Build capacity in emerging technologies</li>
            <li>Create sustainable business models</li>
          </ul>

          <h2>Implementation Framework</h2>
          <p>
            Our strategic approach encompasses multiple phases of engagement,
            from ideation through implementation, ensuring that solutions
            developed during the hackathon have real-world impact and
            sustainability.
          </p>
        </div>
      </div>
    </>
  );
}
