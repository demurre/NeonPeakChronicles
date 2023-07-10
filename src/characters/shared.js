import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
import theme from '../utilities/theme';

const createCharacter = ({ game, name, x }) =>
  game.add.image((fullWidthScreen / 10) * x, (fullHeightScreen / 3) * 2, name).setScale(0.5);

const createHPBar = ({ game, x, yOffset, xOffset, HP, baseHP }) => {
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

  // Додавання чисел на HP-бар
  const HPText = game.add.text(xPoint + 50, yPoint + 12, `${HP}/${baseHP}`, {
    fontFamily: 'Arial',
    fontSize: '12px',
    color: '#ffffff',
    align: 'center',
  });
  HPText.setOrigin(0.5);

  return HPBar;
};

export { createCharacter, createHPBar };
