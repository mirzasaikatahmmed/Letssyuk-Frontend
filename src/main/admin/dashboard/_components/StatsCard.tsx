import { TrendingUp, TrendingDown } from "lucide-react";
import { type ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  trend: string;
  trendUp?: boolean;
  subtitle: string;
  icon: ReactNode;
}

const StatsCard = ({
  title,
  value,
  trend,
  trendUp = true,
  subtitle,
  icon,
}: StatsCardProps) => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-5 flex flex-col gap-3 flex-1 min-w-50">
      <div className="flex items-start justify-between">
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <span className="text-gray-500">{icon}</span>
      </div>

      <div className="text-white text-3xl font-bold leading-tight">{value}</div>

      <div className="flex items-center gap-1.5">
        {trendUp ? (
          <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5 text-cyan-400" />
        )}
        <span className="text-cyan-400 text-xs font-semibold">{trend}</span>
      </div>

      <p className="text-gray-500 text-[11px] leading-tight">{subtitle}</p>
    </div>
  );
};

export default StatsCard;
