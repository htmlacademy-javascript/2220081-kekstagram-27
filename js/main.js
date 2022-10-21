function generateRandomIncInt(min , max) {
  if ((typeof min !== 'number') || (typeof max !== 'number') || (min < 0 ) || (max < 0) || (min > max) || (min === max)) {
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(generateRandomIncInt('Masdf' , 10));

function validateStrMaxLenght(str, maxLenght) {
  return str.lenght <= maxLenght;
}

console.log(validateStrMaxLenght('tumbajumba', 10));
