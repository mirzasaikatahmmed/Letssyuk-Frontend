import { FileText, Search, Trophy, TrendingUp } from "lucide-react";
import type { MatchArchiveReport } from "@/types/club.types";

interface SearchableIntelligenceLibraryProps {
  data: {
    search_archive_placeholder: string;
    season_filter: string;
    competition_filter: string;
    reports: MatchArchiveReport[];
  };
}

const SearchableIntelligenceLibrary = ({
  data,
}: SearchableIntelligenceLibraryProps) => {
  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
            <FileText size={20} className="text-cyan-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Searchable Intelligence Library
            </h2>
            <p className="text-xs text-zinc-500 font-medium italic">
              Comprehensive match report database
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#1A1D24] px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2">
            <Trophy size={14} className="text-yellow-500" />
            <span className="text-[10px] font-bold text-zinc-400">
              ARCHIVE ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative group">
          <p className="text-[10px] font-bold text-zinc-500 mb-1.5 uppercase tracking-wider ml-1">
            Search Archive
          </p>
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-cyan-400 transition-colors"
            />
            <input
              type="text"
              placeholder={data.search_archive_placeholder}
              className="w-full bg-[#1A1D24] border border-white/5 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 focus:border-cyan-500/30 transition-all"
            />
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold text-zinc-500 mb-1.5 uppercase tracking-wider ml-1">
            Season
          </p>
          <select
            className="w-full bg-[#1A1D24] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all appearance-none cursor-pointer"
            defaultValue={data.season_filter}
          >
            <option>{data.season_filter}</option>
            <option>2023/2024</option>
            <option>2022/2023</option>
          </select>
        </div>
        <div>
          <p className="text-[10px] font-bold text-zinc-500 mb-1.5 uppercase tracking-wider ml-1">
            Competition
          </p>
          <select
            className="w-full bg-[#1A1D24] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all appearance-none cursor-pointer"
            defaultValue={data.competition_filter}
          >
            <option>{data.competition_filter}</option>
            <option>Champions League</option>
            <option>FA Cup</option>
          </select>
        </div>
      </div>

      {/* Match List */}
      <div className="space-y-3">
        {data.reports.map((report, i) => (
          <div
            key={i}
            className="group bg-[#1A1D24] hover:bg-[#1E222B] rounded-xl border border-white/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center justify-center bg-[#12141B] w-16 h-16 rounded-xl border border-white/5 shrink-0">
                <span className="text-[10px] font-bold text-zinc-500 uppercase">
                  {report.date.split("-")[1]}
                </span>
                <span className="text-xl font-black text-white">
                  {report.date.split("-")[2]}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase ${
                      report.result === "Win"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : report.result === "Loss"
                          ? "bg-red-500/10 text-red-400 border border-red-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    }`}
                  >
                    {report.result}
                  </span>
                  <span className="text-xs font-bold text-white tracking-tight">
                    Report ID: #MAR-{2021 + i}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <p className="text-zinc-400 font-medium">
                    Formation:{" "}
                    <span className="text-zinc-200">{report.formation}</span>
                  </p>
                  <div className="w-1 h-1 rounded-full bg-zinc-700" />
                  <div className="flex items-center gap-1">
                    <span className="text-zinc-400 font-medium">Rating:</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, starI) => (
                        <div
                          key={starI}
                          className={`w-1.5 h-1.5 rounded-full ${starI < report.rating ? "bg-cyan-400" : "bg-zinc-700"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/20 text-[11px] font-bold px-5 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider">
              <TrendingUp size={14} />
              {report.action_label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchableIntelligenceLibrary;
