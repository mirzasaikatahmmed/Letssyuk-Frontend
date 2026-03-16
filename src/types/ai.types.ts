export interface AiAnalysisResponse<T> {
  feature: string;
  player_id: string;
  analysis: {
    status: string;
    analysis_type: string;
    timestamp: string;
    model: string;
    data: T;
  };
}

export interface MatchPreparationData {
  title: string;
  subtitle: string;
  pre_match: {
    window: string;
    tactical_preparation: string[];
    physical_preparation: string[];
    nutrition_plan: string[];
  };
  match_day_warmup: {
    duration: string;
    sequence: string[];
    key_focus: string[];
  };
  post_match_recovery: {
    immediate_0_2h: string[];
    plan_24h: string[];
  };
  psychological_components: {
    visualization: string;
    focus_exercise: string;
    stress_management: string;
  };
  disclaimer: string;
}

export interface PriorityFocusSegment {
  title: string;
  current: string;
  recommendation: string;
  priority: string;
}

export interface PriorityFocusData {
  playerId: string;
  generatedAt: string;
  title: string;
  segments: PriorityFocusSegment[];
}

export interface PriorityFocusResponse {
  success: boolean;
  data: PriorityFocusData;
}
