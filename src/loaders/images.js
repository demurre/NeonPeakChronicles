const imageLoader = (game) => {
  game.load.image('background', '../assets/backgrounds/startg.png');
  game.load.image('gBackground', '../assets/backgrounds/game.png');
  game.load.image('mainCharacter', '../assets/hero/index.png');
  game.load.image('enemy1', '../assets/enemies/enemy1.png');
  game.load.image('enemy2', '../assets/enemies/enemy2.png');
  game.load.image('enemy3', '../assets/enemies/enemy3.png');
  game.load.image('boss', '../assets/finalBoss.png');
  game.load.image('card1', '../assets/cards/dmg.png');
  game.load.image('card2', '../assets/cards/armor.png');
  game.load.image('card3', '../assets/cards/heal.png');
  game.load.image('card4', '../assets/cards/poison.png');
  game.load.image('card5', '../assets/cards/weak.png');
  game.load.image('hpbar40', '../assets/bars/40.png');
  game.load.image('hpbar30', '../assets/bars/30.png');
  game.load.image('hpbar20', '../assets/bars/20.png');
  game.load.image('hpbar10', '../assets/bars/10.png');
  game.load.image('armoBar', '../assets/bars/armor.png');
};

export default imageLoader;
