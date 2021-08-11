const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`

[  **Otorol Komutlar**  ]

»  **\`p!otorol-mesaj-sıfırla\`**\ **:Otorol mesaj sıfırlarsınız.**
» **\`p!otorol-otorol-mesaj\`**\ **:Otorol mesaj ayarlarsınız.**
»  **\`p!otorol-ayarla\`**\ **:Otorol Rolünü ayarlarsınız.**
»  **\`p!otorol-kapat\`**\ **:Otorolu sıfırlarsınız.**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/link)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=BOTİD&permissions=8&scope=bot)**
`)

 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embedmurateren)
.then; //murateren

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'otorol-komutlar', 
    description: 'The Help Command',
    usage: 'help'
};
