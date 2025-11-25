import { ChallengesTracksHero } from "../components/challenges-track/ChallengesTracksHero";
import { ChallengeTracksIntro } from "../components/challenges-track/ChallengeTracksIntro";
import { ChallengesTracksGrid } from "../components/challenges-track/ChallengesTracksGrid";
import { ChallengesTracksCollaboration } from "../components/challenges-track/ChallengesTracksCollaboration";
import { ChallengesTracksEvaluationCriteria } from "../components/challenges-track/ChallengesTracksEvaluationCriteria";
import { ChallengesTracksCTA } from "../components/challenges-track/ChallengesTracksCTA";

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
