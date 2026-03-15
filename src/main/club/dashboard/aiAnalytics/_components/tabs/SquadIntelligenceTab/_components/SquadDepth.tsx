const players = [
  { rank: "1. Starter", name: "Player A", score: "8/10", color: "text-cyan-400" },
  { rank: "2. Backup", name: "Player B", score: "7/10", color: "text-cyan-400" },
  { rank: "3. Emergency", name: "Player C", score: "6/10", color: "text-cyan-400" },
  { rank: "4. Youth", name: "Player D", score: "5/10", color: "text-cyan-400" },
];

const SquadDepth = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      <h2 className="text-base font-semibold text-white mb-5">
        Squad Depth: Center-Back
      </h2>

      <div className="space-y-2 mb-3">
        {players.map((player, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 p-4 flex justify-between items-center"
          >
            <span className="text-sm text-gray-300">
              {player.rank}:{" "}
              <span className="font-semibold text-white">{player.name}</span>
            </span>
            <span className={`text-sm font-bold ${player.color}`}>
              {player.score}
            </span>
          </div>
        ))}
      </div>

      {/* Depth Score */}
      <div className="bg-green-900/30 border border-green-800/50 rounded-xl p-4">
        <p className="text-sm font-semibold text-green-400">
          Depth Score: 8.5/10 (Excellent)
        </p>
      </div>
    </div>
  );
};

export default SquadDepth;
