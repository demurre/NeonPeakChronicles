import { attack, poison } from '../../characters/actions';
import { getStateValue } from '../../store';
import { fullHeightScreen, fullWidthScreen } from '../../utilities/consts';
import theme from '../../utilities/theme';
import { incrementTurnCount, updateTurnCountText } from '../gameState';
// eslint-disable-next-line no-unused-vars
const createEndTurnButton = (game, { enemies, hero, cards, centerCard }) => {
  const endTurnButton = game.add
    .text(fullWidthScreen - 10, fullHeightScreen / 2 - 100, 'End Turn', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.medium,
      fill: theme.colors.font.primary,
      align: 'right',
    })
    .setOrigin(1, 1)
    .setInteractive();

  endTurnButton.on('pointerdown', () => {
    if (!hero || enemies.length === 0) return;

    enemies.forEach((enemy) => {
      const baseAttack = getStateValue(enemy.texture.key).baseAttack;
      attack({ game, damage: baseAttack, name: hero.texture.key });
      if (getStateValue(enemy.texture.key).poisoned) {
        poison({ game, damage: 1, name: enemy.texture.key });
      }
    });

    cards.forEach((card, index) => {
      card.x = (fullWidthScreen / 10) * (index + 3);
      card.y = (fullHeightScreen / 14) * 13;
      centerCard = null;
    });

    incrementTurnCount();
    updateTurnCountText(game);
  });
};
export default createEndTurnButton;
