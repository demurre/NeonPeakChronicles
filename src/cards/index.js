import { getStateValue, setStateValue } from '../store';
import { v4 as uuidv4 } from 'uuid';
import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';
import addEvents from '../events';

const createCard = ({ game, x, name, type }) => {
  const cardId = uuidv4();
  const card = game.add
    .image((fullWidthScreen / 10) * x, (fullHeightScreen / 14) * 13, name)
    .setScale(0.5)
    .setInteractive()
    .setData('type', type)
    .setData('id', cardId)
    .setData('name', name);

  return card;
};

const allCards = [
  { name: 'card1', type: 'attack' },
  { name: 'card2', type: 'def' },
  { name: 'card3', type: 'healing' },
  { name: 'card4', type: 'poison' },
  { name: 'card5', type: 'weak' },
];

const xOffset = 3;

const initCards = (game) => {
  const cards = Array.from({ length: 5 }, (_, index) =>
    createCard({ game, x: xOffset + index, ...allCards[Math.floor(Math.random() * 5)] }),
  );

  setStateValue('hand', cards);

  return cards;
};

export const updateCardsByHand = (game) => {
  const hand = getStateValue('hand');
  const cards = hand.map((card) => ({
    name: card.getData('name'),
    type: card.getData('type'),
  }));

  while (cards.length < 5) cards.push(allCards[Math.floor(Math.random() * 5)]);

  hand.forEach((card) => card.destroy());

  const newCards = cards.map((card, index) => createCard({ game, x: xOffset + index, ...card }));

  setStateValue('hand', newCards);

  const state = getStateValue();

  const enemies = getEnemiesByState_(state);
  const hero = getHeroByState_(state);
  const boss = getBossByState_(state);

  addEvents(game, { cards: newCards, enemies, hero, boss, centerCard: null });
};

const getEnemiesByState_ = (state) =>
  Object.entries(state)
    .filter(([name]) => name.includes('enemy'))
    .map(([, value]) => value.enemy);

const getHeroByState_ = (state) => state['hero'].hero;

const getBossByState_ = (state) => state['boss']?.boss;

export default initCards;
