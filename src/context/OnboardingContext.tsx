/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

type OnboardingData = {
  personalDetails?: any;
  footballProfile?: any;
  careerHistory?: any;
  physicalDevelopment?: any;
  trainingRoutine?: any;
  fatigueRecovery?: any;
  lifestyleNutrition?: any;
  goalsAmbition?: any;
  consentDeclarations?: any;
};

type ContextType = {
  data: OnboardingData;
  updateStep: (step: keyof OnboardingData, values: any) => void;
};

const OnboardingContext = createContext<ContextType | null>(null);

export const OnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<OnboardingData>({});

  const updateStep = (step: keyof OnboardingData, values: any) => {
    setData((prev) => ({
      ...prev,
      [step]: values,
    }));
  };

  return (
    <OnboardingContext.Provider value={{ data, updateStep }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used inside provider");
  return ctx;
};
