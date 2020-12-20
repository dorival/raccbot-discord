require('dotenv').config();
const Discord = require('discord.js');
const content = require("./language/en/bot.json");
const botCommands = require('./commands');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.commands = new Discord.Collection();
Object.keys(botCommands).map(key => {
  const namespace = process.env.IS_DEV === 'true' ? 'dev' : '';
  bot.commands.set(namespace + botCommands[key].name, botCommands[key]);
});

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();

  if (!bot.commands.has(command)){
    return;
  }

  try {
    bot.commands
      .get(command)
      .execute(msg, args);

  } catch (error) {
    console.error(error);
    msg.reply(`${content.catchAllErrorMessage} ${error.message}`);
  }
});
