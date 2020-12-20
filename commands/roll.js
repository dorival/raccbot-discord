const {
  randomBetween,
  pad
} = require("../shared/utils");


module.exports = {
  name: '!roll',
  description: 'Roll a die',
  execute(msg, args) {
    let diceSides = 6;

    if (args) {
      const sides = parseInt(args[0]);
      if (!isNaN(sides)) {
        diceSides = sides;
      }
    }

    const rollNum = pad(randomBetween(1, diceSides), 2);

    msg.reply(`🎲 You rolled a D${diceSides} and got: **${rollNum}**`);
  }
};
