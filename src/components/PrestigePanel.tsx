interface PrestigePanelProps {
  gameHook: any;
}

export const PrestigePanel: React.FC<PrestigePanelProps> = ({ gameHook }) => {
  const { gameState, performPrestige, formatNumber } = gameHook;

  const canPrestige = gameState.rubles >= 1000000;
  const prestigeBonus = Math.floor(gameState.rubles / 1000000) * 10;
  const nextPrestigeRequirement = 1000000;

  const getPlayerRank = (): { name: string; icon: string; color: string } => {
    if (gameState.prestige >= 50) return { name: "Маршал Советского Союза", icon: "🌟", color: "var(--wt-gold)" };
    if (gameState.prestige >= 40) return { name: "Генерал Армии", icon: "⭐", color: "var(--wt-red-warning)" };
    if (gameState.prestige >= 30) return { name: "Генерал-полковник", icon: "🎖️", color: "var(--wt-red-warning)" };
    if (gameState.prestige >= 20) return { name: "Генерал-лейтенант", icon: "🎖️", color: "var(--wt-red-warning)" };
    if (gameState.prestige >= 15) return { name: "Генерал-майор", icon: "🎖️", color: "var(--wt-red-warning)" };
    if (gameState.prestige >= 10) return { name: "Полковник", icon: "🔸", color: "var(--wt-blue-info)" };
    if (gameState.prestige >= 8) return { name: "Подполковник", icon: "🔹", color: "var(--wt-blue-info)" };
    if (gameState.prestige >= 6) return { name: "Майор", icon: "🔹", color: "var(--wt-blue-info)" };
    if (gameState.prestige >= 4) return { name: "Капитан", icon: "🔸", color: "var(--wt-military-green)" };
    if (gameState.prestige >= 2) return { name: "Старший лейтенант", icon: "🔹", color: "var(--wt-military-green)" };
    if (gameState.prestige >= 1) return { name: "Лейтенант", icon: "🔹", color: "var(--wt-military-green)" };
    return { name: "Рядовой Нищеброд", icon: "▫️", color: "var(--wt-text-muted)" };
  };

  const researchBenefits = [
    {
      icon: '💳',
      title: 'Увеличение скорости банкротства',
      description: `+${gameState.prestige + 1} к базовой силе трат навсегда`
    },
    {
      icon: '🦅',
      title: 'Бонус орлов за разорение',
      description: `x${(1.1 ** (gameState.prestige + 1)).toFixed(2)} ко всем доходам Gaijin`
    },
    {
      icon: '🎖️',
      title: 'Золотые орлы от престижа',
      description: `Получите ${prestigeBonus} орлов за этот ранг`
    },
    {
      icon: '🚗',
      title: 'Разблокировка премиум техники',
      description: 'Доступ к еще более дорогим способам разорения'
    }
  ];

  const researchTree = [
    { rank: 0, requirement: '0', bonus: 'Начало пути к банкротству', nation: 'СССР' },
    { rank: 1, requirement: '1М', bonus: 'Разблокировка БТ-5 за ₽500', nation: 'СССР' },
    { rank: 2, requirement: '2М', bonus: 'Т-34 и первые ремонты за ₽2000', nation: 'СССР' },
    { rank: 3, requirement: '5М', bonus: 'КВ-1 и понимание, что танки дорогие', nation: 'СССР' },
    { rank: 4, requirement: '10М', bonus: 'ИС-3 и осознание ошибки', nation: 'СССР' },
    { rank: 5, requirement: '20М', bonus: 'Т-54 и кредит в банке', nation: 'СССР' },
    { rank: 6, requirement: '50М', bonus: 'Современные МБТ и ипотека', nation: 'СССР' }
  ];

  const handlePrestige = () => {
    if (canPrestige) {
      const rank = getPlayerRank();
      const confirmed = window.confirm(
        `🎖️ ПОДТВЕРЖДЕНИЕ ПОВЫШЕНИЯ В ЗВАНИИ 🎖️\n\n` +
        `Текущее звание: ${rank.name}\n` +
        `Следующее звание: Повышение на +1 ранг\n\n` +
        `📋 ЧТО ВЫ ПОТЕРЯЕТЕ:\n` +
        `• Все серебряные львы (${formatNumber(gameState.rubles)})\n` +
        `• Всю исследованную технику\n` +
        `• Весь боевой опыт\n\n` +
        `🎁 ЧТО ВЫ ПОЛУЧИТЕ:\n` +
        `• ${prestigeBonus} золотых орлов\n` +
        `• Постоянный бонус к эффективности трат\n` +
        `• Множитель банкротства x${(1.1 ** (gameState.prestige + 1)).toFixed(2)}\n` +
        `• Доступ к более дорогой технике\n\n` +
        `⚠️ Это действие необратимо!\n` +
        `Продолжить повышение в звании?`
      );
      
      if (confirmed) {
        performPrestige();
      }
    }
  };

  const currentRank = getPlayerRank();

  return (
    <div className="max-w-7xl mx-auto">
      {/* War Thunder Research Tree Header */}
      <div className="wt-panel p-6 mb-6">
        <div className="wt-panel-header text-center">
          🔬 ДЕРЕВО ИССЛЕДОВАНИЙ РАЗОРЕНИЯ
        </div>
        
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold mb-2 wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
            СССР - ПУТЬ К ФИНАНСОВОМУ КРАХУ
          </h2>
          <p className="wt-text-premium mb-4">
            🎖️ Исследуйте новые способы потратить деньги 🎖️
          </p>
          <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
            "Suffering builds character, банкротство строит характер" - War Thunder Wisdom©
          </div>
        </div>
      </div>

      {/* Player Profile and Current Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Current Rank */}
        <div className="wt-panel p-6">
          <div className="wt-panel-header text-center">
            🎖️ ТЕКУЩЕЕ ЗВАНИЕ
          </div>
          <div className="mt-4 text-center">
            <div className="text-6xl mb-3" style={{ color: currentRank.color }}>
              {currentRank.icon}
            </div>
            <div className="text-2xl font-bold mb-2 wt-text-glow" style={{ color: currentRank.color }}>
              {currentRank.name}
            </div>
            <div className="wt-rank-badge mb-4">
              Ранг {gameState.prestige}
            </div>
            <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
              Множитель банкротства: 
              <span className="font-bold wt-text-premium"> x{(1.1 ** gameState.prestige).toFixed(2)}</span>
            </div>
            <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
              Бонус к тратам: 
              <span className="font-bold" style={{ color: 'var(--wt-military-green)' }}> +{gameState.prestige}</span>
            </div>
          </div>
        </div>

        {/* Research Progress */}
        <div className="wt-panel p-6">
          <div className="wt-panel-header text-center">
            🔬 ПРОГРЕСС ИССЛЕДОВАНИЯ
          </div>
          <div className="mt-4 text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--wt-gold)' }}>
              {formatNumber(nextPrestigeRequirement)}
            </div>
            <div className="text-sm mb-3" style={{ color: 'var(--wt-text-secondary)' }}>
              Серебряных львов для повышения
            </div>
            <div className="text-sm mb-3">
              У вас: 
              <span className={`font-bold ml-1 ${
                canPrestige ? 'wt-text-premium' : ''
              }`} style={{ 
                color: canPrestige ? 'var(--wt-military-green)' : 'var(--wt-red-warning)' 
              }}>
                {formatNumber(gameState.rubles)}
              </span>
            </div>
            
            {/* Research Progress Bar */}
            <div className="wt-progress-bar h-4 mb-3">
              <div 
                className="h-full transition-all duration-300"
                style={{ 
                  width: `${Math.min(100, (gameState.rubles / nextPrestigeRequirement) * 100)}%`,
                  background: canPrestige 
                    ? 'linear-gradient(90deg, var(--wt-military-green), var(--wt-gold))'
                    : 'linear-gradient(90deg, var(--wt-red-warning), var(--wt-bronze))'
                }}
              />
            </div>
            
            <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
              Прогресс: {Math.min(100, Math.round((gameState.rubles / nextPrestigeRequirement) * 100))}%
            </div>
          </div>
        </div>

        {/* Nation Flag */}
        <div className="wt-panel p-6">
          <div className="wt-panel-header text-center">
            🚩 НАЦИЯ
          </div>
          <div className="mt-4 text-center">
            <div className="text-6xl mb-3">🇷🇺</div>
            <div className="text-xl font-bold mb-2" style={{ color: 'var(--wt-red-warning)' }}>
              СССР
            </div>
            <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
              Советский Союз
            </div>
            <div className="text-sm mt-2" style={{ color: 'var(--wt-text-muted)' }}>
              \"Родина техники,<br/>которая разорит вас\"
            </div>
          </div>
        </div>
      </div>

      {/* Research Benefits */}
      <div className="wt-panel p-6 mb-6">
        <div className="wt-panel-header text-center">
          🎁 ПРЕИМУЩЕСТВА ИССЛЕДОВАНИЯ
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchBenefits.map((benefit, index) => (
            <div key={index} className="wt-vehicle-card p-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: 'var(--wt-text-primary)' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Completion Button */}
      <div className="text-center mb-8">
        <button
          onClick={handlePrestige}
          disabled={!canPrestige}
          className={`px-8 py-4 font-bold text-xl transition-all duration-200 ${
            canPrestige
              ? 'wt-premium-button hover:scale-105'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed border border-gray-500'
          }`}
          style={{ borderRadius: '8px' }}
        >
          {canPrestige 
            ? `🎖️ ПОВЫСИТЬ В ЗВАНИИ (+${prestigeBonus} орлов) 🎖️`
            : `🔒 НУЖНО ЕЩЕ ${formatNumber(nextPrestigeRequirement - gameState.rubles)} ЛЬВОВ`
          }
        </button>
        
        {canPrestige && (
          <div className="wt-notification p-3 mt-4 max-w-md mx-auto">
            <p className="text-sm">
              <span className="wt-text-premium">⚠️ ВНИМАНИЕ:</span> 
              <span style={{ color: 'var(--wt-text-primary)' }}>
                Вы потеряете всю технику и серебряных львов, но получите постоянные бонусы!
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Research Tree Progression */}
      <div className="wt-panel p-6 mb-6">
        <div className="wt-panel-header text-center">
          🏆 ДЕРЕВО РАНГОВ И РАЗОРЕНИЯ
        </div>
        
        <div className="mt-4 space-y-3">
          {researchTree.map((milestone, index) => {
            const isResearched = gameState.prestige >= milestone.rank;
            const isCurrent = gameState.prestige === milestone.rank;
            const isNext = gameState.prestige === milestone.rank - 1;
            
            return (
              <div 
                key={index}
                className={`wt-vehicle-card p-4 transition-all duration-200 ${
                  isResearched ? 'border-2' : ''
                }`}
                style={{
                  borderColor: isResearched ? 'var(--wt-military-green)' : 'var(--wt-border)',
                  background: isResearched 
                    ? 'linear-gradient(145deg, var(--wt-panel-bg), #1a3d1a)' 
                    : isNext
                    ? 'linear-gradient(145deg, var(--wt-panel-bg), #3d2a14)'
                    : 'var(--wt-panel-bg)',
                  opacity: isResearched || isNext ? 1 : 0.6
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">
                      {isResearched ? '✅' : 
                       isNext ? '🎯' : 
                       isCurrent ? '⚡' : '🔒'}
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🇷🇺</span>
                      <div>
                        <div className={`font-bold text-lg ${
                          isResearched ? 'wt-text-premium' : 
                          isNext ? '' : ''
                        }`} style={{ 
                          color: isResearched ? 'var(--wt-military-green)' : 
                                 isNext ? 'var(--wt-gold)' : 
                                 'var(--wt-text-primary)'
                        }}>
                          Ранг {milestone.rank} - {milestone.nation}
                        </div>
                        <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
                          Требование: {milestone.requirement} серебряных львов
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="wt-rank-badge">
                      BR {milestone.rank}.0
                    </div>
                    <div className="text-sm mt-1" style={{ 
                      color: isResearched ? 'var(--wt-military-green)' : 'var(--wt-text-secondary)',
                      maxWidth: '200px'
                    }}>
                      {milestone.bonus}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gaijin Warning Panel */}
      <div className="wt-notification p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold wt-text-premium mb-4">
            ⚠️ ПРЕДУПРЕЖДЕНИЕ ОТ GAIJIN ENTERTAINMENT ⚠️
          </h3>
          <div className="text-sm space-y-2" style={{ color: 'var(--wt-text-secondary)' }}>
            <p>• <span className="wt-text-premium">ВНИМАНИЕ:</span> Повышение в звании сбросит ВСЕ серебряные львы, исследованную технику и боевой опыт</p>
            <p>• <span style={{ color: 'var(--wt-military-green)' }}>СОХРАНЯЕТСЯ:</span> Золотые орлы, достижения, статистика и постоянные бонусы</p>
            <p>• <span style={{ color: 'var(--wt-gold)' }}>БОНУСЫ:</span> Повышение даёт постоянные множители и доступ к более дорогой технике</p>
            <p>• <span style={{ color: 'var(--wt-blue-info)' }}>РАЗБЛОКИРОВКИ:</span> Некоторые премиум улучшения доступны только после повышения</p>
            <p>• <span className="wt-text-premium">ВАЖНО:</span> Это необратимое действие - \"Suffering builds character\"!</p>
          </div>
          <div className="mt-4 text-xs" style={{ color: 'var(--wt-text-muted)' }}>
            \"Мы делаем игру бесплатной, но путь к топу - платным\" - Gaijin Entertainment©
          </div>
        </div>
      </div>
    </div>
  );
};
