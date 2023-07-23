import { applyPoison, applyWeak, attack, def, healing } from '../characters/actions';

export const handleCardClick = ({ game, centerCard, enemy, hero }) => {
  const cardType = centerCard.getData('type');
  switch (cardType) {
    case 'attack':
      attack({ game, damage: 5, name: enemy.texture.key });
      break;
    case 'def':
      def({ game, armor: 5, name: hero.texture.key });
      break;
    case 'healing':
      healing({ game, heal: 5, name: hero.texture.key });
      break;
    case 'poison':
      applyPoison({ name: enemy.texture.key, duration: 5 });
      break;
    case 'weak':
      applyWeak({ name: enemy.texture.key, duration: 5 });
      break;
    default:
      break;
  }

  game.removeCardFromHand(centerCard);
};
