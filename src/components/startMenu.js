import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
import theme from '../utilities/theme';

const createStartMenu = (game) => {
  game.add
    .text(fullWidthScreen / 2, (fullHeightScreen - 100) / 2, 'Neon Peak Chronicles', {
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
export default createStartMenu;
