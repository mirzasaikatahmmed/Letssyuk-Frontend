interface PromotionReadinessProps {
  data?: {
    technical_score: number;
    tactical_score: number;
    physical_score: number;
    mental_score: number;
    overall_score: number;
    recommended_timeline: string;
  };
}

const PromotionReadiness = ({ data }: PromotionReadinessProps) => {
  if (!data) return null;

  const readinessStats = [
    { label: "Technical", value: `${data.technical_score * 10}/10`, sub: "Ready", color: "text-green-400" },
    { label: "Tactical", value: `${data.tactical_score * 10}/10`, sub: "Needs work", color: "text-red-400" },
    { label: "Physical", value: `${data.physical_score * 10}/10`, sub: "Ready", color: "text-yellow-400" },
    { label: "Mental", value: `${data.mental_score * 10}/10`, sub: "Needs development", color: "text-red-400" },
    { label: "Overall", value: `${data.overall_score * 10}/10`, sub: "75%", color: "text-yellow-400" },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-4">
      <h2 className="text-base font-bold text-white tracking-tight">First-Team Promotion Readiness</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {readinessStats.map((stat, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4 box-border">
            <p className="text-[10px] text-zinc-500 mb-1 font-bold">{stat.label}</p>
            <p className="text-xl font-bold text-white leading-tight">{stat.value}</p>
            <p className={`text-[10px]  mt-1 font-medium ${stat.color}`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-lg p-4">
        <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1">Recommended Timeline</p>
        <p className="text-xs text-zinc-300 leading-relaxed font-medium">{data.recommended_timeline} until first-team ready</p>
      </div>
    </div>
  );
};

export default PromotionReadiness;
