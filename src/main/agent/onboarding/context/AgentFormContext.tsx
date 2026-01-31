/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

export interface ClubPlayer {
  name: string;
  position: string;
  age: string;
}

export interface AgentFormData {
  fullName: string;
  agencyName: string;
  email: string;
  phone: string;
  country: string;
  isLicensed: boolean;
  licensingAuthority: string;
  licenseNumber: string;
  numberOfPlayers: string;
  player: ClubPlayer;
  primaryGoal: string;
  reportFormat: string;
  notifications: string[];
  consentAI: boolean;
  consentGDPR: boolean;
}

interface AgentFormContextType {
  formData: AgentFormData;
  updateFormData: (data: Partial<AgentFormData>) => void;
}

const AgentFormContext = createContext<AgentFormContextType | undefined>(undefined);

const initialFormData: AgentFormData = {
  fullName: "",
  agencyName: "",
  email: "",
  phone: "",
  country: "",
  isLicensed: false,
  licensingAuthority: "",
  licenseNumber: "",
  numberOfPlayers: "",
  player: { name: "", position: "", age: "" },
  primaryGoal: "",
  reportFormat: "",
  notifications: [],
  consentAI: false,
  consentGDPR: false,
};

export function AgentFormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<AgentFormData>(initialFormData);

  const updateFormData = (data: Partial<AgentFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <AgentFormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </AgentFormContext.Provider>
  );
}

export function useAgentFormContext() {
  const context = useContext(AgentFormContext);
  if (!context) {
    throw new Error("useAgentFormContext must be used within AgentFormProvider");
  }
  return context;
}
