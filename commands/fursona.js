const { SPECIES, COLORS } = require("../shared/constants");
const {
  randomItem,
  randomBetween,
  tryWin,
  sampleItemsFromArray,
  pad
} = require("../shared/utils");

const nameSeed1 = ['Light', 'Solar', 'Draco', 'Gold', 'Rainbow', 'Muscle', 'Dark', 'Cloud', 'Angel', 'Moon', 'Earth', 'Demon', 'Shadow', 'Night', 'Sky', 'Death', 'Sea', 'Silver', 'Dancer', 'Ninja', 'Blaze', 'Metal', 'Spirit', 'Fire', 'Wind', 'Steel'];
const nameSeed2 = ['Hair', 'Fur', 'Scale', 'Feather', 'Slime', 'Antler', 'Horn', 'Ear', 'Head', 'Mind', 'Mask', 'Eye', 'Sight', 'View', 'Nose', 'Musk', 'Scent', 'Trunk', 'Beak', 'Muzzle', 'Mouth', 'Tooth', 'Teeth', 'Fang', 'Tusk', 'Tongue', 'Throat', 'Neck', 'Fluff', 'Bone', 'Muscle', 'Buff', 'Chest', 'Back', 'Belly', 'Tummy', 'Gut', 'Navel', 'Spine', 'Tail', 'Butt', 'Crotch', 'Waist', 'Hips', 'Dick', 'Tits', 'Boobs', 'Nipples', 'Cock', 'Thighs', 'Legs', 'Claws', 'Talon', 'Paw', 'Flipper', 'Coat', 'Wings', 'Tentacle', 'Stripes', 'Ring', 'Soul', 'Pad', 'Toe', 'Finger'];
const nameTitle = ['Dangerous', 'Fire', 'Ice', 'Cold', 'Magnificent', 'Horny', 'Shadow', 'Deep', 'Steel-made', 'Blazing', 'Brainy', 'Winged', 'Salacious', 'Hazardous', 'Memer', 'Gamer', 'Crusher', 'Imperial']
const hobbies = ['BadDragon Connoisseur', 'Tree shaping', 'Beetle fighting', 'Newsraiding', 'Extreme Ironing', 'Stone skipping', 'Geocaching', 'Suing', 'Element Collecting', 'Listening to Music']
const furryDescriptor = ['fuzzy', 'furballs', 'whoozifuzz', 'fur'];
const furryEmoji = ['OwO', '^~^', '^.-', 'O-O', 'X3', 'x3', ':3', 'uwu'];

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
    // Maybe you are a taur?
    if (tryWin(10)) {
      fursonaSpecies += '-Taur';
    }

    // How I came to be
    let whoAmI = randomItem([
      'with a mysterious past',
      'with a tragic past',
      'with a unknown past',
      'born from the stars',
      'made artificially in a laboratory',
      'without friends because I\'m a lone traveler',
      'with a special mission from Equestria'
    ]);

    let past = randomItem([
      `and my parents died in a terrible disaster in which I don't talk - born to feel`,
      `and I never met my parents, so I learned everything about life myself`,
      `made artificially in a laboratory`,
      `I don't have any friends because I'm a lone traveler - I prefer that way`
    ]);

    let goals = randomItem([
      `I hope to make a lot of ${randomItem(furryDescriptor)} friends`,
      `I want to hug all of you, my new ${randomItem(furryDescriptor)} friends`,
      `I will pounce every one of you!!!!`,
      `I want to meet all of you! I'm open for DMs everyone!`,
      `I want to hear the story of your fursona <3`
    ]);

    let hobby = sampleItemsFromArray(hobbies, 3);

    let pictureSeed = pad(randomBetween(1, 99999), 5);

    msg.reply(
      `My name is ${name} the ${title} ${fursonaSpecies}. I'm a ${fursonaSpecies} ${whoAmI}, ${past}. My main color is ${randomItem(COLORS)} with ${randomItem(COLORS)} accents! Some of my hobbies are ${hobby.join(', ')} and ${goals} ${randomItem(furryEmoji)}`,
      { 
        files: [`https://thisfursonadoesnotexist.com/v2/jpgs/seed${pictureSeed}.jpg`] 
      }
    );
    // msg.channel.send('pong');
  },
};

// https://thisfursonadoesnotexist.com/v2/jpgs/seed99999.jpg