export type FAQCategory =
  | "participation"
  | "challenge-tracks"
  | "format"
  | "rewards"
  | "technical";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqCategories: {
  id: FAQCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "participation",
    title: "Participation",
    description:
      "Questions about eligibility, registration, and team requirements",
  },
  {
    id: "challenge-tracks",
    title: "Challenge Tracks",
    description: "Questions about the 10 challenge tracks and track selection",
  },
  {
    id: "format",
    title: "Format",
    description:
      "Questions about the hackathon format, schedule, and structure",
  },
  {
    id: "rewards",
    title: "Rewards",
    description: "Questions about prizes, benefits, and recognition",
  },
  {
    id: "technical",
    title: "Technical",
    description: "Questions about technical requirements, tools, and resources",
  },
];

export const faqItems: FAQItem[] = [
  // Participation FAQs
  {
    id: "participation-1",
    category: "participation",
    question: "Who can participate in the AfCFTA Hackathon 2026?",
    answer:
      "The hackathon is open to innovators, developers, entrepreneurs, and teams from across Africa. Participants must be 18 years or older and can form teams of 2-5 members. Both individuals and existing startups are welcome to participate.",
  },
  {
    id: "participation-2",
    category: "participation",
    question: "How do I register for the hackathon?",
    answer:
      "Registration is done through our online portal. Visit the registration page, select your participation type (Team, Mentor, or Partner), fill out the required information, and submit your application. Registration opens on [Date] and closes on [Date].",
  },
  {
    id: "participation-3",
    category: "participation",
    question: "What are the team size requirements?",
    answer:
      "Teams must consist of 2-5 members. We encourage diverse teams with complementary skills including developers, designers, business strategists, and domain experts. Solo participants can be matched with teams during the pre-hackathon phase.",
  },
  {
    id: "participation-4",
    category: "participation",
    question: "Can I participate if I'm not from Nigeria?",
    answer:
      "Yes! The hackathon is open to participants from all African countries. While the physical event will be held in Abuja, Nigeria, we offer virtual participation options for teams across the continent. Virtual participants will have full access to all sessions, mentorship, and judging.",
  },
  {
    id: "participation-5",
    category: "participation",
    question: "Is there a registration fee?",
    answer:
      "No, participation in the AfCFTA Hackathon 2026 is completely free. However, participants are responsible for their own travel and accommodation expenses if attending the physical event in Abuja.",
  },
  {
    id: "participation-6",
    category: "participation",
    question: "What skills or background do I need?",
    answer:
      "We welcome participants with diverse backgrounds including software development, UI/UX design, business strategy, data science, blockchain, fintech, logistics, and domain expertise in trade and commerce. The most successful teams combine technical skills with business acumen and deep understanding of African trade challenges.",
  },

  // Challenge Tracks FAQs
  {
    id: "tracks-1",
    category: "challenge-tracks",
    question: "How many challenge tracks are there?",
    answer:
      "There are 10 challenge tracks covering different aspects of digital trade: Cross-Border Payments, Digital Identity, Trade Logistics, E-Commerce Platforms, Supply Chain Transparency, Digital Marketplaces, Trade Finance, Regulatory Compliance, Data Interoperability, and Sustainable Trade.",
  },
  {
    id: "tracks-2",
    category: "challenge-tracks",
    question: "Can I work on multiple challenge tracks?",
    answer:
      "Teams are encouraged to focus on one primary challenge track, but solutions that address multiple tracks or demonstrate cross-track collaboration are highly valued. The judging criteria includes points for cross-impact and collaboration across tracks.",
  },
  {
    id: "tracks-3",
    category: "challenge-tracks",
    question: "How do I choose which track to work on?",
    answer:
      "Review all 10 challenge tracks on our Challenge Tracks page, assess your team's skills and interests, and select the track that best aligns with your expertise and passion. You can also consult with mentors during the pre-hackathon phase to make an informed decision.",
  },
  {
    id: "tracks-4",
    category: "challenge-tracks",
    question: "What deliverables are expected for each track?",
    answer:
      "Each track has specific deliverables outlined in the track details. Generally, teams are expected to submit a working prototype or MVP, a pitch presentation, technical documentation, and a business model. Specific requirements vary by track and will be provided during the pre-hackathon briefing.",
  },
  {
    id: "tracks-5",
    category: "challenge-tracks",
    question: "Are there track-specific mentors available?",
    answer:
      "Yes, each challenge track has dedicated mentors with expertise in that domain. Mentors will be available during the hackathon days for guidance, technical support, and business strategy advice. You'll be matched with track-specific mentors during the pre-hackathon phase.",
  },

  // Format FAQs
  {
    id: "format-1",
    category: "format",
    question: "What is the hackathon format?",
    answer:
      "The AfCFTA Hackathon 2026 is a hybrid event with three phases: Pre-Hackathon (online activities, team formation, mentorship), Hackathon Days (48-hour intensive development in Abuja with virtual participation options), and Post-Hackathon (judging, awards, and integration support).",
  },
  {
    id: "format-2",
    category: "format",
    question: "How long is the hackathon?",
    answer:
      "The hackathon spans approximately 3 months from registration to final awards. The intensive development phase (Hackathon Days) is 48 hours, taking place on [Dates] in Abuja, Nigeria. The full timeline includes pre-hackathon activities and post-hackathon judging and integration.",
  },
  {
    id: "format-3",
    category: "format",
    question: "Can I participate virtually?",
    answer:
      "Yes, virtual participation is available for teams across Africa. Virtual participants will have access to all sessions, mentorship, resources, and judging. They can join via our online platform and will be judged on equal footing with physical participants.",
  },
  {
    id: "format-4",
    category: "format",
    question: "What happens during the Pre-Hackathon phase?",
    answer:
      "The Pre-Hackathon phase includes team formation, track selection, mentorship matching, technical briefings, resource access, and preliminary planning. This phase helps teams prepare effectively for the intensive hackathon days.",
  },
  {
    id: "format-5",
    category: "format",
    question: "What is the judging process?",
    answer:
      "Judging is based on five criteria: Innovation & Creativity (30%), Technical Excellence (25%), Alignment with AfCFTA Goals (20%), Business Viability (15%), and Cross-Track Impact (10%). A panel of expert judges evaluates all submissions and conducts live pitch sessions.",
  },

  // Rewards FAQs
  {
    id: "rewards-1",
    category: "rewards",
    question: "What are the prizes?",
    answer:
      "The prize pool includes a Grand Prize of $50,000, Second Place ($30,000), Third Place ($20,000), Top 10 Finalists ($5,000 each), and 10 Thematic Awards ($3,000 each). Additionally, winners receive non-cash benefits including mentorship, incubation support, partnership opportunities, and integration support.",
  },
  {
    id: "rewards-2",
    category: "rewards",
    question: "Are there non-cash benefits?",
    answer:
      "Yes, all participants and winners receive valuable non-cash benefits including access to mentorship programs, incubation and acceleration support, partnership opportunities with AfCFTA stakeholders, technical integration support, and recognition across AfCFTA channels.",
  },
  {
    id: "rewards-3",
    category: "rewards",
    question: "How are prizes distributed?",
    answer:
      "Prize distribution follows a structured framework outlined in the Rewards & Incentives page. Winners will be notified immediately after judging, and prize distribution will be coordinated through our team. Detailed information about prize delivery and integration support is provided to all winners.",
  },
  {
    id: "rewards-4",
    category: "rewards",
    question: "Do all participants receive something?",
    answer:
      "While monetary prizes are awarded to winners, all participants receive certificates of participation, access to mentorship and resources, networking opportunities, and potential partnership connections. The experience and exposure gained are valuable benefits for all participants.",
  },

  // Technical FAQs
  {
    id: "technical-1",
    category: "technical",
    question: "What technical resources are provided?",
    answer:
      "Participants receive access to cloud computing credits, development tools, APIs, datasets, technical documentation, and mentorship support. Specific resources vary by challenge track and will be detailed during the pre-hackathon briefing sessions.",
  },
  {
    id: "technical-2",
    category: "technical",
    question: "What technologies can I use?",
    answer:
      "Teams are free to use any technologies, frameworks, and tools that best serve their solution. We encourage the use of modern, scalable technologies that align with African infrastructure and can support cross-border digital trade solutions.",
  },
  {
    id: "technical-3",
    category: "technical",
    question: "Do I need to deploy my solution?",
    answer:
      "While a fully deployed production solution is not required, teams should demonstrate a working prototype or MVP. The solution should be functional and demonstrable during the pitch presentation. Deployment support and cloud credits are available for teams who need them.",
  },
  {
    id: "technical-4",
    category: "technical",
    question: "What if I need help with technical challenges?",
    answer:
      "Technical mentors and support staff are available throughout the hackathon. Each track has dedicated technical mentors, and there's a general technical support team to help with infrastructure, APIs, deployment, and other technical challenges. Support channels will be available 24/7 during the hackathon days.",
  },
  {
    id: "technical-5",
    category: "technical",
    question: "Are there any technical requirements or restrictions?",
    answer:
      "Solutions must align with the AfCFTA Digital Trade Protocol principles, be scalable, and demonstrate potential for cross-border implementation. There are no specific technology stack requirements, but solutions should be accessible, secure, and designed for African markets.",
  },
];
