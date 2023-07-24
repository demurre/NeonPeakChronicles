import initFinalScreen from '../screens/final';
import { getStateValue, setStateValue } from '../store';

const checkDeath = (game, character) => {
  const characterState = getStateValue(character.texture.key);
  if (characterState && characterState.currentHP <= 0) {
    character.destroy();
    setStateValue(character.texture.key, null);

    if (character.texture.key === 'hero') {
      initFinalScreen(game);
    }
  }
};

export default checkDeath;
