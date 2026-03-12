import type { Player } from "@/types/player.types";
import { baseApi } from "../../api/baseApi";

export const playerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query<Player[], void>({
      query: () => "/players",
      providesTags: ["Player"],
    }),
  }),
});

export const { useGetPlayersQuery } = playerApi;
