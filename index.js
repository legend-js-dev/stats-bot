//stats bot by legendjs >:D
const { Client } = require('discord.js');
const Discord = require('discord.js');
const { token, stats } = require('./config.json');
//dont touch the credits or i will find you and u will have to commit die >:D
const client = new Client({
  disableMentions: 'everyone'
});


client.loadCommands();
console.log('-------------------------------------');
console.log(`
██╗     ███████╗ ██████╗ ███████╗███╗   ██╗██████╗         ██╗███████╗
██║     ██╔════╝██╔════╝ ██╔════╝████╗  ██║██╔══██╗        ██║██╔════╝
██║     █████╗  ██║  ███╗█████╗  ██╔██╗ ██║██║  ██║        ██║███████╗
██║     ██╔══╝  ██║   ██║██╔══╝  ██║╚██╗██║██║  ██║   ██   ██║╚════██║
███████╗███████╗╚██████╔╝███████╗██║ ╚████║██████╔╝██╗╚█████╔╝███████║
╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝ ╚════╝ ╚══════╝
`);

console.log('-------------------------------------');
console.log(
  '[CREDITS]: made by legend-js | https://github.com/legend-js-dev | legendjs#0001'
);
console.log('-------------------------------------');
//this took me some time so dont you dare remove credits, if u do remove credits then you will have copy right issues.
client.on('ready', () => {
  console.log(`[INFO]: Ready on client (${client.user.tag})`);
  console.log(
    `[INFO]: watching ${client.guilds.cache.size} Servers, ${
    client.channels.cache.size
    } channels & ${client.users.cache.size} users`
  );
  console.log('-------------------------------------');
  client.user.setActivity('stats bot by legendjs :D', {
    type: 'WATCHING'
  });
});

client.on('guildMemberAdd', async member => {
  if (member.guild.id !== stats.guild.id) return;
  let channels = {
    members: client.channels.cache.get(stats.guild.channels.memberCount),
    humans: client.channels.cache.get(stats.guild.channels.humanCount),
    bots: client.channels.cache.get(stats.guild.channels.botCount)
  };
  channels.members.setName(`Members: ${member.guild.memberCount}`).catch(err => { })
  channels.humans.setName(`Humans: ${member.guild.members.cache.filter(x => !x.bot).size}`).catch(err => { })
  channels.bots.setName(`Bots: ${member.guild.members.cache.filter(x => x.bot).size}`).catch(err => { })
});

client.on('guildMemberRemove', async member => {
  if (member.guild.id !== stats.guild.id) return;
  let channels = {
    members: client.channels.cache.get(stats.guild.channels.memberCount),
    humans: client.channels.cache.get(stats.guild.channels.humanCount),
    bots: client.channels.cache.get(stats.guild.channels.botCount)
  };
  channels.members.setName(`Members: ${member.guild.memberCount}`).catch(err => { })
  channels.humans.setName(`Humans: ${member.guild.members.cache.filter(x => !x.bot).size}`).catch(err => { })
  channels.bots.setName(`Bots: ${member.guild.members.cache.filter(x => x.bot).size}`).catch(err => { })
});

client.login(token).catch(err => {
  console.log('[ERROR]: Invalid Token Provided');
});
