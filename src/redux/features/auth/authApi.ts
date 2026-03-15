import type {
  GetMeResponse,
  LoginCredentials,
  LoginResponse,
  SignupResponse,
  VerifyOtpCredentials,
  VerifyOtpResponse,
} from "@/types/auth.types";
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<SignupResponse, FormData>({
      query: (formData) => ({
        url: "/auth/signup",
        method: "POST",
        body: formData,
      }),
    }),
    verifyOtp: builder.mutation<VerifyOtpResponse, VerifyOtpCredentials>({
      query: (values) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: values,
      }),
    }),
    getMe: builder.query<GetMeResponse, void>({
      query: () => "/auth/get-me",
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useVerifyOtpMutation, useGetMeQuery } = authApi;
