import { Achievement } from '../types/game';

export const achievements: Achievement[] = [
  // Early game achievements (1-50)
  {
    id: 'first_click',
    name: 'Первый донат',
    description: 'Сделайте первый клик. Добро пожаловать в мир War Thunder мошенничества!',
    requirement: { type: 'clicks', value: 1 },
    reward: { rubles: 10 },
    unlocked: false
  },
  {
    id: 'ten_clicks',
    name: 'Новичок-донатер',
    description: 'Сделайте 10 кликов. Ощущаете как кошелек становится легче?',
    requirement: { type: 'clicks', value: 10 },
    reward: { rubles: 50 },
    unlocked: false
  },
  {
    id: 'hundred_clicks',
    name: 'Опытный жертва',
    description: 'Сделайте 100 кликов. Вы уже не можете остановиться!',
    requirement: { type: 'clicks', value: 100 },
    reward: { rubles: 200 },
    unlocked: false
  },
  {
    id: 'thousand_clicks',
    name: 'Мастер саморазорения',
    description: 'Сделайте 1000 кликов. Мама не гордилась бы вами...',
    requirement: { type: 'clicks', value: 1000 },
    reward: { rubles: 1000, clickPower: 1 },
    unlocked: false
  },
  {
    id: 'ten_thousand_clicks',
    name: 'Легенда доната',
    description: 'Сделайте 10000 кликов. Gaijin вас любит больше собственных детей!',
    requirement: { type: 'clicks', value: 10000 },
    reward: { rubles: 5000, goldenEagles: 100 },
    unlocked: false
  },
  {
    id: 'hundred_thousand_clicks',
    name: 'Бог разорения',
    description: 'Сделайте 100000 кликов. Вы купили Gaijin новую яхту!',
    requirement: { type: 'clicks', value: 100000 },
    reward: { rubles: 25000, goldenEagles: 500, clickPower: 5 },
    unlocked: false
  },
  {
    id: 'million_clicks',
    name: 'Создатель банкротства',
    description: 'Сделайте 1000000 кликов. Банки начали вас бояться!',
    requirement: { type: 'clicks', value: 1000000 },
    reward: { rubles: 100000, goldenEagles: 2000, multiplier: 1.1 },
    unlocked: false
  },
  {
    id: 'first_rubles',
    name: 'Деньги из воздуха',
    description: 'Заработайте первые рубли. Магия мошенничества работает!',
    requirement: { type: 'rubles', value: 100 },
    reward: { clickPower: 1 },
    unlocked: false
  },
  {
    id: 'thousand_rubles',
    name: 'Мелкий мошенник',
    description: 'Заработайте 1000 рублей. Хватит на хлеб и War Thunder премиум!',
    requirement: { type: 'rubles', value: 1000 },
    reward: { rubles: 500 },
    unlocked: false
  },
  {
    id: 'ten_thousand_rubles',
    name: 'Средний донатер',
    description: 'Заработайте 10000 рублей. Можете купить один танк высокого уровня!',
    requirement: { type: 'rubles', value: 10000 },
    reward: { rubles: 2000, goldenEagles: 50 },
    unlocked: false
  },

  // Money achievements (51-100)
  {
    id: 'hundred_thousand_rubles',
    name: 'Богатый дурак',
    description: 'Заработайте 100000 рублей. Теперь вы можете купить половину дерева исследований!',
    requirement: { type: 'rubles', value: 100000 },
    reward: { rubles: 10000, goldenEagles: 200, clickPower: 2 },
    unlocked: false
  },
  {
    id: 'million_rubles',
    name: 'Миллионер-неудачник',
    description: 'Заработайте 1000000 рублей. Gaijin смеется над вашей зависимостью!',
    requirement: { type: 'rubles', value: 1000000 },
    reward: { rubles: 50000, goldenEagles: 1000, multiplier: 1.05 },
    unlocked: false
  },
  {
    id: 'ten_million_rubles',
    name: 'Олигарх War Thunder',
    description: 'Заработайте 10000000 рублей. Вы финансируете российскую армию через игру!',
    requirement: { type: 'rubles', value: 10000000 },
    reward: { rubles: 250000, goldenEagles: 5000, clickPower: 10 },
    unlocked: false
  },
  {
    id: 'hundred_million_rubles',
    name: 'Экономический терроризм',
    description: 'Заработайте 100000000 рублей. Центробанк объявил вас персоной нон грата!',
    requirement: { type: 'rubles', value: 100000000 },
    reward: { rubles: 1000000, goldenEagles: 20000, multiplier: 1.15 },
    unlocked: false
  },
  {
    id: 'billion_rubles',
    name: 'Разрушитель экономики',
    description: 'Заработайте 1000000000 рублей. Рубль обесценился из-за вас!',
    requirement: { type: 'rubles', value: 1000000000 },
    reward: { rubles: 5000000, goldenEagles: 100000, multiplier: 1.25 },
    unlocked: false
  },
  {
    id: 'first_golden_eagles',
    name: 'Золотая птичка',
    description: 'Заработайте первые золотые орлы. Блестящие и бесполезные!',
    requirement: { type: 'goldenEagles', value: 10 },
    reward: { rubles: 1000 },
    unlocked: false
  },
  {
    id: 'hundred_golden_eagles',
    name: 'Коллекционер блесток',
    description: 'Заработайте 100 золотых орлов. Как ворона, собираете все блестящее!',
    requirement: { type: 'goldenEagles', value: 100 },
    reward: { rubles: 5000, clickPower: 1 },
    unlocked: false
  },
  {
    id: 'thousand_golden_eagles',
    name: 'Скупщик иллюзий',
    description: 'Заработайте 1000 золотых орлов. Покупаете воздух за золото!',
    requirement: { type: 'goldenEagles', value: 1000 },
    reward: { rubles: 25000, goldenEagles: 200 },
    unlocked: false
  },
  {
    id: 'ten_thousand_golden_eagles',
    name: 'Магнат виртуальности',
    description: 'Заработайте 10000 золотых орлов. Богаты в игре, бедны в жизни!',
    requirement: { type: 'goldenEagles', value: 10000 },
    reward: { rubles: 100000, goldenEagles: 1000, multiplier: 1.1 },
    unlocked: false
  },
  {
    id: 'hundred_thousand_golden_eagles',
    name: 'Император фантазий',
    description: 'Заработайте 100000 золотых орлов. Владеете империей несуществующего!',
    requirement: { type: 'goldenEagles', value: 100000 },
    reward: { rubles: 500000, goldenEagles: 5000, clickPower: 15 },
    unlocked: false
  },

  // Time-based achievements (101-150)
  {
    id: 'five_minutes',
    name: 'Жертва 5 минут',
    description: 'Играйте 5 минут. Время - деньги, ваши деньги!',
    requirement: { type: 'playTime', value: 300000 }, // 5 minutes in ms
    reward: { rubles: 500 },
    unlocked: false
  },
  {
    id: 'thirty_minutes',
    name: 'Получасовая жертва',
    description: 'Играйте 30 минут. Продуктивность упала до нуля!',
    requirement: { type: 'playTime', value: 1800000 }, // 30 minutes
    reward: { rubles: 2000, clickPower: 1 },
    unlocked: false
  },
  {
    id: 'one_hour',
    name: 'Часовой донатер',
    description: 'Играйте 1 час. Начальник ищет вас на работе!',
    requirement: { type: 'playTime', value: 3600000 }, // 1 hour
    reward: { rubles: 5000, goldenEagles: 100 },
    unlocked: false
  },
  {
    id: 'five_hours',
    name: 'Марафонец саморазорения',
    description: 'Играйте 5 часов. Семья подала на развод!',
    requirement: { type: 'playTime', value: 18000000 }, // 5 hours
    reward: { rubles: 25000, goldenEagles: 500, multiplier: 1.05 },
    unlocked: false
  },
  {
    id: 'twenty_four_hours',
    name: 'Суточный адепт',
    description: 'Играйте 24 часа. Вы потеряли работу и друзей!',
    requirement: { type: 'playTime', value: 86400000 }, // 24 hours
    reward: { rubles: 100000, goldenEagles: 2000, clickPower: 10 },
    unlocked: false
  },
  {
    id: 'week_playtime',
    name: 'Недельный затворник',
    description: 'Играйте неделю. Соседи думают, что вы умерли!',
    requirement: { type: 'playTime', value: 604800000 }, // 1 week
    reward: { rubles: 500000, goldenEagles: 10000, multiplier: 1.15 },
    unlocked: false
  },

  // Prestige achievements (151-200)
  {
    id: 'first_prestige',
    name: 'Первое перерождение',
    description: 'Совершите первый престиж. Начните разорение заново!',
    requirement: { type: 'prestige', value: 1 },
    reward: { rubles: 10000, goldenEagles: 500, multiplier: 1.1 },
    unlocked: false
  },
  {
    id: 'five_prestige',
    name: 'Мастер перерождений',
    description: 'Совершите 5 престижей. Sisyphean donater!',
    requirement: { type: 'prestige', value: 5 },
    reward: { rubles: 50000, goldenEagles: 2000, clickPower: 5 },
    unlocked: false
  },
  {
    id: 'ten_prestige',
    name: 'Легенда возрождений',
    description: 'Совершите 10 престижей. Феникс банкротства!',
    requirement: { type: 'prestige', value: 10 },
    reward: { rubles: 250000, goldenEagles: 10000, multiplier: 1.25 },
    unlocked: false
  },
  {
    id: 'twenty_prestige',
    name: 'Бог циклического разорения',
    description: 'Совершите 20 престижей. Вечный двигатель глупости!',
    requirement: { type: 'prestige', value: 20 },
    reward: { rubles: 1000000, goldenEagles: 50000, clickPower: 20 },
    unlocked: false
  },

  // Funny themed achievements (201-300)
  {
    id: 'gaijin_loves_you',
    name: 'Любимчик Gaijin',
    description: 'Потратьте столько, что Gaijin назвал танк в вашу честь... в секретных документах!',
    requirement: { type: 'rubles', value: 50000000 },
    reward: { rubles: 2000000, goldenEagles: 25000, multiplier: 1.2 },
    unlocked: false
  },
  {
    id: 'wallet_warrior',
    name: 'Воин кошелька',
    description: 'Сражайтесь не мечом, а кредитной картой! Враги банкротятся от зависти!',
    requirement: { type: 'clicks', value: 50000 },
    reward: { rubles: 20000, clickPower: 3 },
    unlocked: false
  },
  {
    id: 'premium_peasant',
    name: 'Премиум крестьянин',
    description: 'Покупаете премиум аккаунт на хлеб с водой. Приоритеты расставлены!',
    requirement: { type: 'goldenEagles', value: 5000 },
    reward: { rubles: 50000, goldenEagles: 1000 },
    unlocked: false
  },
  {
    id: 'bankruptcy_speedrun',
    name: 'Спидран банкротства',
    description: 'Потратили месячную зарплату за час игры. Новый мировой рекорд!',
    requirement: { type: 'rubles', value: 100000 },
    reward: { rubles: 25000, multiplier: 1.1 },
    unlocked: false
  },
  {
    id: 'addiction_confirmed',
    name: 'Диагноз подтвержден',
    description: 'Врачи признали вашу зависимость неизлечимой. Примите поздравления!',
    requirement: { type: 'playTime', value: 10800000 }, // 3 hours
    reward: { rubles: 15000, goldenEagles: 300 },
    unlocked: false
  },
  {
    id: 'tank_collector',
    name: 'Коллекционер железа',
    description: 'Собираете танки как марки. Только дороже и бесполезнее!',
    requirement: { type: 'goldenEagles', value: 25000 },
    reward: { rubles: 100000, goldenEagles: 5000, clickPower: 8 },
    unlocked: false
  },
  {
    id: 'credit_card_melted',
    name: 'Карта расплавилась',
    description: 'Кредитная карта не выдержала нагрузки и расплавилась от стыда!',
    requirement: { type: 'rubles', value: 500000 },
    reward: { rubles: 75000, goldenEagles: 2500 },
    unlocked: false
  },
  {
    id: 'gaijin_shareholder',
    name: 'Акционер Gaijin',
    description: 'Потратили столько, что стали совладельцем компании!',
    requirement: { type: 'rubles', value: 25000000 },
    reward: { rubles: 1000000, goldenEagles: 15000, multiplier: 1.15 },
    unlocked: false
  },
  {
    id: 'family_disowned',
    name: 'Семья отреклась',
    description: 'Родственники изменили фамилию, чтобы не ассоциироваться с вами!',
    requirement: { type: 'playTime', value: 43200000 }, // 12 hours
    reward: { rubles: 200000, goldenEagles: 4000, clickPower: 12 },
    unlocked: false
  },
  {
    id: 'bank_account_crying',
    name: 'Банковский счет плачет',
    description: 'Ваш банковский счет подал в суд за моральный ущерб!',
    requirement: { type: 'rubles', value: 75000000 },
    reward: { rubles: 3000000, goldenEagles: 40000, multiplier: 1.3 },
    unlocked: false
  },
  {
    id: 'virtual_billionaire',
    name: 'Виртуальный миллиардер',
    description: 'Богаты в игре, едите дошираки в жизни. Баланс соблюден!',
    requirement: { type: 'goldenEagles', value: 1000000 },
    reward: { rubles: 10000000, goldenEagles: 100000, multiplier: 1.5 },
    unlocked: false
  },

  // Absurd achievements (301-400+)
  {
    id: 'mortgage_on_pixels',
    name: 'Ипотека на пиксели',
    description: 'Взяли ипотеку, чтобы купить виртуальный танк. Банкиры в шоке!',
    requirement: { type: 'rubles', value: 200000000 },
    reward: { rubles: 8000000, goldenEagles: 80000, multiplier: 1.4 },
    unlocked: false
  },
  {
    id: 'sold_kidney',
    name: 'Продал почку',
    description: 'Почка ушла за премиум танк. Теперь у вас есть Tiger II и одна почка!',
    requirement: { type: 'goldenEagles', value: 500000 },
    reward: { rubles: 5000000, goldenEagles: 50000, clickPower: 25 },
    unlocked: false
  },
  {
    id: 'lived_in_game',
    name: 'Переехал в игру',
    description: 'Продали квартиру и живете в ангаре War Thunder. Коммунальных платежей нет!',
    requirement: { type: 'playTime', value: 604800000 }, // 1 week
    reward: { rubles: 1000000, goldenEagles: 20000, multiplier: 1.2 },
    unlocked: false
  },
  {
    id: 'quantum_bankruptcy',
    name: 'Квантовое банкротство',
    description: 'Стали настолько банкротом, что долги существуют в параллельной вселенной!',
    requirement: { type: 'rubles', value: 1000000000 },
    reward: { rubles: 50000000, goldenEagles: 500000, multiplier: 2.0 },
    unlocked: false
  },
  {
    id: 'interdimensional_whale',
    name: 'Межизмерительный кит',
    description: 'Ваши траты пробили дыру в пространстве-времени!',
    requirement: { type: 'clicks', value: 10000000 },
    reward: { rubles: 25000000, goldenEagles: 250000, clickPower: 50 },
    unlocked: false
  },
  {
    id: 'economic_singularity',
    name: 'Экономическая сингулярность',
    description: 'Создали черную дыру в экономике. Деньги исчезают со скоростью света!',
    requirement: { type: 'rubles', value: 5000000000 },
    reward: { rubles: 200000000, goldenEagles: 2000000, multiplier: 3.0 },
    unlocked: false
  },
  {
    id: 'universe_bankruptcy',
    name: 'Банкротство вселенной',
    description: 'Обанкротили всю вселенную. Боги просят денег в долг!',
    requirement: { type: 'rubles', value: 10000000000 },
    reward: { rubles: 500000000, goldenEagles: 5000000, multiplier: 5.0 },
    unlocked: false
  },
  {
    id: 'gaijin_ceo',
    name: 'Новый CEO Gaijin',
    description: 'Потратили столько, что Gaijin назначил вас новым CEO!',
    requirement: { type: 'goldenEagles', value: 10000000 },
    reward: { rubles: 1000000000, goldenEagles: 10000000, multiplier: 10.0 },
    unlocked: false
  },
  {
    id: 'time_paradox',
    name: 'Временной парадокс',
    description: 'Играли так долго, что вернулись в прошлое и предотвратили создание War Thunder!',
    requirement: { type: 'playTime', value: 2592000000 }, // 30 days
    reward: { rubles: 100000000, goldenEagles: 1000000, multiplier: 2.5 },
    unlocked: false
  },
  {
    id: 'ascended_whale',
    name: 'Вознесшийся кит',
    description: 'Достигли просветления через донаты. Теперь вы - бог микротранзакций!',
    requirement: { type: 'prestige', value: 50 },
    reward: { rubles: 1000000000, goldenEagles: 10000000, multiplier: 20.0 },
    unlocked: false
  }
];

