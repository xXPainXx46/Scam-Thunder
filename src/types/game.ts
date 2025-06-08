export interface GameState {
  // Player info
  playerNickname?: string;
  
  // Core stats
  clicks: number;
  rubles: number;
  goldenEagles: number;
  premiumDays: number;
  clickPower: number;
  autoClickPower: number;
  
  // Progression
  prestige: number;
  level: number;
  experience: number;
  
  // Upgrades
  upgrades: { [key: string]: number };
  
  // Achievements
  unlockedAchievements: string[];
  
  // Statistics
  totalClicks: number;
  totalRublesEarned: number;
  totalGoldenEaglesEarned: number;
  playTime: number;
  lastSave: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  requirement: {
    type: 'clicks' | 'rubles' | 'goldenEagles' | 'upgrades' | 'prestige' | 'playTime';
    value: number;
    upgradeId?: string;
  };
  reward: {
    rubles?: number;
    goldenEagles?: number;
    clickPower?: number;
    multiplier?: number;
  };
  unlocked: boolean;
}

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: {
    rubles?: number;
    goldenEagles?: number;
  };
  effect: {
    clickPower?: number;
    autoClickPower?: number;
    multiplier?: number;
    special?: string;
  };
  maxLevel: number;
  currentLevel: number;
  unlockRequirement?: {
    clicks?: number;
    rubles?: number;
    goldenEagles?: number;
    prestige?: number;
  };
}

export interface ClickResponse {
  text: string;
  weight: number; // Higher weight = more common
  minClicks?: number;
  maxClicks?: number;
}

export interface RandomEvent {
  id: string;
  name: string;
  description: string;
  probability: number;
  effect: {
    rubles?: number;
    goldenEagles?: number;
    clickPower?: number;
    multiplier?: number;
  };
  duration?: number;
}

export interface LeaderboardEntry {
  nickname: string;
  score: number;
  rank: string;
  rankIcon: string;
  position: number;
}

export interface PlayerStats {
  nickname: string;
  totalClicks: number;
  totalRublesEarned: number;
  totalGoldenEaglesEarned: number;
  prestige: number;
  achievementsCount: number;
  playTime: number;
  lastSave: number;
}

export type LeaderboardCategory = 'money' | 'clicks' | 'achievements' | 'prestige';
