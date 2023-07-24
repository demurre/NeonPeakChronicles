import { setStateValue } from '../store';
import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
import theme from '../utilities/theme';
import { updateTurnCountText } from './turnCount';

const createEndMenu = (game) => {
  const leaveButton = game.add
    .text(fullWidthScreen / 2, (fullHeightScreen - 100) / 2, 'Leave', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.large,
      fill: theme.colors.font.primary,
    })
    .setOrigin(0.5);

  leaveButton.setInteractive();
  leaveButton.on('pointerdown', () => {
    game.create();
    setStateValue('turnCount', 0);
    updateTurnCountText(game);
  });

  const retryButton = game.add
    .text(fullWidthScreen / 2, fullHeightScreen / 2, 'Retry', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.large,
      fill: theme.colors.font.primary,
    })
    .setOrigin(0.5);

  retryButton.setInteractive();
  retryButton.on('pointerdown', () => {
    game.startGame();
    setStateValue('turnCount', 0);
    updateTurnCountText(game);
  });
};

export default createEndMenu;
