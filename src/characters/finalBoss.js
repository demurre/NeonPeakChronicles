import { setStateValue } from '../store';
import { createCharacter, createHPBar } from './shared';

const initFinalBoss = (game) => {
  const baseAttack = 5;
  const baseHP = 40;
  const currentHP = 40;

  const finalBossState = {
    baseAttack,
    baseHP,
    currentHP,
  };

  const finalBoss = createCharacter({ game, x: 7, name: 'finalBoss', isClicked: true });

  const finalBossBars = {
    ...createHPBar({
      game,
      x: 7,
      yOffset: finalBoss.height,
      xOffset: 45,
      HP: currentHP,
      baseHP: baseHP,
    }),
  };

  setStateValue('finalBoss', {
    ...finalBossState,
    bars: finalBossBars,
    x: 7,
    xOffset: 45,
    yOffset: finalBoss.height,
  });

  return finalBoss;
};

export default initFinalBoss;
