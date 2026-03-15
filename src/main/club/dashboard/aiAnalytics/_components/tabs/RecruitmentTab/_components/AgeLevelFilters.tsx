const filters = [
  { label: "U21 (Development)", value: "30%", color: "text-cyan-400" },
  { label: "22-26 (Peak)", value: "50%", color: "text-green-400" },
  { label: "27+ (Experience)", value: "20%", color: "text-yellow-400" },
];

const AgeLevelFilters = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Age &amp; Level Filters
      </h2>

      <div className="space-y-3">
        {filters.map((item, i) => (
          <div key={i} className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
            <p className="text-xs text-gray-500 mb-2">{item.label}</p>
            <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeLevelFilters;
