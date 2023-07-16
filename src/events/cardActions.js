import { attack, def, healing } from '../characters/actions';

export const handleCard1Click = ({ game, centerCard, cards, enemy }) => {
  if (!centerCard) return;
  if (centerCard === cards[0]) {
    attack({ game, damage: 5, name: enemy.texture.key });
  }
  centerCard = null;
};

export const handleCard2Click = ({ game, centerCard, cards, hero }) => {
  if (!centerCard) return;
  if (centerCard === cards[1]) {
    def({ game, armor: 5, name: hero.texture.key });
  }
  centerCard = null;
};

export const handleCard3Click = ({ game, centerCard, cards, hero }) => {
  if (!centerCard) return;
  if (centerCard === cards[2]) {
    healing({ game, heal: 5, name: hero.texture.key });
  }
  centerCard = null;
};

// export const handleCard4Click = ({ game, centerCard, cards, hero }) => {
//   if (!centerCard) return;
//   if (centerCard === cards[3]) {
//     poison({ game, heal: 5, name: hero.texture.key });
//   }
//   centerCard = null;
// };

// export const handleCard5Click = ({ game, centerCard, cards, hero }) => {
//   if (!centerCard) return;
//   if (centerCard === cards[4]) {
//     weak({ game, heal: 5, name: hero.texture.key });
//   }
//   centerCard = null;
// };
