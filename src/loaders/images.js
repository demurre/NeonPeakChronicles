const imageLoader = (game) => {
  game.load.image('background', 'assets/gamePicture/startPageBg.png');
  game.load.image('gBackground', 'assets/gamePicture/gamePageBg.png');
  game.load.image('mainCharacter', 'assets/gamePicture/mainHero.png');
  game.load.image('enemy1', 'src/gamePicture/enemy1.png');
  game.load.image('enemy2', 'src/gamePicture/enemy2.png');
  game.load.image('enemy3', 'src/gamePicture/enemy3.png');
  game.load.image('boss', 'src/gamePicture/finalBossBg.png');
  game.load.image('card1', 'src/gamePicture/dmgCard1.png');
  game.load.image('card2', 'src/gamePicture/armorCard1.png');
  game.load.image('card3', 'src/gamePicture/healCard1.png');
  game.load.image('card4', 'src/gamePicture/poisonCard1.png');
  game.load.image('card5', 'src/gamePicture/weakCard1.png');
  game.load.image('hpbar40', 'src/gamePicture/40.png');
  game.load.image('hpbar30', 'src/gamePicture/30.png');
  game.load.image('hpbar20', 'src/gamePicture/20.png');
  game.load.image('hpbar10', 'src/gamePicture/10.png');
  game.load.image('armoBar', 'src/gamePicture/armorBar.png');
};

export default imageLoader;
