import { getStateValue, setStateValue } from '../store';
import { attack } from './actions';
import { createCharacter, createHPBar } from './shared';

const init = (game) => {
  const baseAttack = 5;
  const baseHP = 40;
  const currentHP = 40;

  const enemyState = {
    baseAttack,
    baseHP,
    currentHP,
  };

  const enemy1 = createCharacter({ game, x: 7, name: 'enemy1' });
  const enemy1HPBar = createHPBar({
    game,
    x: 7,
    yOffset: enemy1.height,
    xOffset: 45,
    HP: currentHP,
    baseHP: baseHP,
  });

  setStateValue('enemy1', { ...enemyState, HPBar: enemy1HPBar, x: 7, xOffset: 45, yOffset: enemy1.height });

  const enemy2 = createCharacter({ game, x: 9, name: 'enemy2' });
  const enemy2HPBar = createHPBar({
    game,
    x: 9,
    yOffset: enemy2.height,
    xOffset: 45,
    HP: currentHP,
    baseHP: baseHP,
  });

  setStateValue('enemy2', { ...enemyState, HPBar: enemy2HPBar, x: 9, xOffset: 45, yOffset: enemy2.height });

  attack({ game, damage: 25, name: 'enemy1' });
};

export default init;
