import generateRandomIncInt from './generateRandomIncInt.js';
const getRandomArrayElement = (elements) => elements[generateRandomIncInt(0, elements.length - 1)];
export default getRandomArrayElement;
