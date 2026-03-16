import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubScoutingReportQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import PositionSpecificCriteria from "./_components/PositionSpecificCriteria";
import TacticalFitScoring from "./_components/TacticalFitScoring";
import DevelopmentPotentialRating from "./_components/DevelopmentPotentialRating";
import ComparativeAnalysis from "./_components/ComparativeAnalysis";
import ExecutiveSummary from "./_components/ExecutiveSummary";

const PlayerScoutingTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id;

  const {
    data: scoutingRes,
    isLoading: isScoutingLoading,
    error,
  } = useGetClubScoutingReportQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isScoutingLoading || error) return <Loading count={5} className="p-4" />;

  const analysis = scoutingRes?.analysis?.data;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      {/* Section 1: Position-Specific Criteria */}
      <PositionSpecificCriteria data={analysis?.position_specific_criteria} />

      {/* Section 2: Tactical Fit Scoring & Development Potential Rating */}
      <div className="grid grid-cols-2 gap-6">
        <TacticalFitScoring data={analysis?.tactical_fit_scoring} />
        <DevelopmentPotentialRating data={analysis?.development_potential_rating} />
      </div>

      {/* Section 3: Comparative Analysis */}
      <ComparativeAnalysis data={analysis?.comparative_analysis} />

      {/* Section 4: Executive Summary */}
      <ExecutiveSummary data={analysis?.executive_summary} />
    </div>
  );
};

export default PlayerScoutingTab;
