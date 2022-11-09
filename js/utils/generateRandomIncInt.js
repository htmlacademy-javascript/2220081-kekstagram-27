export default function (min , max) {
  if ((typeof min !== 'number') || (typeof max !== 'number') || (min < 0 ) || (max < 0) || (min > max) || (min === max)) {
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}
