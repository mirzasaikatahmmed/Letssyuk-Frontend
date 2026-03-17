import { Shield } from "lucide-react";

interface DefensiveShapeConsistencyProps {
  data?: {
    first_half_percent: number;
    second_half_percent: number;
    drop_off_percent: number;
    key_issue: string;
  };
}

const DefensiveShapeConsistency = ({ data }: DefensiveShapeConsistencyProps) => {
  if (!data) return null;

  const shapeStats = [
    { 
      label: "First Half", 
      value: `${data.first_half_percent}%`, 
      sub: "Consistency", 
      color: "text-green-500", 
      barColor: "bg-green-500", 
      pct: data.first_half_percent 
    },
    { 
      label: "Second Half", 
      value: `${data.second_half_percent}%`, 
      sub: "Consistency", 
      color: "text-green-500", 
      barColor: "bg-green-500", 
      pct: data.second_half_percent 
    },
    { 
      label: "Drop-off", 
      value: `${data.drop_off_percent}%`, 
      sub: "Fatigue factor", 
      color: "text-red-500", 
      barColor: "bg-red-500", 
      pct: data.drop_off_percent 
    },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Shield size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white">Defensive Shape Consistency</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {shapeStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-xl border border-white/5 p-4"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color} mb-1 tracking-tight`}>
              {stat.value}
            </p>
            <p className="text-[10px] text-zinc-600 font-medium mb-3">{stat.sub}</p>
            <div className="w-full h-1.5 bg-[#12141B] rounded-full overflow-hidden border border-white/5">
              <div
                className={`h-full ${stat.barColor} rounded-full`}
                style={{ width: `${stat.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Key Issue */}
      <div className="bg-yellow-900/10 border border-yellow-500/10 rounded-xl p-4">
        <p className="text-[10px] uppercase tracking-wider text-yellow-500 font-bold mb-1">Key Issue</p>
        <p className="text-xs text-zinc-300">{data.key_issue}</p>
      </div>
    </div>
  );
};

export default DefensiveShapeConsistency;
