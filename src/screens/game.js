import { fullWidthScreen } from '../utilities/consts';
import theme from '../utilities/theme';

const init = (game) => {
  const background = game.add.image(0, 0, 'gBackground').setOrigin(0);
  background.displayWidth = game.sys.game.config.width;
  background.displayHeight = game.sys.game.config.height;
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
    .text(fullWidthScreen - 75, 10, `Stage ${currentStage}`, {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.medium,
      fill: theme.colors.font.primary,
      align: 'right',
    })
    .setOrigin(0.5, 0);
    
const endTurnButton = game.add
    .text(fullWidthScreen - 10, 10, 'End Turn', {
      fontFamily: theme.fontFamily.primary,
      fontSize: theme.size.medium,
      fill: theme.colors.font.primary,
      align: 'right',
    })
    .setOrigin(1, 0)
    .setInteractive();

  endTurnButton.on('pointerdown', () => {
    // Код, що виконується при натисканні кнопки "End Turn"
    // Нанесення пошкоджень герою ворогом
    const hero = // Отримання посилання на об'єкт героя
    const enemy = // Отримання посилання на об'єкт ворога
    const baseDamage = // Отримання значення базового урону ворога
    attack({ game, damage: baseDamage, name: hero.texture.key });
  });
};
export default init;
