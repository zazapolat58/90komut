const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmurateren = new Discord.MessageEmbed()

.setColor("RANDOM")
.setDescription(`

[ **Eğlence Komutları** > ]

»  **\`p!aduketçek\`**\ **:Etiketlediğiniz kişiye aduket çekersiniz.**
»  **\`p!balık-tut\`**\ **:Denizde balık tutarsınız.**
»  **\`p!beşlik\`**\ **:Etiketlediğiniz kişiyle beşlik çakarsınız.**
»  **\`p!ara155\`**\ **:Polisi aramanıza yarar.**
»  **\`p!efkarım\`**\ **:Şu anda olan efkarınızı ölçersiniz.**
»  **\`p!ejderha-yazı\`**\ **:Ejderha temalı logo üretirsiniz.**
» **\`p!espri\`**\ **:Bot sizin için espri yapar.**
»  **\`p!kartopu\`**\ **:Etiketlediğiniz kişiye kartopu atarsınız.**
»  **\`p!kaç-cm\`**\ **:Bot malafat uzunluğunuzu söyler.**
»  **\`p!kralol\`**\ **:Kral olmanıza yarar.**
»  **\`p!tokat\`**\ **:Etiketlediğiniz kişiyi tokatlarsınız.**
» **\`p!öp\`**\ **:Etiketlediğiniz kişiyi öpmenize yarar.**
»  **\`p!şekerye\`**\ **:Bot size şeker ikram eder.
»  **\`p!taksimdayı\`**\ **:Taksim dayı sizinle ingilizce konuşur.**


**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/LİNK)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=BBOTİD&permissions=8&scope=bot)**
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
    name: 'eğlence-komutlar', 
    description: 'The Help Command',
    usage: 'help'
};
