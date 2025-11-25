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
    question: "Who can participate?",
    answer:
      "Individuals, startups, SMEs, and innovators across Africa, aged 18+, including hybrid (physical and virtual) participation.",
  },
  {
    id: "participation-2",
    category: "participation",
    question: "How do I register?",
    answer:
      "Complete the online registration form via www.afcftahackathon.com/register and select your challenge track.",
  },
  {
    id: "participation-3",
    category: "participation",
    question: "Is there a participation fee?",
    answer:
      "Participation is free. Teams are responsible for travel/accommodation for physical attendance unless specified by the organizers.",
  },

  // Challenge Tracks FAQs
  {
    id: "tracks-1",
    category: "challenge-tracks",
    question: "Can I submit solutions for more than one challenge track?",
    answer:
      "No. Each team must select one track and align their prototype/MVP to it.",
  },
  {
    id: "tracks-2",
    category: "challenge-tracks",
    question: "Are existing solutions allowed?",
    answer:
      "Solutions must be original or adapted with significant innovation. Intellectual property rights remain with participants.",
  },

  // Format FAQs
  {
    id: "format-1",
    category: "format",
    question: "What is the hybrid format?",
    answer:
      "Teams can participate physically in Abuja, Nigeria, or virtually from any African country.",
  },
  {
    id: "format-2",
    category: "format",
    question: "Will virtual participants have mentorship and resources?",
    answer:
      "Yes, mentors, workshops, and technical resources will be available online.",
  },

  // Rewards FAQs
  {
    id: "rewards-1",
    category: "rewards",
    question: "What are the prizes?",
    answer:
      "Top 10 teams share ₦60M, plus thematic awards, incubation support, mentorship, and integration into AfCFTA innovation networks.",
  },
  {
    id: "rewards-2",
    category: "rewards",
    question: "How will rewards be distributed?",
    answer:
      "Under supervision of AfCFTA Secretariat and Finance Committee, with a transparent evaluation process.",
  },

  // Technical FAQs
  {
    id: "technical-1",
    category: "technical",
    question: "What support is provided?",
    answer:
      "Reliable internet, cloud credits, API access, and technical support during hackathon days.",
  },
  {
    id: "technical-2",
    category: "technical",
    question: "Who can I contact for issues?",
    answer:
      "Contact the Hackathon Support Team at support@afcftahackathon.com.",
  },
];

export const faqSections = [
  {
    type: "faq",
    title: "FAQs (Frequently Asked Questions)",
    hero: {
      headline: "Your Questions, Answered",
      subtext:
        "Everything you need to know about participation, eligibility, and the AfCFTA Hackathon 2026.",
    },
    categories: [
      {
        emoji: "1️⃣",
        category: "Participation & Registration",
        faqs: [
          {
            question: "Who can participate?",
            answer:
              "Individuals, startups, SMEs, and innovators across Africa, aged 18+, including hybrid (physical and virtual) participation.",
          },
          {
            question: "How do I register?",
            answer:
              "Complete the online registration form via www.afcftahackathon.com/register and select your challenge track.",
          },
          {
            question: "Is there a participation fee?",
            answer:
              "Participation is free. Teams are responsible for travel/accommodation for physical attendance unless specified by the organizers.",
          },
        ],
      },
      {
        emoji: "2️⃣",
        category: "Challenge Tracks & Innovation",
        faqs: [
          {
            question:
              "Can I submit solutions for more than one challenge track?",
            answer:
              "No. Each team must select one track and align their prototype/MVP to it.",
          },
          {
            question: "Are existing solutions allowed?",
            answer:
              "Solutions must be original or adapted with significant innovation. Intellectual property rights remain with participants.",
          },
        ],
      },
      {
        emoji: "3️⃣",
        category: "Hackathon Format",
        faqs: [
          {
            question: "What is the hybrid format?",
            answer:
              "Teams can participate physically in Abuja, Nigeria, or virtually from any African country.",
          },
          {
            question:
              "Will virtual participants have mentorship and resources?",
            answer:
              "Yes, mentors, workshops, and technical resources will be available online.",
          },
        ],
      },
      {
        emoji: "4️⃣",
        category: "Rewards & Incentives",
        faqs: [
          {
            question: "What are the prizes?",
            answer:
              "Top 10 teams share ₦60M, plus thematic awards, incubation support, mentorship, and integration into AfCFTA innovation networks.",
          },
          {
            question: "How will rewards be distributed?",
            answer:
              "Under supervision of AfCFTA Secretariat and Finance Committee, with a transparent evaluation process.",
          },
        ],
      },
      {
        emoji: "5️⃣",
        category: "Technical & Support",
        faqs: [
          {
            question: "What support is provided?",
            answer:
              "Reliable internet, cloud credits, API access, and technical support during hackathon days.",
          },
          {
            question: "Who can I contact for issues?",
            answer:
              "Contact the Hackathon Support Team at support@afcftahackathon.com.",
          },
        ],
      },
    ],
    cta: [
      {
        text: "📝 View All FAQs",
        link: "#faqs",
      },
      {
        text: "🔗 Register Now",
        link: "https://www.afcftahackathon.com/register",
      },
    ],
  },
];
