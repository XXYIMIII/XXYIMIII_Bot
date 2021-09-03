const Discord = require('discord.js');
const keepAlive = require('./server.js');


const client = new Discord.Client()
client.on("ready", function(){
        console.log(`Pasrah online`);
});
client.login('ODM3MzgxNDQxMjg0ODY2MTQ5.YIruPQ.1HdYUEUsWQ9KS5t7K6Tt6V3mk7s');



client.on ("message", (message) => {

if (message.author.bot) return;
   
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