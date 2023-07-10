import { getStateValue, setStateValue } from '../store';

const attack = ({ game, damage, name }) => {
  const oldCharacter = getStateValue(name);
  const currentHP = oldCharacter.currentHP - damage;
  setStateValue(name, { ...oldCharacter, currentHP });

  game.updateHPBar(name);
};

export { attack };
