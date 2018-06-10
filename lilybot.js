const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDU1MTQ2OTIyMjY5ODY4MDUy.Df3xsg.SmIF3ha_gc8ImL2ur-Zlf5XIeOU");