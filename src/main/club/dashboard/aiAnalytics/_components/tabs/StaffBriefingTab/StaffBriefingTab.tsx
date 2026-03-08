import CoachBriefingNotes from "./_components/CoachBriefingNotes";
import MatchPreparationTalkingPoints from "./_components/MatchPreparationTalkingPoints";
import TrainingFocusRecommendations from "./_components/TrainingFocusRecommendations";
import SkillDevelopmentPriorities from "./_components/SkillDevelopmentPriorities";

const StaffBriefingTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Coach Briefing Notes */}
      <CoachBriefingNotes />

      {/* Section 2: Match Preparation Talking Points */}
      <MatchPreparationTalkingPoints />

      {/* Section 3: Training Focus Recommendations */}
      <TrainingFocusRecommendations />

      {/* Section 4: Skill Development Priorities */}
      <SkillDevelopmentPriorities />
    </div>
  );
};

export default StaffBriefingTab;
