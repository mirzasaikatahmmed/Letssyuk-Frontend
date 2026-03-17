import { Eye } from "lucide-react";

interface VisibilityControlsProps {
  data?: {
    publication_audience: Array<{ label: string; value: string }>;
    information_disclosure: Array<{ label: string; value: string }>;
  };
}

const VisibilityControls = ({ data }: VisibilityControlsProps) => {
  if (!data) return null;

  // The design image shows a more static/expanded list of dots.
  // I will map the API data to the design's dot colors.
  const audienceDots = ["bg-cyan-500", "bg-[#3B82F6]", "bg-yellow-500", "bg-red-500"];
  const disclosureDots = ["bg-green-500", "bg-[#3B82F6]", "bg-yellow-500", "bg-red-500"];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Eye size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">Visibility Controls</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Publication Audience */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-xs font-bold text-white mb-4">Publication Audience</p>
          <div className="space-y-3">
            {[
              "Primary: Registered agents",
              "Secondary: Scout network",
              "Tertiary: Public listing",
              "Confidential: Internal only",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px]">
                <span className={`w-1.5 h-1.5 rounded-full ${audienceDots[i]}`} />
                <span className="text-zinc-400 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Information Disclosure */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-xs font-bold text-white mb-4">Information Disclosure</p>
          <div className="space-y-3">
            {[
              "Basic: Position, age range, level",
              "Detailed: Skills, tactical fit",
              "Full: Contract details, budget",
              "Restricted: Internal assessments",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px]">
                <span className={`w-1.5 h-1.5 rounded-full ${disclosureDots[i]}`} />
                <span className="text-zinc-400 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisibilityControls;
