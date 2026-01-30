// import React, { useState } from 'react';
import { Search, Eye, TrendingUp, TrendingDown } from 'lucide-react';
import { useNavigate } from 'react-router';

const PLAYERS = Array(12).fill({
  id: "LP-772",
  name: "Lucas Martinez",
  position: "Forward",
  age: 23,
  country: "Spain",
  level: "Semi-Pro",
  status: "Open to trials",
  trend: "Improving",
  image: "https://github.com/shadcn.png"
});

const AvailablePlayers = () => {
    const navigate = useNavigate()


  return (
    <div className=" bg-[#0B0E14] min-h-screen space-y-7">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">Available Players</h1>
        <p className="text-gray-400 text-sm mt-1">Browse and recruit players looking for opportunities</p>
      </div>

      {/* Search Bar - Same to Same */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        <input 
          className="w-full bg-[#11161D] border border-gray-800 pl-12 h-14 text-sm text-gray-300 focus:outline-none focus:border-[#53DDF5]/50 rounded-xl transition-all"
          placeholder="Search by name, position, or club..."
        />
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLAYERS.map((player, i) => (
          <div key={i} className="bg-[#11161D] border border-gray-800 rounded-2xl p-5 hover:border-[#53DDF5]/30 transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <img src={player.image} alt="" className="h-14 w-14 rounded-lg object-cover border border-gray-800" />
              <div>
                <h3 className="text-[16px] font-black text-white leading-tight">{player.name}</h3>
                <p className="text-[12px] text-gray-500 font-bold  tracking-tight">
                  {player.position} • {player.age} years • {player.country}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-800/50 text-gray-400 text-[11px] font-black px-2 py-1 rounded ">{player.level}</span>
              <span className="bg-[#05DF72]/10 text-[#05DF72] text-[11px] font-black px-2 py-1 rounded ">{player.status}</span>
              <span className={`text-[11px] font-black px-2 py-1 rounded  flex items-center gap-1 ${i > 9 ? 'bg-red-500/10 text-red-500' : 'bg-[#05DF72]/10 text-[#05DF72]'}`}>
                {i > 9 ? <TrendingDown size={10}/> : <TrendingUp size={10}/>} {i > 9 ? 'Declining' : 'Improving'}
              </span>
            </div>

            <button 
              onClick={() => navigate(player.id)}
              className="w-full bg-transparent border border-gray-700 cursor-pointer hover:border-[#53DDF5] hover:bg-[#53DDF5]/5 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all"
            >
              <Eye size={16} /> View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;