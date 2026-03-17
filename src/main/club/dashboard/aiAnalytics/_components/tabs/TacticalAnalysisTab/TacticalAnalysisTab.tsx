import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubTacticalAnalysisQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import FormationEffectiveness from "./_components/FormationEffectiveness";
import BuildupPhase from "./_components/BuildupPhase";
import DefensiveOrganization from "./_components/DefensiveOrganization";
import KeyStrengths from "./_components/KeyStrengths";
import TacticalVulnerabilities from "./_components/TacticalVulnerabilities";
import DefensiveShapeConsistency from "./_components/DefensiveShapeConsistency";
import DecisionMakingPatterns from "./_components/DecisionMakingPatterns";

const TacticalAnalysisTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id;

  const {
    data: tacticalRes,
    isLoading: isTacticalLoading,
    error,
  } = useGetClubTacticalAnalysisQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isTacticalLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = tacticalRes?.analysis;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      {/* Section 1: Formation Effectiveness */}
      <FormationEffectiveness data={analysis?.formation_effectiveness} />

      {/* Section 2: Build-up Phase & Defensive Organization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BuildupPhase data={analysis?.build_up_phase} />
        <DefensiveOrganization data={analysis?.defensive_organization} />
      </div>

      {/* Section 3: Key Strengths & Tactical Vulnerabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <KeyStrengths data={analysis?.key_strengths} />
        <TacticalVulnerabilities data={analysis?.tactical_vulnerabilities} />
      </div>

      {/* Section 4: Defensive Shape Consistency */}
      <DefensiveShapeConsistency data={analysis?.defensive_shape_consistency} />

      {/* Section 5: Decision-Making Patterns */}
      <DecisionMakingPatterns data={analysis?.decision_making_patterns} />
    </div>
  );
};

export default TacticalAnalysisTab;
