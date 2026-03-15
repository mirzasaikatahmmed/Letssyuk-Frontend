import IndividualDevelopment from "./_components/IndividualDevelopment";
import TechnicalBenchmarks from "./_components/TechnicalBenchmarks";
import PhysicalExpectations from "./_components/PhysicalExpectations";
import DevelopmentTrajectory from "./_components/DevelopmentTrajectory";
import TalentMarkers from "./_components/TalentMarkers";
import DevelopmentRisks from "./_components/DevelopmentRisks";
import PromotionReadiness from "./_components/PromotionReadiness";

const AcademyTab = () => {
  return (
    <div className="space-y-4">
      {/* Section 1: Individual Development */}
      <IndividualDevelopment />

      {/* Section 2: Technical Benchmarks & Physical Expectations */}
      <div className="grid grid-cols-2 gap-4">
        <TechnicalBenchmarks />
        <PhysicalExpectations />
      </div>

      {/* Section 3: Development Trajectory */}
      <DevelopmentTrajectory />

      {/* Section 4: Talent Markers & Development Risks */}
      <div className="grid grid-cols-2 gap-4">
        <TalentMarkers />
        <DevelopmentRisks />
      </div>

      {/* Section 5: First-Team Promotion Readiness */}
      <PromotionReadiness />
    </div>
  );
};

export default AcademyTab;
