const Discord = require('discord.js');
const { randomBetween } = require("../shared/utils");
const content = require("../language/en/quotes.json");

module.exports = {
  name: '!shower',
  description: 'For those moments where you transcend thinking while wasting water',
  execute(msg, args) {
    
    const thoughts = content.thoughts;
    const showerThought = thoughts[randomBetween(0, thoughts.length - 1)];

    msg.channel.send(`🚿 **Shower Thoughts**\n\n>>> ${showerThought}`)
  }
};
