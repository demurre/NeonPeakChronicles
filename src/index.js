import Phaser from 'phaser';
import imageLoader from './loaders/images';
import { fullHeightScreen, fullWidthScreen } from './utilities/consts';
import initStartScreen from './screens/start';
import initGameScreen from './screens/game';
import initHero from './characters/hero';
import initEnemies from './characters/enemies';
import { getStateValue, setStateValue } from './store';
import { createArmorBar, createHPBar } from './characters/shared';
import initCards from './cards';
import addEvents from './events';
import createEndTurnButton from './components/buttons/endTurnButton';

class MyGame extends Phaser.Scene {
  preload() {
    imageLoader(this);
  }
  create() {
    initStartScreen(this);
  }

  startGame() {
    this.init();
  }

  init() {
    initGameScreen(this);
    const enemies = initEnemies(this);
    const hero = initHero(this);
    const cards = initCards(this);

    let centerCard = null;

    addEvents(this, { cards, enemies, hero, centerCard });
    createEndTurnButton(this, { cards, enemies, hero, centerCard });
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
