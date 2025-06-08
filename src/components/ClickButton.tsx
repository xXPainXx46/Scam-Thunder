import { useState, useEffect } from 'react';

interface ClickButtonProps {
  gameHook: any;
}

export const ClickButton: React.FC<ClickButtonProps> = ({ gameHook }) => {
  const [isClicking, setIsClicking] = useState(false);
  const [clickAnimations, setClickAnimations] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [animationId, setAnimationId] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    gameHook.performClick();
    setIsClicking(true);
    
    // Create floating animation
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newAnimation = {
      id: animationId,
      x,
      y
    };
    
    setClickAnimations(prev => [...prev, newAnimation]);
    setAnimationId(prev => prev + 1);
    
    // Remove animation after duration
    setTimeout(() => {
      setClickAnimations(prev => prev.filter(anim => anim.id !== newAnimation.id));
    }, 1000);
    
    setTimeout(() => setIsClicking(false), 100);
  };

  const totalClickPower = gameHook.calculateTotalClickPower();

  return (
    <div className="space-y-6">
      {/* War Thunder Vehicle Display Area */}
      <div className="wt-panel p-6">
        <div className="wt-panel-header text-center">
          🏠 АНГАР БАНКРОТСТВА - PREMIUM VEHICLE SHOWCASE
        </div>
        
        {/* Click Response Display */}
        {gameHook.lastClickResponse && (
          <div className="wt-notification p-4 mt-4 mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💸</span>
              <div>
                <div className="font-bold mb-1" style={{ color: 'var(--wt-gold)' }}>
                  GAIJIN ENTERTAINMENT УВЕДОМЛЯЕТ:
                </div>
                <p style={{ color: 'var(--wt-text-primary)' }}>
                  {gameHook.lastClickResponse}
                </p>
              </div>
              <span className="text-2xl">💸</span>
            </div>
          </div>
        )}

        {/* Main Premium Purchase Area */}
        <div className="text-center space-y-6">
          {/* Empty Hangar Display */}
          <div className="relative wt-vehicle-card p-8 mb-6" style={{ minHeight: '300px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💳</div>
                <div className="text-2xl font-bold mb-2 wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
                  ПУСТОЙ АНГАР
                </div>
                <div style={{ color: 'var(--wt-text-secondary)' }}>
                  Потому что все танки стоят как подержанная машина
                </div>
              </div>
            </div>
          </div>

          {/* Premium Purchase Button */}
          <div className="relative">
            <button
              onClick={handleClick}
              className={`wt-premium-button w-80 h-20 text-2xl font-black transition-all duration-150 ${
                isClicking ? 'scale-95' : 'hover:scale-105'
              }`}
              style={{ 
                borderRadius: '8px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              💰 КУПИТЬ ЗА РЕАЛЬНЫЕ ДЕНЬГИ 💰
              <div className="text-sm font-normal mt-1">
                +{gameHook.formatNumber(totalClickPower)} к банкротству
              </div>
            </button>
            
            {/* Click Animations */}
            {clickAnimations.map(anim => (
              <div
                key={anim.id}
                className="absolute pointer-events-none font-bold text-xl wt-text-premium"
                style={{
                  left: anim.x,
                  top: anim.y,
                  animation: 'float-up 1s ease-out forwards',
                  textShadow: '0 0 10px var(--wt-red-warning)'
                }}
              >
                -₽{gameHook.formatNumber(totalClickPower)}
              </div>
            ))}
          </div>

          {/* Purchase Power Display */}
          <div className="wt-panel p-4">
            <div className="flex justify-center items-center space-x-4">
              <div className="text-center">
                <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
                  Сила банкротства:
                </div>
                <div className="text-xl font-bold wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
                  {gameHook.formatNumber(totalClickPower)} ₽/клик
                </div>
              </div>
              <div className="text-4xl">💸</div>
              <div className="text-center">
                <div className="text-sm" style={{ color: 'var(--wt-text-secondary)' }}>
                  Battle Rating:
                </div>
                <div className="wt-rank-badge">
                  BR {Math.floor(totalClickPower / 100 + 1)}.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Benefits Panel */}
      <div className="wt-panel p-6">
        <div className="wt-panel-header text-center">
          🏆 ПРЕМИУМ ПРЕИМУЩЕСТВА РАЗОРЕНИЯ
        </div>
        
        {/* Auto-Income Display */}
        {gameHook.calculateTotalAutoClickPower() > 0 && (
          <div className="mt-4 p-4" style={{ 
            background: 'linear-gradient(145deg, var(--wt-military-green), #2a3f1a)',
            border: '1px solid var(--wt-gold)',
            borderRadius: '4px'
          }}>
            <div className="text-center">
              <div className="text-sm mb-2" style={{ color: 'var(--wt-text-primary)' }}>
                🤖 АВТОМАТИЧЕСКОЕ СПИСАНИЕ ДЕНЕГ 🤖
              </div>
              <div className="text-2xl font-bold wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
                -{gameHook.formatNumber(gameHook.calculateTotalAutoClickPower())} ₽/сек
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--wt-text-secondary)' }}>
                "Даже когда вы спите, мы работаем над вашим банкротством!" - Gaijin©
              </div>
            </div>
          </div>
        )}

        {/* War Thunder Style Tips */}
        <div className="mt-4 space-y-2">
          <div className="text-sm p-3" style={{ 
            background: 'var(--wt-panel-bg)',
            border: '1px solid var(--wt-border)',
            borderLeft: '4px solid var(--wt-gold)',
            borderRadius: '4px'
          }}>
            <span style={{ color: 'var(--wt-gold)' }}>💡 СОВЕТ GAIJIN:</span>
            <span style={{ color: 'var(--wt-text-primary)' }}> Исследование танка займет 2 года или 5000₽. Выбор очевиден!</span>
          </div>
          <div className="text-sm p-3" style={{ 
            background: 'var(--wt-panel-bg)',
            border: '1px solid var(--wt-border)',
            borderLeft: '4px solid var(--wt-red-warning)',
            borderRadius: '4px'
          }}>
            <span className="wt-text-premium">⚠️ ВНИМАНИЕ:</span>
            <span style={{ color: 'var(--wt-text-primary)' }}> Стоимость ремонта превышает ваш месячный доход!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS animation for floating numbers
const style = document.createElement('style');
style.textContent = `
  @keyframes float-up {
    0% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px) scale(1.2);
    }
  }
`;
document.head.appendChild(style);
