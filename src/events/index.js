import { setStateValue } from '../store';
import { attack } from '../characters/actions';
import { createCharacter, createHPBar } from '../characters/shared';
import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
let centerCard = null;
const addEvents = (game, cards, enemies) => {
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
        });
      },
    });
  });

  enemies.forEach((enemy) => {
    enemy.on('pointerdown', () => {
      console.debug(enemy);
      // if (centerCard === card1) {
      //   const selectedEnemy = enemies.find((enemy) => enemy.isClicked);
      //   if (selectedEnemy) {
      //     attack({ game, damage: 5, name: selectedEnemy.name });
      //     selectedEnemy.isClicked = false;
      //   }
      // }
    });
  });
};

const createCard = ({ game, x, name }) =>
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

  addEvents(game, cards, enemies, card1);
};

export default init;
