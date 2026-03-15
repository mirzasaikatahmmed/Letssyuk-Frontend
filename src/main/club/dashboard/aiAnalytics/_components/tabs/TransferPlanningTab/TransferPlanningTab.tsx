import TransferWindowPriorities from "./_components/TransferWindowPriorities";
import SquadAgeDistribution from "./_components/SquadAgeDistribution";
import ExperienceBalance from "./_components/ExperienceBalance";
import ContractExpiryRisk from "./_components/ContractExpiryRisk";
import SuccessionPlanning from "./_components/SuccessionPlanning";

const TransferPlanningTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Transfer Window Priorities */}
      <TransferWindowPriorities />

      {/* Section 2: Squad Age Distribution & Experience Balance */}
      <div className="grid grid-cols-2 gap-4">
        <SquadAgeDistribution />
        <ExperienceBalance />
      </div>

      {/* Section 3: Contract Expiry Risk Flags */}
      <ContractExpiryRisk />

      {/* Section 4: Succession Planning */}
      <SuccessionPlanning />
    </div>
  );
};

export default TransferPlanningTab;
