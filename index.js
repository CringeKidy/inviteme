const { Client, Intents, MessageManager, DiscordAPIError } = require("discord.js")
const bot = new Client ({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

require("dotenv").config();

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


    if(message.content == "tell me a joke"){
        const jokes = ["if my dog had your face id shave its ass and teach it how to walk backwards",
                       "id bang your mum but even your father ran away from that", 
                       "your pp is smol",
                       "id hate you but my mother told me not to get mad at jokes",
                       "i once saw 2 jews walk into a german bar and iv never seen someone so concentrated when drunk",
                       "your black"
        ]
        const response = jokes[Math.floor(Math.random() * jokes.length)]
        message.channel.send(response)
    }

    if(message.content == "give me a number"){
        const number = Math.floor(Math.random() * 20);

       message.channel.send(number.toString())
    }

    
}) 

bot.on('messageReactionAdd', (react, user) => {
    react.message.guild.channels.cache.get(react.message.channelId).send("someone is being a sussy baka")
});



bot.login(process.env.TOKEN);