import { useState, useEffect, useCallback } from 'react';
import { GameState, Achievement } from '../types/game';
import { getAllAchievements } from '../data/achievements';
import { getRandomClickResponse } from '../data/clickResponses';
import { upgrades, calculateUpgradeCost } from '../data/upgrades';

const SAVE_KEY = 'war-thunder-clicker-save';

const initialGameState: GameState = {
  playerNickname: undefined,
  clicks: 0,
  rubles: 0,
  goldenEagles: 0,
  premiumDays: 0,
  clickPower: 1,
  autoClickPower: 0,
  prestige: 0,
  level: 1,
  experience: 0,
  upgrades: {},
  unlockedAchievements: [],
  totalClicks: 0,
  totalRublesEarned: 0,
  totalGoldenEaglesEarned: 0,
  playTime: 0,
  lastSave: Date.now()
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [lastClickResponse, setLastClickResponse] = useState<string>('');
  const [showNotification, setShowNotification] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load game on mount
  useEffect(() => {
    const savedGame = localStorage.getItem(SAVE_KEY);
    if (savedGame) {
      try {
        const parsed = JSON.parse(savedGame);
        // Calculate offline progress
        const offlineTime = Date.now() - (parsed.lastSave || Date.now());
        const offlineProgress = Math.floor((offlineTime / 1000) * (parsed.autoClickPower || 0));
        
        setGameState({
          ...parsed,
          rubles: (parsed.rubles || 0) + offlineProgress,
          totalRublesEarned: (parsed.totalRublesEarned || 0) + offlineProgress,
          playTime: (parsed.playTime || 0) + Math.min(offlineTime, 24 * 60 * 60 * 1000) // Max 24h offline
        });
        
        if (offlineProgress > 0) {
          setShowNotification(`Добро пожаловать! Пока вас не было, заработано ${offlineProgress} рублей!`);
          setTimeout(() => setShowNotification(''), 5000);
        }
      } catch (e) {
        console.error('Failed to load save:', e);
      }
    }
    
    setAchievements(getAllAchievements());
    setIsLoaded(true);
  }, []);

  // Auto-save every 10 seconds
  useEffect(() => {
    if (!isLoaded) return;
    
    const interval = setInterval(() => {
      saveGame();
    }, 10000);
    
    return () => clearInterval(interval);
  }, [gameState, isLoaded]);

  // Auto-clicker effect
  useEffect(() => {
    if (gameState.autoClickPower <= 0) return;
    
    const interval = setInterval(() => {
      performAutoClick();
    }, 1000);
    
    return () => clearInterval(interval);
  }, [gameState.autoClickPower]);

  // Play time tracker
  useEffect(() => {
    const interval = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        playTime: prev.playTime + 1000
      }));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const saveGame = useCallback(() => {
    const saveData = {
      ...gameState,
      lastSave: Date.now()
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
  }, [gameState]);

  const performClick = useCallback(() => {
    const totalClickPower = calculateTotalClickPower();
    const rublesGained = totalClickPower;
    const goldenEaglesGained = Math.floor(totalClickPower / 100);
    
    setGameState(prev => ({
      ...prev,
      clicks: prev.clicks + 1,
      rubles: prev.rubles + rublesGained,
      goldenEagles: prev.goldenEagles + goldenEaglesGained,
      totalClicks: prev.totalClicks + 1,
      totalRublesEarned: prev.totalRublesEarned + rublesGained,
      totalGoldenEaglesEarned: prev.totalGoldenEaglesEarned + goldenEaglesGained,
      experience: prev.experience + 1
    }));
    
    // Generate click response
    const response = getRandomClickResponse(gameState.totalClicks + 1);
    setLastClickResponse(response);
    
    // Check for achievements
    checkAchievements();
  }, [gameState]);

  const performAutoClick = useCallback(() => {
    const autoGain = gameState.autoClickPower;
    if (autoGain <= 0) return;
    
    setGameState(prev => ({
      ...prev,
      rubles: prev.rubles + autoGain,
      totalRublesEarned: prev.totalRublesEarned + autoGain
    }));
  }, [gameState.autoClickPower]);

  const calculateTotalClickPower = useCallback((): number => {
    let power = gameState.clickPower;
    
    // Apply upgrade bonuses
    Object.entries(gameState.upgrades).forEach(([upgradeId, level]) => {
      const upgrade = upgrades.find(u => u.id === upgradeId);
      if (upgrade && upgrade.effect.clickPower) {
        power += upgrade.effect.clickPower * level;
      }
    });
    
    // Apply multipliers
    let multiplier = 1;
    Object.entries(gameState.upgrades).forEach(([upgradeId, level]) => {
      const upgrade = upgrades.find(u => u.id === upgradeId);
      if (upgrade && upgrade.effect.multiplier && level > 0) {
        multiplier *= Math.pow(upgrade.effect.multiplier, level);
      }
    });
    
    // Prestige bonus
    multiplier *= Math.pow(1.1, gameState.prestige);
    
    return Math.floor(power * multiplier);
  }, [gameState]);

  const calculateTotalAutoClickPower = useCallback((): number => {
    let power = gameState.autoClickPower;
    
    // Apply upgrade bonuses
    Object.entries(gameState.upgrades).forEach(([upgradeId, level]) => {
      const upgrade = upgrades.find(u => u.id === upgradeId);
      if (upgrade && upgrade.effect.autoClickPower) {
        power += upgrade.effect.autoClickPower * level;
      }
    });
    
    return power;
  }, [gameState]);

  const purchaseUpgrade = useCallback((upgradeId: string) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (!upgrade) return false;
    
    const currentLevel = gameState.upgrades[upgradeId] || 0;
    if (currentLevel >= upgrade.maxLevel) return false;
    
    const cost = calculateUpgradeCost(upgrade, currentLevel);
    
    // Check if player can afford
    if (cost.rubles && gameState.rubles < cost.rubles) return false;
    if (cost.goldenEagles && gameState.goldenEagles < cost.goldenEagles) return false;
    
    // Purchase upgrade
    setGameState(prev => ({
      ...prev,
      rubles: prev.rubles - (cost.rubles || 0),
      goldenEagles: prev.goldenEagles - (cost.goldenEagles || 0),
      upgrades: {
        ...prev.upgrades,
        [upgradeId]: currentLevel + 1
      },
      clickPower: prev.clickPower + (upgrade.effect.clickPower || 0),
      autoClickPower: prev.autoClickPower + (upgrade.effect.autoClickPower || 0)
    }));
    
    setShowNotification(`Куплено: ${upgrade.name}!`);
    setTimeout(() => setShowNotification(''), 3000);
    
    return true;
  }, [gameState]);

  const checkAchievements = useCallback(() => {
    achievements.forEach(achievement => {
      if (gameState.unlockedAchievements.includes(achievement.id)) return;
      
      let unlocked = false;
      const req = achievement.requirement;
      
      switch (req.type) {
        case 'clicks':
          unlocked = gameState.totalClicks >= req.value;
          break;
        case 'rubles':
          unlocked = gameState.totalRublesEarned >= req.value;
          break;
        case 'goldenEagles':
          unlocked = gameState.totalGoldenEaglesEarned >= req.value;
          break;
        case 'prestige':
          unlocked = gameState.prestige >= req.value;
          break;
        case 'playTime':
          unlocked = gameState.playTime >= req.value;
          break;
        case 'upgrades':
          if (req.upgradeId) {
            unlocked = (gameState.upgrades[req.upgradeId] || 0) >= req.value;
          }
          break;
      }
      
      if (unlocked) {
        setGameState(prev => ({
          ...prev,
          unlockedAchievements: [...prev.unlockedAchievements, achievement.id],
          rubles: prev.rubles + (achievement.reward.rubles || 0),
          goldenEagles: prev.goldenEagles + (achievement.reward.goldenEagles || 0),
          clickPower: prev.clickPower + (achievement.reward.clickPower || 0)
        }));
        
        setShowNotification(`🏆 Достижение: ${achievement.name}!`);
        setTimeout(() => setShowNotification(''), 5000);
      }
    });
  }, [gameState, achievements]);

  const performPrestige = useCallback(() => {
    if (gameState.rubles < 1000000) return false;
    
    const newPrestigeLevel = gameState.prestige + 1;
    const prestigeBonus = Math.floor(gameState.rubles / 1000000) * 10;
    
    setGameState(prev => ({
      ...initialGameState,
      prestige: newPrestigeLevel,
      goldenEagles: prev.goldenEagles + prestigeBonus,
      totalClicks: prev.totalClicks,
      totalRublesEarned: prev.totalRublesEarned,
      totalGoldenEaglesEarned: prev.totalGoldenEaglesEarned + prestigeBonus,
      playTime: prev.playTime,
      unlockedAchievements: prev.unlockedAchievements,
      clickPower: 1 + newPrestigeLevel // Prestige bonus
    }));
    
    setShowNotification(`🌟 Престиж ${newPrestigeLevel}! Получено ${prestigeBonus} золотых орлов!`);
    setTimeout(() => setShowNotification(''), 5000);
    
    return true;
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState(initialGameState);
    setAchievements(getAllAchievements());
    localStorage.removeItem(SAVE_KEY);
  }, []);

  const formatNumber = useCallback((num: number): string => {
    if (num < 1000) return num.toString();
    if (num < 1000000) return (num / 1000).toFixed(1) + 'К';
    if (num < 1000000000) return (num / 1000000).toFixed(1) + 'М';
    if (num < 1000000000000) return (num / 1000000000).toFixed(1) + 'Б';
    return (num / 1000000000000).toFixed(1) + 'Т';
  }, []);

  const formatTime = useCallback((ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}д ${hours % 24}ч`;
    if (hours > 0) return `${hours}ч ${minutes % 60}м`;
    if (minutes > 0) return `${minutes}м ${seconds % 60}с`;
    return `${seconds}с`;
  }, []);

  const setPlayerNickname = useCallback((nickname: string) => {
    setGameState(prev => ({
      ...prev,
      playerNickname: nickname
    }));
    
    setShowNotification(`Добро пожаловать, ${nickname}! Приготовьтесь к банкротству!`);
    setTimeout(() => setShowNotification(''), 5000);
  }, []);

  return {
    gameState,
    achievements,
    lastClickResponse,
    showNotification,
    performClick,
    purchaseUpgrade,
    performPrestige,
    resetGame,
    saveGame,
    calculateTotalClickPower,
    calculateTotalAutoClickPower,
    formatNumber,
    formatTime,
    setPlayerNickname,
    isLoaded
  };
};
