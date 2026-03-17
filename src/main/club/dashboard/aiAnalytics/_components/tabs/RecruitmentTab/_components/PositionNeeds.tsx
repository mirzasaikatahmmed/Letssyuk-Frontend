import { Target } from "lucide-react";

interface PositionNeedsProps {
  data?: {
    title: string;
    skill_requirements: {
      defensive_positioning: string;
      crossing_accuracy: string;
      pace_30m_sprint: string;
      recovery_speed: string;
    };
    experience_level: {
      minimum_appearances: string;
      preferred_appearances: string;
      age_range: string;
      development_potential: string;
    };
  };
}

const PositionNeeds = ({ data }: PositionNeedsProps) => {
  if (!data) return null;

  const skillRequirements = [
    { label: "Defensive positioning:", value: data.skill_requirements.defensive_positioning },
    { label: "Crossing accuracy:", value: data.skill_requirements.crossing_accuracy },
    { label: "Pace (30m sprint):", value: data.skill_requirements.pace_30m_sprint },
    { label: "Recovery speed:", value: data.skill_requirements.recovery_speed },
  ];

  const experienceLevel = [
    { label: "Minimum appearances:", value: data.experience_level.minimum_appearances, color: "text-white" },
    { label: "Preferred appearances:", value: data.experience_level.preferred_appearances, color: "text-white" },
    { label: "Age range:", value: data.experience_level.age_range, color: "text-white" },
    { label: "Development potential:", value: data.experience_level.development_potential, color: "text-green-500" },
  ];

  return (
    <div className="bg-[#12141B] rounded-xl border border-white/5 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Target size={18} className="text-cyan-400" />
        <h2 className="text-base font-bold text-white tracking-tight">
          Position Needs: {data.title} Requirements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Skill Requirements */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-xs font-bold text-cyan-400 mb-4">Skill Requirements</p>
          <div className="space-y-2">
            {skillRequirements.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 font-medium">{item.label}</span>
                <span className="text-white font-bold text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div className="bg-[#1A1D24] rounded-xl border border-white/5 p-5">
          <p className="text-xs font-bold text-cyan-400 mb-4">Experience Level</p>
          <div className="space-y-2">
            {experienceLevel.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 font-medium">{item.label}</span>
                <span className={`${item.color} font-bold text-right`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionNeeds;
