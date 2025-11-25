import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";

export function TermsContent() {
  return (
    <Section background="muted" spacing="lg">
      <div className="mx-auto max-w-4xl space-y-12 md:space-y-16">
        {/* Eligibility Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            1. Eligibility
          </Heading>
          <div className="space-y-3">
            <Body>
              Participants must be at least 18 years of age or have parental
              consent if under 18. The hackathon is open to individuals and
              teams from African Union member states, as well as participants
              from partner organizations and institutions.
            </Body>
            <Body>
              All participants must register through the official registration
              portal and provide accurate information. False or misleading
              information may result in disqualification.
            </Body>
            <Body>
              Employees of the organizing committee, sponsors, and their
              immediate family members are not eligible to participate in the
              hackathon.
            </Body>
          </div>
        </motion.section>

        {/* Code of Conduct Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            2. Code of Conduct
          </Heading>
          <div className="space-y-3">
            <Body>
              All participants are expected to maintain the highest standards of
              professional conduct throughout the event. This includes:
            </Body>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <Body as="span">
                  Respecting all participants, mentors, judges, and organizers
                </Body>
              </li>
              <li>
                <Body as="span">
                  Refraining from harassment, discrimination, or any form of
                  inappropriate behavior
                </Body>
              </li>
              <li>
                <Body as="span">
                  Maintaining a collaborative and inclusive environment
                </Body>
              </li>
              <li>
                <Body as="span">
                  Complying with all event rules and guidelines
                </Body>
              </li>
            </ul>
            <Body>
              Violations of the code of conduct may result in immediate
              disqualification and removal from the event.
            </Body>
          </div>
        </motion.section>

        {/* Intellectual Property Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            3. Intellectual Property
          </Heading>
          <div className="space-y-3">
            <Body>
              Participants retain ownership of all intellectual property rights
              in their submissions and solutions developed during the hackathon.
            </Body>
            <Body>
              By participating, participants grant the AfCFTA Hackathon 2026
              organizing committee a non-exclusive, royalty-free, worldwide
              license to use, display, and promote their submissions for
              marketing, promotional, and educational purposes related to the
              hackathon and future events.
            </Body>
            <Body>
              Participants are responsible for ensuring that their submissions
              do not infringe upon the intellectual property rights of third
              parties. Any claims of infringement will be the sole
              responsibility of the participant.
            </Body>
            <Body>
              Winning teams may be required to enter into additional agreements
              regarding the development and deployment of their solutions.
            </Body>
          </div>
        </motion.section>

        {/* Data Usage Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            4. Data Usage and Privacy
          </Heading>
          <div className="space-y-3">
            <Body>
              Personal information collected during registration will be used in
              accordance with our Privacy Policy. By registering, you consent to
              the collection, processing, and storage of your personal data for
              the purposes of organizing and managing the hackathon.
            </Body>
            <Body>
              Participants&apos; names, team names, and project descriptions may
              be publicly displayed on the hackathon website, social media, and
              promotional materials.
            </Body>
            <Body>
              The organizing committee may use photographs, videos, and
              recordings of the event for promotional and archival purposes.
              Participants consent to being photographed and recorded during the
              event.
            </Body>
            <Body>
              For more detailed information about data handling, please refer to
              our Privacy Policy.
            </Body>
          </div>
        </motion.section>

        {/* Prizes Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            5. Prizes and Awards
          </Heading>
          <div className="space-y-3">
            <Body>
              Prize winners will be selected by a panel of judges based on the
              evaluation criteria outlined in the hackathon guidelines. All
              decisions made by the judges are final and binding.
            </Body>
            <Body>
              Prizes are non-transferable and may not be exchanged for cash or
              other alternatives, except at the discretion of the organizing
              committee.
            </Body>
            <Body>
              Winners are responsible for any taxes or fees associated with
              receiving prizes. The organizing committee will not be liable for
              any tax obligations.
            </Body>
            <Body>
              In the event of a tie, the organizing committee reserves the right
              to determine the winner through additional evaluation or by
              splitting prizes equally among tied participants.
            </Body>
            <Body>
              Prizes must be claimed within 90 days of the announcement of
              winners. Failure to claim prizes within this period may result in
              forfeiture.
            </Body>
          </div>
        </motion.section>

        {/* Dispute Resolution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            6. Dispute Resolution
          </Heading>
          <div className="space-y-3">
            <Body>
              Any disputes arising from or relating to the hackathon will be
              resolved through good faith negotiations between the parties
              involved.
            </Body>
            <Body>
              If a dispute cannot be resolved through negotiation, it will be
              subject to the exclusive jurisdiction of the courts of Nigeria, in
              accordance with Nigerian law.
            </Body>
            <Body>
              The organizing committee reserves the right to make final
              decisions on all matters related to the hackathon, including but
              not limited to eligibility, disqualification, and prize
              allocation.
            </Body>
            <Body>
              Participants agree to release and hold harmless the organizing
              committee, sponsors, partners, and their respective officers,
              directors, employees, and agents from any claims, damages, or
              liabilities arising from participation in the hackathon.
            </Body>
          </div>
        </motion.section>

        {/* General Terms Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <Heading
            as="h2"
            level="h2"
            className="text-gray-900 dark:text-gray-50"
          >
            7. General Terms
          </Heading>
          <div className="space-y-3">
            <Body>
              The organizing committee reserves the right to modify, suspend, or
              cancel the hackathon at any time, with or without notice, due to
              circumstances beyond its control.
            </Body>
            <Body>
              These terms and conditions may be updated at any time.
              Participants will be notified of significant changes, and
              continued participation constitutes acceptance of the updated
              terms.
            </Body>
            <Body>
              If any provision of these terms is found to be invalid or
              unenforceable, the remaining provisions will continue in full
              force and effect.
            </Body>
            <Body>
              These terms and conditions constitute the entire agreement between
              participants and the organizing committee regarding participation
              in the hackathon.
            </Body>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="space-y-4 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <Heading
            as="h2"
            level="h3"
            className="text-gray-900 dark:text-gray-50"
          >
            Contact Information
          </Heading>
          <Body>
            If you have any questions about these terms and conditions, please
            contact us at{" "}
            <a
              href="mailto:legal@afcfta-hackathon.org"
              className="text-primary hover:underline"
            >
              legal@afcfta-hackathon.org
            </a>{" "}
            or through our contact page.
          </Body>
          <Body size="sm" color="muted">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Body>
        </motion.section>
      </div>
    </Section>
  );
}
