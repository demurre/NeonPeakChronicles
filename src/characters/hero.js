import { setStateValue } from '../store';
import { createArmorBar, createCharacter, createHPBar } from './shared';
// import { def, attack, healing } from './actions';

const initHero = (game) => {
  const baseHP = 40;
  const currentHP = 40;
  const currentArmor = 0;

  const heroState = {
    baseHP,
    currentHP,
    currentArmor,
  };
  const hero = createCharacter({ game, x: 2, name: 'hero' });

  const bars = {
    ...createArmorBar({
      game,
      x: 2,
      yOffset: hero.height,
      xOffset: 0,
      armor: currentArmor,
    }),
    ...createHPBar({
      game,
      x: 2,
      yOffset: hero.height,
      xOffset: 0,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('hero', {
    ...heroState,
    bars,
    x: 2,
    xOffset: 0,
    yOffset: hero.height,
    effects: {},
  });
  game.updateArmorBar('hero');
  //def({ game, armor: 40, name: 'hero' });
  // attack({ game, damage: 20, name: 'hero' });
  // healing({ game, heal: 10, name: 'hero' });
  // def({ game, armor: 10, name: 'hero' });
  return hero;
};

export default initHero;
