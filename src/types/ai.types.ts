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

export interface MealScheduleItem {
  title: string;
  time: string;
  portion_size: string;
  what_to_eat: string[];
  priority_label: string;
  calories_range: string;
}

export interface NutritionEnergyData {
  title: string;
  subtitle: string;
  daily_meal_schedule: MealScheduleItem[];
  hydration_strategy: {
    daily_target_liters: string;
    guidance: string[];
  };
}

export interface NutritionEnergyResponse {
  feature: string;
  player_id: string;
  analysis: {
    status: string;
    analysis_type: string;
    timestamp: string;
    model: string;
    data: NutritionEnergyData;
  };
}

export interface WeeklyStructureItem {
  day: string;
  focus: string;
  session_detail: string;
}

export interface WeeklyStructureData {
  title: string;
  subtitle: string;
  weekly_structure: WeeklyStructureItem[];
}

export interface WeeklyStructureResponse {
  feature: string;
  player_id: string;
  analysis: {
    status: string;
    analysis_type: string;
    timestamp: string;
    model: string;
    data: WeeklyStructureData;
  };
}

export interface SkillRating {
  skill: string | null;
  current: number | null;
  target: number | null;
  priority: string | null;
}

export interface TechnicalDevelopmentPlan {
  passing_mechanics: {
    drills: string | null;
    frequency: string | null;
    duration: string | null;
  };
  weak_foot_training: {
    drills: string | null;
    frequency: string | null;
    duration: string | null;
  };
}

export interface DailyRoutine {
  total_duration: string | null;
  warmup: string | null;
  main_session: string | null;
  cooldown: string | null;
}

export interface ProgressTracking {
  weekly_targets: string | null;
  key_metrics: string | null;
  success_indicators: string | null;
}

export interface TechnicalSkillsData {
  title: string;
  subtitle: string;
  technical_assessment: string | null;
  skill_ratings: SkillRating[];
  development_plan: TechnicalDevelopmentPlan;
  daily_routine: DailyRoutine;
  progress_tracking: ProgressTracking;
}

export interface TechnicalSkillsResponse {
  feature: string;
  player_id: string;
  analysis: {
    status: string;
    analysis_type: string;
    timestamp: string;
    model: string;
    data: TechnicalSkillsData;
  };
}

export interface PhysicalAttribute {
  rating: number;
  benchmark: string;
  target: string;
}

export interface InjuryRiskAssessment {
  risk_level: string;
  risk_factors: string[];
  prevention: string[];
}

export interface TrainingProgram {
  speed_agility: {
    exercises: string[];
    frequency: string;
    progression: string;
  };
  strength_training: {
    exercises: string[];
    frequency: string;
    intensity: string;
  };
}

export interface WeeklyFocus {
  priority_attributes: string[];
  target_improvements: string[];
  risk_mitigation: string[];
}

export interface PhysicalPerformanceData {
  title: string;
  subtitle: string;
  physical_profile: {
    speed_acceleration: PhysicalAttribute;
    stamina_endurance: PhysicalAttribute;
    strength_power: PhysicalAttribute;
    agility_mobility: PhysicalAttribute;
  };
  injury_risk_assessment: InjuryRiskAssessment;
  training_program: TrainingProgram;
  weekly_focus: WeeklyFocus;
}

export interface PhysicalPerformanceResponse {
  feature: string;
  player_id: string;
  analysis: {
    status: string;
    analysis_type: string;
    timestamp: string;
    model: string;
    data: PhysicalPerformanceData;
  };
}

export interface MovementPattern {
  title: string;
  description: string;
}

export interface DecisionMakingCue {
  label: string;
  guidance: string;
}

export interface PositionTactics {
  position: string;
  responsibilities: string;
  key_actions: string;
  success_indicators: string;
}

export interface OpponentReading {
  pattern_recognition: string;
  anticipation: string;
  weakness_exploitation: string;
}

export interface SystemAdaptation {
  formation_adjustments: string;
  game_plan: string;
}

export interface TacticalAwarenessData {
  title: string;
  subtitle: string;
  position_tactics: PositionTactics;
  movement_patterns: MovementPattern[];
  decision_making_cues: DecisionMakingCue[];
  opponent_reading: OpponentReading;
  system_adaptation: SystemAdaptation;
  disclaimer: string;
}

export interface TacticalAwarenessResponse {
  feature: string;
  player_id: string;
  analysis: {
    status: string;
    analysis_type: string;
    timestamp: string;
    model: string;
    data: TacticalAwarenessData;
  };
}

export interface ThreeMonthPlan {
  skill_priorities: string;
  performance_benchmarks: string;
  training_focus: string;
  success_indicators: string;
}

export interface SixMonthPlan {
  milestones: string;
  skill_targets: string;
  physical_goals: string;
  tactical_targets: string;
}

export interface TwelveMonthPlan {
  season_objectives: string;
  performance_benchmarks: string;
  career_steps: string;
  level_advancement: string;
}

export interface LongTermPathway {
  career_phases: string;
  development_trajectory: string;
  next_steps: string;
}

export interface TrackingMonitoring {
  progress_metrics: string;
  review_points: string;
  adjustment_protocols: string;
}

export interface PlayerDevelopmentData {
  title: string;
  subtitle: string;
  three_month_plan: ThreeMonthPlan;
  six_month_plan: SixMonthPlan;
  twelve_month_plan: TwelveMonthPlan;
  long_term_pathway: LongTermPathway;
  tracking_monitoring: TrackingMonitoring;
}

export interface PlayerDevelopmentResponse {
  feature: string;
  player_id: string;
  analysis: {
    status: string;
    analysis_type: string;
    timestamp: string;
    model: string;
    data: PlayerDevelopmentData;
  };
}
