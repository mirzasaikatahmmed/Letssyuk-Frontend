export interface Player {
  id: string;
  name: string;
  country: string;
  position: string;
  age: number;
  playerId: string;
  availability: "Available" | "Minor Injury" | "Unavailable";
  avatar: string;
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
  },
];
