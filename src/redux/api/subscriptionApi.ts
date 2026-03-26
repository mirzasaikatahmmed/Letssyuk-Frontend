import { baseApi } from "./baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCheckoutSession: builder.mutation({
      query: (data) => ({
        url: "/subscription/checkout",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateCheckoutSessionMutation } = subscriptionApi;
