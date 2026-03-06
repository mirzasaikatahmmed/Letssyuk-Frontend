import { Clock, TrendingUp } from "lucide-react";
import { PlayerCard } from "./_components/PlayerCard";

const AgentOverview = () => {
  const stats = [
    { label: "Total Players Managed", value: "12", color: "text-white" },
    {
      label: "Contracts Expiring Soon",
      value: "3",
      color: "text-[#FFB01F]",
      icon: Clock,
    },
  ];

  return (
    <div className=" bg-[#0B0E14] min-h-screen text-white">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Welcome back, <span className="text-[#53DDF5]">Michael Chen</span>
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Here's your portfolio performance overview
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#11161D] border border-gray-800 p-6 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
              {stat.icon && <stat.icon size={18} className={stat.color} />}
            </div>
            <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Player Section Header */}
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-xl font-black uppercase tracking-widest border-l-4 border-[#53DDF5] pl-4">
          Player Performance Snapshot
        </h2>
        <button className="text-[#53DDF5] text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-2">
          View All Players <TrendingUp size={14} />
        </button>
      </div>

      {/* Player Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlayerCard
          name="James Mitchell"
          team="Manchester United"
          goals={12}
          assists={7}
          minutes={1890}
          marketTrend={15}
          isRising={true}
        />
        <PlayerCard
          name="James Mitchell"
          team="Manchester United"
          goals={12}
          assists={7}
          minutes={1890}
          marketTrend={15}
          isRising={true}
        />
        <PlayerCard
          name="James Mitchell"
          team="Manchester United"
          goals={12}
          assists={7}
          minutes={1890}
          marketTrend={8}
          isRising={false}
        />
      </div>
    </div>
  );
};

export default AgentOverview;
