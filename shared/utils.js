const random = require('random');
const _ = require('underscore');

/**
 * Returns a random number between min (inclusive) and max (inclusive).
 */
function randomBetween(minimum, maximum) {  
  return random.int(min = minimum, max = maximum);
}

/**
 * Returns a random item from an array.
 */
function randomItem(arrayReference) {
  if (!arrayReference){
    return -1;
  }
  if (arrayReference.length === 0) {
    return 0;
  }

  return arrayReference[random.int(min = 0, max = arrayReference.length - 1)];
}

/**
 * Get a random `true`/`false`.
 */
function flipCoin() {
  return random.boolean();
}

/**
 * Returns true if you won.
 *
 * @param {number} chanceOfWinning 0 to 100 chance. Defaults to 50 (50% chance of winning).
 */
function tryWin(chanceOfWinning = 50) {
  const d = random.int(min = 0, max = 100);
  return d <= chanceOfWinning;
}

/**
 * Randomly pick items from the a array, returning a new one.
 * 
 * @param {array} array Array to sample
 * @param {number} quantity Number of samples to take
 */
function sampleItemsFromArray(array = [], quantity = 1) {
  const shuffled = _.shuffle(array);
  return _.first(shuffled, quantity);
}

/**
 * Pad a number with zeros
 *
 * @param {number} num Number you are tring to pad
 * @param {number} places Length of the pad
 */
function pad(num, places) {
  return String(num).padStart(places, '0');
}

/**
 * Replace all substrings with a new one
 * 
 * @param {string} sentence The string to replace
 * @param {object[]} mapObj Array of objects containing the substring and its replacement text
 * @example
 * replaceAll('My name is %robert% and I have %age% years.', [
 *  { "%name%": 'Robert' },
 *  { "%age%": '26' }
 * ])
 */
function replaceAll(sentence, mapObj){
  return mapObj.reduce((prev, current) =>
    `${prev}`.replace(
      new RegExp(Object.keys(current)[0], 'g'),
      current[Object.keys(current)[0]]),
      sentence
    )
}

module.exports = {
  sampleItemsFromArray,
  randomBetween,
  randomItem,
  replaceAll,
  flipCoin,
  tryWin,
  pad
}