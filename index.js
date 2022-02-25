const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

require("dotenv").config();

bot.on("ready", () => {
    console.log("bot is ready")
})

bot.on("messageCreate", (message) => {
    if(message.author.bot) return;
    
    message.channel.send("bitch")
})

bot.login(process.env.TOKEN);