import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubTransferPlanningQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import TransferWindowPriorities from "./_components/TransferWindowPriorities";
import SquadAgeDistribution from "./_components/SquadAgeDistribution";
import ExperienceBalance from "./_components/ExperienceBalance";
import ContractExpiryRisk from "./_components/ContractExpiryRisk";
import SuccessionPlanning from "./_components/SuccessionPlanning";

const TransferPlanningTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id || (userData as any)?.data?.clubOwned?.id;

  const {
    data: transferRes,
    isLoading: isTransferLoading,
    error,
  } = useGetClubTransferPlanningQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isTransferLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = transferRes?.analysis;

  if (!analysis) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Section 1: Transfer Window Priorities */}
      <TransferWindowPriorities data={analysis.transfer_window_priorities} />

      {/* Section 2: Squad Age Distribution & Experience Balance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SquadAgeDistribution data={analysis.squad_age_distribution} />
        <ExperienceBalance data={analysis.experience_balance} />
      </div>

      {/* Section 3: Contract Expiry Risk Flags */}
      <ContractExpiryRisk data={analysis.contract_expiry_risk_flags} />

      {/* Section 4: Succession Planning */}
      <SuccessionPlanning data={analysis.contract_expiry_risk_flags.renewal_priority_assessment} />
    </div>
  );
};

export default TransferPlanningTab;
