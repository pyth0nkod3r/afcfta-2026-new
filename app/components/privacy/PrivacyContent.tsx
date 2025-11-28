import { motion } from "framer-motion";
import { Section } from "~/components/ui/section";
import { Heading, Body } from "~/components/ui/typography";

export function PrivacyContent() {
  return (
    <Section background="muted" spacing="lg">
      <div className="mx-auto max-w-4xl space-y-12 md:space-y-16">
        {/* Data Collection Section */}
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
            1. Data Collection
          </Heading>
          <div className="space-y-3">
            <Body>
              We collect information you provide directly to us when you register for the AfCFTA Hackathon 2026, 
              including your name, email address, phone number, organization, country of residence, and professional background.
            </Body>
            <Body>
              We automatically collect certain information when you visit our website, including your IP address, 
              browser type, operating system, referring URLs, and pages viewed. This information is collected through 
              cookies and similar tracking technologies.
            </Body>
            <Body>
              During the hackathon, we may collect information about your participation, including team formation, 
              project submissions, presentation materials, and interaction with mentors and judges.
            </Body>
            <Body>
              We may also collect photographs, videos, and audio recordings during the event for documentation 
              and promotional purposes.
            </Body>
          </div>
        </motion.section>

        {/* Data Storage Section */}
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
            2. Data Storage and Security
          </Heading>
          <div className="space-y-3">
            <Body>
              Your personal information is stored on secure servers with appropriate technical and organizational 
              measures to protect against unauthorized access, alteration, disclosure, or destruction.
            </Body>
            <Body>
              We implement industry-standard security measures including encryption, access controls, and regular 
              security audits to safeguard your data.
            </Body>
            <Body>
              Data is stored in compliance with applicable data protection laws and regulations, including the 
              African Union Convention on Cyber Security and Personal Data Protection where applicable.
            </Body>
            <Body>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this policy, typically for a period of 3 years after the conclusion of the hackathon, unless 
              a longer retention period is required by law.
            </Body>
          </div>
        </motion.section>

        {/* Data Usage Section */}
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
            3. How We Use Your Information
          </Heading>
          <div className="space-y-3">
            <Body>
              We use your personal information for the following purposes:
            </Body>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <Body as="span">
                  To process your registration and manage your participation in the hackathon
                </Body>
              </li>
              <li>
                <Body as="span">
                  To communicate with you about the event, including updates, schedules, and important announcements
                </Body>
              </li>
              <li>
                <Body as="span">
                  To facilitate team formation and networking opportunities
                </Body>
              </li>
              <li>
                <Body as="span">
                  To evaluate submissions and determine winners
                </Body>
              </li>
              <li>
                <Body as="span">
                  To provide technical support and assistance during the event
                </Body>
              </li>
              <li>
                <Body as="span">
                  To create promotional materials and document the event
                </Body>
              </li>
              <li>
                <Body as="span">
                  To conduct research and analysis to improve future events
                </Body>
              </li>
              <li>
                <Body as="span">
                  To comply with legal obligations and protect our rights
                </Body>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Third-Party Sharing Section */}
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
            4. Third-Party Sharing
          </Heading>
          <div className="space-y-3">
            <Body>
              We may share your information with trusted third parties in the following circumstances:
            </Body>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <Body as="span">
                  With event partners, sponsors, and mentors to facilitate networking and collaboration opportunities
                </Body>
              </li>
              <li>
                <Body as="span">
                  With service providers who assist us in organizing and managing the hackathon
                </Body>
              </li>
              <li>
                <Body as="span">
                  With judges and evaluation panels for the purpose of assessing submissions
                </Body>
              </li>
              <li>
                <Body as="span">
                  With media partners for promotional and documentation purposes, with your consent
                </Body>
              </li>
              <li>
                <Body as="span">
                  When required by law or to protect our rights and the safety of participants
                </Body>
              </li>
            </ul>
            <Body>
              We do not sell, rent, or trade your personal information to third parties for commercial purposes. 
              All third parties with whom we share information are required to maintain appropriate security measures 
              and use the information only for the specified purposes.
            </Body>
          </div>
        </motion.section>

        {/* User Rights Section */}
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
            5. Your Rights
          </Heading>
          <div className="space-y-3">
            <Body>
              You have the following rights regarding your personal information:
            </Body>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <Body as="span">
                  <strong>Access:</strong> You can request a copy of the personal information we hold about you
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Deletion:</strong> You can request that we delete your personal information, subject to certain limitations
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Portability:</strong> You can request that we provide your information in a structured, machine-readable format
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Objection:</strong> You can object to certain types of processing of your information
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Withdrawal of consent:</strong> You can withdraw your consent for processing at any time
                </Body>
              </li>
            </ul>
            <Body>
              To exercise any of these rights, please contact us using the information provided at the end of this policy. 
              We will respond to your request within 30 days.
            </Body>
          </div>
        </motion.section>

        {/* Cookies Section */}
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
            6. Cookies and Tracking Technologies
          </Heading>
          <div className="space-y-3">
            <Body>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and 
              collect information about how you use our site.
            </Body>
            <Body>
              We use the following types of cookies:
            </Body>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>
                <Body as="span">
                  <strong>Essential cookies:</strong> Required for the website to function properly
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Functional cookies:</strong> Enable enhanced functionality and personalization
                </Body>
              </li>
              <li>
                <Body as="span">
                  <strong>Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness
                </Body>
              </li>
            </ul>
            <Body>
              You can control cookie settings through your browser preferences. However, disabling certain cookies 
              may affect the functionality of our website.
            </Body>
          </div>
        </motion.section>

        {/* Policy Changes Section */}
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
            7. Changes to This Policy
          </Heading>
          <div className="space-y-3">
            <Body>
              We may update this privacy policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors.
            </Body>
            <Body>
              When we make significant changes to this policy, we will notify you by email (if you have provided 
              an email address) and/or by posting a prominent notice on our website.
            </Body>
            <Body>
              We encourage you to review this policy periodically to stay informed about how we protect your information. 
              Your continued use of our services after any changes indicates your acceptance of the updated policy.
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
            8. Contact Information
          </Heading>
          <div className="space-y-3">
            <Body>
              If you have any questions, concerns, or requests regarding this privacy policy or our data practices, 
              please contact us:
            </Body>
            <div className="space-y-2 ml-4">
              <Body>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@afcfta-hackathon.org"
                  className="text-primary hover:underline"
                >
                  privacy@afcfta-hackathon.org
                </a>
              </Body>
              <Body>
                <strong>Data Protection Officer:</strong>{" "}
                <a
                  href="mailto:dpo@afcfta-hackathon.org"
                  className="text-primary hover:underline"
                >
                  dpo@afcfta-hackathon.org
                </a>
              </Body>
              <Body>
                <strong>Mailing Address:</strong><br />
                AfCFTA Hackathon 2026 Privacy Office<br />
                [Address Line 1]<br />
                [Address Line 2]<br />
                Abuja, Nigeria
              </Body>
            </div>
            <Body>
              We are committed to resolving any privacy-related concerns promptly and will respond to your 
              inquiries within 30 days.
            </Body>
          </div>
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