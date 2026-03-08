import OppositionTacticalProfile from "./_components/OppositionTacticalProfile";
import PrimaryThreats from "./_components/PrimaryThreats";
import OppositionStrengths from "./_components/OppositionStrengths";
import TacticalWeaknesses from "./_components/TacticalWeaknesses";
import SetPieceTendencies from "./_components/SetPieceTendencies";
import SuggestedTacticalAdjustments from "./_components/SuggestedTacticalAdjustments";

const OppositionTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Opposition Tactical Profile */}
      <OppositionTacticalProfile />

      {/* Section 2: Primary Threats */}
      <PrimaryThreats />

      {/* Section 3: Opposition Strengths & Tactical Weaknesses */}
      <div className="grid grid-cols-2 gap-4">
        <OppositionStrengths />
        <TacticalWeaknesses />
      </div>

      {/* Section 4: Set-Piece Tendencies */}
      <SetPieceTendencies />

      {/* Section 5: Suggested Tactical Adjustments */}
      <SuggestedTacticalAdjustments />
    </div>
  );
};

export default OppositionTab;
