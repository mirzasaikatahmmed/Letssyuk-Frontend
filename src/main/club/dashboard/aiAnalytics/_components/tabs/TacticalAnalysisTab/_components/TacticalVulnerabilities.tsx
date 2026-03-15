import { AlertTriangle } from "lucide-react";

const vulnerabilities = [
  { label: "High defensive line", incidents: "3" },
  { label: "Left side overload vulnerability", incidents: "Multiple" },
  { label: "Late game concentration lapses", incidents: "Frequent" },
  { label: "Set-piece attack variety", incidents: "Low" },
];

const TacticalVulnerabilities = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5 h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <AlertTriangle size={16} className="text-red-400" />
        <h2 className="text-base font-semibold text-red-400">
          Tactical Vulnerabilities
        </h2>
      </div>

      <div className="space-y-3">
        {vulnerabilities.map((item, i) => (
          <div
            key={i}
            className="bg-[#27272A] border-l-4 border-red-500 rounded-r-xl p-4"
          >
            <p className="text-sm font-medium text-red-400 mb-0.5">
              {item.label}
            </p>
            <p className="text-xs text-gray-400">
              Incidents:{" "}
              <span className="text-gray-200 font-medium">{item.incidents}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TacticalVulnerabilities;
