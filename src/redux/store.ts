import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

import authReducer from "./features/auth/authSlice";
import playerReducer from "./features/player/playerSlice";
import clubReducer from "./features/club/clubSlice";
import agentReducer from "./features/agent/agentSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    player: playerReducer,
    club: clubReducer,
    agent: agentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
