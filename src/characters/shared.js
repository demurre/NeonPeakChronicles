import { fullHeightScreen, fullWidthScreen } from '../utilities/consts';

const createCharacter = ({ game, name, x } = props) =>
  game.add
    .image((fullWidthScreen / 10) * x, (fullHeightScreen / 3) * 2, name)
    .setScale(0.5);
const createHPBar = ({ game, name, x, yOffset, xOffset } = props) =>
  game.add
    .image(
      (fullWidthScreen / 10) * x + xOffset,
      (fullHeightScreen / 10) * 9 - yOffset / 2,
      name,
    )
    .setScale(0.5)
    .setOrigin(0.5);

export { createCharacter, createHPBar };
