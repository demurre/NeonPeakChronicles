import { getStateValue, setStateValue } from '../store';

const attack = ({ game, damage, name }) => {
  const oldCharacter = getStateValue(name);

  if (oldCharacter.currentArmor > 0) {
    const remainingDamage = Math.max(0, damage - oldCharacter.currentArmor);
    const currentArmor = Math.max(0, oldCharacter.currentArmor - damage);
    const currentHP = Math.max(0, oldCharacter.currentHP - remainingDamage);
    setStateValue(name, { ...oldCharacter, currentArmor, currentHP });
    game.updateArmorBar(name);
    game.updateHPBar(name);
  } else {
    const currentHP = Math.max(0, oldCharacter.currentHP - damage);
    setStateValue(name, { ...oldCharacter, currentHP });
    game.updateHPBar(name);
  }
};

const def = ({ game, armor, name }) => {
  const oldCharacter = getStateValue(name);
  const currentArmor = oldCharacter.currentArmor + armor;
  setStateValue(name, { ...oldCharacter, currentArmor });

  game.updateArmorBar(name);
};
export { attack, def };
