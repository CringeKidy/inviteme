module.exports = {
    name: "vc",
    data: "lets you create temporay Voice channels that only the creator and certain people can see.",
    format: "prefixvc (user that you want to see the channel), (user 2)",
    execute(message, args, bot){
        console.log(args)

       if(args[1] === "create"){
           if(!args[2]){
               message.reply("would like this to a solo channel?").then(reply => {
                   if(reply.content.toLowerCase() === "y" || "yes"){
                       
                   }
               })
           }
       }
    }
}