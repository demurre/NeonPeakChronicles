import { getStateValue, setStateValue } from '../store';

setStateValue('turnCount', 1);
let turnCountText = null;

export const getTurnCount = () => getStateValue('turnCount');

export const incrementTurnCount = () => {
  const turnCount = getTurnCount();
  setStateValue('turnCount', turnCount + 1);
};

export const setTurnCountText = (text) => {
  turnCountText = text;
};

export const updateTurnCountText = () => {
  if (turnCountText) {
    turnCountText.setText(`Turn: ${getTurnCount()}`);
  }
};
