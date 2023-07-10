import { createCharacter, createHPBar } from './shared';

const initMainCharacter = (game) => {
  const mainCharacter = createCharacter({ game, x: 2, name: 'mainCharacter' });
  mainCharacter.baseHP = 40;
  mainCharacter.currentHP = mainCharacter.baseHP;
  const { HPBar } = createHPBar({
    game,
    x: 2,
    yOffset: mainCharacter.height,
    xOffset: 0,
    HP: mainCharacter.currentHP,
    baseHP: mainCharacter.baseHP,
  });
  mainCharacter.hpBar = HPBar;
};

export default initMainCharacter;
