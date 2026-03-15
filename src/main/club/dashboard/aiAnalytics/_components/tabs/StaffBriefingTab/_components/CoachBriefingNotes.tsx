import { FileText } from "lucide-react";

const agendaItems = [
  { label: "1. Match Context", time: "5 minutes" },
  { label: "2. Tactical Focus", time: "10 minutes" },
  { label: "3. Key Principles", time: "5 minutes" },
  { label: "4. Player Roles", time: "10 minutes" },
  { label: "5. Set Pieces", time: "5 minutes" },
  { label: "6. Q&A", time: "5 minutes" },
];

const tacticalInstructions = [
  { label: "Defensive Shape:", value: "4-4-2 mid-block" },
  { label: "Pressing Triggers:", value: "Goalkeeper distribution" },
  { label: "Attacking:", value: "Quick transitions" },
  { label: "Formation:", value: "4-2-3-1 in possession" },
];

const keyDataPoints = [
  { label: "Possession:", value: "58%", target: "(target 60%)" },
  { label: "Pass Accuracy:", value: "85%", target: "(target 87%)" },
  { label: "Shots on Target:", value: "6.2", target: "(target 7)" },
  { label: "Expected Goals:", value: "1.8", target: "(target 2.3)" },
];

const CoachBriefingNotes = () => {
  return (
    <div className="bg-[#18181B] rounded-xl border border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 bg-cyan-500/10 rounded-lg flex items-center justify-center">
          <FileText size={15} className="text-cyan-400" />
        </div>
        <h2 className="text-base font-semibold text-white">Coach Briefing Notes</h2>
      </div>

      {/* Agenda */}
      <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4 mb-4">
        <p className="text-xs font-semibold text-gray-400 mb-3">
          Technical Briefing Structure (40 minutes)
        </p>
        <div className="space-y-2">
          {agendaItems.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#18181B] rounded-lg px-4 py-2.5"
            >
              <span className="text-sm text-gray-300">{item.label}</span>
              <span className="text-xs font-semibold text-cyan-400">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tactical Instructions + Key Data Points */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3">Tactical Instructions</p>
          <ul className="space-y-2">
            {tacticalInstructions.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                <span className="text-gray-600 mt-0.5">•</span>
                <span>
                  <span className="text-gray-400">{item.label}</span>{" "}
                  <span className="text-white font-medium">{item.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#27272A] rounded-xl border border-gray-800 p-4">
          <p className="text-xs font-semibold text-cyan-400 mb-3">Key Data Points</p>
          <div className="space-y-2">
            {keyDataPoints.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-xs text-gray-400">{item.label}</span>
                <span className="text-xs text-right">
                  <span className="text-white font-semibold">{item.value}</span>{" "}
                  <span className="text-gray-500">{item.target}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachBriefingNotes;
