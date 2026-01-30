import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Added these specific icons from the screenshot
import { Zap, LineChart, Calendar } from "lucide-react";

export const PlayerGrid = () => {
  const players = Array(6).fill({
    name: "Marcus Sterling",
    role: "Forward • 24 years",
    id: "ID: OA-ENG-2024-001",
    score: "AI 94",
    form: "8.5",
    status: "improving",
    contract: "Jun 2026",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {players.map((p, i) => (
        <Card key={i} className="bg-[#0B1219] border-gray-800 p-6 rounded-2xl group hover:border-[#30D5C8]/60 transition-all duration-300">
          <div className="flex justify-between items-start ">
            <div className="flex gap-4">
              <Avatar className="h-16 w-16 border-2 border-gray-700 shadow-xl">
                <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-xl font-extrabold text-white tracking-tight">{p.name}</h4>
                <p className="text-sm font-semibold text-gray-400">{p.role}</p>
                <p className="text-[12px] text-[#30D5C8] font-bold font-mono tracking-tighter uppercase">{p.id}</p>
              </div>
            </div>
            {/* AI Score Badge with Neon Glow */}
            <Badge 
              className={`text-sm px-3 py-1 font-black shadow-lg border-none ${
                i % 3 === 2 
                ? 'bg-[#E17100] shadow-[#E17100]/20' 
                : 'bg-[#00A63E] shadow-[#00A63E]/20'
              }`}
            >
              {p.score}
            </Badge>
          </div>
          
          <div className="space-y-4 text-sm font-bold border-t border-gray-800/60 pt-5">
            {/* Recent Form Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <Zap size={16} />
                <span className="text-sm">Recent Form</span>
              </div>
              <span className="text-white text-lg font-black">{p.form}</span>
            </div>

            {/* Performance Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <LineChart size={16} />
                <span className="text-sm">Performance</span>
              </div>
              <span className={`capitalize text-base font-black ${i % 3 === 2 ? 'text-red-500' : 'text-[#00A63E]'}`}>
                {i % 3 === 2 ? 'declining' : 'improving'}
              </span>
            </div>

            {/* Contract Row */}
            <div className="flex justify-between items-center border-b border-gray-800/40 pb-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span className="text-sm">Contract</span>
              </div>
              <span className="text-white text-base">{p.contract}</span>
            </div>
          </div>

          {/* Availability Footer with Icon */}
          <div className=" flex items-center justify-between">
            <Badge variant="outline" className="border-[#00A63E] text-[#00A63E] text-[12px] font-black bg-[#00A63E]/10 px-4 py-1.5 rounded-lg uppercase tracking-wider">
              Available
            </Badge>
            {/* Optional status tag for injuries seen in screenshots */}
            {i % 3 === 2 && (
              <Badge className="bg-[#E17100]/10 text-[#E17100] border border-[#E17100]/20 text-[11px] font-bold">
                Minor Injury
              </Badge>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};