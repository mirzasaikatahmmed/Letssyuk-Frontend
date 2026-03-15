const players = [
  {
    name: "Player Z",
    minutes: "25% of minutes",
    status: "Wasted",
    action: "Increase opportunities",
  },
  {
    name: "Player W",
    minutes: "30% of minutes",
    status: "Underused",
    action: "Increase opportunities",
  },
];

const UnderUtilizedPlayers = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-yellow-400 mb-5">
        Under-Utilized Players
      </h2>

      <div className="space-y-3">
        {players.map((player, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4"
          >
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm font-semibold text-white">{player.name}</p>
              <span className="text-xs font-bold text-yellow-400">
                {player.minutes}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-1">Status: {player.status}</p>
            <p className="text-xs text-cyan-400">Action: {player.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnderUtilizedPlayers;
