export interface Agent {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  agencyName?: string;
  licenseNumber?: string;
  profilePicture?: string;
  location?: string;
  isVerified: boolean;
  experienceYears?: number;
}

export interface AgentState {
  agents: Agent[];
  selectedAgent: Agent | null;
  isLoading: boolean;
}

export interface AgentRisk {
  type: string;
  title: string;
  description: string;
  recommendation: string;
}

export interface ContractDetail {
  label: string;
  value: string;
  detail: string;
}

export interface ContractStructureData {
  status: string;
  analysis_type: string;
  timestamp: string;
  model: string;
  data: {
    title: string;
    subtitle: string;
    contract_duration: ContractDetail;
    base_salary: ContractDetail;
    performance_bonuses: ContractDetail;
    image_rights: ContractDetail;
    ai_summary: string;
  };
}

export interface ContractStructureResponse {
  feature: string;
  agent_id: string;
  analysis: ContractStructureData;
}

export interface RiskClauseData {
  risks: AgentRisk[];
  market_standards_summary: string;
}

export interface RiskClauseResponse {
  feature: string;
  agent_id: string;
  analysis: RiskClauseData;
}

export interface MarketValueBenchmarkingData {
  currentMarketValue: string;
  contractSalary: string;
  marketAverage: string;
  percentileText: string;
  salaryPercentile: number;
  status: string;
  recommendation: string;
}

export interface MarketValueBenchmarkingResponse {
  feature: string;
  agent_id: string;
  analysis: MarketValueBenchmarkingData;
}

export interface ScenarioDetails {
  title: string;
  badge: string;
  financialValue: string;
  playingTimeProbability: string;
  careerGrowthImpact: string;
}

export interface ScenarioComparisonData {
  currentContract: ScenarioDetails;
  alternativeOffer: ScenarioDetails;
}

export interface ScenarioComparisonResponse {
  feature: string;
  agent_id: string;
  analysis: ScenarioComparisonData;
}

export interface NegotiationPreparationData {
  talkingPoints: string[];
  strategicConcessions: string[];
  walkAwayThreshold: string;
}

export interface NegotiationPreparationResponse {
  feature: string;
  agent_id: string;
  analysis: NegotiationPreparationData;
}

export interface CareerTimelineEvent {
  label: string;
  title: string;
  date: string;
  theme: string;
  badge?: string;
}

export interface CareerContractTimelineData {
  timeline: CareerTimelineEvent[];
}

export interface CareerContractTimelineResponse {
  feature: string;
  agent_id: string;
  analysis: CareerContractTimelineData;
}

export interface ClubMatch {
  id: number;
  name: string;
  league: string;
  logo: string;
  color: string;
  score: number;
  matchLabel: string;
  positionNeed: string;
  tacticalSystem: string;
  developmentPath: string;
  contactStatus: string;
  whyThisMatch: string;
}

export interface ImmediateOpportunities {
  winterWindow: string;
  summerWindow: string;
  loanOption: string;
  permanentMove: string;
}

export interface NegotiationPositioning {
  currentMarketValue: string;
  askingPrice: string;
  realisticPrice: string;
  leverage: string;
  assessment: string;
}

export interface CareerPathwayStep {
  number: number;
  title: string;
  timeframe: string;
  description: string;
}

export interface OpportunityMatchingData {
  topClubMatches: ClubMatch[];
  immediateOpportunities: ImmediateOpportunities;
  negotiationPositioning: NegotiationPositioning;
  careerPathway: CareerPathwayStep[];
  optimalPathwaySummary: string;
}

export interface OpportunityMatchingResponse {
  feature: string;
  agent_id: string;
  analysis: OpportunityMatchingData;
}

export interface PlayerMonitoringData {
  performance_alerts: string[];
  growth_trajectory: string;
  status: string;
}

export interface PlayerMonitoringResponse {
  feature: string;
  agent_id: string;
  analysis: PlayerMonitoringData;
}
