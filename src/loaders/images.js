const imageLoader = (game) => {
  game.load.image('background', 'assets/backgrounds/start.png');
  game.load.image('gBackground', 'assets/backgrounds/game.png');
  game.load.image('finalBackground', 'assets/backgrounds/final.png');
  game.load.image('hero', 'assets/hero/index.png');
  game.load.image('enemy1', 'assets/enemies/enemy1.png');
  game.load.image('enemy2', 'assets/enemies/enemy2.png');
  game.load.image('enemy3', 'assets/enemies/enemy3.png');
  game.load.image('boss', 'assets/enemies/boss.png');
  game.load.image('card1', 'assets/cards/dmg.png');
  game.load.image('card2', 'assets/cards/armor.png');
  game.load.image('card3', 'assets/cards/heal.png');
  game.load.image('card4', 'assets/cards/poison.png');
  game.load.image('card5', 'assets/cards/weak.png');
};

export default imageLoader;
