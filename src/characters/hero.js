import { createCharacter, createHPBar } from './shared';

const init = (game) => {
  const mainCharacter = createCharacter({ game, x: 2, name: 'mainCharacter' });
  mainCharacter.baseHP = 40;
  mainCharacter.currentHP = mainCharacter.baseHP;
  mainCharacter.x = 2;
  mainCharacter.yOffset = mainCharacter.height;
  mainCharacter.xOffset = 0;

  createHPBar({
    game,
    x: mainCharacter.x,
    yOffset: mainCharacter.yOffset,
    xOffset: mainCharacter.xOffset,
    HP: mainCharacter.currentHP,
    baseHP: mainCharacter.baseHP,
  });
};
export default init;
