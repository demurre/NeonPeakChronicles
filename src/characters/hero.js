import { setStateValue } from '../store';
import { createCharacter, createHPBar } from './shared';

const initMainCharacter = (game) => {
  const mainCharacter = createCharacter({ game, x: 2, name: 'mainCharacter' });
  const baseHP = 40;
  const currentHP = 40;

  const mainCharacterState = {
    baseHP,
    currentHP,
  };

  const HPBar = createHPBar({
    game,
    x: 2,
    yOffset: mainCharacter.height,
    xOffset: 0,
    HP: currentHP,
    baseHP: baseHP,
  });

  setStateValue('mainCharacter', {
    ...mainCharacterState,
    HPBar,
    x: 2,
    xOffset: 0,
    yOffset: mainCharacter.height,
  });
};

export default initMainCharacter;
