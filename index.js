const Discord = require('discord.js');
const keepAlive = require('./server.js');


const client = new Discord.Client()
client.on("ready", function(){
        console.log(`isi sesuka hati`);
});
client.login('Token Bot Discord');



client.on ("message", (message) => {

if (message.author.bot) return;

// Untuk angkat "41" tergantung berapa banyak foto yg kalian gunakan.
// Untuk format foto bisa png Dan jpg
  
if (message.content.startsWith ("pap dong")) {
    number = 41;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1 )) + 1;
    message.channel.send ({files: ["./img/" + imageNumber + ".png"]} )
}

if (message.content.startsWith ("hug")) {
    message.channel.send ({files: ["./img/hug.gif"]} )
}    

if (message.content.startsWith ("hore")){
  message.channel.send({files: ["./img/hore.png"]})
}

});
keepAlive();
