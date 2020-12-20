require('dotenv').config();
const Discord = require('discord.js');
const botCommands = require('./commands');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.commands = new Discord.Collection();
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
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
    msg.reply(`Yikes! I had an error executing this... ${error.message}`);
  }

  // if (msg.content === 'ping') {
  //   const list = bot.users.cache
  //     .filter(user => !user.bot)
  //     .map(user => user.username)

  //   // msg.reply(list.concat('\n'));
  //   msg.channel.send(list.concat('\n'));

  // } else if (msg.content.startsWith('!kick')) {
  //   if (msg.mentions.users.size) {
  //     const taggedUser = msg.mentions.users.first();
  //     msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
  //   } else {
  //     msg.reply('Please tag a valid user!');
  //   }
  // }
});
