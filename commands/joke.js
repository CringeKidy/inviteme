module.exports = {
	name: 'joke',
	execute(message, args, bot) {
        const jokes = ["if my dog had your face id shave its ass and teach it how to walk backwards",
        "id bang your mum but even your father ran away from that", 
        "your pp is smol",
        "id hate you but my mother told me not to get mad at jokes",
        "i threw a boomerang a few years ago. i now live in constant fear",
        "my grandfather has the heart of a lion and a life time ban at the zoo", 
        "woman only call me ugly until they find out how much money i make. then they call me ugly and poor",
        "working in a mirror factory is somthing i can totally see myself doing",
        "Do you want to hear a construction joke? Sorry, I’m still working on it.",
        "Why do ducks have feathers? To cover their butt quacks!",
        "" 
        ]
        const response = jokes[Math.floor(Math.random() * jokes.length)]
        message.channel.send(response)
	},
};