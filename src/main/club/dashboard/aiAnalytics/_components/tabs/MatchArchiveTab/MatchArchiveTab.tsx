import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetClubMatchArchiveQuery } from "@/redux/features/club/clubsApi";
import Loading from "@/components/share/Loading/Loading";
import SearchableIntelligenceLibrary from "./_components/SearchableIntelligenceLibrary";
import OppositionReportsHistory from "./_components/OppositionReportsHistory";
import AdvancedSearchOptions from "./_components/AdvancedSearchOptions";

const MatchArchiveTab = () => {
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const clubId = userData?.clubOwned?.id || (userData as any)?.data?.clubOwned?.id;

  const {
    data: archiveRes,
    isLoading: isArchiveLoading,
    error,
  } = useGetClubMatchArchiveQuery(clubId || "", {
    skip: !clubId,
  });

  if (isUserLoading || isArchiveLoading || error)
    return <Loading count={5} className="p-4" />;

  const analysis = archiveRes?.analysis;

  if (!analysis) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Section 1: Searchable Intelligence Library */}
      <SearchableIntelligenceLibrary
        data={analysis.searchable_intelligence_library}
      />

      {/* Section 2: Opposition Reports History & Advanced Search Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <OppositionReportsHistory data={analysis.opposition_reports_history} />
        <AdvancedSearchOptions data={analysis.advanced_search_options} />
      </div>
    </div>
  );
};

export default MatchArchiveTab;
