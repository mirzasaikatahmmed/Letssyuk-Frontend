import { AlertCircle } from "lucide-react";

interface DevelopmentRisksProps {
  data?: string[];
}

const DevelopmentRisks = ({ data }: DevelopmentRisksProps) => {
  if (!data) return null;

  return (
    <div className="bg-[#12141B] p-6 rounded-xl border border-white/5 h-full">
      <div className="flex items-center gap-2 mb-6">
        <AlertCircle size={18} className="text-yellow-500" />
        <h2 className="text-base font-bold text-white tracking-tight">Development Risks</h2>
      </div>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] border-l-2 border-yellow-500 rounded-lg p-4"
          >
            <p className="text-[11px] text-zinc-300 font-medium leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentRisks;
