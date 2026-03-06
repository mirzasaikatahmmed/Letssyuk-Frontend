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
    <div className="bg-[#0B0E14] min-h-screen text-white p-8 lg:p-12">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Player Data Management
        </h1>
        <p className="text-gray-500 text-sm">
          Manage and track your player portfolio
        </p>
      </div>

      {/* Search and Add Player Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <div className="flex-1 relative w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search players by name, club, or position..."
            className="w-full bg-[#11161D] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#53DDF5]/50 transition-all placeholder:text-gray-600 shadow-inner"
          />
        </div>
        <button
          onClick={() => navigate("/agent/dashboard/add-player")}
          className="w-full md:w-auto bg-[#00D1FF] hover:bg-[#00B8E0] text-[#0B0E14] px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
        >
          <Plus size={18} strokeWidth={3} /> Add Player
        </button>
      </div>

      {/* Stats Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#11161D]/60 border border-gray-800/80 p-6 rounded-2xl relative overflow-hidden group shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
              {stat.icon && <stat.icon size={16} className={stat.color} />}
            </div>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Players List Section */}
      <div>
        <h3 className="text-xl font-bold mb-8 tracking-tight">
          All Players ({players.length})
        </h3>

        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-[#11161D]/40 border border-gray-800/60 rounded-2xl p-8 hover:border-[#53DDF5]/30 transition-all group relative"
            >
              <div className="flex items-center">
                {/* Player Image */}
                <div className="h-24 w-24 rounded-2xl overflow-hidden shrink-0 border border-gray-800 mr-8 shadow-lg">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="h-full w-full object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Info & Action */}
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-2xl text-white tracking-tight">
                          {player.name}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {player.age} years
                        </span>
                        <div
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter border ${
                            player.status === "Rising"
                              ? "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
                              : "bg-red-500/10 text-red-500 border-red-500/20"
                          }`}
                        >
                          {player.status === "Rising" ? (
                            <TrendingUp size={12} />
                          ) : (
                            <TrendingDown size={12} />
                          )}
                          {player.status}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-3">
                        <span className="flex items-center gap-1.5">
                          <span className="text-base leading-none">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>{" "}
                          {player.nation}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span>{player.position}</span>
                        <span className="text-gray-600">•</span>
                        <span>{player.foot}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <p className="text-sm font-bold text-gray-200">
                          {player.club}
                        </p>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <Clock size={14} className="opacity-60" />
                          <span>Contract until {player.contract}</span>
                        </div>
                      </div>
                    </div>

                    <button className="border border-white/20 hover:border-[#53DDF5] hover:text-[#53DDF5] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer">
                      View player
                    </button>
                  </div>

                  {/* Stats Bottom Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Goals
                      </p>
                      <p className="text-xl font-bold text-white">
                        {player.goals}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Assists
                      </p>
                      <p className="text-xl font-bold text-white">
                        {player.assists}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Matches
                      </p>
                      <p className="text-xl font-bold text-white">
                        {player.matches}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Minutes
                      </p>
                      <p className="text-xl font-bold text-white">
                        {player.minutes}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                        Market Value
                      </p>
                      <p className="text-xl font-bold text-[#53DDF5]">
                        {player.value}
                      </p>
                    </div>
                  </div>
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
