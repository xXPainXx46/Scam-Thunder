import { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import { ClickButton } from './components/ClickButton';
import { StatsPanel } from './components/StatsPanel';
import { ShopPanel } from './components/ShopPanel';
import { AchievementsPanel } from './components/AchievementsPanel';
import { PrestigePanel } from './components/PrestigePanel';
import { NotificationSystem } from './components/NotificationSystem';
import { LoginScreen } from './components/LoginScreen';
import { LeaderboardPanel } from './components/LeaderboardPanel';
import './App.css';

type TabType = 'hangar' | 'research' | 'shop' | 'achievements' | 'profile' | 'leaderboard';

function App() {
  const gameHook = useGameState();
  const [activeTab, setActiveTab] = useState<TabType>('hangar');

  if (!gameHook.isLoaded) {
    return (
      <div className="min-h-screen" style={{ background: 'var(--wt-dark-bg)' }}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="wt-panel p-8 text-center">
            <div className="text-2xl font-bold mb-4" style={{ color: 'var(--wt-text-primary)' }}>
              🦅 WAR THUNDER 🦅
            </div>
            <div className="text-lg mb-4" style={{ color: 'var(--wt-gold)' }}>
              PREMIUM BANKRUPTCY SIMULATOR
            </div>
            <div className="wt-loading w-8 h-8 mx-auto mb-4 border-2 border-t-transparent rounded-full" 
                 style={{ borderColor: 'var(--wt-gold) transparent var(--wt-gold) var(--wt-gold)' }}></div>
            <div style={{ color: 'var(--wt-text-secondary)' }}>
              Загрузка симулятора банкротства...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show login screen if player is not registered
  if (!gameHook.gameState.playerNickname) {
    return <LoginScreen onLogin={gameHook.setPlayerNickname} />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--wt-dark-bg)' }}>
      {/* War Thunder Header */}
      <header className="wt-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
        {/* Top Bar with Currency */}
        <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: 'var(--wt-border)' }}>
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold" style={{ color: 'var(--wt-gold)' }}>
              🦅 WAR THUNDER
            </div>
            <div className="text-sm wt-text-premium">
              PREMIUM BANKRUPTCY SIMULATOR
            </div>
          </div>
          
          {/* Player Info and Currency Display */}
          <div className="flex items-center space-x-4">
            {/* Player Nickname */}
            <div className="wt-currency" style={{ background: 'linear-gradient(135deg, var(--wt-gold), #cc9900)' }}>
              <span className="text-xl">🎯</span>
              <span style={{ color: 'black', fontWeight: 'bold' }}>{gameHook.gameState.playerNickname}</span>
              <span className="text-xs" style={{ color: 'rgba(0,0,0,0.7)' }}>(Позывной)</span>
            </div>
            
            <div className="wt-currency">
              <span className="text-xl">🦅</span>
              <span>{gameHook.formatNumber(gameHook.gameState.goldenEagles)}</span>
              <span className="text-xs wt-text-muted">(Украденные из кошелька)</span>
            </div>
            <div className="wt-currency">
              <span className="text-xl">🦁</span>
              <span>{gameHook.formatNumber(gameHook.gameState.rubles)}</span>
              <span className="text-xs wt-text-muted">(Обесцененные Gaijin)</span>
            </div>
            <div className="wt-currency">
              <span className="text-xl">😭</span>
              <span>{gameHook.formatNumber(gameHook.gameState.totalClicks)}</span>
              <span className="text-xs wt-text-muted">(Слёзы разорения)</span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center py-6" style={{ background: 'linear-gradient(90deg, var(--wt-military-green), var(--wt-panel-bg), var(--wt-military-green))' }}>
          <h1 className="text-4xl font-bold mb-2 wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
            WAR THUNDER: PREMIUM BANKRUPTCY SIMULATOR
          </h1>
          <p className="text-lg wt-text-premium">
            🎯 Где твой кошелёк умирает за 'Реализм' 🎯
          </p>
          <div className="text-sm mt-2" style={{ color: 'var(--wt-text-secondary)' }}>
            "Исторически точные цены на виртуальные танки" - Gaijin Entertainment©
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex justify-center bg-black/20 flex-wrap">
          {[
            { id: 'hangar', label: '🏠 Ангар Банкротства', desc: 'Пустой как твой кошелек' },
            { id: 'research', label: '🔬 Дерево Разорения', desc: 'Исследования за реальные деньги' },
            { id: 'shop', label: '💰 Магазин Безумных Цен', desc: 'Gaijin Marketplace™' },
            { id: 'achievements', label: '🏅 Медали Финансового Краха', desc: 'Достижения банкрота' },
            { id: 'leaderboard', label: '🏆 Таблица Лидеров', desc: 'Рейтинг самых разорившихся' },
            { id: 'profile', label: '👤 Профиль Обнищавшего', desc: 'Ваша статистика нищеты' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`wt-nav-tab px-6 py-3 relative group ${activeTab === tab.id ? 'active' : ''}`}
              title={tab.desc}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1" 
                     style={{ background: 'var(--wt-gold)' }}></div>
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto p-4">
        {activeTab === 'hangar' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Vehicle Display Area */}
            <div className="lg:col-span-3">
              <ClickButton gameHook={gameHook} />
            </div>
            
            {/* Stats Panel */}
            <div className="lg:col-span-1">
              <StatsPanel gameHook={gameHook} />
            </div>
          </div>
        )}
        
        {activeTab === 'research' && <PrestigePanel gameHook={gameHook} />}
        {activeTab === 'shop' && <ShopPanel gameHook={gameHook} />}
        {activeTab === 'achievements' && <AchievementsPanel gameHook={gameHook} />}
        {activeTab === 'leaderboard' && <LeaderboardPanel gameHook={gameHook} />}
        {activeTab === 'profile' && <StatsPanel gameHook={gameHook} />}
      </main>

      {/* War Thunder Style Notification */}
      <NotificationSystem 
        message={gameHook.showNotification}
        onClose={() => {/* handled in hook */}}
      />

      {/* Bottom Bar with Gaijin Parody */}
      <footer className="wt-panel mt-8" style={{ borderRadius: 0, borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }}>
        <div className="p-4 text-center border-t" style={{ borderColor: 'var(--wt-border)' }}>
          <div className="flex justify-center items-center space-x-8 mb-4">
            <div className="text-xs" style={{ color: 'var(--wt-text-muted)' }}>
              © 2024 Gaijin Entertainment (ПАРОДИЯ)
            </div>
            <div className="wt-text-premium text-sm">
              💰 Поддержите создателя пародии! 💰
            </div>
            <div className="text-xs" style={{ color: 'var(--wt-text-muted)' }}>
              YooMoney: 410011923584358
            </div>
          </div>
          
          <div className="text-xs" style={{ color: 'var(--wt-text-muted)' }}>
            🎮 Создано с болью за кошелёк и любовью к мемам War Thunder 🎮
          </div>
          
          <div className="text-xs mt-2 wt-text-premium">
            ⚠️ ВНИМАНИЕ: Это пародия! Настоящий War Thunder может нанести вред вашему бюджету ⚠️
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
