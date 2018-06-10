const Discord = require("discord.js");
const client = new Discord.Client();

var serverStates = [];

//declare shortcut functions
function loop(m,n){
  for(i=0;i<n;i++){ 
    message.channel.sendMessage(m);
  }
}
function send(m){
  // where "m" is the message to send
  message.channel.sendMessage(m);
}
function tts(m){
  // where "m" is the message to send
  message.channel.sendTTSMessage(m);
}
function regex(m,p){
  // where "m" is the subject, "p" is the pattern
  message.channel.sendMessage(m.match(eval(p)));
}

client.on("ready", () => {
  console.log("I am ready!");
  //message.channel.send("lilybot 2.0 online!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  else if (message.content.startsWith("showguilds")){
    message.channel.send(""+client.guilds.toString());
  }
});

client.login("NDU1MTQ2OTIyMjY5ODY4MDUy.Df3xsg.SmIF3ha_gc8ImL2ur-Zlf5XIeOU");