const { SPECIES } = require("../shared/constants");
const { randomItem, flipCoin } = require("../shared/utils");

const nameSeed1 = ['Light', 'Solar', 'Draco', 'Gold', 'Rainbow', 'Muscle', 'Dark', 'Cloud', 'Angel', 'Moon', 'Earth', 'Demon', 'Shadow', 'Night', 'Sky', 'Death', 'Sea', 'Silver', 'Dancer', 'Ninja', 'Blaze', 'Metal', 'Spirit', 'Fire', 'Wind', 'Steel'];
const nameSeed2 = ['Demon', 'Dark', 'Dancer', 'Blaze', 'Fire', 'Gold', 'Sky', 'Metal', 'Earth', 'Moon', 'Rainbow', 'Light', 'Wind', 'Angel', 'Death', 'Ninja', 'Silver', 'Solar', 'Night', 'Draco', 'Shadow', 'Cloud', 'Spirit', 'Sea', 'Steel', 'Muscle'];
const nameTitle = ['Dangerous', 'Fire', 'Ice', 'Cold', 'Magnificent', 'Horny', 'Shadow', 'Deep', 'Steel-made', 'Blazing', 'Brainy', 'Winged', 'Salacious', 'Hazardous', 'Memer', 'Gamer', 'Crusher', 'Imperial']

module.exports = {
  name: '!fursona',
  description: 'Create a Fursona',
  execute(msg, args) {

    let name = `${randomItem(nameSeed1)}-${randomItem(nameSeed2)}`;
    let title = randomItem(nameTitle)

    let fursonaSpecies = '';
    // Do you have wings?
    if (tryWin(30)) {
      fursonaSpecies += 'Winged ';
    }
    // Is a Were- Something? You got 30% chance to be a Were!
    if (tryWin(30)) {
      fursonaSpecies += 'Were-';
    }
    fursonaSpecies += randomItem(SPECIES);

    // How I came to be
    let whoAmI = randomItem([
      'with a mysterious past',
      'with a tragic past',
      'with a unknown past',
      'born from the stars',
      'made artificially in a laboratory',
      'without friends because I\'m a lone traveler'
    ]);

    let family = randomItem([
      'and my parents died in a terrible disaster',
      'and I never met my parents',
      'in which I never had a chance to meet my parents',
      '',
      'made artificially in a laboratory',
      'without friends because I\'m a lone traveler'
    ]);

    msg.reply(`My name is ${name} the ${title} ${fursonaSpecies}. I'm a ${fursonaSpecies} ${whoAmI}`);
    // msg.channel.send('pong');
  },
};