const DefensiveOrganization = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Defensive Organization
      </h2>

      {/* Shape */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-3">
        <p className="text-xs text-gray-400 mb-1">Shape</p>
        <p className="text-sm font-semibold text-white">Compact 4-4-2 block</p>
      </div>

      {/* Pressing Trigger */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-3">
        <p className="text-xs text-gray-400 mb-1">Pressing Trigger</p>
        <p className="text-sm font-semibold text-white">Goalkeeper passes</p>
      </div>

      {/* Success Rate */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400">Success Rate</span>
          <span className="text-xs font-semibold text-cyan-400">65%</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-400 rounded-full" style={{ width: "65%" }} />
        </div>
      </div>

      {/* Vulnerability */}
      <div className="bg-red-900/30 border border-red-800/50 rounded-xl p-4">
        <p className="text-xs font-semibold text-red-400 mb-1">Vulnerability</p>
        <p className="text-xs text-gray-300">Overloads on left side</p>
      </div>
    </div>
  );
};

export default DefensiveOrganization;
