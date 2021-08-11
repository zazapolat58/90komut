const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
let tag = "★ ö𝕫𝕜𝕒𝕡𝕝𝕒𝕟 ♆ " // tagınız

const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  
let count = 0;
  
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

const embed = new Discord.MessageEmbed()

.setColor("GREEN")

.addField("Sunucudaki üye sayısı", message.guild.memberCount)
.addField("Çevrimiçi üye sayısı", message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "online","idle","Do Not Disturp" ).size)
.addField("Seslideki üye sayısı", count)
.addField("Tagdaki üye sayısı", message.guild.members.cache.filter(m => m.user.username.includes(tag)).size) // tagınız yoksa bu satrı silin

.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    
message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sy'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};