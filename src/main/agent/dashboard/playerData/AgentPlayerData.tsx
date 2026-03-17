import { useNavigate } from "react-router";
import { Search, Plus, TrendingUp, TrendingDown, Clock } from "lucide-react";
import PlayerCard from "./_components/PlayerCard";
import { playersData, type StatItem } from "./_data/data";

const AgentPlayerData = () => {
  const navigate = useNavigate();

  const agentStats: StatItem[] = [
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
          className="w-full md:w-auto bg-[#00D1FF] cursor-pointer hover:bg-[#00B8E0] text-[#0B0E14] px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
        >
          <Plus size={18} strokeWidth={3} /> Add Player
        </button>
      </div>

      {/* Stats Overview Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {agentStats.map((stat, i) => (
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
          All Players ({playersData.length})
        </h3>

        <div className="space-y-4">
          {playersData.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentPlayerData;
