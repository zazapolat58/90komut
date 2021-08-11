const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`

[ > **Moderasyon Komutları** ]

»  **\`p!sunucubilgi\`**\ **: Sunucu bilgilerini görürsünüz.**
»  **\`p!sayaç\`**\ **: Sunucuza sayaç sistemi eklersiniz.**
»  **\`p!say\`**\ **:Tagdaki çevrimiçi üyelerin saysını görürsünüz.**
»  **\`p!üyedurum\`**\ **:Çevrimiçi üyelerin saysını görürsünüz.**
»  **\`p!oylama\`**\ **:Oylama yaparsınız.**
»  **\`p!duyuru\`**\ **:Bottan duyuru yaparsınızx.**


**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/LİNK)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=BOTİD&permissions=8&scope=bot)**
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
    name: 'moderasyon-komutlar', 
    description: 'The Help Command',
    usage: 'help'
};
