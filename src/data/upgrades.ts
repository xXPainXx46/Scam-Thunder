import { Upgrade } from '../types/game';

export const upgrades: Upgrade[] = [
  // Basic upgrades
  {
    id: 'mouse_upgrade',
    name: 'Игровая мышь',
    description: 'Профессиональная мышь для профессионального доната!',
    cost: { rubles: 100 },
    effect: { clickPower: 1 },
    maxLevel: 10,
    currentLevel: 0
  },
  {
    id: 'energy_drink',
    name: 'Энергетический напиток',
    description: 'Больше энергии = больше кликов = больше доната!',
    cost: { rubles: 250 },
    effect: { clickPower: 2 },
    maxLevel: 20,
    currentLevel: 0
  },
  {
    id: 'premium_account',
    name: 'Премиум аккаунт',
    description: 'Основа основ любого уважающего себя донатера!',
    cost: { rubles: 500 },
    effect: { multiplier: 1.1 },
    maxLevel: 5,
    currentLevel: 0
  },
  {
    id: 'golden_eagle_starter',
    name: 'Стартовый набор орлов',
    description: 'Первая доза золотых орлов всегда бесплатна... почти!',
    cost: { rubles: 1000 },
    effect: { clickPower: 3, multiplier: 1.05 },
    maxLevel: 15,
    currentLevel: 0
  },
  {
    id: 'credit_card',
    name: 'Кредитная карта',
    description: 'Деньги из будущего для танков настоящего!',
    cost: { rubles: 2500 },
    effect: { clickPower: 5, multiplier: 1.15 },
    maxLevel: 3,
    currentLevel: 0,
    unlockRequirement: { clicks: 1000 }
  },
  {
    id: 'auto_clicker_basic',
    name: 'Простой авто-кликер',
    description: 'Пусть компьютер тратит деньги за вас!',
    cost: { rubles: 5000 },
    effect: { autoClickPower: 1 },
    maxLevel: 25,
    currentLevel: 0,
    unlockRequirement: { clicks: 2500 }
  },

  // Tank-themed upgrades
  {
    id: 'bt5_tank',
    name: 'БТ-5',
    description: 'Ваш первый танк! Быстрый, как ваши траты!',
    cost: { rubles: 10000 },
    effect: { clickPower: 10, multiplier: 1.2 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 5000 }
  },
  {
    id: 't34_tank',
    name: 'Т-34',
    description: 'Легендарный танк для легендарных трат!',
    cost: { rubles: 25000, goldenEagles: 100 },
    effect: { clickPower: 25, multiplier: 1.3 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 20000 }
  },
  {
    id: 'kv1_tank',
    name: 'КВ-1',
    description: 'Тяжелый танк для тяжелых трат!',
    cost: { rubles: 50000, goldenEagles: 250 },
    effect: { clickPower: 50, autoClickPower: 5 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 40000 }
  },
  {
    id: 'is3_tank',
    name: 'ИС-3',
    description: 'Сталинский молот банкротства!',
    cost: { rubles: 100000, goldenEagles: 500 },
    effect: { clickPower: 100, multiplier: 1.5 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 75000 }
  },
  {
    id: 't54_tank',
    name: 'Т-54',
    description: 'Средний танк средних доходов!',
    cost: { rubles: 200000, goldenEagles: 1000 },
    effect: { clickPower: 200, autoClickPower: 10 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 150000 }
  },
  {
    id: 't80u_tank',
    name: 'Т-80У',
    description: 'Современный танк для современного донатера!',
    cost: { rubles: 500000, goldenEagles: 2500 },
    effect: { clickPower: 500, multiplier: 2.0 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 400000 }
  },

  // Planes
  {
    id: 'i16_plane',
    name: 'И-16',
    description: 'Летающий бочонок для летающих трат!',
    cost: { rubles: 75000, goldenEagles: 300 },
    effect: { clickPower: 75, autoClickPower: 8 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 60000 }
  },
  {
    id: 'yak3_plane',
    name: 'Як-3',
    description: 'Советский истребитель банковских счетов!',
    cost: { rubles: 150000, goldenEagles: 750 },
    effect: { clickPower: 150, multiplier: 1.4 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 100000 }
  },
  {
    id: 'il2_plane',
    name: 'Ил-2',
    description: 'Летающий танк для разгрома кошельков!',
    cost: { rubles: 300000, goldenEagles: 1500 },
    effect: { clickPower: 300, autoClickPower: 20 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 250000 }
  },

  // Ships
  {
    id: 'destroyer_ship',
    name: 'Эсминец',
    description: 'Торпедирует ваш банковский счет!',
    cost: { rubles: 400000, goldenEagles: 2000 },
    effect: { clickPower: 400, multiplier: 1.6 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 350000 }
  },
  {
    id: 'cruiser_ship',
    name: 'Крейсер',
    description: 'Крейсирует по морям ваших сбережений!',
    cost: { rubles: 800000, goldenEagles: 4000 },
    effect: { clickPower: 800, autoClickPower: 40 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 700000 }
  },
  {
    id: 'battleship_ship',
    name: 'Линкор',
    description: 'Главная артиллерия по вашим финансам!',
    cost: { rubles: 1500000, goldenEagles: 7500 },
    effect: { clickPower: 1500, multiplier: 2.5 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 1200000 }
  },

  // Premium vehicles
  {
    id: 'premium_kv220',
    name: 'КВ-220 (Премиум)',
    description: 'Премиум танк для премиум банкротства!',
    cost: { goldenEagles: 5000 },
    effect: { clickPower: 1000, multiplier: 3.0 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { goldenEagles: 2500 }
  },
  {
    id: 'premium_is6',
    name: 'ИС-6 (Премиум)',
    description: 'Сталинский молот премиум класса!',
    cost: { goldenEagles: 7500 },
    effect: { clickPower: 1500, autoClickPower: 75 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { goldenEagles: 5000 }
  },
  {
    id: 'premium_t114',
    name: 'Т114 (Премиум)',
    description: 'Американская машина для изъятия рублей!',
    cost: { goldenEagles: 10000 },
    effect: { clickPower: 2000, multiplier: 4.0 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { goldenEagles: 7500 }
  },

  // Automation upgrades
  {
    id: 'auto_clicker_advanced',
    name: 'Продвинутый авто-кликер',
    description: 'Тратит деньги быстрее чем вы успеваете заработать!',
    cost: { rubles: 100000, goldenEagles: 500 },
    effect: { autoClickPower: 10 },
    maxLevel: 50,
    currentLevel: 0,
    unlockRequirement: { rubles: 50000 }
  },
  {
    id: 'quantum_clicker',
    name: 'Квантовый кликер',
    description: 'Тратит деньги во всех параллельных вселенных!',
    cost: { rubles: 1000000, goldenEagles: 5000 },
    effect: { autoClickPower: 100, multiplier: 5.0 },
    maxLevel: 10,
    currentLevel: 0,
    unlockRequirement: { rubles: 750000 }
  },
  {
    id: 'ai_trader',
    name: 'ИИ-трейдер',
    description: 'Искусственный интеллект для естественного банкротства!',
    cost: { rubles: 5000000, goldenEagles: 25000 },
    effect: { autoClickPower: 500, multiplier: 10.0 },
    maxLevel: 5,
    currentLevel: 0,
    unlockRequirement: { rubles: 3000000 }
  },

  // Multiplier upgrades
  {
    id: 'lucky_charm',
    name: 'Талисман удачи',
    description: 'Привлекает удачу... в тратах!',
    cost: { rubles: 25000 },
    effect: { multiplier: 1.25 },
    maxLevel: 10,
    currentLevel: 0,
    unlockRequirement: { clicks: 10000 }
  },
  {
    id: 'gaijin_blessing',
    name: 'Благословение Gaijin',
    description: 'Сами разработчики одобряют ваше разорение!',
    cost: { rubles: 250000, goldenEagles: 1000 },
    effect: { multiplier: 2.0 },
    maxLevel: 5,
    currentLevel: 0,
    unlockRequirement: { rubles: 200000 }
  },
  {
    id: 'economic_virus',
    name: 'Экономический вирус',
    description: 'Заражает всю экономику вашей тратой денег!',
    cost: { rubles: 2500000, goldenEagles: 10000 },
    effect: { multiplier: 5.0, clickPower: 2500 },
    maxLevel: 3,
    currentLevel: 0,
    unlockRequirement: { rubles: 2000000 }
  },

  // Ultimate upgrades
  {
    id: 'gaijin_stocks',
    name: 'Акции Gaijin',
    description: 'Теперь вы совладелец собственного банкротства!',
    cost: { rubles: 10000000, goldenEagles: 50000 },
    effect: { multiplier: 10.0, autoClickPower: 1000 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 8000000 }
  },
  {
    id: 'reality_engine',
    name: 'Двигатель реальности',
    description: 'Изменяет саму реальность под ваши траты!',
    cost: { rubles: 100000000, goldenEagles: 500000 },
    effect: { multiplier: 100.0, clickPower: 50000, autoClickPower: 10000 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 75000000 }
  },
  {
    id: 'universe_buyout',
    name: 'Выкуп вселенной',
    description: 'Покупаете всю вселенную... в кредит!',
    cost: { rubles: 1000000000, goldenEagles: 5000000 },
    effect: { multiplier: 1000.0, clickPower: 500000, autoClickPower: 100000 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 750000000 }
  },

  // Special event upgrades
  {
    id: 'victory_day_bonus',
    name: 'Бонус Дня Победы',
    description: 'Наши деды воевали, чтобы мы могли донатить!',
    cost: { rubles: 500000 },
    effect: { multiplier: 2.0, clickPower: 500 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 400000 }
  },
  {
    id: 'new_year_gift',
    name: 'Новогодний подарок',
    description: 'Дед Мороз принес... счет за танки!',
    cost: { goldenEagles: 2023 },
    effect: { multiplier: 2.023, clickPower: 2023 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { goldenEagles: 1000 }
  },
  {
    id: 'birthday_surprise',
    name: 'День рождения War Thunder',
    description: 'Праздник игры - траур кошелька!',
    cost: { rubles: 1000000 },
    effect: { multiplier: 3.0, autoClickPower: 100 },
    maxLevel: 1,
    currentLevel: 0,
    unlockRequirement: { rubles: 800000 }
  }
];

export const getAvailableUpgrades = (gameState: any): Upgrade[] => {
  return upgrades.filter(upgrade => {
    if (!upgrade.unlockRequirement) return true;
    
    const req = upgrade.unlockRequirement;
    if (req.clicks && gameState.clicks < req.clicks) return false;
    if (req.rubles && gameState.rubles < req.rubles) return false;
    if (req.goldenEagles && gameState.goldenEagles < req.goldenEagles) return false;
    if (req.prestige && gameState.prestige < req.prestige) return false;
    
    return true;
  });
};

export const calculateUpgradeCost = (upgrade: Upgrade, level: number): { rubles?: number; goldenEagles?: number } => {
  const baseCost = upgrade.cost;
  const multiplier = Math.pow(1.15, level); // 15% increase per level
  
  return {
    rubles: baseCost.rubles ? Math.floor(baseCost.rubles * multiplier) : undefined,
    goldenEagles: baseCost.goldenEagles ? Math.floor(baseCost.goldenEagles * multiplier) : undefined
  };
};
