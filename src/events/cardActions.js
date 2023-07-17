import { attack, def, healing } from '../characters/actions';
import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';

// eslint-disable-next-line no-unused-vars
export const handleCardClick = ({ game, centerCard, enemy, cards, hero }) => {
  if (centerCard.getData('type') === 'attack') {
    attack({ game, damage: 5, name: enemy.texture.key });
  } else if (centerCard.getData('type') === 'def') {
    def({ game, armor: 5, name: hero.texture.key });
  } else if (centerCard.getData('type') === 'healing') {
    healing({ game, heal: 5, name: hero.texture.key });
  }

  const moveCardToCorner = (card) => {
    card.x = fullWidthScreen - 10;
    card.y = fullHeightScreen - 10;
  };

  cards.forEach((card) => {
    const cardType = card.getData('type');
    if (cardType === 'attack') {
      moveCardToCorner(centerCard);
    } else if (cardType === 'def') {
      moveCardToCorner(centerCard);
    } else if (cardType === 'healing') {
      moveCardToCorner(centerCard);
    } else if (cardType === 'poison') {
      moveCardToCorner(centerCard);
    } else if (cardType === 'weak') {
      moveCardToCorner(centerCard);
    }
    //card.destroy();
  });
};
