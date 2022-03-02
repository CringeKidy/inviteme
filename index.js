const fs = require("node:fs")
const { Client, Collection, Intents } = require('discord.js');
const { name } = require("./commands/command");
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

var prefix = "!"
bot.command = new Collection;

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))


for (file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	bot.command.set(command.name, command);
}


bot.on("ready", () => {
    console.log("bot is ready")

})

bot.on("messageCreate", (message) =>{
    if(message.author.bot) return;

   
    if(message.content == "inviteCringe"){
        message.channel.send("zaydoggs invited cringe to server")
    }

    if(message.content == "i love Elden Ring"){
        message.channel.send("what an emo slut")
    }

    if(message.content == "yow momma so fat"){
        message.channel.send("when she mad an order with dominos for a delivery they had to call pizza hut in for back up")
    }


    if(message.content == "give me a number"){
        const number = Math.floor(Math.random() * 20);

       message.channel.send(number.toString())
    }

    
    if(message.content.startsWith(prefix.length) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/)
	const command = args.shift()

	try{
		bot.command.get(command).execute(message, args, bot);
	}
	catch{
		console.log("test")
		message.channel.send("That is not a command please check it and try again")
	}

}) 

bot.on('messageReactionAdd', (react, user) => {
    react.message.guild.channels.cache.get(react.message.channelId).send("someone is being a sussy baka")
});



bot.login(process.env.TOKEN);