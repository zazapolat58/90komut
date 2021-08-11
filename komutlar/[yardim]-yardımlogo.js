const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`

[  **Logo Komutları**  ]

»  **\`p!alev\`**\ **:Alev fontlu logo yaparsınız.**
»  **\`p!altın\`**\ **:Altın fontlu logo yaparsınız.**
»  **\`p!anime\`**\ **:Anime fontlu logo yaparsınız.**
»  **\`p!arrow\`**\  **:Arrow fontlu logo yaparsınız.**
»  **\`p!banner\`**\ **:Banner fontlu logo yaparsınız.**
»  **\`p!basit\`**\ **:Basit fontlu logo yaparsınız.**
»  **\`p!dinamik\`**\ **:Dinamik fontlu logo yaparsınız.**
» **\`p!elmas\`**\ **:Elmas fontlu logo yaparsınız.**
»  **\`p!green\`**\ **:Yeşil fontlu logo yaparsınız.**
»  **\`p!habbo\`**\  **:Habbo fontlu logo yaparsınız.**
»  **\`p!kalın\`**\ **:Kalın fontlu logo yaparsınız.**
» **\`p!kırmızı\`**\ **:Kırmızı fontlu logo yaparsınız.**
»**\`p!neonmavi\`**\ **:NeonMavi fontlu logo yaparsınız.**
» > **\`p!sarı\`**\ **:Sarı fontlu logo yaparsınız.**

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
    name: 'logo-komutlar', 
    description: 'The Help Command',
    usage: 'help'
};