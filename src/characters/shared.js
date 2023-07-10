import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
import theme from '../utilities/theme';

const createCharacter = ({ game, name, x } = props) =>
  game.add.image((fullWidthScreen / 10) * x, (fullHeightScreen / 3) * 2, name).setScale(0.5);

const createHPBar = ({ game, x, yOffset, xOffset, HP, baseHP } = props) => {
  const xPoint = (fullWidthScreen / 10) * x - xOffset;
  const yPoint = (fullHeightScreen / 10) * 9 - yOffset / 2;

  const HPBarBg = game.add.graphics();
  const HPBarBgStyle = {
    fillStyle: { color: theme.colors.surface.lightRed },
  };
  HPBarBg.fillStyle(HPBarBgStyle.fillStyle.color);
  HPBarBg.fillRect(xPoint, yPoint, 100, 25);

  const HPBar = game.add.graphics();
  const HPBarStyle = {
    fillStyle: { color: theme.colors.surface.red },
  };
  HPBar.fillStyle(HPBarStyle.fillStyle.color);
  HPBar.fillRect(xPoint, yPoint, (100 / baseHP) * HP, 25);
  return HPBar;
};

export { createCharacter, createHPBar };
