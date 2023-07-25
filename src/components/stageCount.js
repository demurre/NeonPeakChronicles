import { getStateValue, setStateValue } from '../store';

setStateValue('stageCount', 1);
let stageCountText = null;

export const getStageCount = () => getStateValue('stageCount');

export const incrementStageCount = () => {
  const stageCount = getStageCount();
  setStateValue('stageCount', stageCount + 1);
};

export const setStageCountText = (text) => {
  stageCountText = text;
};

export const updateStageCountText = () => {
  if (stageCountText) {
    stageCountText.setText(`Stage: ${getStageCount()}`);
  }
};
