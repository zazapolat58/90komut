const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`

[  **Kullanıcı Komutları**  ]

» **\`p!avatar\`**\ **:Avatarınızı görürsünüz.**
»  **\`p!id\`**\ **:Etiketlediniz kişinin id sini görürsünüz.**
»  **\`p!kullanıcıbilgi\`**\ **:Etiketlediğiniz kişinin bilgilerini görürsünüz.**
»  **\`p!kurallar\`**\  **:Sunucu kurallarını görürsünüz.**
» **\`p!öneri\`**\ **:Öneride bulunursunuz.**
»  **\`p!sunucuresmi\`**\ **:Sunucu resmini görürsünüz.**
»  **\`p!yetkilerim\`**\ **:Yetkilerinizi görürsünüz.**


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
    name: 'kullanıcı-komutlar', 
    description: 'The Help Command',
    usage: 'help'
};