// Function to generate additional achievements dynamically
export const generateExtraAchievements = (): Achievement[] => {
  const extraAchievements: Achievement[] = [];
  
  // CATEGORY 1: Mega Click Achievements (50 achievements)
  const clickMilestones = [
    1000000, 2500000, 5000000, 10000000, 25000000, 50000000, 100000000, 250000000, 500000000, 1000000000,
    2000000000, 5000000000, 10000000000, 25000000000, 50000000000, 100000000000, 250000000000, 500000000000, 1000000000000, 2500000000000,
    5000000000000, 10000000000000, 25000000000000, 50000000000000, 100000000000000, 250000000000000, 500000000000000, 1000000000000000, 2500000000000000, 5000000000000000,
    10000000000000000, 25000000000000000, 50000000000000000, 100000000000000000, 250000000000000000, 500000000000000000, 1000000000000000000, 2500000000000000000, 5000000000000000000, 10000000000000000000,
    25000000000000000000, 50000000000000000000, 100000000000000000000, 250000000000000000000, 500000000000000000000, 1000000000000000000000, 2500000000000000000000, 5000000000000000000000, 10000000000000000000000, 25000000000000000000000
  ];
  
  const clickNames = [
    'Кликер-новичок', 'Кликоманьяк', 'Палец-разрушитель', 'Мышиный террор', 'Кликовый демон',
    'Разрушитель клавиатур', 'Повелитель кликов', 'Кликовый титан', 'Механический божок', 'Цифровой деспот',
    'Кликер-терминатор', 'Апокалипсис кликов', 'Владыка вселенной кликов', 'Трансцендентный кликер', 'Кликовый архангел',
    'Божество интерфейса', 'Повелитель реальности кликов', 'Мастер временных петель', 'Кликовый сингулярщик', 'Разрушитель измерений',
    'Покоритель мультивселенной', 'Кликовый левиафан', 'Владыка бесконечности', 'Архитектор кликов', 'Создатель вселенных',
    'Кликовый омнипотент', 'Повелитель абсолюта', 'Трансцендент кликов', 'Кликовая сингулярность', 'Божество микротранзакций',
    'Архикликер', 'Мегакликовый повелитель', 'Ультракликер', 'Гипермастер кликов', 'Супрем кликер',
    'Апекс кликинга', 'Финальный кликер', 'Абсолютный мастер', 'Кликовый трансцендент', 'Ультимативный повелитель',
    'Мастер реальности', 'Кликовый бог', 'Творец миров', 'Повелитель времени', 'Архитектор судьбы',
    'Создатель вечности', 'Мастер бесконечности', 'Король вселенной', 'Император галактик', 'Бог всех богов'
  ];
  
  clickMilestones.forEach((milestone, index) => {
    extraAchievements.push({
      id: `mega_click_${index + 1}`,
      name: clickNames[index] || `Мега-кликер ${index + 1}`,
      description: `Совершили ${milestone.toLocaleString()} кликов! ${getClickDescription(index)}`,
      requirement: { type: 'clicks', value: milestone },
      reward: { 
        rubles: milestone * (10 + index), 
        goldenEagles: Math.floor(milestone / 100), 
        clickPower: Math.floor((index + 1) * 2),
        multiplier: 1 + (index + 1) * 0.05
      },
      unlocked: false
    });
  });
  
  // CATEGORY 2: Mega Money Achievements (50 achievements)
  const moneyMilestones = [
    10000000, 25000000, 50000000, 100000000, 250000000, 500000000, 1000000000, 2500000000, 5000000000, 10000000000,
    25000000000, 50000000000, 100000000000, 250000000000, 500000000000, 1000000000000, 2500000000000, 5000000000000, 10000000000000, 25000000000000,
    50000000000000, 100000000000000, 250000000000000, 500000000000000, 1000000000000000, 2500000000000000, 5000000000000000, 10000000000000000, 25000000000000000, 50000000000000000,
    100000000000000000, 250000000000000000, 500000000000000000, 1000000000000000000, 2500000000000000000, 5000000000000000000, 10000000000000000000, 25000000000000000000, 50000000000000000000, 100000000000000000000,
    250000000000000000000, 500000000000000000000, 1000000000000000000000, 2500000000000000000000, 5000000000000000000000, 10000000000000000000000, 25000000000000000000000, 50000000000000000000000, 100000000000000000000000, 250000000000000000000000
  ];
  
  const moneyNames = [
    'Миллионщик-разорившийся', 'Банкротский магнат', 'Миллиардер-нищий', 'Триллионер без копейки', 'Экономический террорист',
    'Разрушитель валют', 'Финансовый демон', 'Банковский кошмар', 'Кредитный апокалипсис', 'Денежный вампир',
    'Миллиардный банкрот', 'Триллионный нищий', 'Квадриллионный разоритель', 'Квинтиллионный банкрот', 'Секстиллионный террорист',
    'Септиллионный демон', 'Октиллионный кошмар', 'Нониллионный апокалипсис', 'Дециллионный вампир', 'Ундециллионный деспот',
    'Дуодециллионный титан', 'Тредециллионный левиафан', 'Кваттуордециллионный бог', 'Квиндециллионный демиург', 'Сексдециллионный творец',
    'Септендециллионный архитектор', 'Октодециллионный повелитель', 'Новемдециллионный мастер', 'Вигинтиллионный трансцендент', 'Унвигинтиллионный абсолют',
    'Дуовигинтиллионный омнипотент', 'Тревигинтиллионный всемогущий', 'Кваттуорвигинтиллионный вечный', 'Квинвигинтиллионный бесконечный', 'Сексвигинтиллионный непостижимый',
    'Септенвигинтиллионный неописуемый', 'Октовигинтиллионный немыслимый', 'Новемвигинтиллионный невообразимый', 'Тригинтиллионный неизмеримый', 'Унтригинтиллионный безграничный',
    'Дуотригинтиллионный беспредельный', 'Третригинтиллионный космический', 'Кваттуортригинтиллионный вселенский', 'Квинтригинтиллионный галактический', 'Секстригинтиллионный межпространственный',
    'Септентригинтиллионный мультивселенский', 'Октотригинтиллионный гиперреальный', 'Новемтригинтиллионный трансцендентальный', 'Квадрагинтиллионный метафизический', 'Унквадрагинтиллионный абсолютно окончательный'
  ];
  
  moneyMilestones.forEach((milestone, index) => {
    extraAchievements.push({
      id: `mega_money_${index + 1}`,
      name: moneyNames[index] || `Денежный магнат ${index + 1}`,
      description: `Потратили ${milestone.toLocaleString()} рублей! ${getMoneyDescription(index)}`,
      requirement: { type: 'rubles', value: milestone },
      reward: { 
        rubles: Math.floor(milestone / 5), 
        goldenEagles: Math.floor(milestone / 1000), 
        multiplier: 1 + (index + 1) * 0.02
      },
      unlocked: false
    });
  });
  
  // CATEGORY 3: Golden Eagles Achievements (30 achievements)
  const eagleMilestones = [
    50000, 100000, 250000, 500000, 1000000, 2500000, 5000000, 10000000, 25000000, 50000000,
    100000000, 250000000, 500000000, 1000000000, 2500000000, 5000000000, 10000000000, 25000000000, 50000000000, 100000000000,
    250000000000, 500000000000, 1000000000000, 2500000000000, 5000000000000, 10000000000000, 25000000000000, 50000000000000, 100000000000000, 250000000000000
  ];
  
  eagleMilestones.forEach((milestone, index) => {
    extraAchievements.push({
      id: `eagle_master_${index + 1}`,
      name: `Повелитель орлов ${index + 1}`,
      description: `Накопили ${milestone.toLocaleString()} золотых орлов! Gaijin плачет от радости!`,
      requirement: { type: 'goldenEagles', value: milestone },
      reward: { 
        rubles: milestone * 100, 
        goldenEagles: Math.floor(milestone / 10), 
        clickPower: index + 1
      },
      unlocked: false
    });
  });
  
  // CATEGORY 4: Time-based Achievements (40 achievements)
  const timeMilestones = [
    3600000, 7200000, 14400000, 28800000, 57600000, 115200000, 230400000, 460800000, 921600000, 1843200000,
    3686400000, 7372800000, 14745600000, 29491200000, 58982400000, 117964800000, 235929600000, 471859200000, 943718400000, 1887436800000,
    3774873600000, 7549747200000, 15099494400000, 30198988800000, 60397977600000, 120795955200000, 241591910400000, 483183820800000, 966367641600000, 1932735283200000,
    3865470566400000, 7730941132800000, 15461882265600000, 30923764531200000, 61847529062400000, 123695058124800000, 247390116249600000, 494780232499200000, 989560464998400000, 1979120929996800000
  ];
  
  timeMilestones.forEach((milestone, index) => {
    const hours = Math.floor(milestone / 3600000);
    extraAchievements.push({
      id: `time_waster_${index + 1}`,
      name: `Мастер прокрастинации ${index + 1}`,
      description: `Провели в игре ${hours} часов! Ваша жизнь утекает как деньги в War Thunder!`,
      requirement: { type: 'playTime', value: milestone },
      reward: { 
        rubles: hours * 10000, 
        goldenEagles: hours * 100, 
        multiplier: 1 + (index + 1) * 0.01
      },
      unlocked: false
    });
  });
  
  // CATEGORY 5: Prestige Achievements (25 achievements)
  for (let i = 1; i <= 25; i++) {
    extraAchievements.push({
      id: `prestige_master_${i}`,
      name: `Мастер престижа ${i}`,
      description: `Достигли ${i * 5} звания! Генералы Gaijin отдают вам честь!`,
      requirement: { type: 'prestige', value: i * 5 },
      reward: { 
        rubles: i * 1000000, 
        goldenEagles: i * 50000, 
        multiplier: 1 + i * 0.5
      },
      unlocked: false
    });
  }
  
  // CATEGORY 6: Gaijin Parody Achievements (50 achievements)
  const gaijinAchievements = [
    { name: 'Жертва снаила', desc: 'Купили танк со снаилом. Скорость улитки!', req: 100000 },
    { name: 'Исследователь грехов', desc: 'Изучили все способы потратить деньги в War Thunder!', req: 250000 },
    { name: 'Коллекционер разочарований', desc: 'Собрали коллекцию дорогих разочарований!', req: 500000 },
    { name: 'Специалист по ремонтам', desc: 'Потратили на ремонты больше чем на еду!', req: 750000 },
    { name: 'Мастер разорения', desc: 'Довели до совершенства искусство банкротства!', req: 1000000 },
    { name: 'Гений микротранзакций', desc: 'Поняли всю глубину системы доната Gaijin!', req: 1500000 },
    { name: 'Философ страданий', desc: '"Suffering builds character" - ваш девиз!', req: 2000000 },
    { name: 'Апостол Gaijin', desc: 'Проповедуете истинность дорогого ремонта!', req: 2500000 },
    { name: 'Мученик экономики', desc: 'Пострадали от руки экономических изменений!', req: 3000000 },
    { name: 'Святой банкротства', desc: 'Канонизированы за выдающееся разорение!', req: 4000000 },
    { name: 'Пророк разорения', desc: 'Предсказываете новые способы потратить деньги!', req: 5000000 },
    { name: 'Мессия микротранзакций', desc: 'Спасете Gaijin от банкротства своими донатами!', req: 7500000 },
    { name: 'Бог покупок', desc: 'Создали новую религию потребления!', req: 10000000 },
    { name: 'Архангел доната', desc: 'Охраняете кошельки Gaijin от пустоты!', req: 15000000 },
    { name: 'Серафим трат', desc: 'Поете гимны величию дорогого ремонта!', req: 20000000 },
    { name: 'Херувим покупок', desc: 'Охраняете врата магазина Gaijin!', req: 25000000 },
    { name: 'Престол потребления', desc: 'Восседаете на троне из кредитных карт!', req: 30000000 },
    { name: 'Господство разорения', desc: 'Правите империей банкротства!', req: 40000000 },
    { name: 'Сила траты', desc: 'Ваша мощь разорения безгранична!', req: 50000000 },
    { name: 'Начальство доната', desc: 'Управляете всеми потоками денег к Gaijin!', req: 75000000 },
    { name: 'Власть кошелька', desc: 'Контролируете финансовые потоки планеты!', req: 100000000 },
    { name: 'Княжество покупок', desc: 'Владеете княжеством потребления!', req: 150000000 },
    { name: 'Архангелы разорения', desc: 'Командуете армией банкротов!', req: 200000000 },
    { name: 'Ангелы микротранзакций', desc: 'Благословляете каждую покупку!', req: 250000000 },
    { name: 'Опханим доната', desc: 'Ваши глаза видят все способы потратить деньги!', req: 300000000 },
    { name: 'Элогим покупок', desc: 'Создаете новые виды микротранзакций!', req: 400000000 },
    { name: 'Адонай разорения', desc: 'Ваше имя - синоним банкротства!', req: 500000000 },
    { name: 'Яхве трат', desc: 'Вы - альфа и омега потребления!', req: 750000000 },
    { name: 'Эль Шаддай доната', desc: 'Всемогущий владыка микротранзакций!', req: 1000000000 },
    { name: 'Эйн Соф банкротства', desc: 'Бесконечная сущность разорения!', req: 1500000000 },
    { name: 'Кетер потребления', desc: 'Корона творения потратительства!', req: 2000000000 },
    { name: 'Хокма покупок', desc: 'Мудрость траты денег!', req: 2500000000 },
    { name: 'Бина разорения', desc: 'Понимание истинного банкротства!', req: 3000000000 },
    { name: 'Хесед доната', desc: 'Милосердие к кошельку Gaijin!', req: 4000000000 },
    { name: 'Гебура трат', desc: 'Строгость в тратах!', req: 5000000000 },
    { name: 'Тиферет покупок', desc: 'Красота потребления!', req: 6000000000 },
    { name: 'Нецах разорения', desc: 'Вечность банкротства!', req: 7500000000 },
    { name: 'Ход доната', desc: 'Величие микротранзакций!', req: 10000000000 },
    { name: 'Йесод трат', desc: 'Основание всех покупок!', req: 12500000000 },
    { name: 'Малхут покупок', desc: 'Царство потребления!', req: 15000000000 },
    { name: 'Даат разорения', desc: 'Скрытое знание банкротства!', req: 20000000000 },
    { name: 'Абиссальный донатор', desc: 'Пали в бездну микротранзакций!', req: 25000000000 },
    { name: 'Инфернальный покупатель', desc: 'Правите адом потребления!', req: 30000000000 },
    { name: 'Демиург доната', desc: 'Создали ложную реальность покупок!', req: 40000000000 },
    { name: 'Ктулху трат', desc: 'Безумный бог потребления проснулся!', req: 50000000000 },
    { name: 'Азатот разорения', desc: 'Слепой идиот-бог банкротства!', req: 75000000000 },
    { name: 'Йог-Сотот покупок', desc: 'Ключ и врата всех микротранзакций!', req: 100000000000 },
    { name: 'Ньярлатотеп доната', desc: 'Ползучий хаос потребления!', req: 150000000000 },
    { name: 'Шаб-Ниггурат трат', desc: 'Черная коза лесов с тысячей покупок!', req: 200000000000 },
    { name: 'Хастур разорения', desc: 'Неназываемый король банкротства!', req: 500000000000 }
  ];
  
  gaijinAchievements.forEach((ach, index) => {
    extraAchievements.push({
      id: `gaijin_parody_${index + 1}`,
      name: ach.name,
      description: ach.desc,
      requirement: { type: 'rubles', value: ach.req },
      reward: { 
        rubles: ach.req / 2, 
        goldenEagles: ach.req / 100, 
        multiplier: 1 + (index + 1) * 0.01
      },
      unlocked: false
    });
  });
  
  // CATEGORY 7: Vehicle Collection Achievements (30 achievements)
  for (let tier = 1; tier <= 30; tier++) {
    extraAchievements.push({
      id: `vehicle_collector_${tier}`,
      name: `Коллекционер Тир ${tier}`,
      description: `Собрали ${tier * 5} виртуальных машин разорения! Музей банкротства!`,
      requirement: { type: 'goldenEagles', value: tier * 100000 },
      reward: { 
        rubles: tier * 500000, 
        goldenEagles: tier * 25000, 
        clickPower: tier * 2
      },
      unlocked: false
    });
  }
  
  // CATEGORY 8: Speed Achievements (20 achievements)
  for (let speed = 1; speed <= 20; speed++) {
    extraAchievements.push({
      id: `speed_demon_${speed}`,
      name: `Демон скорости ${speed}`,
      description: `Достигли ${speed * 1000} кликов в минуту! Ваш палец - снаряд!`,
      requirement: { type: 'clicks', value: speed * 100000 },
      reward: { 
        rubles: speed * 100000, 
        clickPower: speed * 3
      },
      unlocked: false
    });
  }
  
  // CATEGORY 9: Epic Milestone Achievements (30 achievements)
  const epicMilestones = [
    { value: 1000000, name: 'Миллионер-банкрот', desc: 'Первый миллион потрачен! Добро пожаловать в клуб!' },
    { value: 10000000, name: 'Мультимиллионер нищеты', desc: 'Десять миллионов улетели в War Thunder!' },
    { value: 100000000, name: 'Центмиллионер разорения', desc: 'Сто миллионов потрачено на виртуальные танки!' },
    { value: 1000000000, name: 'Миллиардер банкротства', desc: 'Миллиард рублей ушел в Gaijin!' },
    { value: 10000000000, name: 'Декамиллиардер траты', desc: 'Десять миллиардов! Можно было купить остров!' },
    { value: 100000000000, name: 'Центмиллиардер разорения', desc: 'Сто миллиардов! Целая страна позавидует!' },
    { value: 1000000000000, name: 'Триллионер нищеты', desc: 'Триллион! Теперь вы бедные как церковная мышь!' },
    { value: 10000000000000, name: 'Декатриллионер доната', desc: 'Десять триллионов ушли в War Thunder!' },
    { value: 100000000000000, name: 'Центтриллионер банкротства', desc: 'Сто триллионов! ВВП планеты меркнет!' },
    { value: 1000000000000000, name: 'Квадриллионер разорения', desc: 'Квадриллион потрачен! Gaijin строит звездолеты!' },
    { value: 10000000000000000, name: 'Декаквадриллионер траты', desc: 'Десять квадриллионов! Вселенная в шоке!' },
    { value: 100000000000000000, name: 'Центквадриллионер нищеты', desc: 'Сто квадриллионов! Созданы новые галактики!' },
    { value: 1000000000000000000, name: 'Квинтиллионер доната', desc: 'Квинтиллион! Боги считают ваши деньги!' },
    { value: 10000000000000000000, name: 'Декаквинтиллионер банкротства', desc: 'Десять квинтиллионов! Математика сдалась!' },
    { value: 100000000000000000000, name: 'Центквинтиллионер разорения', desc: 'Сто квинтиллионов! Числа потеряли смысл!' },
    { value: 1000000000000000000000, name: 'Секстиллионер трат', desc: 'Секстиллион! Вы превзошли воображение!' },
    { value: 10000000000000000000000, name: 'Декасекстиллионер нищеты', desc: 'Десять секстиллионов! Реальность поломалась!' },
    { value: 100000000000000000000000, name: 'Центсекстиллионер доната', desc: 'Сто секстиллионов! Создали новую вселенную!' },
    { value: 1000000000000000000000000, name: 'Септиллионер банкротства', desc: 'Септиллион! Вы стали легендой!' },
    { value: 10000000000000000000000000, name: 'Декасептиллионер разорения', desc: 'Десять септиллионов! Мифы о вас!' },
    { value: 100000000000000000000000000, name: 'Центсептиллионер трат', desc: 'Сто септиллионов! Эпосы слагают!' },
    { value: 1000000000000000000000000000, name: 'Октиллионер нищеты', desc: 'Октиллион! Вы стали богом банкротства!' },
    { value: 10000000000000000000000000000, name: 'Декаоктиллионер доната', desc: 'Десять октиллионов! Творец разорения!' },
    { value: 100000000000000000000000000000, name: 'Центоктиллионер банкротства', desc: 'Сто октиллионов! Архитектор нищеты!' },
    { value: 1000000000000000000000000000000, name: 'Нониллионер разорения', desc: 'Нониллион! Повелитель бедности!' },
    { value: 10000000000000000000000000000000, name: 'Деканониллионер трат', desc: 'Десять нониллионов! Султан банкротства!' },
    { value: 100000000000000000000000000000000, name: 'Центнониллионер нищеты', desc: 'Сто нониллионов! Император разорения!' },
    { value: 1000000000000000000000000000000000, name: 'Дециллионер доната', desc: 'Дециллион! Фараон финансового краха!' },
    { value: 10000000000000000000000000000000000, name: 'Декадециллионер банкротства', desc: 'Десять дециллионов! Кесарь нищеты!' },
    { value: 100000000000000000000000000000000000, name: 'Центдециллионер разорения', desc: 'Сто дециллионов! Абсолютный монарх трат!' }
  ];
  
  epicMilestones.forEach((milestone, index) => {
    extraAchievements.push({
      id: `epic_milestone_${index + 1}`,
      name: milestone.name,
      description: milestone.desc,
      requirement: { type: 'rubles', value: milestone.value },
      reward: { 
        rubles: milestone.value / 4, 
        goldenEagles: milestone.value / 10000, 
        multiplier: 1 + (index + 1) * 0.1
      },
      unlocked: false
    });
  });
  
  // CATEGORY 10: War Thunder Meme Achievements (35 achievements)
  const warThunderMemes = [
    { name: 'Страдалец ремонта', desc: 'Потратили на ремонт больше чем зарабатываете!', req: 50000 },
    { name: 'Любитель снаилов', desc: 'Купили танк медленнее пешехода!', req: 75000 },
    { name: 'Ценитель декалей', desc: 'Потратили состояние на наклейки!', req: 100000 },
    { name: 'Коллекционер флагов', desc: 'Собрали флаги всех стран мира!', req: 125000 },
    { name: 'Мастер камуфляжа', desc: 'Купили все раскраски для невидимости!', req: 150000 },
    { name: 'Эксперт по модификациям', desc: 'Изучили все способы улучшить танк!', req: 200000 },
    { name: 'Специалист по экипажу', desc: 'Прокачали экипаж до космических высот!', req: 250000 },
    { name: 'Гуру талисманов', desc: 'Купили талисманы для всей техники!', req: 300000 },
    { name: 'Фанат премиум аккаунта', desc: 'Купили премиум на следующие 10 лет!', req: 400000 },
    { name: 'Адепт конвертации', desc: 'Конвертировали весь боевой опыт!', req: 500000 },
    { name: 'Ветеран ивентов', desc: 'Участвовали во всех ивентах разорения!', req: 600000 },
    { name: 'Мастер батлпассов', desc: 'Купили все сезоны боевых пропусков!', req: 750000 },
    { name: 'Коллекционер техники', desc: 'Собрали музей дорогих танков!', req: 1000000 },
    { name: 'Эксперт по нациям', desc: 'Прокачали все нации до топа!', req: 1250000 },
    { name: 'Мастер всех режимов', desc: 'Играли во всех игровых режимах!', req: 1500000 },
    { name: 'Гений тактики', desc: 'Изучили все тактики проигрыша денег!', req: 1750000 },
    { name: 'Стратег банкротства', desc: 'Разработали идеальную стратегию трат!', req: 2000000 },
    { name: 'Командир разорения', desc: 'Командуете армией банкротов!', req: 2500000 },
    { name: 'Генерал нищеты', desc: 'Дослужились до генерала бедности!', req: 3000000 },
    { name: 'Маршал трат', desc: 'Высшее звание в армии потребителей!', req: 4000000 },
    { name: 'Академик донатинга', desc: 'Защитили диссертацию по микротранзакциям!', req: 5000000 },
    { name: 'Профессор разорения', desc: 'Преподаете науку банкротства!', req: 6000000 },
    { name: 'Доктор трат', desc: 'Получили степень доктора потребления!', req: 7500000 },
    { name: 'Нобелевский лауреат', desc: 'Нобелевская премия за вклад в разорение!', req: 10000000 },
    { name: 'Олимпийский чемпион', desc: 'Золото в олимпиаде по тратам!', req: 12500000 },
    { name: 'Мировой рекордсмен', desc: 'Мировой рекорд по скорости банкротства!', req: 15000000 },
    { name: 'Гуру экономики', desc: 'Переписали экономические законы!', req: 20000000 },
    { name: 'Пророк потребления', desc: 'Предсказываете будущее микротранзакций!', req: 25000000 },
    { name: 'Мессия доната', desc: 'Спасете мир через микротранзакции!', req: 30000000 },
    { name: 'Аватар Gaijin', desc: 'Воплощение воли Gaijin на земле!', req: 40000000 },
    { name: 'Дух War Thunder', desc: 'Стали духом-хранителем игры!', req: 50000000 },
    { name: 'Душа микротранзакций', desc: 'Ваша душа слилась с магазином!', req: 75000000 },
    { name: 'Сердце Gaijin', desc: 'Стали сердцем компании Gaijin!', req: 100000000 },
    { name: 'Разум экономики', desc: 'Контролируете разум игровой экономики!', req: 150000000 },
    { name: 'Сущность разорения', desc: 'Стали чистой сущностью банкротства!', req: 200000000 }
  ];
  
  warThunderMemes.forEach((meme, index) => {
    extraAchievements.push({
      id: `wt_meme_${index + 1}`,
      name: meme.name,
      description: meme.desc,
      requirement: { type: 'rubles', value: meme.req },
      reward: { 
        rubles: meme.req / 3, 
        goldenEagles: meme.req / 50,
        clickPower: Math.floor((index + 1) / 3) + 1
      },
      unlocked: false
    });
  });
  
  // CATEGORY 11: Russian Humor Achievements (25 achievements)
  const russianJokes = [
    { name: 'Борщ или танк?', desc: 'Выбрали танк вместо еды на неделю!', req: 10000 },
    { name: 'Водка дешевле орлов', desc: 'Орлы дороже хорошей водки!', req: 25000 },
    { name: 'Медведь одобряет', desc: 'Даже медведи восхищаются вашими тратами!', req: 50000 },
    { name: 'Балалайка разорения', desc: 'Играете печальные мелодии банкротства!', req: 75000 },
    { name: 'Матрёшка долгов', desc: 'Долги в долгах, как матрёшки!', req: 100000 },
    { name: 'Самовар слёз', desc: 'Кипятите слёзы от потраченных денег!', req: 150000 },
    { name: 'Ушанка нищеты', desc: 'Носите шапку бедности с гордостью!', req: 200000 },
    { name: 'Валенки банкротства', desc: 'Ходите в валенках финансового краха!', req: 250000 },
    { name: 'Тройка разорения', desc: 'Мчитесь к банкротству на тройке!', req: 300000 },
    { name: 'Кокошник трат', desc: 'Украшаете голову кокошником потребления!', req: 400000 },
    { name: 'Сарафан нищеты', desc: 'Наряжаетесь в сарафан бедности!', req: 500000 },
    { name: 'Лапти долгов', desc: 'Плетёте лапти из кредитных обязательств!', req: 600000 },
    { name: 'Квас банкротства', desc: 'Пьёте квас собственного разорения!', req: 750000 },
    { name: 'Блины траты', desc: 'Печёте блины из потраченных денег!', req: 900000 },
    { name: 'Икра нищеты', desc: 'Чёрная икра стала роскошью недоступной!', req: 1200000 },
    { name: 'Гречка богатства', desc: 'Гречка - ваше главное богатство!', req: 1500000 },
    { name: 'Сметана разорения', desc: 'Заправляете разорение сметаной!', req: 1800000 },
    { name: 'Творог банкротства', desc: 'Лепите фигурки из творога нищеты!', req: 2200000 },
    { name: 'Ряженка трат', desc: 'Пьёте ряженку финансового краха!', req: 2600000 },
    { name: 'Простокваша долгов', desc: 'Квасите простоквашу из долгов!', req: 3000000 },
    { name: 'Тушёнка нищеты', desc: 'Консервируете тушёнку бедности!', req: 3500000 },
    { name: 'Селёдка банкротства', desc: 'Солите селёдку разорения!', req: 4000000 },
    { name: 'Огурцы траты', desc: 'Маринуете огурцы потребления!', req: 4500000 },
    { name: 'Капуста долгов', desc: 'Квасите капусту кредитных обязательств!', req: 5000000 },
    { name: 'Советская ностальгия', desc: 'Ностальгируете по временам без микротранзакций!', req: 6000000 }
  ];
  
  russianJokes.forEach((joke, index) => {
    extraAchievements.push({
      id: `russian_humor_${index + 1}`,
      name: joke.name,
      description: joke.desc,
      requirement: { type: 'rubles', value: joke.req },
      reward: { 
        rubles: joke.req / 2, 
        goldenEagles: joke.req / 25,
        multiplier: 1 + (index + 1) * 0.01
      },
      unlocked: false
    });
  });
  
  return extraAchievements;
};

