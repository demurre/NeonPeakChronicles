import createNavBar from '../components/navBar';

const init = (game) => {
  const background = game.add.image(0, 0, 'gBackground').setOrigin(0);
  background.displayWidth = game.sys.game.config.width;
  background.displayHeight = game.sys.game.config.height;
  createNavBar(game);
};

export default init;
