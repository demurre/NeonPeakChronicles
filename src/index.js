/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import imageLoader from './loaders/images';

const fullWidthScreen = window.innerWidth;
const fullHeightScreen = window.innerHeight;

class MyGame extends Phaser.Scene {
  preload() {
    imageLoader(this);
  }

  create() {
    const background = this.add.image(0, 0, 'background').setOrigin(0);
    background.displayWidth = this.sys.game.config.width;
    background.displayHeight = this.sys.game.config.height;
    this.add
      .text(fullWidthScreen / 2, (fullHeightScreen - 100) / 2, 'name', {
        fontFamily: 'Interstatic',
        fontSize: '32px',
        fill: '#fff',
      })
      .setOrigin(0.5);
    const newGameButton = this.add
      .text(fullWidthScreen / 2, fullHeightScreen / 2, 'New Game', {
        fontFamily: 'Interstatic',
        fontSize: '32px',
        fill: '#fff',
      })
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

    const rectangleGraphics = this.add.graphics(); // Створення графіки для прямокутника

    // Налаштування стилю для прямокутника
    const rectangleStyle = { fillStyle: { color: 0x87ceeb, alpha: 0.5 } };

    // Малювання прямокутника
    rectangleGraphics.fillStyle(rectangleStyle.fillStyle.color, rectangleStyle.fillStyle.alpha);
    rectangleGraphics.fillRect(0, 0, this.sys.game.config.width, 50);

    // Додавання тексту "name"
    this.add
      .text(10, 10, 'name', { fontFamily: 'Interstatic', fontSize: '24px', fill: '#fff', align: 'left' })
      .setOrigin(0, 0);

    // Відображення етапу (замість "1" можна використовувати змінну або стан гри)
    const currentStage = 1;
    this.add
      .text(fullWidthScreen - 75, 10, `Stage ${currentStage}`, {
        fontFamily: 'Interstatic',
        fontSize: '24px',
        fill: '#fff',
        align: 'right',
      })
      .setOrigin(0.5, 0);
  }

  createMainCharacter() {
    const mainCharacter = this.add
      .image((fullWidthScreen / 10) * 2, (fullHeightScreen / 3) * 2, 'mainCharacter')
      .setScale(0.5);
    // Налаштування головного персонажа
    const mainCharacterHPBar = this.add
      .image((fullWidthScreen / 9) * 2, (fullHeightScreen / 10) * 9 - mainCharacter.height / 2, 'hpbar40')
      .setScale(0.5);
    mainCharacterHPBar.setOrigin(0.5);
    mainCharacter.baseHP = 40;
    mainCharacter.currentHP = mainCharacter.baseHP;
    mainCharacter.hpBar = mainCharacterHPBar;
  }

  createEnemies() {
    const enemy1 = this.add
      .image((fullWidthScreen / 10) * 7, (fullHeightScreen / 3) * 2, 'enemy1')
      .setScale(0.5);
    const enemy2 = this.add
      .image((fullWidthScreen / 10) * 9, (fullHeightScreen / 3) * 2, 'enemy2')
      .setScale(0.5);
    // Налаштування бічних персонажів
    const enemy1HPBar = this.add
      .image((fullWidthScreen / 10) * 7, (fullHeightScreen / 10) * 9 - enemy1.height / 2, 'hpbar40')
      .setScale(0.5);
    enemy1HPBar.setOrigin(0.5);
    const enemy2HPBar = this.add
      .image((fullWidthScreen / 10) * 9, (fullHeightScreen / 10) * 9 - enemy2.height / 2, 'hpbar40')
      .setScale(0.5);
    enemy2HPBar.setOrigin(0.5);
    enemy1.baseAttack = 5;
    enemy1.baseHP = 40;
    enemy1.currentHP = enemy1.baseHP;
    enemy1.hpBar = enemy1HPBar;
    enemy2.baseAttack = 5;
    enemy2.baseHP = 40;
    enemy2.currentHP = enemy2.baseHP;
    enemy2.hpBar = enemy2HPBar;
  }

