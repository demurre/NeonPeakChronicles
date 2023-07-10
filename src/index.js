import Phaser from 'phaser';
import imageLoader from './loaders/images';
import { fullHeightScreen, fullWidthScreen } from './utilities/consts';
import initStartScreen from './screens/start';
import initGameScreen from './screens/game';
import initMainCharacter from './characters/hero';
import initEnemies from './characters/enemies';
import initCards from './cards';
import { createHPBar } from './characters/shared';

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

  updateHPBar(character) {
    const { currentHP, baseHP, x, yOffset, xOffset } = character;
    createHPBar({ game: this, HP: currentHP, baseHP, x, yOffset, xOffset });
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
