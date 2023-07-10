const imageLoader = (game) => {
  game.load.image('background', 'src/assets/backgrounds/start.png');
  game.load.image('gBackground', 'src/assets/backgrounds/game.png');
  game.load.image('mainCharacter', 'src/assets/hero/index.png');
  game.load.image('enemy1', 'src/assets/enemies/enemy1.png');
  game.load.image('enemy2', 'src/assets/enemies/enemy2.png');
  game.load.image('enemy3', 'src/assets/enemies/enemy3.png');
  game.load.image('boss', 'src/assets/finalBoss.png');
  game.load.image('card1', 'src/assets/cards/dmg.png');
  game.load.image('card2', 'src/assets/cards/armor.png');
  game.load.image('card3', 'src/assets/cards/heal.png');
  game.load.image('card4', 'src/assets/cards/poison.png');
  game.load.image('card5', 'src/assets/cards/weak.png');
};
export default imageLoader;
