import type {
  GetMeResponse,
  LoginCredentials,
  LoginResponse,
  SignupCredentials,
  SignupResponse,
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
    signup: builder.mutation<SignupResponse, SignupCredentials>({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    getMe: builder.query<GetMeResponse, void>({
      query: () => "/auth/get-me",
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGetMeQuery } = authApi;
