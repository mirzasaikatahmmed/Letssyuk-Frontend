import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubSquadIntelligenceQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import PlayerRoleBalance from "./_components/PlayerRoleBalance";
import SquadDepth from "./_components/SquadDepth";
import CriticalGaps from "./_components/CriticalGaps";
import OverUtilizedPlayers from "./_components/OverUtilizedPlayers";
import UnderUtilizedPlayers from "./_components/UnderUtilizedPlayers";
import OptimalRotationStrategy from "./_components/OptimalRotationStrategy";

const SquadIntelligenceTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id || (userData as any)?.data?.clubOwned?.id;

  const {
    data: squadRes,
    isLoading: isSquadLoading,
    error,
  } = useGetClubSquadIntelligenceQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isSquadLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = squadRes?.analysis;

  if (!analysis) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Section 1: Player Role Balance Analysis */}
      <PlayerRoleBalance data={analysis.player_role_balance_analysis} />

      {/* Section 2: Squad Depth & Critical Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SquadDepth data={analysis.squad_depth} />
        <CriticalGaps data={analysis.critical_gaps} />
      </div>

      {/* Section 3: Over-Utilized & Under-Utilized Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OverUtilizedPlayers data={analysis.over_utilized_players} />
        <UnderUtilizedPlayers data={analysis.under_utilized_players} />
      </div>

      {/* Section 4: Optimal Rotation Strategy */}
      <OptimalRotationStrategy data={analysis.optimal_rotation_strategy} />
    </div>
  );
};

export default SquadIntelligenceTab;
