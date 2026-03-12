import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, LoginResponse } from "@/types/auth.types";
import Cookies from "js-cookie";

const initialState: AuthState = {
  user: null,
  accessToken: Cookies.get("accessToken") || null,
  refreshToken: Cookies.get("refreshToken") || null,
  isAuthenticated: !!Cookies.get("accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginResponse>) => {
      const { user, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;

      // Set cookies with reasonable security defaults
      Cookies.set("accessToken", accessToken, { expires: 1 }); // 1 day
      Cookies.set("refreshToken", refreshToken, { expires: 30 }); // 30 days
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
