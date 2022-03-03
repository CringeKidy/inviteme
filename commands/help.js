const { MessageEmbed } = require("discord.js");
 
module.exports = {
	name: 'help',
    data: 'Shows a list of all of the commands that i have',
	execute(message, args, bot, command) {
        const embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Help Menu")
            .setAuthor({name: `created by ${bot.user.tag}`, iconURL:bot.user.avatarURL})
            .setDescription("To help you understand commands")
            .addFields(
                {name: "Just do / + the name of the command for help on that command", value:"example /help joke"},
                {name: "If you want the full list do /commands", value:"this just send a list of all the commands i have"}
            )
            .setTimestamp()
            .setFooter({text:`created by ${bot.user.tag}`, iconURL:bot.user.avatarURL})
            
        message.channel.send({emeds: embed})
	},
};