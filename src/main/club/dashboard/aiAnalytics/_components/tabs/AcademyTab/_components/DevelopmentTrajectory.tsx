import { TrendingUp } from "lucide-react";

interface DevelopmentTrajectoryProps {
  data?: {
    growth_rate_percent_per_6_months: string;
    acceleration: string;
    plateau_risk: string;
    projected_peak_age_range: string;
  };
}

const DevelopmentTrajectory = ({ data }: DevelopmentTrajectoryProps) => {
  if (!data) return null;

  const trajectoryStats = [
    { 
      label: "Growth Rate", 
      value: data.growth_rate_percent_per_6_months, 
      sub: "per 6 months",
      color: "text-green-500" 
    },
    { 
      label: "Acceleration", 
      value: data.acceleration, 
      sub: "Last 3 months", // Placeholder subtext from image
      color: "text-green-500" 
    },
    { 
      label: "Plateau Risk", 
      value: data.plateau_risk, 
      sub: null,
      color: "text-green-500" // Image shows "Low" in green
    },
    { 
      label: "Projected Peak", 
      value: data.projected_peak_age_range, 
      sub: "years old",
      color: "text-white" 
    },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">Development Trajectory</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {trajectoryStats.map((item, i) => (
          <div key={i} className="bg-[#1A1D24] rounded-lg border border-white/5 p-4">
            <p className="text-[10px] text-zinc-500 mb-1 font-bold">{item.label}</p>
            <p className={`text-xl font-bold ${item.color} leading-snug`}>{item.value}</p>
            {item.sub && <p className="text-[10px] text-zinc-600 mt-1">{item.sub}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentTrajectory;
