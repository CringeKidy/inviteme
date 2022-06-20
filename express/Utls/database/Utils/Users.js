const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ID: Number,
    UserID: String,
    AccessToken: String,
    RefreshToken: String,
})


const UserModel = mongoose.model('Users',UserSchema)


module.exports = {
    async User(UserID, AccessToken, RefreshToken){
        const result = await UserModel.findOne({UserID}).select("UserID").lean();
        if (result) {
            console.log("Yes sir shes in there")
        }
        else{
            console.log('no sir', result)
            const User = new UserModel({UserID, AccessToken, RefreshToken})

            try{
                User.save();
            }catch{
                console.log('no it didnt work sussy')
            }
        }
    },
    async UpdateUser(UserID, AccessToken, RefreshToken){
       
        const result = await UserModel.findOne({UserID}).select("UserID").lean();
        if (result) {
            console.log("Yes sir shes in there")
        }
        
        console.log('no sir', result)
        User(UserID, AccessToken, RefreshToken) 
        
    }
}
