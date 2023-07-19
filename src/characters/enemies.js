import { setStateValue } from '../store';
// import { attack } from './actions';
import { createCharacter, createHPBar } from './shared';

const initEnemies = (game) => {
  const baseAttack = 4;
  const baseHP = 20;
  const currentHP = 20;

  const enemyState = {
    baseAttack,
    baseHP,
    currentHP,
  };

  const enemy1 = createCharacter({ game, x: 7, name: 'enemy1', isClicked: true });

  const enemyBars1 = {
    ...createHPBar({
      game,
      x: 7,
      yOffset: enemy1.height,
      xOffset: 45,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('enemy1', { ...enemyState, bars: enemyBars1, x: 7, xOffset: 45, yOffset: enemy1.height });

  const enemy2 = createCharacter({ game, x: 9, name: 'enemy2', isClicked: true });
  const enemyBars2 = {
    ...createHPBar({
      game,
      x: 9,
      yOffset: enemy2.height,
      xOffset: 45,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('enemy2', { ...enemyState, bars: enemyBars2, x: 9, xOffset: 45, yOffset: enemy2.height });
  // attack({ game, damage: 35, name: 'enemy1' });
  // attack({ game, damage: 5, name: 'enemy1' });
  // attack({ game, damage: 35, name: 'enemy2' });
  return [enemy1, enemy2];
};

export default initEnemies;
