import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';

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

  return [card1, card2, card3, card4, card5];
};

export default init;
