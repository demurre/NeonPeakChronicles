import { applyPoison, applyWeak, attack, def, healing } from '../characters/actions';

export const handleCardClick = ({ game, centerCard, target, targetType = 'enemy' }) => {
  const cardType = centerCard.getData('type');
  if (targetType === 'enemy') {
    switch (cardType) {
      case 'attack':
        attack({ game, damage: 40, name: target.texture.key });
        break;
      case 'poison':
        applyPoison({ name: target.texture.key, duration: 5 });
        break;
      case 'weak':
        applyWeak({ name: target.texture.key, duration: 5 });
        break;
      default:
        break;
    }
  } else
    switch (cardType) {
      case 'def':
        def({ game, armor: 5, name: target.texture.key });
        break;
      case 'healing':
        healing({ game, heal: 5, name: target.texture.key });
        break;
      default:
        break;
    }

  game.removeCardFromHand(centerCard);
};
