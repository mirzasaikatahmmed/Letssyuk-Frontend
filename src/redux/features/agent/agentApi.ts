import type { Agent } from "@/types/agent.types";
import { baseApi } from "../../api/baseApi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query<Agent[], void>({
      query: () => "/agents",
      providesTags: ["Agent"],
    }),
    getAgentProfile: builder.query<Agent, string>({
      query: (id) => `/agents/${id}`,
      providesTags: ["Agent"],
    }),
  }),
});

export const { useGetAgentsQuery, useGetAgentProfileQuery } = agentApi;
