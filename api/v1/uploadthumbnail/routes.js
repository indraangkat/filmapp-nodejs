const express = require('express');
const router = express.Router();


const thumbnail = require("./thumbnail")



router.post("/thumbnail", thumbnail)





module.exports = router 
