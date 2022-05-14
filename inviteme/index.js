require("dotenv").config();
require('./DB/mongo').execute();

const fs = require("node:fs")
const { Client, Collection, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,] });

const mongoose = require('mongoose'); 
const fetch = require('node-fetch');


bot.command = new Collection;
bot.prefix = new Collection;

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))

for (file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	bot.command.set(command.name, command);
}

console.log('test')

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("connected to DB"))

const test = new mongoose.Schema({
    name: String
})
const push = mongoose.model('test', test )

push.find({name: ""}, (error, data) => {
    console.log(data)
})

bot.on("ready", () => {
    console.log("bot is ready")
})

bot.on("messageCreate", async (message) =>{
    if(message.content.startsWith(bot.prefix.length)) return;
    if(message.author.bot) return;

    let guild = bot.guilds.cache.get(message.guild.id);
    
    if(!bot.prefix.get(guild)){
        bot.prefix.set(guild, "!")
    }

    let prefix = bot.prefix.get(guild)

	const args = message.content.slice(prefix.length).trim().split(/ +/)
	const command = args.slice(" ")

    if(!bot.command.get(command[0])) return;   

    try{
        await bot.command.get(command[0]).execute(message, args, bot);
    }
    catch(error){
        console.error(error)
        await message.reply({content:"That is not a command please check it and try again"})
    }

}) 

bot.on('messageReactionAdd', (react, user) => {
    react.message.guild.channels.cache.get(react.message.channelId).send("someone is being a sussy baka")
});



bot.login(process.env.TOKEN);