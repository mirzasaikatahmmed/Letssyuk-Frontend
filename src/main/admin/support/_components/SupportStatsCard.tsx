import { type ReactNode } from "react";

interface SupportStatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconColor: "amber" | "cyan";
}

const iconRingColors = {
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
};

const SupportStatsCard = ({
  title,
  value,
  icon,
  iconColor,
}: SupportStatsCardProps) => {
  return (
    <div className="bg-[#0f1117] border border-white/[0.07] rounded-xl p-5 flex items-start justify-between flex-1 min-w-[160px]">
      <div className="flex flex-col gap-2">
        <span className="text-gray-400 text-sm">{title}</span>
        <span className="text-white text-3xl font-bold leading-tight">{value}</span>
      </div>
      <span
        className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${iconRingColors[iconColor]}`}
      >
        {icon}
      </span>
    </div>
  );
};

export default SupportStatsCard;