  createCards() {
    const card1 = this.add
      .image((fullWidthScreen / 10) * 3, (fullHeightScreen / 14) * 13, 'card1')
      .setScale(0.5)
      .setInteractive();
    const card2 = this.add
      .image((fullWidthScreen / 10) * 4, (fullHeightScreen / 14) * 13, 'card2')
      .setScale(0.5)
      .setInteractive();
    const card3 = this.add
      .image((fullWidthScreen / 10) * 5, (fullHeightScreen / 14) * 13, 'card3')
      .setScale(0.5)
      .setInteractive();
    const card4 = this.add
      .image((fullWidthScreen / 10) * 6, (fullHeightScreen / 14) * 13, 'card4')
      .setScale(0.5)
      .setInteractive();
    const card5 = this.add
      .image((fullWidthScreen / 10) * 7, (fullHeightScreen / 14) * 13, 'card5')
      .setScale(0.5)
      .setInteractive();

    const cards = [card1, card2, card3, card4, card5];
    let centerCard = null; // Змінна для зберігання посилання на картку в центрі

    const scene = this;

    cards.forEach((card) => {
      const { x, y, z } = { ...card };
      scene.tweens.add({
        targets: card,
        x,
        y,
        z,
        duration: 1000,
        ease: 'Power2',
        delay: 500,
        onComplete: () => {
          card.on('pointerdown', () => {
            if (centerCard === card) {
              // Картка вже в центрі, повернення на початкові координати
              scene.tweens.add({
                targets: card,
                x,
                y,
                z,
                duration: 500,
                ease: 'Power2',
              });
              centerCard = null; // Встановлюємо центральну картку в значення null
            } else if (centerCard === null) {
              // Переміщення картки в центр, якщо немає жодної картки в центрі
              const centerX = fullWidthScreen / 2;
              const centerY = fullHeightScreen / 2;
              const cardWidth = card.displayWidth * card.scaleX;
              const cardHeight = card.displayHeight * card.scaleY;
              const targetX = centerX - cardWidth / 2;
              const targetY = centerY - cardHeight / 2;

              scene.tweens.add({
                targets: card,
                x: targetX,
                y: targetY,
                z: 100,
                duration: 500,
                ease: 'Power2',
              });
              centerCard = card; // Зберігаємо посилання на центральну картку
            }

            // Виконання відповідних дій для кожної карти
            switch (card) {
              case card1:
                this.attackEnemy(card, 5);
                break;
              case card2:
                this.addArmorToMainCharacter(card, 5);
                break;
              case card3:
                this.restoreHPToMainCharacter(card);
                break;
              case card4:
                this.applyPoisonEffect(card);
                break;
              case card5:
                this.applyWeakEffect(card);
                break;
            }
          });
        },
      });
    });
  }

  attackEnemy(card, damage) {
    // Отримання посилання на enemy, на якого було натиснуто картку
    const enemy = // Отримати enemy
      // Застосування шкоди до enemy
      (enemy.currentHP -= damage);

    // Оновлення HP-бара enemy
    this.updateHPBar(enemy.hpBar, enemy.currentHP, enemy.baseHP);

    // Перевірка, чи enemy був убитий
    if (enemy.currentHP <= 0) {
      // enemy був убитий, виконати відповідні дії
    }
  }

  addArmorToMainCharacter(card, armor) {
    // Отримання головного персонажа
    const mainCharacter = // Отримати головного персонажа
      // Додавання броні головному персонажу
      // Додати броню до головного персонажа

      // Оновлення HP-бара головного персонажа
      this.updateHPBar(mainCharacter.hpBar, mainCharacter.currentHP, mainCharacter.baseHP);
  }

  restoreHPToMainCharacter(card) {
    // Отримання головного персонажа
    const mainCharacter = // Отримати головного персонажа
      // Відновлення HP головного персонажа
      (mainCharacter.currentHP = mainCharacter.baseHP);

    // Оновлення HP-бара головного персонажа
    this.updateHPBar(mainCharacter.hpBar, mainCharacter.currentHP, mainCharacter.baseHP);
  }

  applyPoisonEffect(card) {
    // Отримання enemy, на якого було натиснуто картку
    const enemy = // Отримати enemy
      // Застосування ефекту отрути до enemy
      // Застосувати ефект отрути до enemy

      // Відображення зеленого кола на enemy
      this.showEffectCircle(enemy, 'green');
  }

  applyWeakEffect(card) {
    // Отримання enemy, на якого було натиснуто картку
    const enemy = // Отримати enemy
      // Застосування ефекту слабкості до enemy
      // Застосувати ефект слабкості до enemy

      // Відображення сірого кола на enemy
      this.showEffectCircle(enemy, 'gray');
  }

  updateHPBar(hpBar, currentHP, baseHP) {
    const scaleFactor = currentHP / baseHP; // Розрахунок масштабного коефіцієнта HP-бара
    hpBar.setScale(scaleFactor, 1); // Оновлення масштабу HP-бара
  }

  showEffectCircle(target, color) {
    this.add.circle(target.x, target.y, target.displayWidth / 2, color, 0.5); // Створення круга з відповідним кольором
    // Додаткові дії з ефектом кола (наприклад, анімація)
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
