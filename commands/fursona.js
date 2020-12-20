const { SPECIES, COLORS } = require("../shared/constants");
const contentGlobal = require("../language/en/global.json");
const content = require("../language/en/fursona.json");
const {
  randomItem,
  randomBetween,
  tryWin,
  sampleItemsFromArray,
  pad
} = require("../shared/utils");

module.exports = {
  name: '!fursona',
  description: 'Create a Fursona',
  execute(msg, args) {

    let name = `${randomItem(content.namePrepend)}-${randomItem(content.bodyPart)}`;
    let title = randomItem(content.title)

    let fursonaSpecies = '';
    // Do you have wings?
    if (tryWin(10)) {
      fursonaSpecies += `${content.winged} `;
    }
    // Is a Were- Something? You got 30% chance to be a Were!
    if (tryWin(10)) {
      fursonaSpecies += `${content.were}-`;
    }
    fursonaSpecies += randomItem(SPECIES);
    // Maybe you are a taur?
    if (tryWin(3)) {
      fursonaSpecies += `-${content.taur}`;
    }

    let whoAmI = randomItem(content.whereICameFrom);
    let past = randomItem(content.edgyPast);
    let goals = randomItem(content.goals).replace('$1', randomItem(contentGlobal.describingFurries));
    let hobby = sampleItemsFromArray(content.hobbies, 3);
    let pictureSeed = pad(randomBetween(1, 99999), 5);

    msg.reply(
      `My name is ${name} the ${title} ${fursonaSpecies}. I'm a ${fursonaSpecies} ${whoAmI}, ${past}. My main color is ${randomItem(COLORS)} with ${randomItem(COLORS)} accents! Some of my hobbies are ${hobby.join(', ')} and ${goals} ${randomItem(contentGlobal.expressions)}`,
      { 
        files: [`https://thisfursonadoesnotexist.com/v2/jpgs/seed${pictureSeed}.jpg`] 
      }
    );
    // msg.channel.send('pong');
  },
};

// https://thisfursonadoesnotexist.com/v2/jpgs/seed99999.jpg