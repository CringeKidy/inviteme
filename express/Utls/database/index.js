const mongoose = require('mongoose');

module.exports = {
    Connect(){
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(console.log("connected to DB"))
    }
}