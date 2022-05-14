require('dotenv').config();


const express = require('express')

const app = express()
const port = 3030


app.use('/api', require('./api/index.js'))

app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`)
})

