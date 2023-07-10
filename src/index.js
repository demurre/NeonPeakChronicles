import Phaser from 'phaser';
import imageLoader from './loaders/images';
import { fullHeightScreen, fullWidthScreen } from './utilities/consts';
import initStartScreen from './screens/start';
import initGameScreen from './screens/game';
import initMainCharacter from './characters/hero';
import initEnemies from './characters/enemies';
import initCards from './cards';
import { getStateValue } from './store';
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

  updateHPBar(name) {
    const { HPBar, currentHP, baseHP, x, xOffset, yOffset } = getStateValue(name);

    HPBar.clear();
    createHPBar({
      game: this,
      x,
      yOffset,
      xOffset,
      HP: currentHP,
      baseHP: baseHP,
    });
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
