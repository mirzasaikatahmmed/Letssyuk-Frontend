interface AgeLevelFiltersProps {
  data?: {
    u21_development_percent: number;
    age_22_26_peak_percent: number;
    age_27_plus_experience_percent: number;
  };
}

const AgeLevelFilters = ({ data }: AgeLevelFiltersProps) => {
  if (!data) return null;

  const filters = [
    { label: "U21 (Development)", value: `${data.u21_development_percent}%`, color: "text-cyan-400" },
    { label: "22-26 (Peak)", value: `${data.age_22_26_peak_percent}%`, color: "text-green-500" },
    { label: "27+ (Experience)", value: `${data.age_27_plus_experience_percent}%`, color: "text-yellow-500" },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full space-y-5">
      <h2 className="text-sm font-bold text-white tracking-tight">Age & Level Filters</h2>

      <div className="space-y-2">
        {filters.map((item, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 space-y-1">
            <p className="text-[10px] text-zinc-500 font-medium">{item.label}</p>
            <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeLevelFilters;
