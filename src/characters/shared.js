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

const updateHPBar = (hpBar, currentHP, baseHP) => {
  const scaleFactor = currentHP / baseHP;
  hpBar.setScale(scaleFactor, 1);

  // Оновлення зображення HP-бара
  const hpBarImage = hpBar.getFirstImage();
  if (hpBarImage) {
    let hpBarTexture;
    if (currentHP >= 40) {
      hpBarTexture = 'hpbar40';
    } else if (currentHP >= 35) {
      hpBarTexture = 'hpbar35';
    } else if (currentHP >= 30) {
      hpBarTexture = 'hpbar30';
    } else if (currentHP >= 25) {
      hpBarTexture = 'hpbar25';
    } else if (currentHP >= 20) {
      hpBarTexture = 'hpbar20';
    } else if (currentHP >= 15) {
      hpBarTexture = 'hpbar15';
    } else if (currentHP >= 10) {
      hpBarTexture = 'hpbar10';
    } else if (currentHP >= 5) {
      hpBarTexture = 'hpbar5';
    } else {
      hpBarTexture = 'hpbar0';
    }

    hpBarImage.setTexture(hpBarTexture);
  }
};

export { createCharacter, createHPBar, updateHPBar };
