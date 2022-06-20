const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ID: Number,
    UserID: String,
    AccessToken: String,
    RefreshToken: String,
})


const UserModel = mongoose.model('Users',UserSchema)

require('dotenv').config();
const express = require('express');
const app = express();


const axios = require('axios');
const url = require('url');
const {CLINET_ID, CLIENT_SECRET, CLIENT_REDIRECT} = process.env;

async function NewUser(UserID, AccessToken, RefreshToken){
    const result = await UserModel.findOne({UserID}).select("UserID").lean();
    if (!result) {
        const User = new UserModel({UserID, AccessToken, RefreshToken})

        try{
            User.save();
        }catch(err){
            console.log(`Didnt create new user due to ${err}`)
        }
    }
}

async function UpdateUser(UserID, AccessToken, RefreshToken){
       
    const result = await UserModel.findOne({UserID}).select("UserID").lean();
        if (!result) {
            User(UserID, AccessToken, RefreshToken) 
        }
  
}


async function CompareGuilds(UserID, BotID) {
    const GetUserGuilds = await  axios.get(
        `https://discordapp.com/api/users/@me/guilds`,
        {headers: {Authorization: `Bearer ${UserID}`}}
    )

    const GetBotGuilds = await  axios.get(
        `https://discordapp.com/api/users/@me/guilds`,
        {headers: {Authorization: `Bot ${BotID}`}}
    )

    
}
// TODO: See if user is in database be for creating new user 
// if so then just return nothing. if not then create new user and redirct to new dashbaord page

app.get('/', async (req, res) => {
    const code = req.query.code

    let UserID = ''
    let AccessToken = ''
    let RefreshToken = ''


    if (code){

        try{
            const TokensformData = new url.URLSearchParams({
                client_id: CLINET_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'authorization_code',
                code: code.toString(),
                redirect_uri: CLIENT_REDIRECT
            })


            const GetTokens = await axios.post(
                'https://discord.com/api/oauth2/token', 
                TokensformData.toString(), 
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }
            )

            const GetUserData = await  axios.get(
              `https://discordapp.com/api/users/@me`,
              {headers: {Authorization: `Bearer ${GetTokens.data.access_token}`}}
            )
            
            UserID = GetUserData.data.id
            AccessToken = GetTokens.data.access_token
            RefreshToken = GetTokens.data.refresh_token

                
        }
        catch(err){
            console.log(err)
            res.send(err)
        }

        CompareGuilds(UserID, process.env.BOT_TOKEN)


        //Trys to update the user on logon
        try{
            UpdateUser(UserID, AccessToken, RefreshToken)
        }
        catch{

            //if unable to update the user after login then it just creates a new entry in database. 
            NewUser(UserID, AccessToken, RefreshToken)
        }

        res.send(200)



    }
})

module.exports = app;