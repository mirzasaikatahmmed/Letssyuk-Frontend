import PositionSpecificCriteria from "./_components/PositionSpecificCriteria";
import TacticalFitScoring from "./_components/TacticalFitScoring";
import DevelopmentPotentialRating from "./_components/DevelopmentPotentialRating";
import ComparativeAnalysis from "./_components/ComparativeAnalysis";
import ExecutiveSummary from "./_components/ExecutiveSummary";

const PlayerScoutingTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Position-Specific Criteria */}
      <PositionSpecificCriteria />

      {/* Section 2: Tactical Fit Scoring & Development Potential Rating */}
      <div className="grid grid-cols-2 gap-4">
        <TacticalFitScoring />
        <DevelopmentPotentialRating />
      </div>

      {/* Section 3: Comparative Analysis */}
      <ComparativeAnalysis />

      {/* Section 4: Executive Summary */}
      <ExecutiveSummary />
    </div>
  );
};

export default PlayerScoutingTab;
