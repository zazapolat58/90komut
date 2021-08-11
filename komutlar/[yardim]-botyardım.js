const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`

[ **Bot Komutlar**  ]

» **\`p!bugbildir\`**\ **:Bir bug bildirebilirsiniz.**
»  **\`p!istatistik\`**\ **:Botun istatistiğini görürsünüz.**
»  **\`p!ping\`**\ **:Botun pingini görürsünüz.**
»  **\`p!bansorgulama\`**\ **:Bir üyenin ban geçmişine bakarsınız.**
»  **\`p!toplamkomut\`**\ **:Toplam komutlara bakarsınız.**
»  **\`p!sa-as\`**\ **:Sa-as komutlarına bakarsınız.**

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
    name: 'bot-komutlar', 
    description: 'The Help Command',
    usage: 'help'
};
