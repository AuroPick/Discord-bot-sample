//Discord.js paketini dahil ediyoruz.
const Discord = require("discord.js");

//Botumuzu olusturuyoruz.
const client = new Discord.Client();

//Bot basari ile derlendi.
client.on("ready", () => {
    console.log(`${client.user.tag} basari ile baglandi`);
});

//Mesaji okuyup geri mesaj yazdiriyoruz.
client.on("message", msg => {
    if (msg.content === `!hello`){
        msg.reply("Hello World!");
    }
});

//Bot token
client.login("NjY2MjQ2OTM5OTMwNzg3ODQx.XhxY2g.pG4J9eohFidlpZleB4xqRdZG3Nc");