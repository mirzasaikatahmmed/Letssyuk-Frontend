import { Target } from "lucide-react";

interface FormationEffectivenessProps {
  data?: {
    formation: string;
    attack_score: number;
    defense_score: number;
    transition_score: number;
    overall_score: number;
    positional_discipline: {
      full_backs: string;
      midfielders: string;
      center_backs: string;
      forwards: string;
    };
  };
}

const FormationEffectiveness = ({ data }: FormationEffectivenessProps) => {
  if (!data) return null;

  const scores = [
    { label: "Attack Score", value: data.attack_score, color: "text-green-400" },
    { label: "Defense Score", value: data.defense_score, color: "text-green-400" },
    { label: "Transition Score", value: data.transition_score, color: "text-cyan-400" },
    { label: "Overall", value: data.overall_score, color: "text-cyan-400" },
  ];

  const positionalDiscipline = [
    { role: "Full-backs", note: data.positional_discipline.full_backs, color: "text-green-400" },
    { role: "Midfielders", note: data.positional_discipline.midfielders, color: "text-green-400" },
    { role: "Center-backs", note: data.positional_discipline.center_backs, color: "text-cyan-400" },
    { role: "Forwards", note: data.positional_discipline.forwards, color: "text-cyan-400" },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Target size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white">
          {data.formation} Formation Effectiveness
        </h2>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {scores.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1D24] rounded-xl border border-white/5 p-4"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color}`}>
              {item.value.toFixed(1)}/10
            </p>
          </div>
        ))}
      </div>

      {/* Positional Discipline */}
      <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
        <p className="text-sm font-bold text-white mb-4">
          Positional Discipline
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {positionalDiscipline.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={`${item.color} mt-1 text-[10px]`}>●</span>
              <span className="text-xs text-zinc-300">
                <span className="font-bold text-white">{item.role}:</span>{" "}
                {item.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormationEffectiveness;
