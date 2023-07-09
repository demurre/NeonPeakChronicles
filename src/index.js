import Phaser from 'phaser';
import imageLoader from './loaders/images';
import { fullHeightScreen, fullWidthScreen } from './utilities/consts';
import initStartScreen from './screens/start';
import initGameScreen from './screens/game';
import initMainCharacter from './characters/hero';
import initEnemies from './characters/enemies';
import initCards from './cards';
import initAttack from './cards/do';

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
    this.input.on('gameobjectdown', this.onObjectClicked, this);
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

  doCard() {
    initAttack(this);
  }
  onObjectClicked(gameObject) {
    if (gameObject === this.mainCharacter) {
      // Обробка натискання на головного персонажа
      console.log('Main character clicked');
    } else if (this.enemies.contains(gameObject)) {
      // Обробка натискання на ворога
      const enemy = gameObject;
      console.log('Enemy clicked:', enemy);

      // Виклик функції doCard для виконання логіки карти
      this.doCard();
    }
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
