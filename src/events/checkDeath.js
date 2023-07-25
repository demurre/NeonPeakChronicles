import { addNextStageButton, removeNextStageButton } from '../components/buttons/nextStageButton';
import initFinalScreen from '../screens/final';
import { setStateValue, getStateValue } from '../store';

const checkDeath = (game, character, enemies) => {
  const stageCount = getStateValue('stageCount');
  const boss = getStateValue('finalBoss');
  const characterState = getStateValue(character.texture.key);
  if (characterState && characterState.currentHP <= 0) {
    character.destroy();
    setStateValue(character.texture.key, null);

    if (character.texture.key === 'hero') {
      initFinalScreen(game);
    }
  }

  if (stageCount === 4) {
    if (boss && boss.currentHP <= 0) {
      initFinalScreen(game);
    }
  }

  const allEnemiesDead = enemies.every((enemy) => {
    const enemyState = getStateValue(enemy.texture.key);
    return enemyState && enemyState.currentHP <= 0;
  });
  if (allEnemiesDead) {
    addNextStageButton(game);
  } else {
    removeNextStageButton();
  }
};

export default checkDeath;
