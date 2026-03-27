import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubRecruitmentNeedsQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import PositionNeeds from "./_components/PositionNeeds";
import TrialContracts from "./_components/TrialContracts";
import ShortTermContracts from "./_components/ShortTermContracts";
import AgeLevelFilters from "./_components/AgeLevelFilters";
import VisibilityControls from "./_components/VisibilityControls";

const RecruitmentTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id || (userData as any)?.data?.clubOwned?.id;

  const {
    data: recruitmentRes,
    isLoading: isRecruitmentLoading,
    error,
  } = useGetClubRecruitmentNeedsQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isRecruitmentLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = recruitmentRes?.analysis;

  if (!analysis) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Section 1: Position Needs */}
      <PositionNeeds data={analysis.position_needs} />

      {/* Section 2: Trial Contracts, Short-Term Contracts & Age Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TrialContracts data={analysis.contract_options.trial_contract} />
        <ShortTermContracts data={analysis.contract_options.short_term_contract} />
        <AgeLevelFilters data={analysis.age_and_level_filters} />
      </div>

      {/* Section 3: Visibility Controls */}
      <VisibilityControls data={analysis.visibility_controls} />
    </div>
  );
};

export default RecruitmentTab;
