import { useNavigate } from "react-router";
import { Clock, TrendingUp, TrendingDown } from "lucide-react";

interface PlayerCardProps {
  player: {
    id: number;
    name: string;
    age: number;
    nation: string;
    position: string;
    foot: string;
    club: string;
    contract: string;
    goals: number;
    assists: number;
    matches: number;
    minutes: string;
    value: string;
    status: string;
    image: string;
  };
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#11161D]/40 border border-gray-800/60 rounded-2xl p-8 hover:border-[#53DDF5]/30 transition-all group relative">
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
                <p className="text-sm font-bold text-gray-200">{player.club}</p>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <Clock size={14} className="opacity-60" />
                  <span>Contract until {player.contract}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate(`details/${player.id}`)}
              className="border border-white/20 hover:border-[#53DDF5] hover:text-[#53DDF5] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer"
            >
              View player
            </button>
          </div>

          {/* Stats Bottom Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Goals
              </p>
              <p className="text-xl font-bold text-white">{player.goals}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Assists
              </p>
              <p className="text-xl font-bold text-white">{player.assists}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Matches
              </p>
              <p className="text-xl font-bold text-white">{player.matches}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Minutes
              </p>
              <p className="text-xl font-bold text-white">{player.minutes}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1.5">
                Market Value
              </p>
              <p className="text-xl font-bold text-[#53DDF5]">{player.value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
