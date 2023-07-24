import { fullWidthScreen } from '../utilities/consts';
import theme from '../utilities/theme';
import { getTurnCount, setTurnCountText, updateTurnCountText } from './turnCount';

const createNavBar = (game) => {
  const rectangleGraphics = game.add.graphics();
  const rectangleStyle = {
    fillStyle: { color: theme.colors.surface.skyBlue, alpha: 0.5 },
  };
  rectangleGraphics.fillStyle(rectangleStyle.fillStyle.color, rectangleStyle.fillStyle.alpha);
  rectangleGraphics.fillRect(0, 0, game.sys.game.config.width, 50);
  game.add
    .text(10, 10, 'name', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.medium,
      fill: theme.colors.font.primary,
      align: 'left',
    })
    .setOrigin(0, 0);

  const currentStage = 1;
  game.add
    .text(fullWidthScreen - 200, 10, `Stage: ${currentStage}`, {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.medium,
      fill: theme.colors.font.primary,
      align: 'right',
    })
    .setOrigin(0.5, 0);

  const turnCountText = game.add
    .text(fullWidthScreen - 75, 10, `Turn: ${getTurnCount()}`, {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.medium,
      fill: theme.colors.font.primary,
      align: 'right',
    })
    .setOrigin(0.5, 0);

  setTurnCountText(turnCountText);

  updateTurnCountText();
};
export default createNavBar;
