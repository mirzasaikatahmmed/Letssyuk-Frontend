export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: "PLAYER" | "CLUB" | "AGENT" | "ADMIN" | "USER";
  profilePicture?: string;
  isVerified: boolean;
  isBlocked: boolean;
  isDeleted: boolean;
  isProfileUpdated: boolean;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

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
