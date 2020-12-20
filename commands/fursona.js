const contentGlobal = require("../language/en/global.json");
const content = require("../language/en/fursona.json");
const {
  sampleItemsFromArray,
  randomItem,
  randomBetween,
  tryWin,
  pad
} = require("../shared/utils");

module.exports = {
  name: '!fursona',
  description: 'Create a Fursona',
  execute(msg, args) {

    let name = `${randomItem(content.namePrepend)}-${randomItem(content.bodyPart)}`;
    let title = randomItem(content.title);
    const isHybrid = tryWin(10);

    let fursonaSpecies = '';
    // Do you have wings?
    if (tryWin(10)) {
      fursonaSpecies += `${content.winged} `;
    }
    // Is a Were- Something? You got 30% chance to be a Were!
    if (tryWin(10)) {
      fursonaSpecies += `${content.were}-`;
    }

    // Hybrids exists
    if (isHybrid) {
      fursonaSpecies += sampleItemsFromArray(contentGlobal.species, randomBetween(2, 3)).join('/');
      fursonaSpecies += ` ${content.hybrid}`;
    } else {
      fursonaSpecies += randomItem(contentGlobal.species);
    }
    
    // Maybe you are a taur?
    if (tryWin(3)) {
      fursonaSpecies += ` ${content.taur}`;
    }

    let whoAmI = randomItem(content.whereICameFrom);
    let past = randomItem(content.edgyPast);
    let goals = randomItem(content.goals).replace('$1', randomItem(contentGlobal.describingFurries));
    let hobby = sampleItemsFromArray(content.hobbies, 4);
    let pictureSeed = pad(randomBetween(1, 99999), 5);

    msg.reply(
      `My name is ${name} the ${title} ${fursonaSpecies}. I'm a ${fursonaSpecies} ${whoAmI}, ${past}. My main color is ${randomItem(contentGlobal.colors)} with ${randomItem(contentGlobal.colors)} accents! Some of the things I like are ${hobby.join(', ')} and ${goals} ${randomItem(contentGlobal.expressions)}`,
      { 
        files: [`https://thisfursonadoesnotexist.com/v2/jpgs/seed${pictureSeed}.jpg`] 
      }
    );
  },
};