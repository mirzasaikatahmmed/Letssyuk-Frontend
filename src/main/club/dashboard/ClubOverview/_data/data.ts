export interface Player {
  id: string;
  name: string;
  role: string;
  age: number;
  playerId: string;
  recentForm: string;
  contractUntil: string;
  status: "Available" | "Minor Injury" | "Unavailable";
  image: string;
  contractStatus: "normal" | "warning";
}

export const players: Player[] = [
  {
    id: "1",
    name: "Marcus Sterling",
    role: "Forward",
    age: 24,
    playerId: "OA-ENG-2024-001",
    recentForm: "8.5",
    contractUntil: "Jun 2026",
    status: "Available",
    image: "https://i.pravatar.cc/150?u=1",
    contractStatus: "normal",
  },
  {
    id: "2",
    name: "Marcus Sterling",
    role: "Forward",
    age: 24,
    playerId: "OA-ENG-2024-001",
    recentForm: "8.5",
    contractUntil: "Jun 2026",
    status: "Available",
    image: "https://i.pravatar.cc/150?u=2",
    contractStatus: "normal",
  },
  {
    id: "3",
    name: "Marcus Sterling",
    role: "Forward",
    age: 24,
    playerId: "OA-ENG-2024-001",
    recentForm: "8.5",
    contractUntil: "Jun 2026",
    status: "Minor Injury",
    image: "https://i.pravatar.cc/150?u=3",
    contractStatus: "warning",
  },
  {
    id: "4",
    name: "Marcus Sterling",
    role: "Forward",
    age: 24,
    playerId: "OA-ENG-2024-001",
    recentForm: "8.5",
    contractUntil: "Jun 2026",
    status: "Available",
    image: "https://i.pravatar.cc/150?u=4",
    contractStatus: "normal",
  },
  {
    id: "5",
    name: "Marcus Sterling",
    role: "Forward",
    age: 24,
    playerId: "OA-ENG-2024-001",
    recentForm: "8.5",
    contractUntil: "Jun 2026",
    status: "Available",
    image: "https://i.pravatar.cc/150?u=5",
    contractStatus: "normal",
  },
  {
    id: "6",
    name: "Marcus Sterling",
    role: "Forward",
    age: 24,
    playerId: "OA-ENG-2024-001",
    recentForm: "8.5",
    contractUntil: "Jun 2026",
    status: "Minor Injury",
    image: "https://i.pravatar.cc/150?u=6",
    contractStatus: "warning",
  },
];
