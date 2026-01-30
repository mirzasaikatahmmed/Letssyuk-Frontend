/* eslint-disable react-refresh/only-export-components */
// context/formcontext.tsx
import React, { createContext, useContext, useState } from "react";

export interface FormData {
  clubName: string;
  country: string;
  leagueLevel: string;
  clubWebsite: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  services: string[];
  reportFrequency: string[];
  deliveryMethods: string[];
  selectedTeam: string;
  numberOfTeams: string;
  isRecruiting: boolean;
  positions: string[];
  ageRangeMin: number;
  ageRangeMax: number;
  contractTypes: string[];
  consent: string[];
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const initialFormData: FormData = {
  clubName: "",
  country: "",
  leagueLevel: "",
  clubWebsite: "",
  fullName: "",
  role: "",
  email: "",
  phone: "",
  services: [],
  reportFrequency: [],
  deliveryMethods: [],
  selectedTeam: "",
  numberOfTeams: "",
  isRecruiting: false,
  positions: [],
  ageRangeMin: 18,
  ageRangeMax: 40,
  contractTypes: [],
  consent: [],
};

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => setFormData(initialFormData);

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider");
  }
  return context;
}
