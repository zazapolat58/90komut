const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`

[  **Guard Komutları** ]

» **\`p!antiraid aç\`**\ **:Sunucuya bot eklenmez.**
»  **\`p!capsengel aç\`**\ **:Caplock engel açılır.**
» **\`p!emojikoruma aç\`**\ **:Emoji koruma açılır.**
» **\`p!everengel aç\`**\  **:Everyone atılamaz.**
» **\`p!kanalkoruma aç\`**\ **:Kanal oluşturulamaz ve ya silinemez.**
» **\`p!küfürengel aç\`**\ **:Küfürengel açılır.**
»  **\`p!modlog #kanal\`**\ **:Modlog kanalını belirlersiniz.**
» **\`p!reklamengel aç\`**\ **:Reklamengel açılır.**
»  **\`p!rolkoruma aç\`**\ **:Rol Oluşturulamaz ve ya silinemez.**
»  **\`p!sohbet-aç\`**\  **:Sohbet açılır.**
»  **\`p!sohbet-kapat\`**\ **:Sohbet kapatılır.**
» *\`p!sil-üye @üye miktar\`**\ **:Etiketlediğiniz kişinin mesajlarını silersiniz.**
» **\`p!sil miktar\`**\ **:Sohbeti belirli bir miktarda silersiniz.**
» **\`p!yavaşmod süre\`**\ **:Yavaş modu açarsınız.**
» **\`p!ban @üye sebep\`**\ **:Etiketlediğiniz kişiye ban atarsınız.**
»  **\`p!kick @üye sebep\`**\ **:Etiketlediğiniz kişiye kick atarsınız.**

**» Bağlantılar** 
**[Destek Sunucusu](DCLİNK)** **•** **[Botun Davet Linki](DAVET LİNK)**
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
    name: 'guard-komutlar', 
    description: 'The Help Command',
    usage: 'help'
};