import Phaser from 'phaser';
import imageLoader from './loaders/images';
import { fullHeightScreen, fullWidthScreen } from './utilities/consts';
import initStartScreen from './screens/start';
import initGameScreen from './screens/game';
import initMainCharacter from './characters/hero';
import initEnemies from './characters/enemies';
import initCards from './cards';
import { getStateValue, setStateValue } from './store';
import { createArmorBar, createHPBar } from './characters/shared';

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
    const character = getStateValue(name);
    const { currentHP, baseHP, x, xOffset, yOffset, bars } = character;
    const { HPBar, HPText, HPBarBg } = bars;

    HPBar.destroy();
    HPText.destroy();
    HPBarBg.destroy();

    setStateValue(name, {
      ...character,
      bars: {
        ...bars,
        ...createHPBar({
          game: this,
          x,
          yOffset,
          xOffset,
          HP: currentHP,
          baseHP: baseHP,
        }),
      },
    });
  }

  updateArmorBar(name) {
    const character = getStateValue(name);
    const { currentArmor, x, xOffset, yOffset, bars } = character;
    const { armorBar, armorText } = bars;

    if (armorBar && armorText) {
      armorBar.destroy();
      armorText.destroy();
    }

    const newArmorBar = currentArmor
      ? createArmorBar({
          game: this,
          x,
          yOffset,
          xOffset,
          armor: currentArmor,
        })
      : { armorBar: null, armorText: null };

    setStateValue(name, {
      ...character,
      bars: {
        ...bars,
        ...newArmorBar,
      },
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
