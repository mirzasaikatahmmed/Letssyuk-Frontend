export interface Agent {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  agencyName?: string;
  licenseNumber?: string;
  profilePicture?: string;
  location?: string;
  isVerified: boolean;
  experienceYears?: number;
}

export interface AgentState {
  agents: Agent[];
  selectedAgent: Agent | null;
  isLoading: boolean;
}
