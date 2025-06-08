import { useEffect, useState } from 'react';

interface NotificationSystemProps {
  message: string;
  onClose: () => void;
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    if (message && message.trim() !== '') {
      setCurrentMessage(message);
      setVisible(true);
      
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setCurrentMessage('');
        }, 300); // Wait for animation to finish
      }, 5000);
      
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [message]);

  if (!currentMessage) return null;

  const isAchievement = currentMessage.includes('🏆') || currentMessage.includes('Достижение');
  const isPrestige = currentMessage.includes('🌟') || currentMessage.includes('Престиж');
  const isPurchase = currentMessage.includes('Куплено');
  const isWelcome = currentMessage.includes('Добро пожаловать');

  const getNotificationStyle = () => {
    if (isAchievement) {
      return {
        background: 'linear-gradient(135deg, var(--wt-gold), var(--wt-bronze))',
        border: '2px solid var(--wt-gold)',
        category: 'НАГРАДА ПОЛУЧЕНА'
      };
    }
    if (isPrestige) {
      return {
        background: 'linear-gradient(135deg, var(--wt-red-warning), var(--wt-gold))',
        border: '2px solid var(--wt-red-warning)',
        category: 'ПОВЫШЕНИЕ В ЗВАНИИ'
      };
    }
    if (isPurchase) {
      return {
        background: 'linear-gradient(135deg, var(--wt-military-green), var(--wt-blue-info))',
        border: '2px solid var(--wt-military-green)',
        category: 'ТЕХНИКА ИССЛЕДОВАНА'
      };
    }
    if (isWelcome) {
      return {
        background: 'linear-gradient(135deg, var(--wt-blue-info), var(--wt-military-green))',
        border: '2px solid var(--wt-blue-info)',
        category: 'СИСТЕМА УВЕДОМЛЕНИЙ'
      };
    }
    return {
      background: 'linear-gradient(135deg, var(--wt-panel-bg), var(--wt-dark-bg))',
      border: '1px solid var(--wt-border)',
      category: 'ИГРОВОЕ УВЕДОМЛЕНИЕ'
    };
  };

  const getIcon = () => {
    if (isAchievement) return '🏅';
    if (isPrestige) return '🎖️';
    if (isPurchase) return '🚗';
    if (isWelcome) return '🦅';
    return '📡';
  };

  const notificationStyle = getNotificationStyle();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`transform transition-all duration-500 ease-out ${
          visible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        <div
          className="wt-notification backdrop-blur-sm shadow-2xl max-w-sm min-w-[350px] animate-pulse-once"
          style={{
            background: notificationStyle.background,
            border: notificationStyle.border,
            borderRadius: '4px'
          }}
        >
          {/* War Thunder Header */}
          <div className="flex items-center justify-between mb-3 pb-2" style={{ 
            borderBottom: '1px solid rgba(255,255,255,0.2)' 
          }}>
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{getIcon()}</span>
              <div>
                <div className="text-white font-bold text-sm">
                  {notificationStyle.category}
                </div>
                <div className="text-xs text-white/80">
                  WAR THUNDER SYSTEM
                </div>
              </div>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-white/70 hover:text-white transition-colors duration-200 text-xl leading-none p-1"
              style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '2px' }}
            >
              ×
            </button>
          </div>
          
          {/* Message Content */}
          <div className="text-white text-sm leading-relaxed mb-3 p-2" style={{ 
            background: 'rgba(0,0,0,0.2)', 
            borderRadius: '2px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            {currentMessage}
          </div>
          
          {/* War Thunder Style Progress */}
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Автоскрытие</span>
            <span>5.0s</span>
          </div>
          <div className="mt-1">
            <div className="w-full h-2" style={{ 
              background: 'rgba(0,0,0,0.4)', 
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '1px'
            }}>
              <div 
                className="h-full transition-all duration-5000 ease-linear"
                style={{
                  background: 'linear-gradient(90deg, var(--wt-gold), var(--wt-red-warning))',
                  animation: visible ? 'progress-bar 5s linear forwards' : 'none',
                  borderRadius: '1px'
                }}
              />
            </div>
          </div>
          
          {/* Gaijin Copyright */}
          <div className="text-right text-xs text-white/40 mt-2">
            © Gaijin Entertainment
          </div>
        </div>
      </div>
    </div>
  );
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes animate-pulse-once {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
  
  @keyframes progress-bar {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
  
  .animate-pulse-once {
    animation: animate-pulse-once 0.6s ease-in-out;
  }
`;
document.head.appendChild(style);
