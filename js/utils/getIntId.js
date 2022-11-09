import generateRandomIncInt from './generateRandomIncInt.js';

const getIntId = function () {
  let id = 0;
  return function() {
    const result = id;
    id = id + generateRandomIncInt(1, 100);
    return result;
  };
};

export default getIntId;
