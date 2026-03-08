const experienceRows = [
  { label: "Under 50 apps", count: "6 players", color: "text-cyan-400" },
  { label: "50-150 apps", count: "8 players", color: "text-cyan-400" },
  { label: "150+ apps", count: "6 players", color: "text-cyan-400" },
];

const ExperienceBalance = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Experience Balance
      </h2>

      <div className="space-y-3 mb-3">
        {experienceRows.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4 flex justify-between items-center"
          >
            <span className="text-sm text-gray-300">{item.label}</span>
            <span className={`text-sm font-semibold ${item.color}`}>{item.count}</span>
          </div>
        ))}
      </div>

      <div className="bg-green-900/30 border border-green-800/50 rounded-xl p-4">
        <p className="text-sm font-semibold text-green-400">Ideal Mix: Achieved</p>
      </div>
    </div>
  );
};

export default ExperienceBalance;
