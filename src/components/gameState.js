let turnCount = 1;
let turnCountText = null;

export const getTurnCount = () => turnCount;

export const incrementTurnCount = () => {
  turnCount += 1;
};

export const setTurnCountText = (text) => {
  turnCountText = text;
};

export const updateTurnCountText = () => {
  if (turnCountText) {
    turnCountText.setText(`Turn: ${getTurnCount()}`);
  }
};