// Helper functions for descriptions
function getClickDescription(index: number): string {
  const descriptions = [
    'Ваш палец начинает дымиться!',
    'Мышь подала заявление в полицию!',
    'Клавиатура просит пощады!',
    'Экран начинает плавиться!',
    'Компьютер обрел сознание от боли!',
    'NASA засекло ваши клики из космоса!',
    'Ваши клики создают временные парадоксы!',
    'Реальность начинает трескаться!',
    'Вы нарушили законы физики!',
    'Создали новое измерение кликов!'
  ];
  return descriptions[Math.floor(index / 5)] || 'Немыслимые достижения в кликинге!';
}

function getMoneyDescription(index: number): string {
  const descriptions = [
    'Банки мира в панике!',
    'Центробанк объявил чрезвычайное положение!',
    'Мировая экономика рухнула!',
    'Деньги потеряли смысл!',
    'Создали черную дыру из банкротства!',
    'Gaijin покупает планеты!',
    'Вселенная стала банкротом!',
    'Создали новую форму материи из долгов!',
    'Ваши траты превысили ВВП галактики!',
    'Боги экономики склоняются перед вами!'
  ];
  return descriptions[Math.floor(index / 5)] || 'Космические масштабы разорения!';
}

export const getAllAchievements = (): Achievement[] => {
  return [...achievements, ...generateExtraAchievements()];
};
