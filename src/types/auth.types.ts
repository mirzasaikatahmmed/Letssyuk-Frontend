export type UserRole = "ATHLETE" | "CLUB" | "AGENT";

export const ROLE_ONBOARDING: Record<UserRole, string> = {
  ATHLETE: "/player/onboarding",
  CLUB: "/club/onboarding",
  AGENT: "/agent/onboarding",
};

export const ROLE_DASHBOARDS: Record<UserRole, string> = {
  ATHLETE: "/player/dashboard/overview",
  CLUB: "/club/dashboard/overview",
  AGENT: "/agent/dashboard/overview",
};

export interface PlayerOwned {
  id: string;
  userId: string;
  visibility: string;
  displayName: string | null;
  profilePhotoUrl: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ClubOwned {
  id: string;
  ownerUserId: string;
  clubName: string;
  country: string;
  league: string;
  clubWebsite: string;
  city: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface AgentOwned {
  id: string;
  userId: string;
  agencyName: string;
  country: string;
  city: string;
  website: string | null;
  bio: string | null;
  Specialization: string | null;
  agencyImage: string | null;
  primaryGoal: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: UserRole;
  profilePicture?: string | null;
  isVerified: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  isProfileUpdated: boolean;
  affiliateId?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  playerOwned?: PlayerOwned | null;
  clubOwned?: ClubOwned | null;
  agentOwned?: AgentOwned | null;
  iat?: number;
  exp?: number;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: string;
}

export type GetMeResponse = User;

export interface LoginCredentials {
  email: string;
  password: string;
}

export type SignupRole = UserRole;

export const SIGNUP_ROLES: SignupRole[] = ["ATHLETE", "CLUB", "AGENT"];

export interface SignupCredentials {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: SignupRole;
  belowEighteen: boolean;
  image?: File;
}

export interface SignupResponse {
  success: boolean;
  message: string;
  data: string;
  user?: User;
}

export type OtpType = "RESET_PASSWORD" | "EMAIL_VERIFY" | "LOGIN";

export interface VerifyOtpCredentials {
  email: string;
  code: string;
  type: OtpType;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  data: string;
}

export interface ForgotPasswordCredentials {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    userId: string;
    codeHash: string;
    type: string;
    expiresAt: string;
    used: boolean;
    attempts: number;
    createdAt: string;
  };
}

export interface ResetPasswordCredentials {
  token: string;
  password?: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface GenerateOtpCredentials {
  email: string;
  type: OtpType;
}

export interface GenerateOtpResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    userId: string;
    codeHash: string;
    type: OtpType;
    expiresAt: string;
    used: boolean;
    attempts: number;
    createdAt: string;
  };
}
