import Phaser from 'phaser';
import imageLoader from './loaders/images';
import { fullHeightScreen, fullWidthScreen } from './utilities/consts';
import initStartScreen from './screens/start';
import initGameScreen from './screens/game';
import initHero from './characters/hero';
import initEnemies, { destroyEnemies } from './characters/enemies';
import { getStateValue, setStateValue } from './store';
import { createArmorBar, createHPBar } from './characters/shared';
import initCards from './cards';
import addEvents from './events';
import createEndTurnButton from './components/buttons/endTurnButton';
import { attack, decrementAttack, resetAttack } from './characters/actions';
import initFinalScreen from './screens/final';
import initFinalBoss from './characters/finalBoss';
import { getEnemiesKeys } from './utilities/helpers';

class MyGame extends Phaser.Scene {
  preload() {
    imageLoader(this);
  }

  finalScreen() {
    initFinalScreen(this);
  }

  create() {
    initStartScreen(this);
  }

  startGame() {
    this.init();
  }

  init() {
    initGameScreen(this);
    let boss;
    const enemies = initEnemies(this);
    const hero = initHero(this);

    if (getStateValue('stageCount') === 4) {
      boss = initFinalBoss(this);
      destroyEnemies();
    }
    const cards = initCards(this);

    let centerCard = null;

    addEvents(this, { cards, enemies, hero, centerCard, boss });
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

  updateEffects() {
    const currentTurn = getStateValue('turnCount');
    const enemiesKeys = getEnemiesKeys();
    enemiesKeys.forEach((key) => {
      const enemy = getStateValue(key);
      if (enemy.effects.poison) {
        const endTurn = enemy.effects.poison.endTurn;
        if (currentTurn <= endTurn) attack({ game: this, damage: 1, name: key });
      }
      if (enemy.effects.weak) {
        const endTurn = enemy.effects.weak.endTurn;
        if (currentTurn < endTurn) decrementAttack({ divider: 2, name: key });

        if (currentTurn === endTurn) resetAttack({ name: key });
      }
    });
  }

  removeCardFromHand(card) {
    const id = card.getData('id');
    const hand = getStateValue('hand');
    setStateValue(
      'hand',
      hand.filter((card) => card.getData('id') !== id),
    );
    card.destroy();
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
