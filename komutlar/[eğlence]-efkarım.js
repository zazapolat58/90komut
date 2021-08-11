const Discord = require("discord.js");

exports.run = (client, message) => {

const murateren = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**LastREX** \n**Efkarınız:** **%${murateren}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "murateren | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
