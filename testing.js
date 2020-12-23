var Prando = require('prando');
const moment = require('moment');

function predictableRandomBetween(minimum = 0, maximum = 100) {
  var date = moment();
  date.set({hour:0,minute:0,second:0,millisecond:0,date:24});
  console.log(date.valueOf());
  const prnd = new Prando(date.valueOf());
  const value = prnd.nextInt(minimum, maximum)
  prnd.reset();

  return value;
}


console.log(predictableRandomBetween(0, 477));
console.log(predictableRandomBetween(0, 477));
console.log(predictableRandomBetween(0, 477));
console.log(predictableRandomBetween(0, 477));
console.log(predictableRandomBetween(0, 477));
console.log(predictableRandomBetween(0, 477));