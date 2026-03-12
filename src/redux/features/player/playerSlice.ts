import { createSlice } from "@reduxjs/toolkit";
import type { Player } from "@/types/player.types";

interface PlayerState {
  players: Player[];
  selectedPlayer: Player | null;
}

const initialState: PlayerState = {
  players: [],
  selectedPlayer: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
  },
});

export const { setPlayers, setSelectedPlayer } = playerSlice.actions;
export default playerSlice.reducer;
