const OppositionReportsHistory = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Opposition Reports History
      </h2>

      {/* Liverpool FC Database */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
        <p className="text-sm font-semibold text-white mb-4">
          Liverpool FC Database
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Matches Analyzed</p>
            <p className="text-2xl font-bold text-white">15</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Win Rate</p>
            <p className="text-2xl font-bold text-green-400">40%</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Avg Goals Conceded</p>
            <p className="text-2xl font-bold text-white">1.8</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Key Weakness</p>
            <p className="text-sm font-bold text-yellow-400">High line</p>
          </div>
        </div>

        {/* Tactical Evolution */}
        <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-xl p-3">
          <p className="text-xs text-cyan-400">
            Tactical Evolution: Pressing intensity increased 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default OppositionReportsHistory;
