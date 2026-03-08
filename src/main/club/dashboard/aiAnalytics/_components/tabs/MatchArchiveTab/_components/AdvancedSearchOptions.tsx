const searchOptions = [
  { label: "By Formation", sub: "Find all 4-3-3 matches" },
  { label: "By Result", sub: "Analyze wins vs losses" },
  { label: "By Player", sub: "All matches featuring X" },
  { label: "By Tactics", sub: "High pressing games" },
  { label: "By Date Range", sub: "Specific periods" },
];

const AdvancedSearchOptions = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Advanced Search Options
      </h2>

      <div className="space-y-2">
        {searchOptions.map((option, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 px-4 py-3 cursor-pointer hover:border-gray-600 transition-colors"
          >
            <p className="text-sm font-semibold text-white">{option.label}</p>
            <p className="text-xs text-gray-500 mt-0.5">{option.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedSearchOptions;
