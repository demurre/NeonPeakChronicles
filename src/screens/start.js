import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
import theme from '../utilities/theme';

const init = (game) => {
  const background = game.add.image(0, 0, 'background').setOrigin(0);
  background.displayWidth = game.sys.game.config.width;
  background.displayHeight = game.sys.game.config.height;
  game.add
    .text(fullWidthScreen / 2, (fullHeightScreen - 100) / 2, 'name', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.large,
      fill: theme.colors.font.primary,
    })
    .setOrigin(0.5);
  const newGameButton = game.add
    .text(fullWidthScreen / 2, fullHeightScreen / 2, 'New Game', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.large,
      fill: theme.colors.font.primary,
    })
    .setOrigin(0.5);
  newGameButton.setInteractive();
  newGameButton.on('pointerdown', () => game.startGame());
};
export default init;
