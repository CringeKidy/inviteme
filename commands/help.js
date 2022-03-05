const { MessageEmbed} = require("discord.js");
const fs = require("node:fs");

let commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"))

module.exports = {
	name: 'help',
    data: 'Shows a list of all of the commands that i have',
    format: 'prefixhelp (commandname)/(list)',
	async execute(message, args, bot) {
        let prefix = bot.prefix.get(bot.guilds.cache.get(message.guild.id))

        const MainMenuembed = new MessageEmbed()
            .setColor("BLUE")
            .setThumbnail(bot.user.displayAvatarURL())
            .setAuthor({name: `InviteME Command List`, iconURL:bot.user.displayAvatarURL()})
            .addFields(
                {name: "Help with commands", value:`do ${prefix}help + (name of command) example ${prefix}help joke` , inline:true},
                {name: "Full list", value:"to get the full list of commands do !help list", inline: true}
            )
            .setTimestamp()
            .setFooter({text:`Created by ${bot.user.tag}`, iconURL:bot.user.displayAvatarURL()})
        
        if(!args[1]){
            return message.channel.send({embeds: [MainMenuembed]})
        }

        if(args[1].toLowerCase() == "list"){
            var List = new MessageEmbed()
                .setColor("GREEN")
                .setThumbnail(bot.user.displayAvatarURL())
                .setAuthor({name:"Command list", iconURL: bot.user.displayAvatarURL()})
                .setTimestamp()
                .setFooter({text:`Created by ${bot.user.tag}`, iconURL: bot.user.displayAvatarURL()});


                
            for(file in commandFiles){
                let name = commandFiles[file].replace('.js', "")
                console.log(name)
                let CommandData = bot.command.get(name).data
                
                if(CommandData === undefined || null) CommandData = "no desc";

                List.addField("```" + prefix + name.toString() + "```", CommandData.toString(), false)
            }
            
            return message.channel.send({embeds: [List]});
        }


        let CommandName = bot.command.get(args[1]).name
        let CommandData = bot.command.get(args[1]).data
        let CommandFormat = bot.command.get(args[1]).format

        CommandFormat = CommandFormat.replace(`prefix`, prefix)
        if(CommandData === undefined || null) CommandData = "no desc";

        const CommandEmbed = new MessageEmbed()
            .setColor("PURPLE")
            .setThumbnail(bot.user.displayAvatarURL())
            .setAuthor({name:`the command ${CommandName}'s information`})
            .setTimestamp()
            .addFields(
                {name:"Comand Information", value: `${CommandData}`, inline:true},
                {name:"Command Format", value: `${CommandFormat}`, inline:true}
            )

        message.channel.send({embeds: [CommandEmbed]})
	},
};