import { AlertTriangle } from "lucide-react";

interface TacticalVulnerabilitiesProps {
  data?: Array<{
    title: string;
    incidents: string;
  }>;
}

const TacticalVulnerabilities = ({ data }: TacticalVulnerabilitiesProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle size={18} className="text-red-500" />
        <h2 className="text-base font-bold text-red-500">Tactical Vulnerabilities</h2>
      </div>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] border-l-4 border-red-500 rounded-xl p-4"
          >
            <p className="text-xs font-bold text-red-500 mb-1">
              {item.title}
            </p>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-zinc-500">Incidents:</span>
              <span className="text-[10px] text-zinc-300 font-medium">{item.incidents}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TacticalVulnerabilities;
