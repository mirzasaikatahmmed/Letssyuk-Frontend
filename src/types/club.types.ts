
export interface ClubAIAnalysisResponse<T> {
  feature: string;
  club_id: string;
  analysis: T;
}

// Scouting Report
export interface ScoutingStat {
  label: string;
  value: string;
  sub?: string | null;
  valueClass: string;
}

export interface ScoutingCriteria {
  label: string;
  score: number;
  description: string;
}

export interface TacticalFitData {
  score: number;
  label: string;
  description: string;
}

export interface DevelopmentPotentialData {
  rating: number;
  label: string;
  description: string;
}

export interface PlayerScoutingReportData {
  status: string;
  analysis_type: string;
  timestamp: string;
  model: string;
  data: {
    title: string;
    subtitle: string;
    position_specific_criteria: {
      position_name: string;
      technical_requirements: Array<{
        label: string;
        target: string;
      }>;
      physical_characteristics: Array<{
        label: string;
        target: string;
      }>;
      tactical_understanding: string[];
      psychological_attributes: string[];
    };
    tactical_fit_scoring: Array<{
      label: string;
      score: number;
    }>;
    development_potential_rating: {
      technical_growth: number;
      tactical_development: number;
      physical_development: number;
      mental_development: number;
      overall_potential: number;
    };
    comparative_analysis: {
      title: string;
      player_a: string[];
      player_b: string[];
    };
    executive_summary: {
      top_recommendation: string;
      fit_score: string;
      estimated_value: string;
      development_time: string;
      risk_level: string;
    };
  };
}

// Tactical Analysis
export interface TacticalAnalysisData {
  formation_effectiveness: {
    formation: string;
    attack_score: number;
    defense_score: number;
    transition_score: number;
    overall_score: number;
    positional_discipline: {
      full_backs: string;
      midfielders: string;
      center_backs: string;
      forwards: string;
    };
  };
  build_up_phase: {
    success_ratio_percent: number;
    average_time_seconds: number;
    key_player: string;
    improvement_area: {
      title: string;
      description: string;
    };
  };
  defensive_organization: {
    shape: string;
    pressing_trigger: string;
    success_rate_percent: number;
    vulnerability: {
      title: string;
      description: string;
    };
  };
  key_strengths: Array<{
    label: string;
    score: number;
  }>;
  tactical_vulnerabilities: Array<{
    title: string;
    incidents: string;
  }>;
  defensive_shape_consistency: {
    first_half_percent: number;
    second_half_percent: number;
    drop_off_percent: number;
    key_issue: string;
  };
  decision_making_patterns: {
    when_to_press_percent: number;
    when_to_counter_percent: number;
    substitution_timing_percent: number;
    formation_changes_percent: number;
  };
}

// Opposition Analysis
export interface OppositionAnalysisData {
  opposition_tactical_profile: {
    team_name: string;
    formation: string;
    playing_style: string;
    philosophy: string;
    game_management: string;
  };
  primary_threats: Array<{
    player_name: string;
    position: string;
    threat_score: number;
    weakness: string;
    strategy: string;
  }>;
  opposition_strengths: Array<{
    label: string;
    score: number;
  }>;
  tactical_weaknesses: string[];
  set_piece_tendencies: {
    attacking_corners: {
      near_post_percent: number;
      far_post_percent: number;
      short_corner_percent: number;
      other_percent: number;
    };
    key_target: {
      name: string;
      height: string;
      note: string;
    };
  };
  suggested_tactical_adjustments: {
    formation_changes: string[];
    pressing_triggers: string[];
    defensive_organization: string[];
  };
}

// Academy Tracker
export interface AcademyDevelopmentData {
  totalPlayers: number;
  topProspects: Array<{ name: string; age: number; potential: string }>;
  averageGrowthRate: string;
}

// Squad Intelligence
export interface SquadIntelligenceData {
  squadHarmony: number;
  peakPerformanceWindow: string;
  vulnerablePositions: string[];
}

// Recruitment Needs
export interface RecruitmentNeedsData {
  primaryTargetPosition: string;
  budgetAllocation: string;
  shortlistedPlayersCount: number;
}

// Match Archive
export interface MatchArchiveEntry {
  date: string;
  opponent: string;
  result: string;
  keyOutcome: string;
}

export interface MatchArchiveData {
  recentMatches: MatchArchiveEntry[];
}

// Staff Briefing
export interface StaffBriefingData {
  criticalNotes: string[];
  trainingFocus: string;
  medicalAlerts: string[];
}

// Transfer Planning
export interface TransferPlanningData {
  windowStrategy: string;
  estimatedSpend: string;
  playerSalesPotential: string;
}

// Dashboard
export interface CustomClubDashboardData {
  live_performance_summary: {
    current_match: string;
    possession_percent: number;
    shots: string;
    xg: string;
    pass_accuracy_percent: number;
    attacking_score: number;
    defending_score: number;
    transition_score: number;
    set_piece_score: number;
  };
  recent_match_reports: {
    reports: Array<{
      title: string;
      rating: string;
      result_type: string;
    }>;
    key_findings: Array<{
      label: string;
      value: string;
    }>;
  };
  upcoming_analysis_tasks: {
    tasks: Array<{
      task: string;
      priority: string;
    }>;
    weekly_schedule: Array<{
      day: string;
      activity: string;
    }>;
  };
  recruitment_needs_overview: {
    positions: Array<{
      position: string;
      status: string;
      count: string;
      count_label: string;
    }>;
    pipeline_metrics: {
      applications: number;
      shortlisted: number;
      trials: number;
      offers_made: number;
      signed: number;
    };
  };
}
