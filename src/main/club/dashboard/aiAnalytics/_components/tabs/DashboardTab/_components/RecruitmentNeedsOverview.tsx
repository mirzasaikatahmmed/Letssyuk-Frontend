import { Users } from "lucide-react";

interface RecruitmentNeedsOverviewProps {
  data?: {
    positions: Array<{
      position: string;
      status: string;
      count: string;
      count_label: string;
    }>;
    pipeline_metrics: {
      applications: number;
      shortlisted: number;
      trials: number;
      offers_made: number;
      signed: number;
    };
  };
}

const RecruitmentNeedsOverview = ({ data }: RecruitmentNeedsOverviewProps) => {
  if (!data) return null;

  const stats = [
    { label: "Applications", value: data.pipeline_metrics.applications.toString(), color: "text-white" },
    { label: "Shortlisted", value: data.pipeline_metrics.shortlisted.toString(), color: "text-cyan-400" },
    { label: "Trials", value: data.pipeline_metrics.trials.toString(), color: "text-cyan-400" },
    { label: "Offers Made", value: data.pipeline_metrics.offers_made.toString(), color: "text-yellow-500" },
    { label: "Signed", value: data.pipeline_metrics.signed.toString(), color: "text-green-500" },
  ];

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5">
      <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <Users className="text-cyan-400" size={20} />
        Recruitment Needs Overview
      </h2>

      {/* Top row: 4 large Position cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-4">
        {data.positions.map((item, idx) => (
          <div key={idx} className="bg-[#1A1D24] p-5 rounded-xl border border-white/5 h-32 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-white mb-1">{item.position}</p>
              <p className="text-xs text-zinc-500 font-medium">{item.status}</p>
            </div>
            <p className="text-[11px] font-bold text-cyan-400">
              {item.count} {item.count_label}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom row: 5 small Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-[#1A1D24] p-4 rounded-xl border border-white/5 h-20 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-medium">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentNeedsOverview;
