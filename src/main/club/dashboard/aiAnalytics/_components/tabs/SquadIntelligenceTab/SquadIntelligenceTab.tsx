import PlayerRoleBalance from "./_components/PlayerRoleBalance";
import SquadDepth from "./_components/SquadDepth";
import CriticalGaps from "./_components/CriticalGaps";
import OverUtilizedPlayers from "./_components/OverUtilizedPlayers";
import UnderUtilizedPlayers from "./_components/UnderUtilizedPlayers";
import OptimalRotationStrategy from "./_components/OptimalRotationStrategy";

const SquadIntelligenceTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Player Role Balance Analysis */}
      <PlayerRoleBalance />

      {/* Section 2: Squad Depth & Critical Gaps */}
      <div className="grid grid-cols-2 gap-4">
        <SquadDepth />
        <CriticalGaps />
      </div>

      {/* Section 3: Over-Utilized & Under-Utilized Players */}
      <div className="grid grid-cols-2 gap-4">
        <OverUtilizedPlayers />
        <UnderUtilizedPlayers />
      </div>

      {/* Section 4: Optimal Rotation Strategy */}
      <OptimalRotationStrategy />
    </div>
  );
};

export default SquadIntelligenceTab;
