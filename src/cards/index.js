import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';

const addEvents = (game, cards) => {
  let centerCard = null;

  cards.forEach((card) => {
    const { x, y, z } = { ...card };

    game.tweens.add({
      targets: card,
      x,
      y,
      z,
      duration: 1000,
      ease: 'Power2',
      delay: 500,
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

          // Виклик відповідної функції в залежності від карти
          switch (card) {
            case card1:
              game.attackEnemy(game.mainCharacter, 5);
              break;
            case card2:
              game.addArmorToMainCharacter(game.mainCharacter, 5);
              break;
            case card3:
              game.restoreHPToMainCharacter(game.mainCharacter);
              break;
            case card4:
              game.applyPoisonEffect(game.enemies.getFirstAlive());
              break;
            case card5:
              game.applyWeakEffect(game.enemies.getFirstAlive());
              break;
          }
        });
      },
    });
  });
};

const createCard = ({ game, x, name } = props) =>
  game.add
    .image((fullWidthScreen / 10) * x, (fullHeightScreen / 14) * 13, name)
    .setScale(0.5)
    .setInteractive();

const init = (game) => {
  const card1 = createCard({ game, x: 3, name: 'card1' });
  const card2 = createCard({ game, x: 4, name: 'card2' });
  const card3 = createCard({ game, x: 5, name: 'card3' });
  const card4 = createCard({ game, x: 6, name: 'card4' });
  const card5 = createCard({ game, x: 7, name: 'card5' });

  const cards = [card1, card2, card3, card4, card5];
  addEvents(game, cards);
};

export default init;
