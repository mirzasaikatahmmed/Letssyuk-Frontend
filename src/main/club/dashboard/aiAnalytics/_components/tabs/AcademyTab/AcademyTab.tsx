import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubAcademyTrackerQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import IndividualDevelopment from "./_components/IndividualDevelopment";
import TechnicalBenchmarks from "./_components/TechnicalBenchmarks";
import PhysicalExpectations from "./_components/PhysicalExpectations";
import DevelopmentTrajectory from "./_components/DevelopmentTrajectory";
import TalentMarkers from "./_components/TalentMarkers";
import DevelopmentRisks from "./_components/DevelopmentRisks";
import PromotionReadiness from "./_components/PromotionReadiness";

const AcademyTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id || (userData as any)?.data?.clubOwned?.id;

  const {
    data: academyRes,
    isLoading: isAcademyLoading,
    error,
  } = useGetClubAcademyTrackerQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isAcademyLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = academyRes?.analysis;

  if (!analysis) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Section 1: Individual Development */}
      <IndividualDevelopment data={analysis.individual_development} />

      {/* Section 2: Technical Benchmarks & Physical Expectations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TechnicalBenchmarks data={analysis.age_group_benchmarks.u16_technical_benchmarks} />
        <PhysicalExpectations data={analysis.age_group_benchmarks.u18_physical_expectations} />
      </div>

      {/* Section 3: Development Trajectory */}
      <DevelopmentTrajectory data={analysis.development_trajectory} />

      {/* Section 4: Talent Markers & Development Risks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TalentMarkers data={analysis.talent_markers} />
        <DevelopmentRisks data={analysis.development_risks} />
      </div>

      {/* Section 5: First-Team Promotion Readiness */}
      <PromotionReadiness data={analysis.first_team_promotion_readiness} />
    </div>
  );
};

export default AcademyTab;
