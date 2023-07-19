import { attack, def, healing, poison } from '../characters/actions';
//import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';

// eslint-disable-next-line no-unused-vars
export const handleCardClick = ({ game, centerCard, enemy, cards, hero }) => {
  if (centerCard.getData('type') === 'attack') {
    attack({ game, damage: 5, name: enemy.texture.key });
  } else if (centerCard.getData('type') === 'def') {
    def({ game, armor: 5, name: hero.texture.key });
  } else if (centerCard.getData('type') === 'healing') {
    healing({ game, heal: 5, name: hero.texture.key });
  } else if (centerCard.getData('type') === 'poison') {
    poison({ game, name: enemy.texture.key });
  }

  // const moveCardToCorner = (card) => {
  //   card.x = fullWidthScreen - 10;
  //   card.y = fullHeightScreen - 10;
  // };

  // // cards.forEach((centerCard) => {
  // //   const cardInCorner = centerCard;
  // //   moveCardToCorner(centerCard);
  // //   cardInCorner.destroy();
  // // });
};
