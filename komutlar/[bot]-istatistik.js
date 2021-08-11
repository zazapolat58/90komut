const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  

const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]"); 
  


  


    const embed = new Discord.MessageEmbed()
        .setColor('PİNK')
    
        .setTitle('İstatistik Menüsü')
    .addField("**__Sahip Geliştirici__**",` Bot Sahip : 
        ot Geliştirici : `)
    .addField("**__Bot Bilgi__**",`
       Prefix : **p!**
       Bot Dil : 
       Komut Sayısı : **${client.commands.size}**`,true)
    .addField("**__Sunucu/Kullanıcı__**",` 
      Toplam Sunucular : **${client.guilds.cache.size}**
        Toplam Kullanıcılar :  **error`,true)
    
    
    
    
    .addField("**__Sürümler__**",`        Discord.js :  **v${Discord.version}**
       Node.js : **${process.version}**`,true)
        .addField("**__Gecikmeler__**", ` Ping : **${client.ws.ping}** MS 
         Uptime : ${uptime}
        `,true)
         .addField("**__Linkler__**", `
       Destek Sunucum [Tıkla!](https://discord.gg/LİNK)`,true)



   
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0,
};

exports.help = {
  name: 'istatistik',
  description: 'i',
  usage: 'i'
};