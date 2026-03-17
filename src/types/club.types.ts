
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
  individual_development: {
    player_name: string;
    age_group: string;
    current_level: string;
    development_rate: string;
    consistency: string;
    coach_rating: number;
    pillar_status: {
      technical: string;
      tactical: string;
      physical: string;
      mental: string;
    };
  };
  age_group_benchmarks: {
    u16_technical_benchmarks: Array<{
      metric: string;
      target: string;
    }>;
    u18_physical_expectations: Array<{
      metric: string;
      target: string;
    }>;
  };
  development_trajectory: {
    growth_rate_percent_per_6_months: string;
    acceleration: string;
    plateau_risk: string;
    projected_peak_age_range: string;
  };
  talent_markers: string[];
  development_risks: string[];
  first_team_promotion_readiness: {
    technical_score: number;
    tactical_score: number;
    physical_score: number;
    mental_score: number;
    overall_score: number;
    recommended_timeline: string;
  };
}

// Squad Intelligence
export interface SquadIntelligenceData {
  player_role_balance_analysis: {
    creators: number;
    destroyers: number;
    carriers: number;
    finishers: number;
    balance_status: string;
  };
  squad_depth: {
    position: string;
    chart: Array<{
      rank: number;
      role: string;
      player: string;
      score: number;
    }>;
    depth_score: number;
    depth_rating: string;
  };
  critical_gaps: string[];
  over_utilized_players: Array<{
    player: string;
    minutes: string;
    status: string;
    action: string;
  }>;
  under_utilized_players: Array<{
    player: string;
    minutes: string;
    status: string;
    action: string;
  }>;
  optimal_rotation_strategy: {
    core_players_minutes_percent: string;
    rotation_players_minutes_percent: string;
    squad_players_minutes_percent: string;
    youth_integration_minutes_percent: string;
  };
}

// Recruitment Needs
export interface RecruitmentNeedsData {
  position_needs: {
    title: string;
    skill_requirements: {
      defensive_positioning: string;
      crossing_accuracy: string;
      pace_30m_sprint: string;
      recovery_speed: string;
    };
    experience_level: {
      minimum_appearances: string;
      preferred_appearances: string;
      age_range: string;
      development_potential: string;
    };
  };
  contract_options: {
    trial_contract: {
      duration: string;
      compensation: string;
      evaluation: string;
    };
    short_term_contract: {
      duration: string;
      compensation: string;
      bonuses: string;
    };
  };
  age_and_level_filters: {
    u21_development_percent: number;
    age_22_26_peak_percent: number;
    age_27_plus_experience_percent: number;
  };
  visibility_controls: {
    publication_audience: Array<{
      label: string;
      value: string;
    }>;
    information_disclosure: Array<{
      label: string;
      value: string;
    }>;
  };
}

// Match Archive
export interface MatchArchiveReport {
  date: string;
  result: string;
  formation: string;
  rating: number;
  action_label: string;
}

export interface MatchArchiveData {
  searchable_intelligence_library: {
    search_archive_placeholder: string;
    season_filter: string;
    competition_filter: string;
    reports: MatchArchiveReport[];
  };
  opposition_reports_history: {
    opponent_database: string;
    matches_analyzed: number;
    win_rate_percent: number;
    avg_goals_conceded: number;
    key_weakness: string;
    tactical_evolution_note: string;
  };
  advanced_search_options: Array<{
    title: string;
    description: string;
  }>;
}

// Staff Briefing
export interface StaffBriefingData {
  criticalNotes: string[];
  trainingFocus: string;
  medicalAlerts: string[];
}

// Transfer Planning
export interface TransferPlanningData {
  transfer_window_priorities: {
    priority_positions: Array<{
      priority: string;
      position: string;
      note: string;
    }>;
    transfer_budget_optimization: {
      total_budget: string;
      allocations: Array<{
        position: string;
        amount: string;
      }>;
    };
  };
  squad_age_distribution: {
    u21: { players: number; percent: number };
    age_22_26: { players: number; percent: number };
    age_27_30: { players: number; percent: number };
    age_31_plus: { players: number; percent: number };
    balance_status: string;
  };
  experience_balance: {
    under_50_apps: string;
    apps_50_150: string;
    apps_150_plus: string;
    ideal_mix_status: string;
  };
  contract_expiry_risk_flags: {
    expiring_in_6_months: { count: number; risk: string };
    expiring_in_12_months: { count: number; risk: string };
    expiring_in_24_months: { count: number; risk: string };
    long_term: { count: number; risk: string };
    renewal_priority_assessment: Array<{
      rank: string;
      player: string;
      detail: string;
      badge: string;
    }>;
  };
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
