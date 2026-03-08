import PositionNeeds from "./PositionNeeds";
import TrialContracts from "./TrialContracts";
import ShortTermContracts from "./ShortTermContracts";
import AgeLevelFilters from "./AgeLevelFilters";
import VisibilityControls from "./VisibilityControls";

const RecruitmentTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Position Needs */}
      <PositionNeeds />

      {/* Section 2: Trial Contracts, Short-Term Contracts & Age Filters */}
      <div className="grid grid-cols-3 gap-4">
        <TrialContracts />
        <ShortTermContracts />
        <AgeLevelFilters />
      </div>

      {/* Section 3: Visibility Controls */}
      <VisibilityControls />
    </div>
  );
};

export default RecruitmentTab;
