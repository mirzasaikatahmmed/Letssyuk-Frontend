import { Eye } from "lucide-react";

const publicationAudience = [
  { label: "Primary: Registered agents", dot: "bg-cyan-400" },
  { label: "Secondary: Scout network", dot: "bg-cyan-400" },
  { label: "Tertiary: Public listing", dot: "bg-yellow-400" },
  { label: "Confidential: Internal only", dot: "bg-red-400" },
];

const informationDisclosure = [
  { label: "Basic: Position, age range, level", dot: "bg-green-400" },
  { label: "Detailed: Skills, tactical fit", dot: "bg-cyan-400" },
  { label: "Full: Contract details, budget", dot: "bg-yellow-400" },
  { label: "Restricted: Internal assessments", dot: "bg-red-400" },
];

const VisibilityControls = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <Eye size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">
          Visibility Controls
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Publication Audience */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-sm font-semibold text-white mb-4">
            Publication Audience
          </p>
          <ul className="space-y-3">
            {publicationAudience.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                <span className="text-xs text-gray-300">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Information Disclosure */}
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-sm font-semibold text-white mb-4">
            Information Disclosure
          </p>
          <ul className="space-y-3">
            {informationDisclosure.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                <span className="text-xs text-gray-300">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisibilityControls;
