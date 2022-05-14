const express = require('express');
const app = express();

const axios = require('axios');
const url = require('url');

const {CLINET_ID, CLIENT_SECRET, CLIENT_REDIRECT} = process.env;

// TODO: need to add user to database once authectacted
// TODO: filter the users and bots guilds to see if they are in the same server

app.get('/', async (req, res) => {
    const code = req.query.code

    if (code){

        try{
            const formData = new url.URLSearchParams({
                client_id: CLINET_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'authorization_code',
                code: code.toString(),
                redirect_uri: CLIENT_REDIRECT
            })

            const response = await axios.post(
                'https://discord.com/api/v8/oauth2/token', 
                formData.toString(), 
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }
            )
            res.send(response.data)
        }
        catch(err){
            console.log(err)
            res.sendStatus(400)
            console.log('test')
            console.log('testagian')
        }
    }
})

module.exports = app;