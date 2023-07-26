import { setStateValue } from '../store';
import { createCharacter, createHPBar } from './shared';

const initBoss = (game) => {
  const baseAttack = 5;
  const attack = 5;
  const baseHP = 40;
  const currentHP = 40;

  const bossState = {
    baseAttack,
    attack,
    baseHP,
    currentHP,
  };

  const boss = createCharacter({ game, x: 7, name: 'boss', isClicked: true });

  const bossBars = {
    ...createHPBar({
      game,
      x: 7,
      yOffset: boss.height,
      xOffset: 45,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('boss', {
    ...bossState,
    boss,
    bars: bossBars,
    x: 7,
    xOffset: 45,
    yOffset: boss.height,
    effects: {},
  });

  return boss;
};

export default initBoss;
