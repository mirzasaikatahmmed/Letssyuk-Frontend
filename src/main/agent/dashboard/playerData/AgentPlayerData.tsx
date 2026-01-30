import React from "react";
import { useNavigate } from "react-router";
import { Search, Plus, TrendingUp, TrendingDown, Clock } from "lucide-react";

const AgentPlayerData = () => {
  const navigate = useNavigate();

  const stats = [
    {
      label: "Total Players Managed",
      value: "12",
      icon: null,
      color: "text-white",
    },
    {
      label: "Players Rising",
      value: "5",
      icon: TrendingUp,
      color: "text-[#53DDF5]",
    },
    {
      label: "Avg Market Value",
      value: "€17.7M",
      icon: TrendingDown,
      color: "text-red-400",
    },
    {
      label: "Contracts Expiring Soon",
      value: "3",
      icon: Clock,
      color: "text-[#FFB01F]",
    },
  ];

  const players = [
    {
      id: 1,
      name: "James Mitchell",
      age: 24,
      nation: "England",
      position: "Striker",
      foot: "Right Foot",
      club: "Manchester United",
      contract: "Jun 2026",
      goals: 12,
      assists: 7,
      matches: 25,
      minutes: "1,890",
      value: "€22M",
      status: "Rising",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "James Mitchell",
      age: 24,
      nation: "England",
      position: "Striker",
      foot: "Right Foot",
      club: "Manchester United",
      contract: "Jun 2026",
      goals: 12,
      assists: 7,
      matches: 25,
      minutes: "1,890",
      value: "€22M",
      status: "Rising",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "James Mitchell",
      age: 24,
      nation: "England",
      position: "Striker",
      foot: "Right Foot",
      club: "Manchester United",
      contract: "Jun 2026",
      goals: 12,
      assists: 7,
      matches: 25,
      minutes: "1,890",
      value: "€22M",
      status: "Declining",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <div className=" bg-[#0B0E14] min-h-screen text-white">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          Player Data Management
        </h1>
        <p className="text-gray-500 text-sm">
          Manage and track your player portfolio
        </p>
      </div>

      {/* Search and Add Player Bar */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search players by name, club, or position..."
            className="w-full bg-[#11161D]/50 border border-gray-800 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-[#53DDF5]/50 transition-all placeholder:text-gray-600"
          />
        </div>
        <button
          onClick={() => navigate("/agent/dashboard/add-player")}
          className="bg-[#53DDF5] hover:bg-[#42c5db] text-[#0B0E14] px-6 py-3.5 rounded-xl font-black text-sm flex items-center gap-2 transition-all shadow-lg shadow-[#53DDF5]/10"
        >
          <Plus size={18} strokeWidth={3} /> Add Player
        </button>
      </div>

      {/* Stats Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#11161D] border border-gray-800 p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="flex justify-between items-start relative z-10">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-tight w-28">
                {stat.label}
              </p>
              {stat.icon && <stat.icon size={16} className={stat.color} />}
            </div>
            <p
              className={`text-4xl font-black mt-4 relative z-10 ${stat.color}`}
            >
              {stat.value}
            </p>
            {/* Subtle background glow effect */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all"></div>
          </div>
        ))}
      </div>

      {/* Players List Section */}
      <div>
        <h3 className="text-xl font-black mb-6 tracking-tight">
          All Players ({players.length})
        </h3>

        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-[#11161D] border border-gray-800 rounded-2xl p-6 flex items-center hover:border-[#53DDF5]/40 transition-all cursor-pointer group"
            >
              {/* Player Image */}
              <div className="h-20 w-20 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-700 mr-6">
                <img
                  src={player.image}
                  alt={player.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Basic Info & Club */}
              <div className="flex-grow min-w-[250px]">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-black text-xl text-white tracking-tight">
                    {player.name}
                  </h4>
                  <span className="text-xs text-gray-500 font-bold">
                    {player.age} years
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-black uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1">
                    <span className="text-gray-600">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> {player.nation}
                  </span>
                  <span className="text-gray-700">•</span>
                  <span>{player.position}</span>
                  <span className="text-gray-700">•</span>
                  <span>{player.foot}</span>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-sm font-black text-gray-300">
                    {player.club}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500 text-[11px] font-bold">
                    <Clock size={12} className="text-gray-600" />
                    <span>Contract until {player.contract}</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid - Aligned for scannability */}
              <div className="flex items-center gap-12 px-8 border-x border-gray-800/50 mx-6">
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">
                    Goals
                  </p>
                  <p className="text-lg font-black text-white">
                    {player.goals}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">
                    Assists
                  </p>
                  <p className="text-lg font-black text-white">
                    {player.assists}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">
                    Matches
                  </p>
                  <p className="text-lg font-black text-white">
                    {player.matches}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">
                    Minutes
                  </p>
                  <p className="text-lg font-black text-white">
                    {player.minutes}
                  </p>
                </div>
              </div>

              {/* Market Value & Trend */}
              <div className="flex flex-col items-end min-w-[120px]">
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-3 ${
                    player.status === "Rising"
                      ? "bg-[#53DDF5]/10 text-[#53DDF5]"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {player.status === "Rising" ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  {player.status}
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-0.5">
                    Market Value
                  </p>
                  <p className="text-xl font-black text-[#53DDF5] tracking-tight">
                    {player.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentPlayerData;
