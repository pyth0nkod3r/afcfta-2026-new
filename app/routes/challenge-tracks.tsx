import type { Route } from "./+types/challenge-tracks";
import { ChallengesTracksHero } from "../components/challenges-track/ChallengesTracksHero";
import { ChallengeTracksIntro } from "../components/challenges-track/ChallengeTracksIntro";
import { ChallengesTracksGrid } from "../components/challenges-track/ChallengesTracksGrid";
import { ChallengesTracksCollaboration } from "../components/challenges-track/ChallengesTracksCollaboration";
import { ChallengesTracksEvaluationCriteria } from "../components/challenges-track/ChallengesTracksEvaluationCriteria";
import { ChallengesTracksCTA } from "../components/challenges-track/ChallengesTracksCTA";

export const meta: Route.MetaFunction = () => [
  { title: "Challenge Tracks — AfCFTA Hackathon 2026" },
  {
    name: "description",
    content:
      "Explore 10 challenge tracks focused on digital trade solutions for Africa. Build innovative solutions that power the continent's borderless digital economy.",
  },
];

export default function ChallengeTracks() {
  return (
    <>
      <ChallengesTracksHero />
      <ChallengeTracksIntro />
      <ChallengesTracksGrid />
      <ChallengesTracksCollaboration />
      <ChallengesTracksEvaluationCriteria />
      <ChallengesTracksCTA />
    </>
  );
}
