const contentGlobal = require("../language/en/global.json");
const content = require("../language/en/fursona.json");
const {
  sampleItemsFromArray,
  randomBetween,
  randomItem,
  replaceAll,
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

    const mapping = [
      { "%name%": name },
      { "%title%": title },
      { "%species%": fursonaSpecies },
      { "%whoAmI%": whoAmI },
      { "%past%": past },
      { "%color1%": randomItem(contentGlobal.colors) },
      { "%color2%": randomItem(contentGlobal.colors) },
      { "%hobbyList%": hobby.join(', ') },
      { "%myGoalsHere%": goals },
      { "%emoji%": randomItem(contentGlobal.expressions) }
    ];

    msg.reply(
      replaceAll(content.output, mapping),
      { 
        files: [`https://thisfursonadoesnotexist.com/v2/jpgs/seed${pictureSeed}.jpg`] 
      }
    );
  },
};