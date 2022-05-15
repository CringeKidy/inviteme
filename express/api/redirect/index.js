const express = require('express');
const app = express();

const axios = require('axios');
const url = require('url');

const { NewUser, UpdateUser} = require('../../Utls/database/Utils/Users.js');
const {CLINET_ID, CLIENT_SECRET, CLIENT_REDIRECT} = process.env;

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

        UpdateUser(UserID, AccessToken, RefreshToken)

        res.send(200)



    }
})

module.exports = app;