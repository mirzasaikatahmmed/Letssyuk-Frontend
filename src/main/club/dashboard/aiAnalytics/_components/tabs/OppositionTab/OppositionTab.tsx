import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubOppositionAnalysisQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import OppositionTacticalProfile from "./_components/OppositionTacticalProfile";
import PrimaryThreats from "./_components/PrimaryThreats";
import OppositionStrengths from "./_components/OppositionStrengths";
import TacticalWeaknesses from "./_components/TacticalWeaknesses";
import SetPieceTendencies from "./_components/SetPieceTendencies";
import SuggestedTacticalAdjustments from "./_components/SuggestedTacticalAdjustments";

const OppositionTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id || (userData as any)?.data?.clubOwned?.id;

  const {
    data: oppositionRes,
    isLoading: isOppositionLoading,
    error,
  } = useGetClubOppositionAnalysisQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isOppositionLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = oppositionRes?.analysis;

  if (!analysis) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Section 1: Opposition Tactical Profile */}
      <OppositionTacticalProfile data={analysis.opposition_tactical_profile} />

      {/* Section 2: Primary Threats */}
      <PrimaryThreats data={analysis.primary_threats} />

      {/* Section 3: Opposition Strengths & Tactical Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OppositionStrengths data={analysis.opposition_strengths} />
        <TacticalWeaknesses data={analysis.tactical_weaknesses} />
      </div>

      {/* Section 4: Set-Piece Tendencies */}
      <SetPieceTendencies data={analysis.set_piece_tendencies} />

      {/* Section 5: Suggested Tactical Adjustments */}
      <SuggestedTacticalAdjustments data={analysis.suggested_tactical_adjustments} />
    </div>
  );
};

export default OppositionTab;
