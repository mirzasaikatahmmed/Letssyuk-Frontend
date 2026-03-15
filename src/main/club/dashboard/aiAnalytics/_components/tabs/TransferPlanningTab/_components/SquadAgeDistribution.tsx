const ageGroups = [
  { label: "U21", count: 5, pct: "25%", color: "text-cyan-400" },
  { label: "22-26", count: 8, pct: "40%", color: "text-cyan-400" },
  { label: "27-30", count: 4, pct: "20%", color: "text-cyan-400" },
  { label: "31+", count: 3, pct: "15%", color: "text-cyan-400" },
];

const SquadAgeDistribution = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Squad Age Distribution
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-3">
        {ageGroups.map((group, i) => (
          <div key={i} className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
            <p className="text-xs text-gray-500 mb-1">{group.label}</p>
            <p className="text-2xl font-bold text-white">
              {group.count}{" "}
              <span className="text-sm font-normal text-gray-400">players</span>
            </p>
            <p className={`text-sm font-semibold ${group.color} mt-1`}>{group.pct}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-900/30 border border-green-800/50 rounded-xl p-4">
        <p className="text-sm font-semibold text-green-400">Optimal Balance: Good</p>
      </div>
    </div>
  );
};

export default SquadAgeDistribution;
