import { Users } from "lucide-react";

interface PrimaryThreatsProps {
  data?: Array<{
    player_name: string;
    position: string;
    threat_score: number;
    weakness: string;
    strategy: string;
  }>;
}

const PrimaryThreats = ({ data }: PrimaryThreatsProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Users size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">Primary Threats</h2>
      </div>

      {/* Threat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((threat, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] border-l-2 border-red-500/80 rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-bold text-white">{threat.player_name} ({threat.position})</p>
              <span className="text-xs font-bold text-red-500">{threat.threat_score}/10</span>
            </div>
            
            <p className="text-[11px] text-zinc-500 mb-1 leading-relaxed">Weakness: {threat.weakness}</p>
            <p className="text-[11px] text-cyan-400 leading-relaxed font-medium">Strategy: {threat.strategy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimaryThreats;
