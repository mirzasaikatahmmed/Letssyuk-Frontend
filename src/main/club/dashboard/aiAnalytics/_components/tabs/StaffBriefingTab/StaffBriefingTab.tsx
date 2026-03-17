import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubStaffBriefingQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import CoachBriefingNotes from "./_components/CoachBriefingNotes";
import MatchPreparationTalkingPoints from "./_components/MatchPreparationTalkingPoints";
import TrainingFocusRecommendations from "./_components/TrainingFocusRecommendations";
import SkillDevelopmentPriorities from "./_components/SkillDevelopmentPriorities";

const StaffBriefingTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id;

  const {
    data: briefingRes,
    isLoading: isBriefingLoading,
    error,
  } = useGetClubStaffBriefingQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isBriefingLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = briefingRes?.analysis;

  if (!analysis) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Section 1: Coach Briefing Notes */}
      <CoachBriefingNotes data={analysis.coach_briefing_notes} />

      {/* Section 2: Match Preparation Talking Points */}
      <MatchPreparationTalkingPoints data={analysis.match_preparation_talking_points} />

      {/* Section 3: Training Focus Recommendations */}
      <TrainingFocusRecommendations data={analysis.training_focus_recommendations_next_week} />

      {/* Section 4: Skill Development Priorities */}
      <SkillDevelopmentPriorities data={analysis.skill_development_priorities} />
    </div>
  );
};

export default StaffBriefingTab;
