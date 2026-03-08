const players = [
  {
    name: "Player X",
    minutes: "95% of minutes",
    risk: "High",
    action: "Reduce minutes by 15%",
  },
  {
    name: "Player Y",
    minutes: "90% of minutes",
    risk: "Monitor",
    action: "Reduce minutes by 15%",
  },
];

const OverUtilizedPlayers = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-red-400 mb-5">
        Over-Utilized Players
      </h2>

      <div className="space-y-3">
        {players.map((player, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm font-semibold text-white">{player.name}</p>
              <span className="text-xs font-bold text-red-400">
                {player.minutes}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-1">Risk: {player.risk}</p>
            <p className="text-xs text-cyan-400">Action: {player.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverUtilizedPlayers;
