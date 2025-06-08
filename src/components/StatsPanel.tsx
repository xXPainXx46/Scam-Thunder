interface StatsPanelProps {
  gameHook: any;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ gameHook }) => {
  const { gameState, formatNumber, formatTime } = gameHook;

  const stats = [
    {
      icon: '🦁',
      label: 'Серебряные Львы',
      sublabel: '(Обесцененные Gaijin)',
      value: formatNumber(gameState.rubles),
      color: 'var(--wt-text-primary)',
      bgColor: 'var(--wt-military-green)'
    },
    {
      icon: '🦅',
      label: 'Золотые Орлы',
      sublabel: '(Украденные из кошелька)',
      value: formatNumber(gameState.goldenEagles),
      color: 'var(--wt-gold)',
      bgColor: 'var(--wt-gold)'
    },
    {
      icon: '😭',
      label: 'Слёзы Разорения',
      sublabel: '(Количество кликов)',
      value: formatNumber(gameState.totalClicks),
      color: 'var(--wt-blue-info)',
      bgColor: 'var(--wt-blue-info)'
    },
    {
      icon: '💳',
      label: 'Кредиты от Родителей',
      sublabel: '(Ранг игрока)',
      value: `Ранг ${gameState.prestige}`,
      color: 'var(--wt-red-warning)',
      bgColor: 'var(--wt-red-warning)'
    }
  ];

  const achievements = gameHook.achievements.filter((achievement: any) => 
    gameState.unlockedAchievements.includes(achievement.id)
  );

  const getPlayerRank = () => {
    if (gameState.prestige >= 20) return "Маршал Банкротства";
    if (gameState.prestige >= 15) return "Генерал Разорения";
    if (gameState.prestige >= 10) return "Полковник Доната";
    if (gameState.prestige >= 5) return "Майор Микротранзакций";
    if (gameState.prestige >= 1) return "Капитан Покупок";
    return "Рядовой Нищеброд";
  };

  return (
    <div className="space-y-4">
      {/* Player Profile Card */}
      <div className="wt-panel p-4">
        <div className="wt-panel-header text-center">
          👤 ПРОФИЛЬ ОБНИЩАВШЕГО ИГРОКА
        </div>
        
        <div className="mt-4 text-center">
          <div className="text-4xl mb-2">💸</div>
          <div className="text-xl font-bold mb-2 wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
            {getPlayerRank()}
          </div>
          <div className="wt-rank-badge mb-4">
            Battle Rating: {Math.floor(gameState.totalClicks / 1000 + 1)}.0
          </div>
          <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
            ⏰ В бою: {formatTime(gameState.playTime)}
          </div>
        </div>
      </div>

      {/* War Thunder Style Currency Display */}
      <div className="wt-panel p-4">
        <div className="wt-panel-header text-center">
          💰 ВАЛЮТНАЯ СТАТИСТИКА РАЗОРЕНИЯ
        </div>
        
        <div className="mt-4 space-y-3">
          {stats.map((stat, index) => (
            <div key={index} className="wt-vehicle-card p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <div className="font-bold" style={{ color: stat.color }}>
                      {stat.label}
                    </div>
                    <div className="text-xs wt-text-muted">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Progress Panel */}
      <div className="wt-panel p-4">
        <div className="wt-panel-header text-center">
          🔬 ПРОГРЕСС ИССЛЕДОВАНИЯ БАНКРОТСТВА
        </div>
        
        {/* Experience Progress */}
        <div className="mt-4 mb-4">
          <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--wt-text-secondary)' }}>
            <span>🎖️ Боевой опыт банкротства</span>
            <span>{formatNumber(gameState.experience)} / {formatNumber(gameState.level * 1000)}</span>
          </div>
          <div className="wt-progress-bar h-4">
            <div 
              className="wt-progress-fill"
              style={{ 
                width: `${Math.min(100, (gameState.experience / (gameState.level * 1000)) * 100)}%` 
              }}
            />
          </div>
        </div>
        
        {/* Prestige Progress */}
        <div>
          <div className="flex justify-between text-sm mb-2" style={{ color: 'var(--wt-text-secondary)' }}>
            <span>⚡ До повышения в звании</span>
            <span>{formatNumber(Math.max(0, 1000000 - gameState.rubles))} львов</span>
          </div>
          <div className="wt-progress-bar h-4">
            <div 
              className="h-full transition-all duration-300"
              style={{ 
                width: `${Math.min(100, (gameState.rubles / 1000000) * 100)}%`,
                background: 'linear-gradient(90deg, var(--wt-red-warning) 0%, var(--wt-gold) 100%)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Achievements Panel */}
      <div className="wt-panel p-4">
        <div className="wt-panel-header text-center">
          🏅 МЕДАЛИ ФИНАНСОВОГО КРАХА
        </div>
        
        {achievements.length === 0 ? (
          <div className="mt-4 text-center p-4" style={{ color: 'var(--wt-text-muted)' }}>
            <div className="text-4xl mb-2">🏅</div>
            <div>Пока нет наград...</div>
            <div className="text-sm">Начинайте тратить деньги!</div>
          </div>
        ) : (
          <div className="mt-4 space-y-2 max-h-48 overflow-y-auto wt-scrollbar">
            {achievements.slice(-5).reverse().map((achievement: any) => (
              <div key={achievement.id} className="wt-vehicle-card p-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🏅</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm" style={{ color: 'var(--wt-gold)' }}>
                      {achievement.name}
                    </div>
                    <div className="text-xs wt-text-muted">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Battle Statistics */}
      <div className="wt-panel p-4">
        <div className="wt-panel-header text-center">
          📊 СТАТИСТИКА БОЕВЫХ ДЕЙСТВИЙ
        </div>
        
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between p-2" style={{ 
            background: 'var(--wt-panel-bg)',
            border: '1px solid var(--wt-border)',
            borderRadius: '4px'
          }}>
            <span style={{ color: 'var(--wt-text-secondary)' }}>Всего потрачено львов:</span>
            <span className="font-bold" style={{ color: 'var(--wt-military-green)' }}>
              {formatNumber(gameState.totalRublesEarned)}
            </span>
          </div>
          <div className="flex justify-between p-2" style={{ 
            background: 'var(--wt-panel-bg)',
            border: '1px solid var(--wt-border)',
            borderRadius: '4px'
          }}>
            <span style={{ color: 'var(--wt-text-secondary)' }}>Всего потрачено орлов:</span>
            <span className="font-bold" style={{ color: 'var(--wt-gold)' }}>
              {formatNumber(gameState.totalGoldenEaglesEarned)}
            </span>
          </div>
          <div className="flex justify-between p-2" style={{ 
            background: 'var(--wt-panel-bg)',
            border: '1px solid var(--wt-border)',
            borderRadius: '4px'
          }}>
            <span style={{ color: 'var(--wt-text-secondary)' }}>Наград получено:</span>
            <span className="font-bold wt-text-premium">
              {achievements.length} / {gameHook.achievements.length}
            </span>
          </div>
          <div className="flex justify-between p-2" style={{ 
            background: 'var(--wt-panel-bg)',
            border: '1px solid var(--wt-border)',
            borderRadius: '4px'
          }}>
            <span style={{ color: 'var(--wt-text-secondary)' }}>Средняя трата за клик:</span>
            <span className="font-bold" style={{ color: 'var(--wt-blue-info)' }}>
              {gameState.totalClicks > 0 
                ? formatNumber(Math.floor(gameState.totalRublesEarned / gameState.totalClicks))
                : '0'} львов
            </span>
          </div>
        </div>
      </div>

      {/* War Thunder Meme Quote */}
      <div className="wt-notification p-3">
        <div className="text-center">
          <div className="text-sm wt-text-premium font-bold">
            "Suffering builds character"
          </div>
          <div className="text-xs mt-1" style={{ color: 'var(--wt-text-muted)' }}>
            - Каждый игрок War Thunder
          </div>
        </div>
      </div>
    </div>
  );
};
