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
                "What did one butt cheek say to the other? A. Together, we can stop this shit.",
                "What did the penis say to the condom? A. Cover me, I’m going in",
                "What does the receptionist at a sperm bank say as clients leave? A. Thanks for coming!",
                "Welcome to the Sexual Innuendo Club. A. Thank you all for coming.",
                "Which sexual position produces the ugliest kids? A. Ask your mum!",
                "Whats 72? A. 69 with three people watching.",
                "How is sex like air? A. It’s not a big deal unless you aren’t getting any.",
                "What does a perverted frog say? A. Rubbit",
                "What does the sign on an out-of-business brothel say? A. Beat it. We’re closed.",
                "Why did the toilet paper roll down the hill? To get to the bottom",
                "Knock, Knock! Who's There? Howie! Howie who? Howie gonna hide this dead body? ",
                "Knock Knock Who's there? Iguana Iguana Who? Iguana touch your buttcrack!",
                "Knock Knock! Who’s there? Some! Some who? Some dickhead talking to a knock knock joke.",
                "What is Forrest Gump's password? 1Forrest1.",
                "Why did the M&M go to school? He wanted to be a Smartie.",
                "What did one traffic light say to the other? Stop looking at me, I'm changing!",
                "What's red and moves up and down? A tomato in an elevator!",
                "Why don't scientists trust atoms? Because they make up everything!",
                "You know what I saw today? Everything I looked at.",
                "What did the buffalo say when his son left for college? Bison!",
                "I was wondering why the frisbee was getting bigger, then it hit me.",
                "I have many jokes about rich kids—sadly none of them work.",
                "Why are skeletons so calm? Because nothing gets under their skin.",
                "My girlfriend treats me like a god. She ignores my existence and only talks to me when she needs something.",
                "Why do French people eat snails? They don't like fast food!",
                "You know why you never see elephants hiding up in trees? Because they’re really good at it.",
                "Why did the tomato blush? Because it saw the salad dressing.",
                "A man is walking in the desert with his horse and his dog when the dog says, “I can’t do this. I need water.” The man says, “I didn’t know dogs could talk.”"

                ]

                const response = jokes[Math.floor(Math.random() * jokes.length)]
                message.channel.send(response)
	},
};