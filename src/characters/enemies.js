import { attack } from './actions';
import { createCharacter, createHPBar } from './shared';

const init = (game) => {
  const enemy1 = createCharacter({ game, x: 7, name: 'enemy1' });
  enemy1.baseAttack = 5;
  enemy1.baseHP = 40;
  enemy1.currentHP = enemy1.baseHP;
  const enemy1HPBar = createHPBar({
    game,
    x: 7,
    yOffset: enemy1.height,
    xOffset: 45,
    HP: enemy1.currentHP,
    baseHP: enemy1.baseHP,
  });
  enemy1.hpBar = enemy1HPBar;

  const enemy2 = createCharacter({ game, x: 9, name: 'enemy2' });
  enemy2.baseAttack = 5;
  enemy2.baseHP = 40;
  enemy2.currentHP = enemy2.baseHP;
  const enemy2HPBar = createHPBar({
    game,
    x: 9,
    yOffset: enemy2.height,
    xOffset: 45,
    HP: enemy2.currentHP,
    baseHP: enemy2.baseHP,
  });
  enemy2.hpBar = enemy2HPBar;

  attack({ game, damage: 5, character: enemy1 });
};

export default init;
