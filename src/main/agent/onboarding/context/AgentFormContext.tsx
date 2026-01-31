/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

export interface ClubPlayer {
  name: string;
  position: string;
  age: string;
}

export interface ClubFormData {
  fullName: string;
  clubName: string;
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

interface ClubFormContextType {
  formData: ClubFormData;
  updateFormData: (data: Partial<ClubFormData>) => void;
}

const ClubFormContext = createContext<ClubFormContextType | undefined>(undefined);

const initialFormData: ClubFormData = {
  fullName: "",
  clubName: "",
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

export function ClubFormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<ClubFormData>(initialFormData);

  const updateFormData = (data: Partial<ClubFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <ClubFormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </ClubFormContext.Provider>
  );
}

export function useClubFormContext() {
  const context = useContext(ClubFormContext);
  if (!context) {
    throw new Error("useClubFormContext must be used within ClubFormProvider");
  }
  return context;
}
