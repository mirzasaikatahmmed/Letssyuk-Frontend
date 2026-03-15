const BuildupPhase = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">Build-up Phase</h2>

      {/* Success Rate */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400">Success Rate</span>
          <span className="text-xs font-semibold text-green-400">75%</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-green-400 rounded-full" style={{ width: "75%" }} />
        </div>
      </div>

      {/* Average Time */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-3">
        <p className="text-xs text-gray-400 mb-1">Average Time</p>
        <p className="text-2xl font-bold text-white">12.3s</p>
      </div>

      {/* Key Player */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-3">
        <p className="text-xs text-gray-400 mb-1">Key Player</p>
        <p className="text-sm font-semibold text-white">#6 (Deep midfielder)</p>
      </div>

      {/* Improvement Area */}
      <div className="bg-yellow-900/30 border border-yellow-800/50 rounded-xl p-4">
        <p className="text-xs font-semibold text-yellow-400 mb-1">Improvement Area</p>
        <p className="text-xs text-gray-300">Faster progression needed</p>
      </div>
    </div>
  );
};

export default BuildupPhase;
