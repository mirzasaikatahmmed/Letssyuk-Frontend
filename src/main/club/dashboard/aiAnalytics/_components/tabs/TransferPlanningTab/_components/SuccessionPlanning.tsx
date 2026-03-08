const pathway = [
  { tag: "Current", tagColor: "bg-cyan-500 text-black", player: "Player X (Age 32)" },
  { tag: "Successor", tagColor: "bg-yellow-400 text-black", player: "Player Y (Age 26)" },
  { tag: "Future", tagColor: "bg-green-500 text-black", player: "Player Z (Age 19)" },
];

const SuccessionPlanning = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      <h2 className="text-base font-semibold text-white mb-5">
        Succession Planning
      </h2>

      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-5">
        <p className="text-xs font-semibold text-gray-400 mb-4">
          Player Succession Pathway Example
        </p>

        {/* Pathway */}
        <div className="space-y-0">
          {pathway.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.tagColor}`}>
                  {item.tag}
                </span>
                {i < pathway.length - 1 && (
                  <div className="w-px h-5 bg-gray-600 my-1" />
                )}
              </div>
              <p className="text-sm text-gray-300">{item.player}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-4 bg-cyan-900/20 border border-cyan-800/50 rounded-xl p-3">
          <p className="text-xs font-semibold text-cyan-400">
            Timeline: Transition in 12-18 months
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessionPlanning;
