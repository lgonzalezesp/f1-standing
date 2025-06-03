// src/app/models/summary.model.ts

export interface Answer {
  id: number;
  question: string;
  answer: string;
  correct_answers: string[];
  points_win: number;
  timestamp: string;
}

export interface Participant {
  name: string;
  points: number;
  answers: Answer[];
}

export interface Race {
  race_id: string;
  race_name: string;
  participants: Participant[];
}

export interface Total {
  name: string;
  total_points: number;
}

export interface Summary {
  races: Race[];
  totals: Total[];
  last_race: LastRace;
}

export interface LastRace {
  race_id: string;
  race_name: string;
}
