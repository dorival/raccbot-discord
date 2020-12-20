/**
 * Returns a random number between min (inclusive) and max (inclusive).
 */
function randomBetween(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
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

  return arrayReference[randomBetween(0, arrayReference.length - 1)];
}

/**
 * Get a random `true`/`false`.
 */
function flipCoin() {
  return randomBetween(0, 1) === 0;
}

/**
 * Returns true if you won.
 *
 * @param {number} chanceOfWinning 0 to 100 chance. Defaults to 50 (50% chance of winning).
 */
function tryWin(chanceOfWinning = 50) {
  const d = Math.random() * 100;
  return d <= chanceOfWinning;
}

function sampleItemsFromArray(array = [], quantity = 1) {
  const arrayCopy = [...array];
  for (let currentIndex = 0, len = arrayCopy.length; currentIndex < len; currentIndex++) {
    const randomIndex = randomBetween(0, len - 1);
    let currentElement = arrayCopy[currentIndex];
    let randomElement = arrayCopy[randomIndex];
    arrayCopy[currentIndex] = randomElement;
    arrayCopy[randomIndex] = currentElement;
  }

  arrayCopy.length = quantity;

  return arrayCopy;
}

/**
 * Pad a number with zeros
 *
 * @param {number} num Number you are tring to pad
 * @param {*} places Length of the pad
 */
const pad = (num, places) => String(num).padStart(places, '0')

module.exports = {
  sampleItemsFromArray,
  randomBetween,
  randomItem,
  flipCoin,
  tryWin,
  pad
}