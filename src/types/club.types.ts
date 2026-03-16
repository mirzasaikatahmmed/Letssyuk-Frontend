
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

export interface PlayerScoutingData {
  executiveSummary: ScoutingStat[];
  positionCriteria: ScoutingCriteria[];
  tacticalFit: TacticalFitData;
  developmentPotential: DevelopmentPotentialData;
  comparativeAnalysis: {
    players: Array<{
      name: string;
      score: number;
      value: string;
      age: number;
    }>;
  };
}

// Tactical Analysis
export interface TacticalAnalysisData {
  possession: number;
  pressingIntensity: string;
  defensiveLine: string;
  attackingWidth: string;
  keyTacticalInsights: string[];
}

// Opposition Analysis
export interface OppositionAnalysisData {
  opponentName: string;
  threatLevel: "High" | "Medium" | "Low";
  keyPlayers: string[];
  vulnerabilities: string[];
  recommendedTactics: string;
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
