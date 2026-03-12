import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Agent, AgentState } from "@/types/agent.types";

const initialState: AgentState = {
  agents: [],
  selectedAgent: null,
  isLoading: false,
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload;
    },
    setSelectedAgent: (state, action: PayloadAction<Agent | null>) => {
      state.selectedAgent = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAgents, setSelectedAgent, setLoading } = agentSlice.actions;
export default agentSlice.reducer;
