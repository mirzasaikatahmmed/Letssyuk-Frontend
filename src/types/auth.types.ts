export type UserRole = "ATHLETE" | "CLUB" | "AGENT" | "ADMIN" | "USER";

export const ROLE_DASHBOARDS: Record<UserRole, string> = {
  ATHLETE: "/player/dashboard/overview",
  CLUB: "/club/dashboard/overview",
  AGENT: "/agent/dashboard/overview",
  ADMIN: "/admin/dashboard",
  USER: "/"
};

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: UserRole;
  profilePicture?: string;
  isVerified: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  isProfileUpdated: boolean;
  affiliateId?: string;
  playerOwned?: {
    id: string;
    userId: string;
    visibility: string;
    displayName: string | null;
    profilePhotoUrl: string | null;
  };
  clubOwned?: {
    id: string;
    userId: string;
    visibility: string;
    displayName: string | null;
    profilePhotoUrl: string | null;
  };
  agentOwned?: {
    id: string;
    userId: string;
    visibility: string;
    displayName: string | null;
    profilePhotoUrl: string | null;
  };
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

export type SignupRole = "AGENT" | "PLAYER" | "CLUB";

export interface SignupCredentials {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: SignupRole;
}

export interface SignupResponse {
  success: boolean;
  message: string;
  data: string;
  user?: User;
}
