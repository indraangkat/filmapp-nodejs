const express = require('express');
const router = express.Router();

const findByGenre = require("./findByGenre")
const getAll = require("./getAll")


router.get('/:id_genre',findByGenre)
router.get('/',getAll)





module.exports = router 
