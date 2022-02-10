const express = require('express');
const router = express.Router();

const video = require("./video")



router.post("/video", video)






module.exports = router 
