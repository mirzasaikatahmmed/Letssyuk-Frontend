import SearchableIntelligenceLibrary from "./_components/SearchableIntelligenceLibrary";
import OppositionReportsHistory from "./_components/OppositionReportsHistory";
import AdvancedSearchOptions from "./_components/AdvancedSearchOptions";

const MatchArchiveTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Searchable Intelligence Library */}
      <SearchableIntelligenceLibrary />

      {/* Section 2: Opposition Reports History & Advanced Search Options */}
      <div className="grid grid-cols-2 gap-4">
        <OppositionReportsHistory />
        <AdvancedSearchOptions />
      </div>
    </div>
  );
};

export default MatchArchiveTab;
