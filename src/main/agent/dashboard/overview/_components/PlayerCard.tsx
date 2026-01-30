/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrendingUp, TrendingDown } from "lucide-react";

type PlayerCard = {
  name: string;
  team: string;
  goals: number;
  assists: number;
  minutes: number;
  marketTrend: number;
  isRising: boolean;
};
export const PlayerCard = ({
  name,
  team,
  goals,
  assists,
  minutes,
  marketTrend,
  isRising,
}: PlayerCard) => {
  return (
    <div className="bg-[#11161D] rounded-2xl border border-gray-800 overflow-hidden group hover:border-[#53DDF5]/30 transition-all">
      {/* Player Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={`https://img.freepik.com/free-photo/portrait-bearded-black-man-holds-basket-ball_613910-8547.jpg?semt=ais_hybrid&w=740&q=80`}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10">
          MU
        </div>
        <div
          className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${
            isRising ? "bg-[#53DDF5] text-[#0B0E14]" : "bg-[#FF4D4D] text-white"
          }`}
        >
          {isRising ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {isRising ? "Rising" : "Declining"}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-black text-white">{name}</h3>
          <p className="text-xs text-gray-500 font-bold">Age 24</p>
          <p className="text-[11px] text-gray-400 mt-1">{team}</p>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            Premier League
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 border-t border-gray-800 pt-4">
          <div>
            <p className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">
              Goals
            </p>
            <p className="text-sm font-black text-white">{goals}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">
              Assists
            </p>
            <p className="text-sm font-black text-white">{assists}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">
              Minutes
            </p>
            <p className="text-sm font-black text-white">
              {minutes.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Market Value Footer */}
        <div
          className={`mt-2 p-2 rounded-lg flex justify-between items-center ${
            isRising
              ? "bg-[#53DDF5]/5 border border-[#53DDF5]/10"
              : "bg-red-500/5 border border-red-500/10"
          }`}
        >
          <span className="text-[10px] text-gray-500 font-bold uppercase">
            Market Value
          </span>
          <span
            className={`text-[11px] font-black flex items-center gap-1 ${
              isRising ? "text-[#53DDF5]" : "text-red-500"
            }`}
          >
            {isRising ? "+" : ""}
            {marketTrend}%{" "}
            {isRising ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          </span>
        </div>
      </div>
    </div>
  );
};
