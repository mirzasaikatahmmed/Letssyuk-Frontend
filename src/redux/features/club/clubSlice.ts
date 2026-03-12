import { createSlice } from "@reduxjs/toolkit";
import type { Club } from "@/types/club.types";

interface ClubState {
  clubInfo: Club | null;
}

const initialState: ClubState = {
  clubInfo: null,
};

const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setClubInfo: (state, action) => {
      state.clubInfo = action.payload;
    },
  },
});

export const { setClubInfo } = clubSlice.actions;
export default clubSlice.reducer;
