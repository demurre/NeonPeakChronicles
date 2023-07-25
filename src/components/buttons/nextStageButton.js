import { fullHeightScreen, fullWidthScreen } from '../../utilities/consts';
import theme from '../../utilities/theme';
import { incrementStageCount, updateStageCountText } from '../stageCount';

export const removeNextStageButton = () => {
  if (nextStageButton) {
    nextStageButton.destroy();
    nextStageButton = null;
  }
};

let nextStageButton = null;

export const addNextStageButton = (game) => {
  nextStageButton = game.add
    .text(fullWidthScreen / 2, fullHeightScreen / 2, 'Next Stage', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.large,
      fill: theme.colors.font.primary,
    })
    .setOrigin(0.5);

  nextStageButton.setInteractive();
  nextStageButton.on('pointerdown', () => {
    incrementStageCount();
    updateStageCountText();
    game.startGame();
  });
};
