export interface PlayerStats {
  goals: number;
  assists: number;
  appearances: number;
}

export interface Player {
  id: string;
  playerId: string;
  name: string;
  age: number;
  country: string;
  position: string;
  avatar: string;
  availability: string;
  stats: PlayerStats;
}
