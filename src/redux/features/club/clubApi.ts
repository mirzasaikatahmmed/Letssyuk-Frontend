import type { Club } from "@/types/club.types";
import { baseApi } from "../../api/baseApi";

export const clubApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClubProfile: builder.query<Club, string>({
      query: (id) => `/clubs/${id}`,
      providesTags: ["Club"],
    }),
  }),
});

export const { useGetClubProfileQuery } = clubApi;
