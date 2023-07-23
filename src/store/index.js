const state = {};

const setStateValue = (key, value) => {
  state[key] = value;
};

const getStateValue = (key) => {
  if (key) return state[key];
  return state;
};

export { setStateValue, getStateValue };
