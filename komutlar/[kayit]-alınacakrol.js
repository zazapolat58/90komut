const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Alınacak Rolü Sıfırla `)
.setColor('BLACK')
.setDescription(`Kayıt Olunca Otomatik Alınacak Rol Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
db.delete(`alınacakrol_${message.guild.id}`)
return;
}
//pythonic
let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL()) 
.setTitle(`${client.user.username} - Alınacak Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Kayıt Olunca Alınacak Rolü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Alınacak Rol Ayarlandı `)
.setColor('BLACK')//pythonic//pythonic//pythonic//pythonic//pythonic
.setDescription(`Kayıt Olunca Otomatik Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı ! `)//pythonic//pythonic//pythonic//pythonic
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)//pythonic//pythonic//pythonic
message.channel.send(ayarlandı)
  
}
exports.conf = {//pythonic//pythonic
  enabled: true,
  guildonly: false,
  aliases: ['alınacakrol', 'arol', 'a-rol'],
  permlevel: 0//pythonic
}
exports.help = {
  name: 'alınacak-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: '!alınacak-rol @rol'
}//pythonic