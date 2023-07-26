import { addNextStageButton, removeNextStageButton } from '../components/buttons/nextStageButton';
import { setStateValue, getStateValue } from '../store';

const checkDeath = (game, character, enemies) => {
  const stageCount = getStateValue('stageCount');
  const characterState = getStateValue(character.texture.key);
  if (characterState && characterState.currentHP <= 0) {
    character.destroy();
    setStateValue(character.texture.key, null);

    if (character.texture.key === 'hero') game.finalScreen();
  }

  if (stageCount === 4) {
    const boss = getStateValue('boss');
    if (boss && boss?.currentHP <= 0) game.finalScreen();
  }

  const allEnemiesDead = enemies.every((enemy) => {
    const enemyState = getStateValue(enemy.texture.key);
    return enemyState && enemyState.currentHP <= 0;
  });

  if (allEnemiesDead) addNextStageButton(game);
  else removeNextStageButton();
};

export default checkDeath;
