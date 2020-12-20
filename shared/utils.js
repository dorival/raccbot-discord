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

module.exports = {
  randomBetween,
  randomItem,
  flipCoin,
  tryWin
}