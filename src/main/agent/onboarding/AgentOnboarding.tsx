

import { useState } from 'react';
import { useFormContext } from './context/FormContext';
import ClubInfoStep from './_components/ClubInfoStep';
import PrimaryContactStep from './_components/PrimaryContactStep';
import TeamsCoveredStep from './_components/TeamsCoveredStep';
import AnalysisRequirementsStep from './_components/AnalysisRequirementsStep';
import RecruitmentStep from './_components/RecruitmentStep';
import OutputPreferencesStep from './_components/OutputPreferencesStep';
import ConsentStep from './_components/ConsentStep';
import WizardHeader from './_components/WizardHeader';
import StepIndicator from './_components/StepIndicator';


const STEPS = [
  { id: 1, label: 'Club Info' },
  { id: 2, label: 'Contact' },
  { id: 3, label: 'Teams' },
  { id: 4, label: 'Services' },
  { id: 5, label: 'Recruitment' },
  { id: 6, label: 'Output' },
  { id: 7, label: 'Consent' },
];

export default function AgentOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData } = useFormContext();

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
    console.log('Form submitted with data:', formData);
    alert('Setup Complete! Check console for form data.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ClubInfoStep onNext={handleNext} />;
      case 2:
        return <PrimaryContactStep onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <TeamsCoveredStep onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <AnalysisRequirementsStep onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <RecruitmentStep onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <OutputPreferencesStep onNext={handleNext} onBack={handleBack} />;
      case 7:
        return (
          <ConsentStep onComplete={handleComplete} onBack={handleBack} />
        );
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
