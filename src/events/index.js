import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
import { handleCardClick } from './cardActions';

const addEvents = (game, { cards, enemies, hero }) => {
  let centerCard = null;

  enemies.forEach((enemy) => {
    enemy.on('pointerdown', () => {
      if (!centerCard) return;
      handleCardClick({ game, centerCard, cards, enemy });
      centerCard = null;
    });
  });

  hero.on('pointerdown', () => {
    if (!centerCard) return;
    handleCardClick({ game, centerCard, cards, hero });
    centerCard = null;
  });

  cards.forEach((card) => {
    const { x, y, z } = { ...card };
    game.tweens.add({
      targets: card,
      x,
      y,
      z,
      duration: 1000,
      ease: 'Power2',
      delay: 0,
      onComplete: () => {
        card.on('pointerdown', () => {
          if (centerCard === card) {
            game.tweens.add({
              targets: card,
              x,
              y,
              z,
              duration: 500,
              ease: 'Power2',
            });
            centerCard = null;
          } else if (centerCard === null) {
            const centerX = fullWidthScreen / 2;
            const centerY = fullHeightScreen / 2;
            const cardWidth = card.displayWidth * card.scaleX;
            const cardHeight = card.displayHeight * card.scaleY;
            const targetX = centerX - cardWidth / 2;
            const targetY = centerY - cardHeight / 2;

            game.tweens.add({
              targets: card,
              x: targetX,
              y: targetY,
              z: 100,
              duration: 500,
              ease: 'Power2',
            });
            centerCard = card;
          }
        });
      },
    });
  });
};

export default addEvents;

// addEvents(game, cards, enemies, card1);
