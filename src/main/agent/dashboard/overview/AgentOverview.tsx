import { TrendingUp, TrendingDown, Clock, Sparkles } from 'lucide-react';
import { PlayerCard } from './_components/PlayerCard';

const AgentOverview = () => {
  const stats = [
    { label: 'Total Players Managed', value: '12', color: 'text-white' },
    { label: 'Players Rising', value: '5', color: 'text-[#53DDF5]', icon: TrendingUp },
    { label: 'Players Declining', value: '2', color: 'text-[#FF4D4D]', icon: TrendingDown },
    { label: 'Contracts Expiring Soon', value: '3', color: 'text-[#FFB01F]', icon: Clock },
  ];

  return (
    <div className=" bg-[#0B0E14] min-h-screen text-white">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Welcome back, <span className="text-[#53DDF5]">Michael Chen</span>
        </h1>
        <p className="text-gray-500 text-sm mt-1">Here's your portfolio performance overview</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#11161D] border border-gray-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest leading-tight w-24">
                {stat.label}
              </p>
              {stat.icon && <stat.icon size={18} className={stat.color} />}
            </div>
            <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* AI Insights Bar */}
      <div className="bg-gradient-to-r from-[#53DDF5]/10 to-transparent border border-[#53DDF5]/20 rounded-2xl p-6 mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 bg-[#53DDF5]/20 rounded-lg text-[#53DDF5]">
            <Sparkles size={16} />
          </div>
          <h3 className="text-sm font-black text-[#53DDF5] uppercase tracking-widest">AI Insights</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#53DDF5]" />
            <p><span className="text-[#53DDF5] font-black">5 players</span> showing strong upward performance trends this month</p>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFB01F]" />
            <p><span className="text-[#FFB01F] font-black">3 contracts</span> require immediate attention within 6 months</p>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#53DDF5]" />
            <p>Midfielders averaging <span className="text-[#53DDF5] font-black">+16% market value growth</span> — outperforming forwards</p>
          </li>
        </ul>
      </div>

      {/* Player Section Header */}
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-xl font-black tracking-tight uppercase tracking-widest border-l-4 border-[#53DDF5] pl-4">
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