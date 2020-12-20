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
      const sides = parseInt(args[0], 10);
      if (!isNaN(sides)) {
        diceSides = sides;
      } else {
        return;
      }
    }

    if (diceSides === 1) {
      msg.reply(`🎲 That's silly, but sure I bite it: You got **01** 🎉`);
      return;
    }
    if (diceSides < 1) {
      msg.reply(`🎲 I'm working to support non-euclidian dice with **${diceSides}** sides. Maybe one day!`)
    } else {
      const rollNum = pad(randomBetween(1, diceSides), 2);
      msg.reply(`🎲 You rolled a D${diceSides} and got: **${rollNum}**`);
    }

  }
};
