import createEndMenu from '../components/endMenu';

const initFinalScreen = (game) => {
  const background = game.add.image(0, 0, 'finalBackground').setOrigin(0);
  background.displayWidth = game.sys.game.config.width;
  background.displayHeight = game.sys.game.config.height;
  createEndMenu(game);
};
export default initFinalScreen;
