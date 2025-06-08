import { useState, useMemo } from 'react';
import { GameState, LeaderboardEntry, LeaderboardCategory, PlayerStats } from '../types/game';
import { Button } from './ui/button';

interface LeaderboardPanelProps {
  gameHook: any;
}

// Mock leaderboard data generator
const generateMockLeaderboard = (category: LeaderboardCategory, currentPlayer?: PlayerStats): LeaderboardEntry[] => {
  const mockNicknames = [
    'StalinGrad_Tanker', 'Vodka_Pilot_1991', 'KV2_Enjoyer', 'Sibirskiy_Medved',
    'Russkaya_Dusha', 'Moskva_Defender', 'T34_Legend', 'Katyusha_Queen',
    'Red_Star_Hero', 'Soviet_Thunder', 'Ural_Bear', 'Kremlin_Guard',
    'Tundra_Wolf', 'Baikal_Warrior', 'Volga_Fighter', 'Arctic_Storm',
    'Golden_Eagle_87', 'Iron_Curtain', 'Siberian_Tiger', 'Red_Army_Vet',
    'Murmansk_Sailor', 'Taiga_Hunter', 'Cossack_Rider', 'Nevsky_Knight',
    'Sputnik_Pilot', 'Kalashnikov_Fan', 'Borscht_Lover', 'Balalaika_Master',
    'Babushka_Tank', 'Vodka_Commissar', 'Rasputin_Ghost', 'Lenin_Disciple',
    'Stalin_Clone', 'Putin_Fanboy', 'Romanov_Heir', 'Tsar_Bomba',
    'Gagarin_Spirit', 'Tetris_God', 'Mayonnaise_King', 'Adidas_Slav',
    'Cheeki_Breeki', 'Hardbass_Hero', 'Kompot_Drinker', 'Pelmeni_Eater',
    'Matryoshka_Soul', 'Dacha_Owner', 'Banya_Master', 'Pierogi_Fighter'
  ];

  const rankIcons = ['⭐', '🏅', '🎖️', '🔥', '💎', '👑', '🦅', '⚡'];
  const ranks = [
    'Маршал Банкротства', 'Генерал Разорения', 'Полковник Нищеты', 
    'Майор Убытков', 'Капитан Трат', 'Лейтенант Расходов',
    'Сержант Долгов', 'Рядовой Банкрот'
  ];

  const entries: LeaderboardEntry[] = [];

  // Generate scores based on category
  for (let i = 0; i < 50; i++) {
    let score: number;
    
    switch (category) {
      case 'money':
        score = Math.floor(Math.random() * 10000000) + 100000;
        break;
      case 'clicks':
        score = Math.floor(Math.random() * 100000) + 1000;
        break;
      case 'achievements':
        score = Math.floor(Math.random() * 400) + 50;
        break;
      case 'prestige':
        score = Math.floor(Math.random() * 50) + 1;
        break;
      default:
        score = Math.floor(Math.random() * 1000000);
    }

    entries.push({
      nickname: mockNicknames[i % mockNicknames.length] + (i >= mockNicknames.length ? `_${Math.floor(i / mockNicknames.length)}` : ''),
      score,
      rank: ranks[Math.min(Math.floor(i / 7), ranks.length - 1)],
      rankIcon: rankIcons[Math.min(Math.floor(i / 7), rankIcons.length - 1)],
      position: i + 1
    });
  }

  // Add current player if provided
  if (currentPlayer && currentPlayer.nickname) {
    let playerScore: number;
    
    switch (category) {
      case 'money':
        playerScore = currentPlayer.totalRublesEarned;
        break;
      case 'clicks':
        playerScore = currentPlayer.totalClicks;
        break;
      case 'achievements':
        playerScore = currentPlayer.achievementsCount;
        break;
      case 'prestige':
        playerScore = currentPlayer.prestige;
        break;
      default:
        playerScore = 0;
    }

    const playerEntry: LeaderboardEntry = {
      nickname: currentPlayer.nickname,
      score: playerScore,
      rank: 'Ваш Ранг',
      rankIcon: '🎯',
      position: 0 // Will be calculated
    };

    entries.push(playerEntry);
  }

  // Sort by score descending
  entries.sort((a, b) => b.score - a.score);

  // Update positions
  entries.forEach((entry, index) => {
    entry.position = index + 1;
  });

  return entries.slice(0, 20); // Return top 20
};

