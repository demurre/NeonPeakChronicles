import createStartMenu from '../components/startMenu';

const initStartScreen = (game) => {
  const background = game.add.image(0, 0, 'background').setOrigin(0);
  background.displayWidth = game.sys.game.config.width;
  background.displayHeight = game.sys.game.config.height;
  createStartMenu(game);
};
export default initStartScreen;
