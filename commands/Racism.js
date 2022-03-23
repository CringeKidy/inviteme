module.exports = {
        name: 'insult me',
        data: 'tells insulting jokes',
        format: 'prefixinsults',
        execute(message, args, bot) {
                const insults = [""
            ]

                const response = insults[Math.floor(Math.random() * insults.length)]
                message.channel.send(response)
        },
};