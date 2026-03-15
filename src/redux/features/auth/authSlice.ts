import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, LoginResponse, User } from "@/types/auth.types";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// Helper function to decode user from token in cookies
const getInitialUser = (): User | null => {
  const token = Cookies.get("accessToken");
  if (token) {
    try {
      return jwtDecode<User>(token);
    } catch (error) {
      console.error("Token decoding error on init:", error);
      return null;
    }
  }
  return null;
};

const initialState: AuthState = {
  user: getInitialUser(),
  accessToken: Cookies.get("accessToken") || null,
  refreshToken: Cookies.get("refreshToken") || null,
  isAuthenticated: !!Cookies.get("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginResponse>) => {
      const token = action.payload.data;
      const decoded = jwtDecode<User>(token);
      // console.log(decoded, 'decoded token.......');
      
      state.user = decoded;
      state.accessToken = token;
      state.refreshToken = null;
      state.isAuthenticated = true;

      // Set cookies
      Cookies.set("accessToken", token, { expires: 1 });
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;

      // Remove cookies
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
