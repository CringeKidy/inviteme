const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ID: Number,
    UserID: String,
    AccessToken: String,
    RefreshToken: String,
})


const UserModel = mongoose.model('Users',UserSchema)


module.exports = {
    NewUser(UserID, AccessToken, RefreshToken){
        const User = new UserModel({UserID, AccessToken, RefreshToken})

        try{
            User.save();
        }catch{
            console.log('no it didnt work sussy')
        }
    },
    async UpdateUser(UserID, AccessToken, RefreshToken){
       
        if(UserModel.find(UserID)){
            await UserModel.updateOne({UserID},{
                AccessToken,
                RefreshToken
            })    
            return ;
        }

        if(!UserModel.find(UserID)){
            this.NewUser(UserID, AccessToken, RefreshToken)  
        }
    }
}
