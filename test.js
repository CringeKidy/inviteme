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

bot.on("messageCreate", (message) => {
	if(message.content.startsWith(prefix.length) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/)
	const command = args.shift().toLowerCase()

	try{
		console.log(bot.command.sweep("command"))
		bot.command.get(command).execute(message, args, bot);
	}
	catch{
		console.log(bot.command.name)
		//message.channel.send("That is not a command please check it and try again")
	}

	

})

bot.on("ready", () => {
    console.log("bot is ready")
})

bot.login('NzAwMTUwOTE3MTgxMjEwNzQ1.XpewWg.cM34IrR-l5HBhUJ1QB_TsUbDDnI');