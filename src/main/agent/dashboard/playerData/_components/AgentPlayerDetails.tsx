import { useNavigate, useParams } from "react-router";
import {
  Edit3,
  X,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Clock,
  ExternalLink,
} from "lucide-react";
import { playersData } from "../_data/data";

const AgentPlayerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find player by ID - convert id to number since it comes as string from URL
  const player = playersData.find((p) => p.id === Number(id)) || playersData[0];

  if (!player) {
    return <div className="p-20 text-center text-white">Player not found</div>;
  }

  return (
    <div className="bg-[#0B0E14] min-h-screen text-white p-6 pb-12 font-sans overflow-x-hidden">
      {/* Top Navigation Header */}
      <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full border-2 border-cyan-500/30 overflow-hidden shadow-lg shadow-cyan-500/10">
            <img
              src={player.image}
              alt={player.name}
              className="h-full w-full object-center"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{player.name}</h1>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span>{player.position}</span>
              <span className="text-gray-700">•</span>
              <span className="flex items-center gap-1">
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 {player.nation}
              </span>
              <span className="text-gray-700">•</span>
              <span>{player.club}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1A232E] hover:bg-[#252F3C] border border-cyan-900/30 rounded-lg text-cyan-400 text-xs font-bold transition-all">
            <Edit3 size={14} />
            Edit Player Data
          </button>
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-8 border-b border-gray-800 mb-8 max-w-7xl mx-auto">
        <button className="pb-4 px-2 border-b-2 border-cyan-500 text-cyan-500 text-sm font-bold flex items-center gap-2">
          <TrendingUp size={16} /> Overview
        </button>
        <button className="pb-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-300 text-sm font-bold flex items-center gap-2">
          <Clock size={16} /> Contract
        </button>
        <button className="pb-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-300 text-sm font-bold flex items-center gap-2">
          <ExternalLink size={16} /> Opportunities
        </button>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Core Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Age", value: `${player.age}` },
            { label: "Height", value: player.height },
            { label: "Foot", value: player.foot.split(" ")[0] }, // Just "Right" or "Left"
            {
              label: "Market Value",
              value: player.value,
              color: "text-cyan-400",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#11161D] border border-gray-800/60 p-5 rounded-2xl"
            >
              <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <p className={`text-2xl font-bold ${stat.color || "text-white"}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Performance Tracking Section */}
        <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                Performance Tracking
              </h2>
              <p className="text-[11px] text-gray-500 font-medium">
                Last 3 months analysis
              </p>
            </div>
            <span className="bg-cyan-500/10 text-cyan-500 text-[10px] font-bold px-3 py-1 rounded-full border border-cyan-500/20 uppercase">
              Updated Today
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {player.performanceTracking.map((stat, i) => (
              <div
                key={i}
                className="bg-[#0B0E14] border border-gray-800/80 p-5 rounded-xl"
              >
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-3">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </span>
                  {stat.trend && (
                    <span className="text-[10px] text-cyan-500 font-bold">
                      {stat.trend}
                    </span>
                  )}
                  {stat.max && (
                    <span className="text-[10px] text-gray-700 font-bold">
                      {stat.max}
                    </span>
                  )}
                  {stat.percent && (
                    <span className="text-[10px] text-cyan-800 font-bold">
                      {stat.percent}
                    </span>
                  )}
                </div>
                {stat.target && (
                  <p className="text-[10px] text-gray-700 font-medium mt-1">
                    {stat.target}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Trend Feedback Items */}
          <div className="space-y-3">
            <div className="bg-[#11161D] border border-cyan-500/5 p-4 rounded-xl flex items-center gap-4 border-l-2 border-l-cyan-500/40">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500">
                <CheckCircle2 size={16} />
              </div>
              <div className="grow">
                <h4 className="text-[13px] font-bold text-cyan-400">
                  Positive Trend
                </h4>
                <p className="text-[11px] text-gray-500">
                  Assists trending upward over last 6 weeks
                </p>
              </div>
            </div>
            <div className="bg-[#1A1610] border border-orange-500/5 p-4 rounded-xl flex items-center gap-4 border-l-2 border-l-orange-500/40">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                <AlertTriangle size={16} />
              </div>
              <div className="grow">
                <h4 className="text-[13px] font-bold text-orange-400">
                  Monitor
                </h4>
                <p className="text-[11px] text-gray-500">
                  Yellow cards increased - caution advised
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Progress Section */}
        <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-3xl p-8">
          <h2 className="text-base font-bold text-white mb-8 tracking-tight">
            Development Progress
          </h2>
          <div className="space-y-8">
            {player.developmentProgress.map((stat, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center text-[12px] font-bold uppercase tracking-wide">
                  <span className="text-gray-400">{stat.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white">
                      {stat.value}/{stat.max}
                    </span>
                    {stat.bonus && (
                      <span className="text-cyan-500 bg-cyan-500/10 px-1.5 py-0.5 rounded text-[10px]">
                        ({stat.bonus})
                      </span>
                    )}
                    {stat.status && (
                      <span
                        className={`${stat.label === "Leadership" || stat.label === "Defensive Work" ? "text-orange-500 bg-orange-500/10" : "text-cyan-500 bg-cyan-500/10"} px-1.5 py-0.5 rounded text-[10px]`}
                      >
                        ({stat.status})
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${stat.color || "bg-cyan-500"} shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all duration-1000`}
                    style={{ width: `${(stat.value / stat.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Contract Status Card */}
          <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-3xl p-8">
            <h2 className="text-base font-bold text-white mb-8 tracking-tight">
              Contract Status
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl relative overflow-hidden group">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Time Remaining
                </p>
                <p className="text-xl font-bold text-white mb-4">
                  {player.contract === "Jun 2026"
                    ? "18 months"
                    : "More than 2 years"}
                </p>
                <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${player.contract === "Jun 2026" ? "w-2/3 bg-orange-500" : "w-full bg-cyan-500"} rounded-full`}
                  />
                </div>
              </div>
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Renewal Window
                </p>
                <p className="text-xl font-bold text-white mb-3 leading-tight">
                  Opens in 6 months
                </p>
                <button className="bg-orange-500/10 text-orange-500 text-[10px] font-bold px-3 py-1 rounded-lg border border-orange-500/20 uppercase">
                  Prepare Now
                </button>
              </div>
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Market Value Trend
                </p>
                <p className="text-xl font-bold text-cyan-400 mb-1">
                  {player.status === "Rising" ? "+€2M" : "-€1M"}
                </p>
                <p className="text-[10px] text-gray-600">
                  Increased this session
                </p>
              </div>
              <div className="bg-[#0B0E14] border border-gray-800/80 p-6 rounded-2xl">
                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-2">
                  Strategy Status
                </p>
                <p className="text-xl font-bold text-white mb-3">Ready</p>
                <button className="bg-cyan-500/10 text-cyan-500 text-[10px] font-bold px-3 py-1 rounded-lg border border-cyan-500/20 uppercase">
                  Brief Available
                </button>
              </div>
            </div>
          </div>

          {/* Market Readiness Card */}
          <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-3xl p-8 relative">
            <div className="flex justify-between items-start mb-10">
              <h2 className="text-base font-bold text-white tracking-tight">
                Market Readiness
              </h2>
              <div className="text-right">
                <p className="text-3xl font-bold text-cyan-400">
                  {player.marketReadiness.overall.toFixed(1)}
                </p>
                <p className="text-[10px] text-gray-600 font-bold uppercase">
                  /10
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Technical",
                  val: player.marketReadiness.technical,
                  color: "text-cyan-400",
                },
                {
                  label: "Mental",
                  val: player.marketReadiness.mental,
                  color: "text-[#FFB900]",
                },
                {
                  label: "Physical",
                  val: player.marketReadiness.physical,
                  color: "text-cyan-400",
                },
                {
                  label: "Overall",
                  val: player.marketReadiness.overall,
                  color: "text-cyan-400",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-[#0B0E14] border border-gray-800/80 p-4 rounded-xl flex flex-col group"
                >
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    {m.label}
                  </span>
                  <span
                    className={`text-sm font-bold ${m.color || "text-white"}`}
                  >
                    {m.val}/10
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="bg-cyan-500/5 border border-cyan-500/10 p-5 rounded-2xl border-l-2 border-l-cyan-500/30">
                <p className="text-[11px] text-cyan-500 font-bold uppercase mb-2">
                  Assessment
                </p>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {player.marketReadiness.assessment}
                </p>
              </div>

              <div className="space-y-2">
                {player.marketReadiness.preparations.map((prep, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[10px] text-gray-400"
                  >
                    <div className="p-0.5 bg-orange-500/10 rounded-full text-orange-500 border border-orange-500/20">
                      <CheckCircle2 size={10} />
                    </div>
                    {prep}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPlayerDetails;
