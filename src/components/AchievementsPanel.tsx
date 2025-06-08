import { useState } from 'react';

interface AchievementsPanelProps {
  gameHook: any;
}

export const AchievementsPanel: React.FC<AchievementsPanelProps> = ({ gameHook }) => {
  const { gameState, achievements, formatNumber } = gameHook;
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked' | 'combat' | 'economic' | 'veteran'>('all');

  const unlockedAchievements = achievements.filter((achievement: any) =>
    gameState.unlockedAchievements.includes(achievement.id)
  );

  const lockedAchievements = achievements.filter((achievement: any) =>
    !gameState.unlockedAchievements.includes(achievement.id)
  );

  const getAchievementCategory = (achievement: any): string => {
    if (achievement.requirement?.type === 'clicks' || achievement.name.includes('атак') || achievement.name.includes('урон')) return 'combat';
    if (achievement.requirement?.type === 'rubles' || achievement.requirement?.type === 'goldenEagles' || achievement.name.includes('донат') || achievement.name.includes('рубл')) return 'economic';
    if (achievement.requirement?.type === 'playTime' || achievement.requirement?.type === 'prestige' || achievement.name.includes('звание') || achievement.name.includes('час')) return 'veteran';
    return 'combat';
  };

  const getFilteredAchievements = () => {
    switch (filter) {
      case 'unlocked':
        return unlockedAchievements;
      case 'locked':
        return lockedAchievements;
      case 'combat':
        return achievements.filter((a: any) => getAchievementCategory(a) === 'combat');
      case 'economic':
        return achievements.filter((a: any) => getAchievementCategory(a) === 'economic');
      case 'veteran':
        return achievements.filter((a: any) => getAchievementCategory(a) === 'veteran');
      default:
        return achievements;
    }
  };

  const getProgressText = (achievement: any): string => {
    const req = achievement.requirement;
    let current = 0;
    let target = req.value;

    switch (req.type) {
      case 'clicks':
        current = gameState.totalClicks;
        break;
      case 'rubles':
        current = gameState.totalRublesEarned;
        break;
      case 'goldenEagles':
        current = gameState.totalGoldenEaglesEarned;
        break;
      case 'prestige':
        current = gameState.prestige;
        break;
      case 'playTime':
        current = gameState.playTime;
        target = req.value;
        return `${Math.floor(current / 1000)}с / ${Math.floor(target / 1000)}с`;
      case 'upgrades':
        if (req.upgradeId) {
          current = gameState.upgrades[req.upgradeId] || 0;
        }
        break;
    }

    return `${formatNumber(Math.min(current, target))} / ${formatNumber(target)}`;
  };

  const getProgressPercentage = (achievement: any): number => {
    if (gameState.unlockedAchievements.includes(achievement.id)) return 100;

    const req = achievement.requirement;
    let current = 0;
    let target = req.value;

    switch (req.type) {
      case 'clicks':
        current = gameState.totalClicks;
        break;
      case 'rubles':
        current = gameState.totalRublesEarned;
        break;
      case 'goldenEagles':
        current = gameState.totalGoldenEaglesEarned;
        break;
      case 'prestige':
        current = gameState.prestige;
        break;
      case 'playTime':
        current = gameState.playTime;
        break;
      case 'upgrades':
        if (req.upgradeId) {
          current = gameState.upgrades[req.upgradeId] || 0;
        }
        break;
    }

    return Math.min(100, (current / target) * 100);
  };

  const getRewardText = (achievement: any): string => {
    const rewards = [];
    if (achievement.reward.rubles) {
      rewards.push(`${formatNumber(achievement.reward.rubles)} рублей`);
    }
    if (achievement.reward.goldenEagles) {
      rewards.push(`${formatNumber(achievement.reward.goldenEagles)} орлов`);
    }
    if (achievement.reward.clickPower) {
      rewards.push(`+${achievement.reward.clickPower} сила клика`);
    }
    if (achievement.reward.multiplier) {
      rewards.push(`x${achievement.reward.multiplier} множитель`);
    }
    return rewards.join(', ');
  };

  const getMedalTier = (requirement: any): { color: string; tier: string; icon: string } => {
    const value = requirement?.value || 100;
    if (value <= 100) return { color: 'var(--wt-bronze)', tier: 'Бронза', icon: '🥉' };
    if (value <= 1000) return { color: 'var(--wt-text-primary)', tier: 'Серебро', icon: '🥈' };
    if (value <= 10000) return { color: 'var(--wt-gold)', tier: 'Золото', icon: '🥇' };
    if (value <= 100000) return { color: 'var(--wt-red-warning)', tier: 'Платина', icon: '💎' };
    return { color: 'var(--wt-blue-info)', tier: 'Легенда', icon: '👑' };
  };

  const filteredAchievements = getFilteredAchievements();

  return (
    <div className="max-w-7xl mx-auto">
      {/* War Thunder Achievement Header */}
      <div className="wt-panel p-6 mb-6">
        <div className="wt-panel-header text-center">
          🏅 МЕДАЛИ ФИНАНСОВОГО КРАХА
        </div>
        
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold mb-2 wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
            WAR THUNDER: КНИГА РЕКОРДОВ БАНКРОТСТВА
          </h2>
          <p className="wt-text-premium mb-4">
            🎖️ Достижения на пути к финансовому краху 🎖️
          </p>
          <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
            "Каждая медаль - это шаг к банкротству" - Gaijin Philosophy©
          </div>
        </div>
      </div>

      {/* Achievement Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="wt-panel p-4 text-center">
          <div className="text-3xl font-bold mb-2" style={{ color: 'var(--wt-military-green)' }}>
            {unlockedAchievements.length}
          </div>
          <div style={{ color: 'var(--wt-text-secondary)' }}>🏅 Получено медалей</div>
        </div>
        <div className="wt-panel p-4 text-center">
          <div className="text-3xl font-bold mb-2" style={{ color: 'var(--wt-blue-info)' }}>
            {achievements.length}
          </div>
          <div style={{ color: 'var(--wt-text-secondary)' }}>🎖️ Всего медалей</div>
        </div>
        <div className="wt-panel p-4 text-center">
          <div className="text-3xl font-bold mb-2 wt-text-premium">
            {((unlockedAchievements.length / achievements.length) * 100).toFixed(1)}%
          </div>
          <div style={{ color: 'var(--wt-text-secondary)' }}>📊 Прогресс разорения</div>
        </div>
        <div className="wt-panel p-4 text-center">
          <div className="text-3xl font-bold mb-2" style={{ color: 'var(--wt-gold)' }}>
            BR {Math.floor(unlockedAchievements.length / 10 + 1)}.0
          </div>
          <div style={{ color: 'var(--wt-text-secondary)' }}>🎯 Battle Rating банкрота</div>
        </div>
      </div>

      {/* War Thunder Style Category Filters */}
      <div className="wt-panel p-4 mb-6">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {[
            { id: 'all', label: '🏆 Все медали', count: achievements.length, desc: 'Полная коллекция банкротства' },
            { id: 'unlocked', label: '✅ Получено', count: unlockedAchievements.length, desc: 'Заслуженные награды' },
            { id: 'locked', label: '🔒 Заблокировано', count: lockedAchievements.length, desc: 'Будущие цели' },
            { id: 'combat', label: '⚔️ Боевые', count: achievements.filter((a: any) => getAchievementCategory(a) === 'combat').length, desc: 'За боевые действия' },
            { id: 'economic', label: '💰 Экономические', count: achievements.filter((a: any) => getAchievementCategory(a) === 'economic').length, desc: 'За трату денег' },
            { id: 'veteran', label: '🎖️ Ветеранские', count: achievements.filter((a: any) => getAchievementCategory(a) === 'veteran').length, desc: 'За верность игре' }
          ].map(button => (
            <button
              key={button.id}
              onClick={() => setFilter(button.id as any)}
              className={`wt-nav-tab px-4 py-2 transition-all duration-200 ${
                filter === button.id ? 'active' : ''
              }`}
              title={button.desc}
            >
              {button.label} ({button.count})
            </button>
          ))}
        </div>
      </div>

      {/* War Thunder Style Achievement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAchievements.map((achievement: any) => {
          const isUnlocked = gameState.unlockedAchievements.includes(achievement.id);
          const progress = getProgressPercentage(achievement);
          const medalTier = getMedalTier(achievement.requirement);

          return (
            <div
              key={achievement.id}
              className={`wt-vehicle-card p-4 transition-all duration-300 hover:scale-105 ${
                isUnlocked ? 'border-2' : ''
              }`}
              style={{
                borderColor: isUnlocked ? 'var(--wt-gold)' : 'var(--wt-border)',
                background: isUnlocked 
                  ? 'linear-gradient(145deg, var(--wt-panel-bg), #3d2914)' 
                  : 'var(--wt-panel-bg)',
                opacity: isUnlocked ? 1 : 0.7
              }}
            >
              {/* Medal Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">
                    {isUnlocked ? medalTier.icon : '🔒'}
                  </span>
                  <div className="wt-rank-badge text-xs" style={{ 
                    background: medalTier.color,
                    color: medalTier.color === 'var(--wt-gold)' ? 'black' : 'white'
                  }}>
                    {medalTier.tier}
                  </div>
                </div>
                {isUnlocked && (
                  <span className="text-xl" style={{ color: 'var(--wt-gold)' }}>✨</span>
                )}
              </div>

              {/* Achievement Name */}
              <h3 className={`font-bold text-lg mb-2 ${
                isUnlocked ? 'wt-text-glow' : 'text-white/60'
              }`} style={{
                color: isUnlocked ? 'var(--wt-gold)' : 'var(--wt-text-secondary)'
              }}>
                {achievement.name}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4" style={{ 
                color: isUnlocked ? 'var(--wt-text-primary)' : 'var(--wt-text-muted)',
                minHeight: '60px'
              }}>
                {achievement.description}
              </p>

              {/* Requirement Display */}
              <div className="wt-vehicle-card p-2 mb-3 text-xs">
                <div className="flex justify-between items-center">
                  <span style={{ color: 'var(--wt-text-secondary)' }}>Требование:</span>
                  <span className="font-bold" style={{ 
                    color: isUnlocked ? 'var(--wt-military-green)' : 'var(--wt-text-primary)' 
                  }}>
                    {getProgressText(achievement)}
                  </span>
                </div>
                
                {!isUnlocked && progress > 0 && (
                  <div className="mt-1" style={{ color: 'var(--wt-blue-info)' }}>
                    Прогресс: {progress.toFixed(1)}%
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              {!isUnlocked && (
                <div className="wt-progress-bar h-3 mb-3">
                  <div 
                    className="h-full transition-all duration-300"
                    style={{ 
                      width: `${progress}%`,
                      background: progress > 80 
                        ? 'linear-gradient(90deg, var(--wt-gold), var(--wt-bronze))'
                        : 'linear-gradient(90deg, var(--wt-blue-info), var(--wt-military-green))'
                    }}
                  />
                </div>
              )}

              {/* Status Badge and Reward */}
              <div className="space-y-2">
                {isUnlocked ? (
                  <div className="wt-premium-button text-sm py-2" style={{ borderRadius: '4px' }}>
                    🏆 МЕДАЛЬ ПОЛУЧЕНА
                  </div>
                ) : progress > 0 ? (
                  <div className="wt-button text-sm py-2" style={{ borderRadius: '4px' }}>
                    🎯 В ПРОЦЕССЕ
                  </div>
                ) : (
                  <div className="p-2 text-sm" style={{ 
                    background: 'var(--wt-panel-bg)',
                    border: '1px solid var(--wt-border)',
                    borderRadius: '4px',
                    color: 'var(--wt-text-muted)'
                  }}>
                    🔒 НЕ НАЧАТО
                  </div>
                )}
                
                {/* Reward Display */}
                <div className="wt-vehicle-card p-2 text-xs">
                  <div style={{ color: 'var(--wt-text-secondary)' }} className="mb-1">
                    Награда:
                  </div>
                  <div className="font-bold" style={{ 
                    color: isUnlocked ? 'var(--wt-gold)' : 'var(--wt-text-primary)' 
                  }}>
                    {getRewardText(achievement)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* No Achievements Message */}
      {filteredAchievements.length === 0 && (
        <div className="wt-panel p-8 text-center">
          <div className="text-6xl mb-4">🏅</div>
          <div className="text-xl font-bold mb-2" style={{ color: 'var(--wt-text-primary)' }}>
            Медали не найдены
          </div>
          <div style={{ color: 'var(--wt-text-secondary)' }}>
            Попробуйте изменить фильтры или продолжайте тратить деньги!
          </div>
        </div>
      )}

      {/* War Thunder Motivational Quote */}
      <div className="wt-notification p-4 mt-6">
        <div className="text-center">
          <div className="text-lg font-bold wt-text-premium mb-2">
            💡 МУДРОСТЬ WAR THUNDER
          </div>
          <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
            "Каждое достижение приближает вас к банкротству, но зато у вас есть красивые медальки!"
            <br />
            <span className="wt-text-premium">- Философия Gaijin Entertainment©</span>
          </div>
        </div>
      </div>
    </div>
  );
};
