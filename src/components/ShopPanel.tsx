import { useState } from 'react';
import { upgrades, calculateUpgradeCost, getAvailableUpgrades } from '../data/upgrades';

interface ShopPanelProps {
  gameHook: any;
}

export const ShopPanel: React.FC<ShopPanelProps> = ({ gameHook }) => {
  const { gameState, purchaseUpgrade, formatNumber } = gameHook;
  const [filter, setFilter] = useState<'all' | 'tanks' | 'planes' | 'ships' | 'premium' | 'boosters'>('all');

  const availableUpgrades = getAvailableUpgrades(gameState);

  const getUpgradeIcon = (upgradeId: string): string => {
    if (upgradeId.includes('tank')) return '🚗';
    if (upgradeId.includes('plane')) return '✈️';
    if (upgradeId.includes('ship')) return '🚢';
    if (upgradeId.includes('auto') || upgradeId.includes('ai')) return '🤖';
    if (upgradeId.includes('multiplier') || upgradeId.includes('blessing')) return '⚡';
    if (upgradeId.includes('mouse')) return '🎯';
    if (upgradeId.includes('drink')) return '⛽';
    if (upgradeId.includes('premium')) return '👑';
    if (upgradeId.includes('card')) return '💳';
    if (upgradeId.includes('lucky')) return '🍀';
    if (upgradeId.includes('quantum')) return '⚛️';
    if (upgradeId.includes('virus')) return '🦠';
    if (upgradeId.includes('stocks')) return '📈';
    if (upgradeId.includes('reality')) return '🌌';
    if (upgradeId.includes('universe')) return '🌍';
    return '🔧';
  };

  const getUpgradeCategory = (upgradeId: string): string => {
    if (upgradeId.includes('tank')) return 'tanks';
    if (upgradeId.includes('plane')) return 'planes';
    if (upgradeId.includes('ship')) return 'ships';
    if (upgradeId.includes('premium')) return 'premium';
    if (upgradeId.includes('auto') || upgradeId.includes('ai') || upgradeId.includes('quantum')) return 'boosters';
    if (upgradeId.includes('multiplier') || upgradeId.includes('blessing') || upgradeId.includes('lucky') || upgradeId.includes('virus')) return 'boosters';
    return 'all';
  };

  const filteredUpgrades = availableUpgrades.filter(upgrade => {
    if (filter === 'all') return true;
    return getUpgradeCategory(upgrade.id) === filter;
  });

  const canAfford = (upgrade: any): boolean => {
    const currentLevel = gameState.upgrades[upgrade.id] || 0;
    const cost = calculateUpgradeCost(upgrade, currentLevel);
    
    const hasRubles = !cost.rubles || gameState.rubles >= cost.rubles;
    const hasGoldenEagles = !cost.goldenEagles || gameState.goldenEagles >= cost.goldenEagles;
    
    return hasRubles && hasGoldenEagles && currentLevel < upgrade.maxLevel;
  };

  const handlePurchase = (upgradeId: string) => {
    const success = purchaseUpgrade(upgradeId);
    if (!success) {
      // Could add error feedback here
    }
  };

  const getVehicleBR = (upgradeId: string): string => {
    if (upgradeId.includes('bt5')) return '1.0';
    if (upgradeId.includes('t34')) return '3.3';
    if (upgradeId.includes('kv1')) return '4.0';
    if (upgradeId.includes('is3')) return '7.0';
    if (upgradeId.includes('t54')) return '7.7';
    if (upgradeId.includes('t80u')) return '11.0';
    if (upgradeId.includes('premium')) return '8.0★';
    return '1.0';
  };

  const getRealWorldPrice = (upgradeId: string): string => {
    if (upgradeId.includes('premium_kv220')) return '(~2500₽ в реальной жизни)';
    if (upgradeId.includes('premium_is6')) return '(~3500₽ в реальной жизни)';
    if (upgradeId.includes('premium_t114')) return '(~4500₽ в реальной жизни)';
    if (upgradeId.includes('t80u')) return '(6 месяцев фарма или 5000₽)';
    if (upgradeId.includes('quantum')) return '(Стоимость подержанной машины)';
    return '';
  };

  const filterButtons = [
    { id: 'all', label: '🏪 Все Наборы', desc: 'Полный каталог разорения' },
    { id: 'tanks', label: '🚗 Наземная Техника', desc: 'Танки за цену автомобиля' },
    { id: 'planes', label: '✈️ Авиация', desc: 'Самолеты дороже билета в отпуск' },
    { id: 'ships', label: '🚢 Флот', desc: 'Корабли за стоимость квартиры' },
    { id: 'premium', label: '👑 Премиум Наборы', desc: 'Для особо богатых мазохистов' },
    { id: 'boosters', label: '⚡ Бустеры Доната', desc: 'Ускорители банкротства' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* War Thunder Research Tree Header */}
      <div className="wt-panel p-6 mb-6">
        <div className="wt-panel-header text-center">
          💰 GAIJIN ENTERTAINMENT MARKETPLACE™
        </div>
        
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold mb-2 wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
            ДЕРЕВО ИССЛЕДОВАНИЙ БАНКРОТСТВА
          </h2>
          <p className="wt-text-premium mb-4">
            🎯 "Исторически точные" цены на виртуальные танки 🎯
          </p>
          <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
            "Мы делаем игру бесплатной, но счета за ремонт - реальными" - Gaijin©
          </div>
        </div>
      </div>

      {/* War Thunder Style Currency Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="wt-currency" style={{ background: 'var(--wt-military-green)', borderColor: 'var(--wt-border)' }}>
          <span className="text-2xl">🦁</span>
          <div>
            <div className="font-bold" style={{ color: 'var(--wt-text-primary)' }}>
              {formatNumber(gameState.rubles)}
            </div>
            <div className="text-xs" style={{ color: 'var(--wt-text-muted)' }}>
              Серебряные Львы
            </div>
          </div>
        </div>
        
        <div className="wt-currency" style={{ background: 'var(--wt-gold)', borderColor: 'var(--wt-bronze)' }}>
          <span className="text-2xl">🦅</span>
          <div>
            <div className="font-bold text-black">
              {formatNumber(gameState.goldenEagles)}
            </div>
            <div className="text-xs text-black/70">
              Золотые Орлы
            </div>
          </div>
        </div>

        <div className="wt-currency" style={{ background: 'var(--wt-red-warning)', borderColor: 'var(--wt-border)' }}>
          <span className="text-2xl">💳</span>
          <div>
            <div className="font-bold text-white">
              БЕСКОНЕЧНОСТЬ
            </div>
            <div className="text-xs text-white/70">
              Реальные Деньги
            </div>
          </div>
        </div>
      </div>

      {/* Research Tree Navigation */}
      <div className="wt-panel p-4 mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {filterButtons.map(button => (
            <button
              key={button.id}
              onClick={() => setFilter(button.id as any)}
              className={`wt-nav-tab px-4 py-2 transition-all duration-200 ${
                filter === button.id ? 'active' : ''
              }`}
              title={button.desc}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* War Thunder Style Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredUpgrades.map(upgrade => {
          const currentLevel = gameState.upgrades[upgrade.id] || 0;
          const cost = calculateUpgradeCost(upgrade, currentLevel);
          const affordable = canAfford(upgrade);
          const maxLevel = currentLevel >= upgrade.maxLevel;
          const isPremium = upgrade.id.includes('premium');

          return (
            <div
              key={upgrade.id}
              className={`wt-vehicle-card p-4 transition-all duration-200 ${
                isPremium ? 'border-2' : ''
              } ${maxLevel ? 'opacity-75' : ''}`}
              style={{
                borderColor: isPremium ? 'var(--wt-gold)' : 'var(--wt-border)',
                background: isPremium ? 'linear-gradient(145deg, var(--wt-panel-bg), #3d2914)' : 'var(--wt-panel-bg)'
              }}
            >
              {/* Vehicle Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getUpgradeIcon(upgrade.id)}</span>
                  {isPremium && <span className="text-xl" style={{ color: 'var(--wt-gold)' }}>👑</span>}
                </div>
                <div className="wt-rank-badge">
                  BR {getVehicleBR(upgrade.id)}
                </div>
              </div>

              {/* Vehicle Name */}
              <h3 className="font-bold text-lg mb-2" style={{ 
                color: isPremium ? 'var(--wt-gold)' : 'var(--wt-text-primary)' 
              }}>
                {upgrade.name}
              </h3>

              {/* Level Progress */}
              <div className="text-sm mb-3" style={{ color: 'var(--wt-text-secondary)' }}>
                Модификации: {currentLevel} / {upgrade.maxLevel}
                {currentLevel > 0 && (
                  <div className="wt-progress-bar h-2 mt-1">
                    <div 
                      className="wt-progress-fill"
                      style={{ width: `${(currentLevel / upgrade.maxLevel) * 100}%` }}
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm mb-4" style={{ 
                color: 'var(--wt-text-secondary)',
                minHeight: '60px'
              }}>
                {upgrade.description}
              </p>

              {/* Real World Price Warning */}
              {getRealWorldPrice(upgrade.id) && (
                <div className="wt-notification p-2 mb-3 text-xs">
                  <span className="wt-text-premium">💸 {getRealWorldPrice(upgrade.id)}</span>
                </div>
              )}

              {/* Vehicle Stats */}
              <div className="space-y-1 mb-4 text-sm">
                {upgrade.effect.clickPower && (
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--wt-text-secondary)' }}>Урон:</span>
                    <span style={{ color: 'var(--wt-blue-info)' }}>+{upgrade.effect.clickPower}</span>
                  </div>
                )}
                {upgrade.effect.autoClickPower && (
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--wt-text-secondary)' }}>Авто-доход:</span>
                    <span style={{ color: 'var(--wt-military-green)' }}>+{upgrade.effect.autoClickPower}/сек</span>
                  </div>
                )}
                {upgrade.effect.multiplier && (
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--wt-text-secondary)' }}>Множитель:</span>
                    <span className="wt-text-premium">x{upgrade.effect.multiplier}</span>
                  </div>
                )}
              </div>

              {/* Purchase Section */}
              {!maxLevel ? (
                <div className="space-y-2">
                  {/* Cost Display */}
                  <div className="text-center text-sm">
                    {cost.rubles && (
                      <div className="flex justify-between items-center p-2" style={{ 
                        background: gameState.rubles >= cost.rubles ? 'var(--wt-military-green)' : 'var(--wt-red-warning)',
                        borderRadius: '4px',
                        marginBottom: '4px'
                      }}>
                        <span className="flex items-center space-x-1">
                          <span>🦁</span>
                          <span className="text-white font-bold">{formatNumber(cost.rubles)}</span>
                        </span>
                        <span className="text-xs text-white/80">
                          {gameState.rubles >= cost.rubles ? 'Доступно' : 'Недостаточно'}
                        </span>
                      </div>
                    )}
                    {cost.goldenEagles && (
                      <div className="flex justify-between items-center p-2" style={{ 
                        background: gameState.goldenEagles >= cost.goldenEagles ? 'var(--wt-gold)' : 'var(--wt-red-warning)',
                        borderRadius: '4px'
                      }}>
                        <span className="flex items-center space-x-1">
                          <span>🦅</span>
                          <span className="text-black font-bold">{formatNumber(cost.goldenEagles)}</span>
                        </span>
                        <span className="text-xs text-black/70">
                          {gameState.goldenEagles >= cost.goldenEagles ? 'Доступно' : 'Купите орлов'}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Purchase Button */}
                  <button
                    onClick={() => handlePurchase(upgrade.id)}
                    disabled={!affordable}
                    className={`w-full py-2 px-4 font-bold text-sm transition-all duration-200 ${
                      affordable
                        ? isPremium 
                          ? 'wt-premium-button text-white hover:scale-105'
                          : 'wt-button hover:scale-105'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed border border-gray-500'
                    }`}
                    style={{ borderRadius: '4px' }}
                  >
                    {affordable 
                      ? isPremium 
                        ? '💰 КУПИТЬ ПРЕМИУМ 💰' 
                        : '🔓 ИССЛЕДОВАТЬ'
                      : '🔒 НЕДОСТУПНО'
                    }
                  </button>
                </div>
              ) : (
                <div className="text-center py-3" style={{ 
                  background: 'var(--wt-military-green)',
                  borderRadius: '4px'
                }}>
                  <span className="text-white font-bold">✅ ИЗУЧЕНО ПОЛНОСТЬЮ</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* No Vehicles Message */}
      {filteredUpgrades.length === 0 && (
        <div className="wt-panel p-8 text-center">
          <div className="text-6xl mb-4">🔒</div>
          <div className="text-xl font-bold mb-2" style={{ color: 'var(--wt-text-primary)' }}>
            Техника недоступна
          </div>
          <div style={{ color: 'var(--wt-text-secondary)' }}>
            Продолжайте тратить деньги, чтобы разблокировать новые способы разорения!
          </div>
        </div>
      )}

      {/* Gaijin Style Warning */}
      <div className="wt-notification p-4 mt-6">
        <div className="text-center">
          <div className="text-lg font-bold wt-text-premium mb-2">
            ⚠️ ВНИМАНИЕ ОТ GAIJIN ENTERTAINMENT ⚠️
          </div>
          <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
            Цены на технику могут изменяться в зависимости от "исторической точности" и необходимости покупки новой яхты руководством.
            <br />
            Стоимость ремонта не включена и может превышать ваш годовой доход.
            <br />
            <span className="wt-text-premium">
              "Suffering builds character" - Философия War Thunder©
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
