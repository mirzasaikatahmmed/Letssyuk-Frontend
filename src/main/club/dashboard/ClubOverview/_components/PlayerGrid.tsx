import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Activity } from "lucide-react";
import { players } from "../_data/data";

export const PlayerGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {players.map((p) => (
        <Card
          key={p.id}
          className="bg-[#11161D]/60 border-gray-800/60 p-6 rounded-[24px] group hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -right-10 -top-10 h-32 w-32 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-500" />

          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="relative">
                <Avatar className="h-16 w-16 border-2 border-gray-800 shadow-xl group-hover:border-cyan-500/40 transition-colors duration-500">
                  <AvatarImage src={p.image} className="object-cover" />
                  <AvatarFallback className="bg-gray-800 text-gray-400">
                    {p.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-0.5">
                <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {p.name}
                </h4>
                <p className="text-xs font-medium text-gray-400">
                  {p.role} • {p.age} years
                </p>
                <p className="text-[10px] text-cyan-500/80 font-bold font-mono tracking-widest uppercase">
                  ID: {p.playerId}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm font-bold border-t border-gray-800/40 pt-6">
            {/* Recent Form Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 text-gray-500 group-hover:text-gray-400 transition-colors">
                <Activity size={16} strokeWidth={2.5} />
                <span className="text-[13px] font-semibold tracking-wide">
                  Recent Form
                </span>
              </div>
              <span className="text-white text-lg font-black tracking-tight">
                {p.recentForm}
              </span>
            </div>

            {/* Contract Row */}
            <div className="flex justify-between items-center pb-2">
              <div className="flex items-center gap-2.5 text-gray-500 group-hover:text-gray-400 transition-colors">
                <Calendar size={16} strokeWidth={2.5} />
                <span className="text-[13px] font-semibold tracking-wide">
                  Contract
                </span>
              </div>
              <span
                className={`text-[14px] font-black tracking-tight ${
                  p.contractStatus === "warning"
                    ? "text-red-500"
                    : "text-emerald-500"
                }`}
              >
                {p.contractUntil}
              </span>
            </div>
          </div>

          {/* Status Tags Footer */}
          <div className="mt-4 flex items-center gap-2">
            {p.status === "Available" ? (
              <Badge className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                Available
              </Badge>
            ) : (
              <Badge className="bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                {p.status}
              </Badge>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
