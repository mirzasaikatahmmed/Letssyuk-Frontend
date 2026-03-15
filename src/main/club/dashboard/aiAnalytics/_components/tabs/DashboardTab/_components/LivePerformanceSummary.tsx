const LivePerformanceSummary = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-red-500">⚡</span> Live Performance Summary
      </h2>

      {/* Top 5 stat cards */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Current Match</p>
          <p className="text-xl font-bold text-green-400">Leading 2-1</p>
          <p className="text-xs text-green-500">+3% vs avg</p>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Possession</p>
          <p className="text-xl font-bold text-white">58%</p>
          <p className="text-xs text-cyan-500">Advantage</p>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Shots</p>
          <p className="text-xl font-bold text-white">12-8</p>
          <p className="text-xs text-cyan-500">Advantage</p>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">xG (Expected Goals)</p>
          <p className="text-xl font-bold text-white">2.1-1.3</p>
          <p className="text-xs text-green-500">Better</p>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Pass Accuracy</p>
          <p className="text-xl font-bold text-white">86%</p>
          <p className="text-xs text-green-500">Good</p>
        </div>
      </div>

      {/* 4 performance scores */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Attacking</p>
          <p className="text-2xl font-bold text-cyan-400">7.8/10</p>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Defending</p>
          <p className="text-2xl font-bold text-cyan-400">8.2/10</p>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Transition</p>
          <p className="text-2xl font-bold text-cyan-400">8.5/10</p>
        </div>
        <div className="bg-[#18181B] p-4 rounded-xl border border-gray-800">
          <p className="text-xs text-gray-500 mb-1">Set Pieces</p>
          <p className="text-2xl font-bold text-yellow-400">7.0/10</p>
        </div>
      </div>
    </div>
  );
};

export default LivePerformanceSummary;
