const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`

[  **Kayıt Komutları**  ]

»  **\`p!kayıt-kanal #kanal\`**\  **: Üyelerin Kayıt Olacağı Kanal**
»  **\`p!kayıtçı-rol @rol\`**\ **: Kullanıcıyı Kayıt Edecek Olan Rol**
» **\`p!erkek-rol @rol\`**\ **: Erkek Olarak Kaydedilen Üyeye Verilecek Rol**
»  **\`p!kız @rol\`**\ **: Kız Olarak Kaydedilen Üyeye Verilecek Rol**
» **\`p!alınacak-rol @rol\`**\ **: Kayıtsızlardan Alınacak Rol**
» **\`p!erkek\`**\ **: Erkek Üyeyi Kaydetme Komutu**
»  **\`p!kız\`**\ **: Kız Üyeyi Kaydetme Komutu** 
» **\`p!kayıtçı-ver\`**\ **:Etiketlediğiniz Kişiye Kayıtçı Rolü Verirsiniz**

**» Bağlantılar** 
**[Destek Sunucusu](DC LİNK)** **•** **[Botun Davet Linki](DAVET LİNK)**
`)


.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "kayıt-komutlar",
  description: 'yardım kodu.',
  usage: 'yardım'
};  //Plasmic Code・xKqntyZ_