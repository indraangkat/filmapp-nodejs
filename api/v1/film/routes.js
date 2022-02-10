const express = require('express');
const router = express.Router();

const getAll = require("./getAll")
const search = require("./search")
const thumbnail = require("./thumbnail")
const video = require("./video")



router.get("/search",search)
router.get("", getAll);
router.put("/video/:id_film", video)
router.post("/thumbnail/:id_film", thumbnail)





module.exports = router 
