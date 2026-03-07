export interface Player {
  id: string;
  name: string;
  country: string;
  position: string;
  age: number;
  playerId: string;
  availability: "Available" | "Minor Injury" | "Unavailable";
  avatar: string;
  stats: {
    goals: string;
    assists: string;
    appearances: string;
    recentForm: string;
  };
  performanceTrend: { name: string; score: number }[];
  aiAssessment: string;
  contract: {
    expiryDate: string;
    status: string;
  };
  fitness: {
    notes: string;
  };
}

export const players: Player[] = [
  {
    id: "1",
    name: "Marcus Sterling",
    country: "England",
    position: "Forward",
    age: 24,
    playerId: "OA-ENG-2024-001",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?u=1",
    stats: { goals: "15", assists: "8", appearances: "25", recentForm: "8.2" },
    performanceTrend: [
      { name: "M1", score: 7.2 },
      { name: "M2", score: 7.5 },
      { name: "M3", score: 8.2 },
      { name: "M4", score: 8.0 },
      { name: "M5", score: 8.5 },
    ],
    aiAssessment:
      "Marcus Sterling demonstrates exceptional finishing and pace. Highly recommended for tactical systems relying on quick transitions.",
    contract: { expiryDate: "30 June 2026", status: "Stable" },
    fitness: { notes: "Excellent condition" },
  },
  {
    id: "2",
    name: "Alessandro Ricci",
    country: "Italy",
    position: "Midfielder",
    age: 28,
    playerId: "OA-ITA-2024-004",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?u=2",
    stats: { goals: "5", assists: "12", appearances: "30", recentForm: "7.8" },
    performanceTrend: [
      { name: "M1", score: 7.0 },
      { name: "M2", score: 7.2 },
      { name: "M3", score: 7.8 },
      { name: "M4", score: 7.5 },
      { name: "M5", score: 7.8 },
    ],
    aiAssessment:
      "Alessandro Ricci is a creative engine in the midfield. His vision and passing accuracy consistently exceed team averages.",
    contract: { expiryDate: "15 May 2025", status: "Expiring Soon" },
    fitness: { notes: "None" },
  },
  {
    id: "3",
    name: "Lucas Silva",
    country: "Brazil",
    position: "Defender",
    age: 22,
    playerId: "OA-BRA-2024-012",
    availability: "Minor Injury",
    avatar: "https://i.pravatar.cc/150?u=3",
    stats: { goals: "1", assists: "3", appearances: "22", recentForm: "6.5" },
    performanceTrend: [
      { name: "M1", score: 6.8 },
      { name: "M2", score: 6.5 },
      { name: "M3", score: 6.0 },
      { name: "M4", score: 6.2 },
      { name: "M5", score: 6.5 },
    ],
    aiAssessment:
      "Lucas Silva is a promising young defender with great aerial ability. Currently recovering from a minor ankle sprain.",
    contract: { expiryDate: "10 July 2027", status: "Stable" },
    fitness: { notes: "Recovering from ankle sprain" },
  },
  {
    id: "4",
    name: "Keisuke Tanaka",
    country: "Japan",
    position: "Goalkeeper",
    age: 30,
    playerId: "OA-JPN-2024-009",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?u=4",
    stats: { goals: "0", assists: "1", appearances: "28", recentForm: "7.9" },
    performanceTrend: [
      { name: "M1", score: 7.5 },
      { name: "M2", score: 7.8 },
      { name: "M3", score: 8.0 },
      { name: "M4", score: 7.9 },
      { name: "M5", score: 8.1 },
    ],
    aiAssessment:
      "Keisuke Tanaka is a veteran goalkeeper with excellent reflex saves and distribution skills. Highly reliable in big matches.",
    contract: { expiryDate: "01 Jan 2026", status: "Stable" },
    fitness: { notes: "Peak athletic form" },
  },
  {
    id: "5",
    name: "Hakim Ziyech",
    country: "Morocco",
    position: "Winger",
    age: 26,
    playerId: "OA-MAR-2024-007",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?u=5",
    stats: { goals: "9", assists: "14", appearances: "32", recentForm: "8.1" },
    performanceTrend: [
      { name: "M1", score: 7.8 },
      { name: "M2", score: 8.0 },
      { name: "M3", score: 7.5 },
      { name: "M4", score: 8.3 },
      { name: "M5", score: 8.1 },
    ],
    aiAssessment:
      "Hakim Ziyech provides exceptional width and crossing ability. His performance metrics show high consistency over the last 5 matches.",
    contract: { expiryDate: "12 Dec 2025", status: "Stable" },
    fitness: { notes: "None" },
  },
  {
    id: "6",
    name: "Robert Lewandowski",
    country: "Poland",
    position: "Striker",
    age: 35,
    playerId: "OA-POL-2024-002",
    availability: "Minor Injury",
    avatar: "https://i.pravatar.cc/150?u=6",
    stats: { goals: "25", assists: "4", appearances: "28", recentForm: "7.2" },
    performanceTrend: [
      { name: "M1", score: 8.5 },
      { name: "M2", score: 8.0 },
      { name: "M3", score: 7.5 },
      { name: "M4", score: 7.0 },
      { name: "M5", score: 7.2 },
    ],
    aiAssessment:
      "Despite his age, Lewandowski remains a world-class finisher. Currently monitoring fatigue levels closely.",
    contract: { expiryDate: "30 June 2025", status: "Expiring Soon" },
    fitness: { notes: "Managing muscular fatigue" },
  },
  {
    id: "7",
    name: "Kylian Mbappé",
    country: "France",
    position: "Forward",
    age: 25,
    playerId: "OA-FRA-2024-010",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?u=7",
    stats: { goals: "28", assists: "10", appearances: "30", recentForm: "9.2" },
    performanceTrend: [
      { name: "M1", score: 8.8 },
      { name: "M2", score: 9.0 },
      { name: "M3", score: 9.5 },
      { name: "M4", score: 9.3 },
      { name: "M5", score: 9.2 },
    ],
    aiAssessment:
      "Kylian Mbappé is a generational talent with unparalleled speed and dribbling. Performance is consistently elite.",
    contract: { expiryDate: "15 Aug 2028", status: "Long Term" },
    fitness: { notes: "Perfect fitness levels" },
  },
  {
    id: "8",
    name: "Alphonso Davies",
    country: "Canada",
    position: "Left Back",
    age: 23,
    playerId: "OA-CAN-2024-005",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?u=8",
    stats: { goals: "3", assists: "11", appearances: "29", recentForm: "8.5" },
    performanceTrend: [
      { name: "M1", score: 8.0 },
      { name: "M2", score: 8.2 },
      { name: "M3", score: 8.4 },
      { name: "M4", score: 8.7 },
      { name: "M5", score: 8.5 },
    ],
    aiAssessment:
      "Alphonso Davies offers incredible transition speed from defense to attack. His physical recovery rates are among the highest in the squad.",
    contract: { expiryDate: "20 May 2027", status: "Stable" },
    fitness: { notes: "Highly athletic condition" },
  },
];
