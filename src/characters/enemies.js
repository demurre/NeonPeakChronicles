import { getStateValue, setStateValue } from '../store';
import { getEnemiesKeys, shuffleArray } from '../utilities/helpers';
import { createCharacter, createHPBar } from './shared';

const initEnemies = (game) => {
  const attack = 4;
  const baseAttack = 4;
  const baseHP = 20;
  const currentHP = 20;

  const enemyState = {
    attack,
    baseAttack,
    baseHP,
    currentHP,
  };

  const allEnemies = shuffleArray([{ name: 'enemy1' }, { name: 'enemy2' }, { name: 'enemy3' }]);

  return Array.from({ length: 2 }).map((_, index) => {
    const enemy = createCharacter({ game, x: index * 2 + 7, name: allEnemies[index].name, isClicked: true });

    const enemyBars = {
      ...createHPBar({
        game,
        x: index * 2 + 7,
        yOffset: enemy.height,
        xOffset: 45,
        HP: currentHP,
        baseHP: baseHP,
      }),
    };

    setStateValue(allEnemies[index].name, {
      ...enemyState,
      bars: enemyBars,
      x: index * 2 + 7,
      xOffset: 45,
      yOffset: enemy.height,
      effects: {},
      enemy,
    });

    return enemy;
  });
};
export const destroyEnemies = () => {
  const enemiesKeys = getEnemiesKeys();
  enemiesKeys.forEach((key) => {
    const {
      enemy,
      bars: { HPBar, HPText, HPBarBg },
    } = getStateValue(key);
    enemy.destroy();
    HPBar.destroy();
    HPText.destroy();
    HPBarBg.destroy();
  });
};
export default initEnemies;
