import { createCharacter, createHPBar } from './shared.js';

const init = (game) => {
  const enemy1 = createCharacter({ game, x: 7, name: 'enemy1' });
  enemy1.baseAttack = 5;
  enemy1.baseHP = 40;
  enemy1.currentHP = enemy1.baseHP;
  const enemy1HPBar = createHPBar({
    game,
    x: 7,
    name: 'hpbar40',
    yOffset: enemy1.height,
    xOffset: 0,
  });
  enemy1.hpBar = enemy1HPBar;

  const enemy2 = createCharacter({ game, x: 9, name: 'enemy2' });
  enemy2.baseAttack = 5;
  enemy2.baseHP = 40;
  enemy2.currentHP = enemy2.baseHP;
  const enemy2HPBar = createHPBar({
    game,
    x: 9,
    name: 'hpbar40',
    yOffset: enemy2.height,
    xOffset: 0,
  });
  enemy2.hpBar = enemy2HPBar;
};

export default init;
