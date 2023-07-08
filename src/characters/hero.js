import { createCharacter, createHPBar } from './shared';

const init = (game) => {
  const mainCharacter = createCharacter({ game, x: 2, name: 'mainCharacter' });
  mainCharacter.baseHP = 40;
  mainCharacter.currentHP = mainCharacter.baseHP;
  mainCharacter.hpBar = mainCharacterHPBar;
  const mainCharacterHPBar = createHPBar({
    game,
    x: 2,
    name: 'hpbar40',
    yOffset: mainCharacter.height,
    xOffset: 45,
  });
};
export default init;
