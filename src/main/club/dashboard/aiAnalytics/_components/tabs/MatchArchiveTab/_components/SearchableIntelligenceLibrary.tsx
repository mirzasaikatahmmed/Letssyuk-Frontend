import { FileText, Search } from "lucide-react";

const matches = [
  { date: "2024-02-15", title: "Win 3-1 vs Liverpool", formation: "4-3-3", rating: "4.5/5", ratingColor: "text-cyan-400" },
  { date: "2024-02-10", title: "Draw 2-2 vs Chelsea", formation: "4-2-3-1", rating: "3.8/5", ratingColor: "text-cyan-400" },
  { date: "2024-02-05", title: "Win 2-0 vs Arsenal", formation: "4-3-3", rating: "4.2/5", ratingColor: "text-cyan-400" },
  { date: "2024-02-01", title: "Loss 0-3 vs Man City", formation: "4-4-2", rating: "3/5", ratingColor: "text-cyan-400" },
  { date: "2024-01-28", title: "Win 2-1 vs Tottenham", formation: "4-3-3", rating: "4/5", ratingColor: "text-cyan-400" },
];

const SearchableIntelligenceLibrary = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <FileText size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Searchable Intelligence Library
        </h2>
      </div>

      {/* Search & Filters */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="col-span-1 relative">
          <p className="text-xs text-gray-500 mb-1.5">Search Archive</p>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search matches, opponents, players..."
              className="w-full bg-[#27272A] border border-gray-700 rounded-lg pl-8 pr-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1.5">Season</p>
          <input
            type="text"
            className="w-full bg-[#27272A] border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1.5">Competition</p>
          <input
            type="text"
            className="w-full bg-[#27272A] border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* Match List */}
      <div className="space-y-2">
        {matches.map((match, i) => (
          <div
            key={i}
            className="bg-[#27272A] rounded-xl border border-gray-800 px-4 py-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 w-20 shrink-0">{match.date}</span>
              <div>
                <p className="text-sm font-semibold text-white">{match.title}</p>
                <p className="text-xs text-gray-500">Formation: {match.formation}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <p className="text-xs text-gray-500">Rating</p>
                <p className={`text-sm font-bold ${match.ratingColor}`}>{match.rating}</p>
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                View Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchableIntelligenceLibrary;
