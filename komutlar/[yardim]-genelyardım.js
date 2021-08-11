const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[**  ** Genel**  **]▬▬▬▬▬▬** ")
.setDescription(`



»  **\`p!moderasyon-komutlar\`**\ **:Moderasyon komutlarını gösterir.**

»  **\`p!eğlence-komutlar\`**\ **:Eğlence komutlarını gösterir.**

»  **\`p!guard-komutlar\`**\ **:Guard komutlarını gösterir.**

»  **\`p!bot-komutlar\`**\ **:Bot komutlarını gösterir.**

»  **\`p!kayıt-komutlar\`**\ **:Kayıt komutlarını gösterir.**

»  **\`p!logo-komutlar\`**\ **:Logo komutlarını gösterir.**

» **\`p!otorol-komutlar\`**\ **:Otorol komutlarını gösterir.**

»  **\`p!kullanıcı-komutlar\`**\ **:Kullanıcı komutlarını gösterir.**

 
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/LİNK)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=BOİTD&permissions=8&scope=bot)**
`)

 
.setFooter(client.user.username + "", client.user.avatarURL)
.setImage ("resimlink")//hizliresim önerilir.
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
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};
