import { BarChart3 } from "lucide-react";

interface RecentMatchReportsProps {
  data?: {
    reports: Array<{
      title: string;
      rating: string;
      result_type: string;
    }>;
    key_findings: Array<{
      label: string;
      value: string;
    }>;
  };
}

const RecentMatchReports = ({ data }: RecentMatchReportsProps) => {
  if (!data) return null;

  const getResultColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "win":
        return "text-green-500";
      case "loss":
        return "text-red-500";
      case "draw":
        return "text-yellow-500";
      default:
        return "text-zinc-500";
    }
  };

  const getFindingColor = (label: string) => {
    const val = label.toLowerCase();
    if (val.includes("strength")) return "text-green-400";
    if (val.includes("weakness")) return "text-red-400";
    if (val.includes("trend")) return "text-cyan-400";
    if (val.includes("alert")) return "text-yellow-400";
    return "text-cyan-400";
  };

  return (
    <div className="bg-[#12141B] p-6 rounded-2xl border border-white/5 h-full">
      <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <BarChart3 className="text-cyan-400" size={20} />
        Recent Match Reports
      </h2>

      <div className="space-y-3 mb-6">
        {data.reports.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1D24] p-4 rounded-xl border border-white/5 flex justify-between items-center transition-all hover:bg-[#23272F]"
          >
            <div className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${getResultColor(item.result_type)} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
              <div>
                <p className="text-sm text-white font-semibold">{item.title}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Rating: {item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1A1D24] p-4 rounded-xl border border-white/5">
        <p className="text-sm font-semibold text-white mb-3">Key Findings</p>
        <ul className="space-y-2">
          {data.key_findings.map((finding, idx) => (
            <li key={idx} className="flex gap-2 text-[11px] leading-relaxed">
              <span className={`font-bold whitespace-nowrap ${getFindingColor(finding.label)}`}>
                • {finding.label}:
              </span>
              <span className="text-zinc-400">{finding.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentMatchReports;
