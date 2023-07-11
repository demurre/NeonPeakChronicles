import { attack } from '../characters/actions';

const onDmgCard = (card, enemy) => {
  attack({ game: card.scene, damage: 5, name: enemy.name }); // Застосовуємо пошкодження 5 до ворога enemy
};

export default onDmgCard;
