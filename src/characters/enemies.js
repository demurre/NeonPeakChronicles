import { setStateValue } from '../store';
import { shuffleArray } from '../utilities/helpers';
import { createCharacter, createHPBar } from './shared';

const initEnemies = (game) => {
  const baseAttack = 4;
  const baseHP = 20;
  const currentHP = 20;

  const enemyState = {
    baseAttack,
    baseHP,
    currentHP,
  };

  const allEnemies = shuffleArray([{ name: 'enemy1' }, { name: 'enemy2' }, { name: 'enemy3' }]);

  return Array.from({ length: 2 }).map((_, i) => {
    const enemy = createCharacter({ game, x: i * 2 + 7, name: allEnemies[i].name, isClicked: true });

    const enemyBars = {
      ...createHPBar({
        game,
        x: i * 2 + 7,
        yOffset: enemy.height,
        xOffset: 45,
        HP: currentHP,
        baseHP: baseHP,
      }),
    };

    setStateValue(allEnemies[i].name, {
      ...enemyState,
      bars: enemyBars,
      x: i * 2 + 7,
      xOffset: 45,
      yOffset: enemy.height,
    });

    return enemy;
  });
};

export default initEnemies;
