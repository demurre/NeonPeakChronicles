/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import imageLoader from './loaders/images';
import { fullHeightScreen, fullWidthScreen } from './utilities/consts';
import initStartScreen from './screens/start';
import initGameScreen from './screens/game';
import initMainCharacter from './characters/hero';
import initEnemies from './characters/enemies';
import initCards from './cards';

class MyGame extends Phaser.Scene {
  preload() {
    imageLoader(this);
  }

  create() {
    initStartScreen(this);
  }

  startGame() {
    this.createBackground();
    this.createMainCharacter();
    this.createEnemies();
    this.createCards();
  }

  createBackground() {
    initGameScreen(this);
  }

  createMainCharacter() {
    initMainCharacter(this);
  }

  createEnemies() {
    initEnemies(this);
  }

  createCards() {
    initCards(this);
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
      this.updateHPBar(
        mainCharacter.hpBar,
        mainCharacter.currentHP,
        mainCharacter.baseHP,
      );
  }

  restoreHPToMainCharacter(card) {
    // Отримання головного персонажа
    const mainCharacter = // Отримати головного персонажа
      // Відновлення HP головного персонажа
      (mainCharacter.currentHP = mainCharacter.baseHP);

    // Оновлення HP-бара головного персонажа
    this.updateHPBar(
      mainCharacter.hpBar,
      mainCharacter.currentHP,
      mainCharacter.baseHP,
    );
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
  parent: 'game',
  width: fullWidthScreen,
  height: fullHeightScreen,
  scene: MyGame,
};

new Phaser.Game(config);
