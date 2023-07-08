import Phaser from 'phaser';

const fullWidthScreen = window.innerWidth;
const fullHeightScreen = window.innerHeight;

class MyGame extends Phaser.Scene {
  preload() {
    // Завантаження картинок
    this.load.image('background', 'gamePicture/startPageBg.png');
    this.load.image('gBackground', 'gamePicture/gamePageBg.png');
    this.load.image('mainCharacter', 'gamePicture/mainHero.png');
    this.load.image('enemy1', 'gamePicture/enemy1.png');
    this.load.image('enemy2', 'gamePicture/enemy2.png');
    this.load.image('enemy3', 'gamePicture/enemy3.png');
    this.load.image('boss', 'gamePicture/finalBossBg.png');
    this.load.image('card1', 'gamePicture/dmgCard.png');
    this.load.image('card2', 'gamePicture/armorCard.png');
    this.load.image('card3', 'gamePicture/healCard.png');
    this.load.image('card4', 'gamePicture/poisonCard.png');
    this.load.image('card5', 'gamePicture/weakCard.png');
  }

  create() {
    const background = this.add.image(0, 0, 'background').setOrigin(0);
    background.displayWidth = this.sys.game.config.width;
    background.displayHeight = this.sys.game.config.height;
    this.add
      .text(fullWidthScreen / 2, (fullHeightScreen - 150) / 2, 'name', { fontSize: '24px', fill: '#fff' })
      .setOrigin(0.5);
    const newGameButton = this.add
      .text(fullWidthScreen / 2, fullHeightScreen / 2, 'New Game', { fontSize: '24px', fill: '#fff' })
      .setOrigin(0.5);
    newGameButton.setInteractive();
    newGameButton.on('pointerdown', () => {
      this.startGame();
    });
  }

  startGame() {
    // Код для початку гри
    // Додаткові елементи та налаштування гри
    this.add.text(700, 10, 'Stage 1', { fontSize: '24px', fill: '#fff' }).setOrigin(1, 0);
    this.createBackground();
    this.createMainCharacter();
    this.createEnemies();
    this.createCards();
  }

  createBackground() {
    const background = this.add.image(0, 0, 'gBackground').setOrigin(0);
    background.displayWidth = this.sys.game.config.width;
    background.displayHeight = this.sys.game.config.height;
    // Налаштування фону гри
  }

  createMainCharacter() {
    this.add.image((fullWidthScreen / 10) * 2, (fullHeightScreen / 3) * 2, 'mainCharacter').setScale(0.5);
    // Налаштування головного персонажа
    const mainCharacterHPBar = this.add.rectangle(500, 250, 80, 10, 0xff0000);
    mainCharacterHPBar.setOrigin(0.5);
  }

  createEnemies() {
    this.add.image((fullWidthScreen / 10) * 7, (fullHeightScreen / 3) * 2, 'enemy1').setScale(0.5);
    this.add.image((fullWidthScreen / 10) * 9, (fullHeightScreen / 3) * 2, 'enemy2').setScale(0.5);
    // Налаштування бічних персонажів
    const enemy1HPBar = this.add.rectangle(700, 200, 80, 10, 0xff0000);
    enemy1HPBar.setOrigin(0.5);
    const enemy2HPBar = this.add.rectangle(700, 300, 80, 10, 0xff0000);
    enemy2HPBar.setOrigin(0.5);
  }

  createCards() {
    const card1 = this.add
      .image((fullWidthScreen / 10) * 3, (fullHeightScreen / 10) * 9, 'card1')
      .setScale(0.5)
      .setInteractive();
    const card2 = this.add
      .image((fullWidthScreen / 10) * 4, (fullHeightScreen / 10) * 9, 'card2')
      .setScale(0.5)
      .setInteractive();
    const card3 = this.add
      .image((fullWidthScreen / 10) * 5, (fullHeightScreen / 10) * 9, 'card3')
      .setScale(0.5)
      .setInteractive();
    const card4 = this.add
      .image((fullWidthScreen / 10) * 6, (fullHeightScreen / 10) * 9, 'card4')
      .setScale(0.5)
      .setInteractive();
    const card5 = this.add
      .image((fullWidthScreen / 10) * 7, (fullHeightScreen / 10) * 9, 'card5')
      .setScale(0.5)
      .setInteractive();
    const cards = [card1, card2, card3, card4, card5];
    let centerCard = '';

    const scene = this; // Збереження посилання на сцену для використання в обробниках подій

    cards.forEach((card) => {
      const { x, y, z } = { ...card };
      scene.tweens.add({
        targets: card,
        y,
        z,
        duration: 1000,
        ease: 'Power2',
        delay: 500,
        onComplete: () => {
          card.on('pointerdown', () => {
            if (centerCard === card.texture.key) {
              // Картка вже в центрі, повернення на початкові координати
              scene.tweens.add({
                targets: card,
                x,
                y,
                z,
                duration: 500,
                ease: 'Power2',
              });
              centerCard = '';
            } else {
              // Переміщення картки в центр
              console.debug(card);
              if (!centerCard)
                scene.tweens.add({
                  targets: card,
                  x: fullWidthScreen / 2,
                  y: fullHeightScreen / 2,
                  z: 100,
                  duration: 500,
                  ease: 'Power2',
                });
              centerCard = card.texture.key;
            }
          });
        },
      });
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: fullWidthScreen,
  height: fullHeightScreen,
  scene: MyGame,
};

new Phaser.Game(config);
