const RecentMatchReports = () => {
  const matches = [
    { match: "Win vs Liverpool", rating: "4.2/5", dot: "text-green-400" },
    { match: "Draw vs Chelsea", rating: "3.8/5", dot: "text-yellow-400" },
    { match: "Win vs Arsenal", rating: "4.5/5", dot: "text-green-400" },
    { match: "Loss vs Man City", rating: "3/5", dot: "text-red-400" },
    { match: "Win vs Tottenham", rating: "4/5", dot: "text-green-400" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="text-red-500">📊</span> Recent Match Reports
      </h2>
      <div className="bg-[#18181B] rounded-xl border border-gray-800 overflow-hidden">
        {/* Match rows */}
        <div className="divide-y divide-gray-800">
          {matches.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-3 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-white font-medium">{item.match}</p>
                <p className="text-xs text-gray-500">Rating: {item.rating}</p>
              </div>
              <span className={`text-2xl ${item.dot}`}>●</span>
            </div>
          ))}
        </div>

        {/* Key Findings */}
        <div className="px-4 py-4 border-t border-gray-800">
          <p className="text-sm font-semibold text-white mb-3">Key Findings</p>
          <ul className="space-y-1 text-xs">
            <li>
              <span className="text-green-400 font-medium">• Strength: </span>
              <span className="text-gray-300">Counter-attack effectiveness</span>
            </li>
            <li>
              <span className="text-red-400 font-medium">• Weakness: </span>
              <span className="text-gray-300">Set-piece defense</span>
            </li>
            <li>
              <span className="text-cyan-400 font-medium">• Trend: </span>
              <span className="text-gray-300">Improving possession stats</span>
            </li>
            <li>
              <span className="text-yellow-400 font-medium">• Alert: </span>
              <span className="text-gray-300">Injury concerns for 2 players</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentMatchReports;
