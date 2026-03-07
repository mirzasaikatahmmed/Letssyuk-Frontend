import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Mail,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { availablePlayers } from "../_data/availablePlayersData";

export const AvailablePlayerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const player = availablePlayers.find((p) => p.id === id);

  if (!player) {
    return (
      <div className="p-10 bg-[#0B0E14] min-h-screen text-white flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-bold">Player Not Found</p>
        <button
          onClick={() => navigate("/club/dashboard/available-players")}
          className="bg-[#53DDF5] text-[#0B0E14] px-6 py-2 rounded-lg font-bold"
        >
          Back to Available Players
        </button>
      </div>
    );
  }

  const statBox = "bg-[#11161D] border border-gray-800 p-4 rounded-xl";
  const statLabel =
    "text-[11px] font-black text-gray-500 uppercase tracking-widest mb-1";
  const statVal = "text-2xl font-black text-white";

  return (
    <div className=" bg-[#0B0E14] min-h-screen space-y-6  mx-auto animate-in fade-in duration-700">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm cursor-pointer"
      >
        <ArrowLeft size={16} /> Back to Players
      </button>

      {/* Profile Header */}
      <div className="bg-[#11161D] border border-[#53DDF5]/40 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <img
          src={player.image}
          className="h-32 w-32 rounded-full border-4 border-gray-800 object-cover"
          alt={player.name}
        />
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-black text-white">{player.name}</h1>
            <p className="text-gray-500 text-sm font-bold flex items-center gap-2">
              📍 {player.country} • {player.age} years old • {player.position}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-800 text-gray-300 text-[10px] font-black px-3 py-1.5 rounded uppercase">
              {player.level}
            </span>
            <span
              className={`text-[10px] font-black px-3 py-1.5 rounded uppercase flex items-center gap-1 ${player.trend === "Declining" ? "bg-red-500/10 text-red-500" : "bg-[#05DF72]/10 text-[#05DF72]"}`}
            >
              {player.trend === "Declining" ? (
                <TrendingDown size={12} />
              ) : (
                <TrendingUp size={12} />
              )}{" "}
              {player.trend}
            </span>
            <span className="bg-[#53DDF5]/10 text-[#53DDF5] text-[10px] font-black px-3 py-1.5 rounded uppercase">
              {player.status}
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
            {player.bio}
          </p>
          <div className="flex gap-4 pt-2">
            <button className="bg-[#53DDF5] text-[#0B0E14] px-6 py-2.5 rounded-lg font-black text-sm flex items-center gap-2 hover:shadow-[0_0_15px_#53DDF540] cursor-pointer active:scale-95 transition-all">
              <Mail size={18} /> Express Interest
            </button>
            <button className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-black text-sm border border-gray-700 hover:bg-gray-700 cursor-pointer active:scale-95 transition-all">
              Request Trial
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stats & Strengths */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-[#235D6710] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <TrendingUp size={16} className="text-[#53DDF5]" /> Performance
              Summary (Last 20 Matches)
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className={statBox}>
                <p className={statLabel}>Appearances</p>
                <p className={statVal}>{player.stats.appearances}</p>
              </div>
              <div className={statBox}>
                <p className={statLabel}>Goals</p>
                <p className={statVal} style={{ color: "#05DF72" }}>
                  {player.stats.goals}
                </p>
              </div>
              <div className={statBox}>
                <p className={statLabel}>Assists</p>
                <p className={statVal} style={{ color: "#53DDF5" }}>
                  {player.stats.assists}
                </p>
              </div>
              <div className={statBox}>
                <p className={statLabel}>Minutes Played</p>
                <p className={statVal}>{player.stats.minutesPlayed}</p>
              </div>
              <div className={statBox}>
                <p className={statLabel}>Shots on Target</p>
                <p className={statVal}>{player.stats.shotsOnTarget}</p>
              </div>
              <div className={statBox}>
                <p className={statLabel}>Pass Accuracy</p>
                <p className={statVal}>{player.stats.passAccuracy}</p>
              </div>
            </div>
          </section>

          {/* Strengths / Improvements */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#235D6710] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-sm font-black text-white uppercase mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#05DF72]" /> Strengths
              </h3>
              <div className="space-y-3">
                {player.strengths.map((s, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 p-3 rounded-lg text-xs text-gray-300 border border-gray-800 flex  items-center  gap-2"
                  >
                    <p className="h-2 w-2 bg-[#05DF72] rounded-full "></p> {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#235D6710] border border-gray-800 rounded-2xl p-6">
              <h3 className="text-sm font-black text-white uppercase mb-4 flex items-center gap-2">
                <AlertCircle size={16} className="text-yellow-500" /> Areas to
                Improve
              </h3>
              <div className="space-y-3">
                {player.areasToImprove.map((s, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 p-3 rounded-lg text-xs text-gray-300 border border-gray-800 flex  items-center  gap-2"
                  >
                    <p className="h-2 w-2 bg-yellow-500 rounded-full "></p>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Availability & Notice */}
        <div className="space-y-6">
          <div className="bg-[#11161D]/50 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-sm font-black text-white uppercase mb-6 flex items-center gap-2">
              📅 Availability
            </h3>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase mb-1">
                  Contract Status
                </p>
                <p className="text-sm font-black text-[#05DF72]">
                  {player.contractStatus}
                </p>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase mb-2">
                  Relocation
                </p>
                <span className="bg-gray-800 text-gray-300 text-[10px] font-black px-3 py-1.5 rounded-lg">
                  {player.relocation
                    ? "Willing to relocate"
                    : "Not looking to relocate"}
                </span>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase mb-2">
                  Preferred Leagues
                </p>
                <div className="flex gap-2 flex-wrap">
                  {player.preferredLeagues.map((league, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 text-[10px] font-black px-3 py-1.5 rounded-lg"
                    >
                      {league}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
            <h3 className="text-[11px] font-black text-yellow-500 uppercase tracking-widest mb-3">
              Important Notice
            </h3>
            <p className="text-[11px] text-yellow-500/80 leading-relaxed font-medium">
              OnyxSport AI does not act as an intermediary or agent. Contact is
              limited to expressing interest. All negotiations should be
              conducted directly between clubs and players.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
