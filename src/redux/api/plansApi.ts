import { baseApi } from "./baseApi";

export const plansApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query({
      query: (role) => ({
        url: `/plans?role=${role}`,
        method: "GET",
      }),
      providesTags: ["Plan" as any],
    }),
  }),
});

export const { useGetPlansQuery } = plansApi;
