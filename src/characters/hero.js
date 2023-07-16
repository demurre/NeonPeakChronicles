import { setStateValue } from '../store';
import { createArmorBar, createCharacter, createHPBar } from './shared';
//import { def, attack } from './actions';

const initMainCharacter = (game) => {
  const baseHP = 40;
  const currentHP = 40;
  const currentArmor = 0;

  const mainCharacterState = {
    baseHP,
    currentHP,
    currentArmor,
  };
  const mainCharacter = createCharacter({ game, x: 2, name: 'mainCharacter' });

  const bars = {
    ...createArmorBar({
      game,
      x: 2,
      yOffset: mainCharacter.height,
      xOffset: 0,
      armor: currentArmor,
    }),
    ...createHPBar({
      game,
      x: 2,
      yOffset: mainCharacter.height,
      xOffset: 0,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('mainCharacter', {
    ...mainCharacterState,
    bars,
    x: 2,
    xOffset: 0,
    yOffset: mainCharacter.height,
  });

  //def({ game, armor: 40, name: 'mainCharacter' });
  //attack({ game, damage: 45, name: 'mainCharacter' });
  // def({ game, armor: 10, name: 'mainCharacter' });
};

export default initMainCharacter;
