import { createCard } from './index';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const initRandomCards = (game) => {
  const allCards = [
    { name: 'card1', type: 'attack' },
    { name: 'card2', type: 'def' },
    { name: 'card3', type: 'healing' },
    { name: 'card4', type: 'poison' },
    { name: 'card5', type: 'weak' },
  ];
  shuffleArray(allCards);
  const cards = allCards.map((card, index) =>
    createCard({ game, x: index + 3, name: card.name, type: card.type }),
  );

  return cards;
};

export default initRandomCards;
