import{generateRandomIncInt} from './generate-random-int.js';

const generateRandomArrayElement = (elements) => elements[generateRandomIncInt(0, elements.length - 1)];

export{generateRandomArrayElement};
