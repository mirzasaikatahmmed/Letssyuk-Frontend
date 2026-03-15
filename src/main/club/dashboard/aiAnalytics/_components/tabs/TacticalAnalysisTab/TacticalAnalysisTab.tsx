import FormationEffectiveness from "./_components/FormationEffectiveness";
import BuildupPhase from "./_components/BuildupPhase";
import DefensiveOrganization from "./_components/DefensiveOrganization";
import KeyStrengths from "./_components/KeyStrengths";
import TacticalVulnerabilities from "./_components/TacticalVulnerabilities";
import DefensiveShapeConsistency from "./_components/DefensiveShapeConsistency";
import DecisionMakingPatterns from "./_components/DecisionMakingPatterns";

const TacticalAnalysisTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Formation Effectiveness */}
      <FormationEffectiveness />

      {/* Section 2: Build-up Phase & Defensive Organization */}
      <div className="grid grid-cols-2 gap-4">
        <BuildupPhase />
        <DefensiveOrganization />
      </div>

      {/* Section 3: Key Strengths & Tactical Vulnerabilities */}
      <div className="grid grid-cols-2 gap-4">
        <KeyStrengths />
        <TacticalVulnerabilities />
      </div>

      {/* Section 4: Defensive Shape Consistency */}
      <DefensiveShapeConsistency />

      {/* Section 5: Decision-Making Patterns */}
      <DecisionMakingPatterns />
    </div>
  );
};

export default TacticalAnalysisTab;