export const LeaderboardPanel = ({ gameHook }: LeaderboardPanelProps) => {
  const [activeCategory, setActiveCategory] = useState<LeaderboardCategory>('money');

  const categories = [
    { 
      id: 'money' as LeaderboardCategory, 
      label: '💰 Топ Разорившихся', 
      description: 'Больше всего потратил рублей',
      icon: '💰'
    },
    { 
      id: 'clicks' as LeaderboardCategory, 
      label: '🎯 Короли Кликов', 
      description: 'Общее количество кликов',
      icon: '🎯'
    },
    { 
      id: 'achievements' as LeaderboardCategory, 
      label: '🏅 Коллекционеры Медалей', 
      description: 'Количество достижений',
      icon: '🏅'
    },
    { 
      id: 'prestige' as LeaderboardCategory, 
      label: '⭐ Элитные Банкроты', 
      description: 'Уровень престижа',
      icon: '⭐'
    }
  ];

  const currentPlayerStats: PlayerStats | undefined = useMemo(() => {
    if (!gameHook.gameState.playerNickname) return undefined;
    
    return {
      nickname: gameHook.gameState.playerNickname,
      totalClicks: gameHook.gameState.totalClicks,
      totalRublesEarned: gameHook.gameState.totalRublesEarned,
      totalGoldenEaglesEarned: gameHook.gameState.totalGoldenEaglesEarned,
      prestige: gameHook.gameState.prestige,
      achievementsCount: gameHook.gameState.unlockedAchievements.length,
      playTime: gameHook.gameState.playTime,
      lastSave: gameHook.gameState.lastSave
    };
  }, [gameHook.gameState]);

  const leaderboard = useMemo(() => {
    return generateMockLeaderboard(activeCategory, currentPlayerStats);
  }, [activeCategory, currentPlayerStats]);

  const formatScore = (score: number, category: LeaderboardCategory): string => {
    switch (category) {
      case 'money':
        return gameHook.formatNumber(score) + ' ₽';
      case 'clicks':
        return gameHook.formatNumber(score);
      case 'achievements':
        return score.toString();
      case 'prestige':
        return `${score} уровень`;
      default:
        return score.toString();
    }
  };

  const getPositionColor = (position: number, isCurrentPlayer: boolean): string => {
    if (isCurrentPlayer) return 'var(--wt-gold)';
    if (position === 1) return '#FFD700';
    if (position === 2) return '#C0C0C0';
    if (position === 3) return '#CD7F32';
    return 'var(--wt-text-primary)';
  };

  const getPositionIcon = (position: number): string => {
    if (position === 1) return '🥇';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return `${position}.`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="wt-panel p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
            🏆 ТАБЛИЦА ЛИДЕРОВ 🏆
          </h2>
          <p className="text-lg mt-2 wt-text-premium">
            Рейтинги самых разорившихся танкистов
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-4 text-left transition-all wt-nav-tab ${
                activeCategory === category.id ? 'active' : ''
              }`}
              style={{
                background: activeCategory === category.id 
                  ? 'linear-gradient(135deg, var(--wt-gold), #cc9900)' 
                  : 'var(--wt-panel-bg)',
                color: activeCategory === category.id ? 'black' : 'var(--wt-text-primary)',
                border: `2px solid ${activeCategory === category.id ? 'var(--wt-gold)' : 'var(--wt-border)'}`,
                borderRadius: '4px'
              }}
            >
              <div className="text-lg font-bold">{category.label}</div>
              <div className="text-xs opacity-75">{category.description}</div>
            </Button>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="wt-panel p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--wt-text-primary)' }}>
            {categories.find(c => c.id === activeCategory)?.icon}
            {categories.find(c => c.id === activeCategory)?.label}
          </h3>
          <p className="text-sm" style={{ color: 'var(--wt-text-muted)' }}>
            {categories.find(c => c.id === activeCategory)?.description}
          </p>
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {leaderboard.map((entry, index) => {
            const isCurrentPlayer = entry.nickname === currentPlayerStats?.nickname;
            
            return (
              <div
                key={`${entry.nickname}-${index}`}
                className={`flex items-center justify-between p-4 rounded transition-all ${
                  isCurrentPlayer ? 'wt-current-player' : 'wt-leaderboard-entry'
                }`}
                style={{
                  background: isCurrentPlayer 
                    ? 'linear-gradient(90deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1))'
                    : index % 2 === 0 
                      ? 'rgba(255, 255, 255, 0.05)' 
                      : 'transparent',
                  border: isCurrentPlayer 
                    ? '2px solid var(--wt-gold)' 
                    : '1px solid var(--wt-border)',
                  borderRadius: '4px'
                }}
              >
                {/* Position and Rank */}
                <div className="flex items-center space-x-4 flex-1">
                  <div 
                    className="text-2xl font-bold min-w-[3rem] text-center"
                    style={{ color: getPositionColor(entry.position, isCurrentPlayer) }}
                  >
                    {getPositionIcon(entry.position)}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{entry.rankIcon}</span>
                    <div>
                      <div 
                        className={`font-bold ${isCurrentPlayer ? 'text-lg' : ''}`}
                        style={{ color: isCurrentPlayer ? 'var(--wt-gold)' : 'var(--wt-text-primary)' }}
                      >
                        {entry.nickname}
                        {isCurrentPlayer && ' (ВЫ)'}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--wt-text-muted)' }}>
                        {entry.rank}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right">
                  <div 
                    className="text-xl font-bold"
                    style={{ color: isCurrentPlayer ? 'var(--wt-gold)' : 'var(--wt-text-primary)' }}
                  >
                    {formatScore(entry.score, activeCategory)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Player Stats */}
      {currentPlayerStats && (
        <div className="wt-panel p-6">
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--wt-gold)' }}>
            🎯 Ваша Статистика
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded" style={{ background: 'var(--wt-military-green)' }}>
              <div className="text-2xl mb-1">💰</div>
              <div className="text-sm" style={{ color: 'var(--wt-text-muted)' }}>Потрачено</div>
              <div className="font-bold" style={{ color: 'var(--wt-text-primary)' }}>
                {gameHook.formatNumber(currentPlayerStats.totalRublesEarned)} ₽
              </div>
            </div>
            
            <div className="text-center p-3 rounded" style={{ background: 'var(--wt-military-green)' }}>
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-sm" style={{ color: 'var(--wt-text-muted)' }}>Кликов</div>
              <div className="font-bold" style={{ color: 'var(--wt-text-primary)' }}>
                {gameHook.formatNumber(currentPlayerStats.totalClicks)}
              </div>
            </div>
            
            <div className="text-center p-3 rounded" style={{ background: 'var(--wt-military-green)' }}>
              <div className="text-2xl mb-1">🏅</div>
              <div className="text-sm" style={{ color: 'var(--wt-text-muted)' }}>Медалей</div>
              <div className="font-bold" style={{ color: 'var(--wt-text-primary)' }}>
                {currentPlayerStats.achievementsCount}
              </div>
            </div>
            
            <div className="text-center p-3 rounded" style={{ background: 'var(--wt-military-green)' }}>
              <div className="text-2xl mb-1">⭐</div>
              <div className="text-sm" style={{ color: 'var(--wt-text-muted)' }}>Престиж</div>
              <div className="font-bold" style={{ color: 'var(--wt-text-primary)' }}>
                {currentPlayerStats.prestige} ур.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
