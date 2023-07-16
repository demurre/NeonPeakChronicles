import { attack } from '../characters/actions';

const onDmgCard = (card, enemy) => {
  attack({ game: card.scene, damage: 5, name: enemy.name });
};

export default onDmgCard;
