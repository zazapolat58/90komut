const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel
    .send("murateren | Hemen Diyorum Abi 1 Saniye..")
    .then(message => {
      var murateren = [
        "**Senin Malafatın  18CM ** :eggplant: ",
        "**Senin Malafatın  11CM ** :eggplant:",
        "**Senin Malafatın 32CM  ** :eggplant:",
        "**Senin Malafatın  35CM ** :eggplant:",
        "**Senin Malafatın  8CM  ** :eggplant:",
        "**Senin Malafatın  65CM  ** :eggplant:",
        "**Senin Malafatın 5CM  ** :eggplant:",
        "**Senin Malafatın 31CM  ** :eggplant:",
        "**Senin Malafatın  14CM ** :eggplant:",
        "**Senin Malafatın  1CM ** :eggplant:",
        "**Senin Malafatın nE Maalesef Senin Malafatın Yokmuş ): ** :eggplant:"
      ];

      var murateren = murateren[Math.floor(Math.random() * murateren.length)];

      message.edit(`${murateren}`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçcm", "cmkaç", "kaçcm", "cm-kaç"],
  permLevel: 0
};

exports.help = {
  name: "kaç-cm",
  description: "Malafatını Söyler.",
  usage: "kaçcm"
};
