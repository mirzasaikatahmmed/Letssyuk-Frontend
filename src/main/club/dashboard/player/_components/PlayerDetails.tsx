import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Target,
  Activity,
  Users,
  BarChart3,
  Calendar,
  Flag,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { players } from "../_data/data";

const ClubPlayerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find player by ID from data.ts
  const player = players.find((p) => p.id === id);

  const metrics = [
    {
      label: "Goals",
      val: player?.stats.goals,
      icon: <Target size={16} className="text-cyan-500/60" />,
    },
    {
      label: "Assists",
      val: player?.stats.assists,
      icon: <BarChart3 size={16} className="text-cyan-500/60" />,
    },
    {
      label: "Appearances",
      val: player?.stats.appearances,
      icon: <Users size={16} className="text-cyan-500/60" />,
    },
    {
      label: "Recent Form",
      val: player?.stats.recentForm,
      icon: <Activity size={16} className="text-cyan-500/60" />,
    },
  ];

  if (!player) {
    return (
      <div className="p-10 bg-[#0B0E14] min-h-screen text-white flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-bold">Player Not Found</p>
        <button
          onClick={() => navigate("/club/dashboard/player")}
          className="bg-cyan-400 text-[#0B0E14] px-6 py-2 rounded-lg font-bold"
        >
          Back to Players
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0E14] min-h-screen text-gray-300 space-y-5 animate-in fade-in duration-1000">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-white transition-all cursor-pointer group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="font-medium">Back to Players</span>
      </button>

      {/* Top Profile Header */}
      <div className="bg-[#11161D]/60 border border-gray-800/60 p-8 rounded-[24px] flex items-center gap-8 shadow-2xl backdrop-blur-sm">
        <div className="h-24 w-24 rounded-full border-[3px] border-cyan-500/30 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <img
            src={player.avatar}
            alt={player.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-white tracking-tight">
            {player.name}
          </h1>
          <p className="text-lg font-bold text-gray-400">{player.position}</p>
          <p className="text-[12px] font-bold font-mono text-cyan-500 tracking-widest uppercase opacity-80">
            Player ID: {player.playerId}
          </p>
          <div className="flex items-center gap-6 pt-1">
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={14} className="text-cyan-500/60" />
              <span className="text-[13px] font-semibold">
                {player.age} years old
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Flag size={14} className="text-cyan-500/60" />
              <span className="text-[13px] font-semibold">
                {player.country}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((item, i) => (
          <div
            key={i}
            className="bg-[#11161D]/40 border border-gray-800/60 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 shadow-lg group"
          >
            <div className="flex items-center gap-2.5 text-gray-500 mb-3 group-hover:text-gray-400 transition-colors">
              {item.icon}{" "}
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                {item.label}
              </span>
            </div>
            <p className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
              {item.val}
            </p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-[#11161D]/40 border border-gray-800/60 p-8 rounded-[24px] shadow-xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-lg font-black text-white tracking-tight">
            Performance Trend
          </h3>
          <div className="flex items-center gap-2 bg-[#11161D]/60 border border-gray-800/80 px-4 py-1.5 rounded-full">
            <div className="h-1.5 w-6 bg-cyan-500 rounded-full"></div>
            <span className="text-[11px] font-black text-cyan-400 uppercase tracking-widest">
              Stable
            </span>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={player.performanceTrend}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1f2937"
                vertical={false}
                opacity={0.3}
              />
              <XAxis
                dataKey="name"
                stroke="#4b5563"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={15}
                className="font-bold opacity-60"
              />
              <YAxis
                stroke="#4b5563"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 10]}
                ticks={[0, 3, 6, 10]}
                className="font-bold opacity-60"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#11161D",
                  border: "1px solid rgba(75, 85, 99, 0.4)",
                  borderRadius: "12px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  padding: "12px",
                }}
                itemStyle={{ color: "#22d3ee", fontWeight: "bold" }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#22d3ee"
                strokeWidth={4}
                dot={{ r: 6, fill: "#22d3ee", strokeWidth: 0 }}
                activeDot={{
                  r: 8,
                  fill: "#ffffff",
                  stroke: "#22d3ee",
                  strokeWidth: 4,
                }}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Assessment */}
      <div className="bg-[#11161D]/60 border border-gray-800/40 p-6 rounded-[20px] shadow-lg">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-black text-white tracking-tight">
            AI Recruitment Assessment
          </h3>
          <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[11px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest shadow-sm">
            Strong Recommend
          </span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed font-medium">
          {player.aiAssessment}
        </p>
      </div>

      {/* Bottom Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Contract Box */}
        <div className="bg-[#11161D]/40 border border-gray-800/60 p-8 rounded-[24px]">
          <h4 className="text-[15px] font-black text-white mb-6 tracking-wide">
            Contract Information
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-gray-500">Expiry Date</span>
              <span className="text-gray-300">
                {player.contract.expiryDate}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-gray-500">Status</span>
              <span
                className={`${player.contract.status === "Expiring Soon" ? "text-red-500" : "text-emerald-500"} tracking-wide uppercase text-[12px]`}
              >
                {player.contract.status}
              </span>
            </div>
          </div>
        </div>

        {/* Availability Box */}
        <div className="bg-[#11161D]/40 border border-gray-800/60 p-8 rounded-[24px]">
          <h4 className="text-[15px] font-black text-white mb-6 tracking-wide">
            Availability & Fitness
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-gray-500">Status</span>
              <span
                className={`${player.availability === "Available" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"} text-[10px] px-3 py-1 rounded-md uppercase tracking-widest border border-current/20`}
              >
                {player.availability}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-gray-500">Notes</span>
              <span className="text-gray-300">{player.fitness.notes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubPlayerDetails;
