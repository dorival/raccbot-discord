const Discord = require('discord.js');
const { predictableRandomBetween } = require("../shared/utils");
const content = require("../language/en/quotes.json");

module.exports = {
  name: '!wisdom',
  description: 'It dispenses from it its wisdom tooth',
  execute(msg, args) {
    
    const wisdomCollection = content.wisdom;
    const { quote, comment, author } = wisdomCollection[predictableRandomBetween(0, wisdomCollection.length - 1)];
    const randomImageId = predictableRandomBetween(0, 1084);

    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('💡 Wisdom of Today 💡')
      .addField(quote, comment)
      .setImage(`https://picsum.photos/id/${randomImageId}/200/200`);

    if (author) {
      embed.setAuthor(`— by ${author}`)
    }

    msg.channel.send(embed);
  }
};
