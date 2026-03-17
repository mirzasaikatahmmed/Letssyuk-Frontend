import { DollarSign } from "lucide-react";

interface ExecutiveSummaryProps {
  data?: {
    top_recommendation: string;
    fit_score: string;
    estimated_value: string;
    development_time: string;
    risk_level: string;
  };
}

const ExecutiveSummary = ({ data }: ExecutiveSummaryProps) => {
  if (!data) return null;

  const summaryStats = [
    {
      label: "Top Recommendation",
      value: data.top_recommendation,
      valueClass: "text-white",
    },
    {
      label: "Fit Score",
      value: data.fit_score,
      valueClass: "text-cyan-400",
    },
    {
      label: "Estimated Value",
      value: data.estimated_value,
      valueClass: "text-white",
    },
    {
      label: "Development Time",
      value: data.development_time,
      valueClass: "text-white",
    },
    {
      label: "Risk Level",
      value: data.risk_level,
      valueClass: data.risk_level.toLowerCase() === "low" ? "text-green-500" : "text-yellow-500",
    },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
          <DollarSign className="text-cyan-400" size={20} />
        </div>
        <h2 className="text-lg font-semibold text-white">Executive Summary</h2>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {summaryStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-xl border border-white/5 p-5 transition-all hover:bg-[#23272F]"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">{stat.label}</p>
            <p className={`text-xl font-black ${stat.valueClass}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveSummary;
