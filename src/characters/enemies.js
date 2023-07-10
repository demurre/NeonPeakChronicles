import { createCharacter, createHPBar } from './shared';

const init = (game) => {
  const enemy1 = createCharacter({ game, x: 7, name: 'enemy1' });
  enemy1.baseAttack = 5;
  enemy1.baseHP = 40;
  enemy1.currentHP = enemy1.baseHP;
  enemy1.x = 7;
  enemy1.yOffset = enemy1.height;
  enemy1.xOffset = 45;
  createHPBar({
    game,
    x: enemy1.x,
    yOffset: enemy1.yOffset,
    xOffset: enemy1.xOffset,
    HP: enemy1.currentHP,
    baseHP: enemy1.baseHP,
  });

  const enemy2 = createCharacter({ game, x: 9, name: 'enemy2' });
  enemy2.baseAttack = 5;
  enemy2.baseHP = 40;
  enemy2.currentHP = enemy2.baseHP;
  enemy2.x = 9;
  enemy2.yOffset = enemy2.height;
  enemy2.xOffset = 45;
  createHPBar({
    game,
    x: enemy2.x,
    yOffset: enemy2.yOffset,
    xOffset: enemy2.xOffset,
    HP: enemy2.currentHP,
    baseHP: enemy2.baseHP,
  });
};

export default init;
