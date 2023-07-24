import { getTurnCount } from '../components/turnCount';
import { getStateValue, setStateValue } from '../store';

const makeSafe = (number) => Math.max(0, number);

const attack = ({ game, damage, name }) => {
  const character = getStateValue(name);

  if (character.currentArmor) {
    const remainingDamage = makeSafe(damage - character.currentArmor);
    const currentArmor = makeSafe(character.currentArmor - damage);
    const currentHP = makeSafe(character.currentHP - remainingDamage);

    setStateValue(name, { ...character, currentArmor, currentHP });

    game.updateArmorBar(name);
    game.updateHPBar(name);
  } else {
    const currentHP = makeSafe(character.currentHP - damage);

    setStateValue(name, { ...character, currentHP });

    game.updateHPBar(name);
  }
};

const decrementAttack = ({ name, divider }) => {
  const character = getStateValue(name);
  const baseAttack = character.baseAttack;
  setStateValue(name, { ...character, attack: baseAttack / divider });
};

const resetAttack = ({ name }) => {
  const character = getStateValue(name);
  const baseAttack = character.baseAttack;
  setStateValue(name, { ...character, attack: baseAttack });
};

const def = ({ game, armor, name }) => {
  const character = getStateValue(name);
  const currentArmor = character.currentArmor + armor;

  setStateValue(name, { ...character, currentArmor });

  game.updateArmorBar(name);
};

const healing = ({ game, heal, name }) => {
  const character = getStateValue(name);
  const currentHP = character.currentHP + heal;
  const baseHP = character.baseHP;

  const newCurrentHP = Math.min(currentHP, baseHP);

  setStateValue(name, { ...character, currentHP: newCurrentHP });

  game.updateHPBar(name);
};

const applyPoison = ({ duration, name }) => {
  const turnCount = getTurnCount();
  const character = getStateValue(name);
  setStateValue(name, {
    ...character,
    effects: { ...character.effects, poison: { endTurn: turnCount + duration } },
  });
};

const applyWeak = ({ duration, name }) => {
  const turnCount = getTurnCount();
  const character = getStateValue(name);
  setStateValue(name, {
    ...character,
    effects: { ...character.effects, weak: { endTurn: turnCount + duration } },
  });
};

export { attack, def, healing, applyPoison, applyWeak, decrementAttack, resetAttack };
