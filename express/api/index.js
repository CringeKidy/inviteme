const express = require('express')
const router = express.Router();

router.use('/redirect', require('./redirect/index.js')) 

module.exports = router