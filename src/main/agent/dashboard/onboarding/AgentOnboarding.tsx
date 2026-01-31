import { useState } from "react";
import { useClubFormContext } from "./context/AgentFormContext";
import WizardHeader from "./_components/WizardHeader";
import StepIndicator from "./_components/StepIndicator";
import AgentDetailsStep from "./_components/AgentDetailsStep";
import LicensingStep from "./_components/LicensingStep";
import SquadRosterStep from "./_components/SquadRosterStep";
import ServicesRequiredStep from "./_components/ServicesRequiredStep";
import WorkflowPreferencesStep from "./_components/WorkflowPreferencesStep";
import ConsentStep from "./_components/ConsentStep";
import type { StepItem } from "./_components/StepIndicator";

const STEPS: StepItem[] = [
  { id: 1, label: "Agent Details" },
  { id: 2, label: "Licensing" },
  { id: 3, label: "Client Roster" },
  { id: 4, label: "Services Required" },
  { id: 5, label: "Workflow Preferences" },
  { id: 6, label: "Consent" },
];

export default function AggentOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData } = useClubFormContext();

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    console.log("Club Onboarding - Form submitted with data:", formData);
    alert("Setup Complete! Check browser console (F12) for form data.");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AgentDetailsStep onNext={handleNext} />;
      case 2:
        return <LicensingStep onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <SquadRosterStep onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <ServicesRequiredStep onNext={handleNext} onBack={handleBack} />;
      case 5:
        return (
          <WorkflowPreferencesStep onNext={handleNext} onBack={handleBack} />
        );
      case 6:
        return <ConsentStep onComplete={handleComplete} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#12121A] py-8 px-4">
      <WizardHeader />
      <div className="mt-8 mb-12">
        <StepIndicator currentStep={currentStep} steps={STEPS} />
      </div>
      <div className="flex justify-center">{renderStep()}</div>
    </div>
  );
}
