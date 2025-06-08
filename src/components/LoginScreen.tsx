import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LoginScreenProps {
  onLogin: (nickname: string) => void;
}

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');

  const validateNickname = (nick: string): boolean => {
    // Check length
    if (nick.length < 3 || nick.length > 20) {
      setError('Позывной должен содержать от 3 до 20 символов');
      return false;
    }

    // Check allowed characters (alphanumeric + Russian)
    const allowedPattern = /^[a-zA-Z0-9а-яА-Я_-]+$/;
    if (!allowedPattern.test(nick)) {
      setError('Позывной может содержать только буквы, цифры, дефис и подчёркивание');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (validateNickname(nickname)) {
      onLogin(nickname);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--wt-dark-bg)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-6xl animate-bounce">🦅</div>
        <div className="absolute top-40 right-40 text-4xl animate-pulse">💰</div>
        <div className="absolute bottom-40 left-40 text-5xl animate-bounce">😭</div>
        <div className="absolute bottom-20 right-20 text-3xl animate-pulse">🎯</div>
      </div>

      {/* Login Form */}
      <div className="wt-panel p-8 max-w-md w-full mx-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold mb-4 wt-text-glow" style={{ color: 'var(--wt-gold)' }}>
            🦅 WAR THUNDER 🦅
          </div>
          <div className="text-xl mb-2 wt-text-premium">
            PREMIUM BANKRUPTCY SIMULATOR
          </div>
          <div className="text-lg mb-6" style={{ color: 'var(--wt-text-primary)' }}>
            Вход в Систему Разорения
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="nickname" 
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--wt-text-primary)' }}
            >
              Введите ваш позывной:
            </label>
            <Input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Ваш боевой позывной..."
              className="w-full px-4 py-3 text-lg wt-input"
              maxLength={20}
              autoFocus
              style={{
                background: 'var(--wt-panel-bg)',
                border: '2px solid var(--wt-border)',
                color: 'var(--wt-text-primary)',
                borderRadius: '4px'
              }}
            />
          </div>

          {error && (
            <div 
              className="text-sm p-3 rounded border"
              style={{ 
                color: '#ff4444',
                backgroundColor: 'rgba(255, 68, 68, 0.1)',
                borderColor: '#ff4444'
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-3 text-lg font-bold wt-button-premium"
            disabled={nickname.length < 3}
            style={{
              background: nickname.length >= 3 
                ? 'linear-gradient(135deg, var(--wt-gold), #cc9900)' 
                : 'var(--wt-panel-bg)',
              color: nickname.length >= 3 ? 'black' : 'var(--wt-text-muted)',
              border: '2px solid var(--wt-gold)',
              borderRadius: '4px'
            }}
          >
            🎯 Войти в Игру
          </Button>
        </form>

        {/* Info */}
        <div className="mt-6 text-center space-y-2">
          <div className="text-xs" style={{ color: 'var(--wt-text-muted)' }}>
            ℹ️ Позывной используется только для доски лидеров
          </div>
          <div className="text-xs" style={{ color: 'var(--wt-text-muted)' }}>
            📱 Ваш прогресс сохраняется в браузере
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-8 text-center">
          <div 
            className="text-sm italic p-4 rounded"
            style={{ 
              background: 'var(--wt-military-green)',
              color: 'var(--wt-text-primary)',
              border: '1px solid var(--wt-border)'
            }}
          >
            "Добро пожаловать в самый дорогой танковый симулятор в мире!"<br/>
            <span className="text-xs" style={{ color: 'var(--wt-text-muted)' }}>
              - Gaijin Entertainment©
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
