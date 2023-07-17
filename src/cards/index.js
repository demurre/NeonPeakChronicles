import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';

const createCard = ({ game, x, name, type }) =>
  game.add
    .image((fullWidthScreen / 10) * x, (fullHeightScreen / 14) * 13, name)
    .setScale(0.5)
    .setInteractive()
    .setData('type', type);

const initCards = (game) => {
  const allCards = [
    { name: 'card1', type: 'attack' },
    { name: 'card2', type: 'def' },
    { name: 'card3', type: 'healing' },
    { name: 'card4', type: 'poison' },
    { name: 'card5', type: 'weak' },
  ];

  const xOffset = 3;

  const cards = Array.from({ length: 5 }, (_, index) =>
    createCard({ game, x: xOffset + index, ...allCards[Math.floor(Math.random() * 5)] }),
  );

  return cards;
};

export default initCards;
