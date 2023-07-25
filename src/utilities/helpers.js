import { getStateValue } from '../store';

export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export const getEnemiesKeys = () => Object.keys(getStateValue()).filter((name) => name.includes('enemy'));
