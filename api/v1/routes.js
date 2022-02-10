const express = require('express')
const router = express.Router()

const film = require ("./film/routes")
router.use("/film", film)

const kategori = require("./kategori/routes")
router.use("/kategori", kategori)

const genre = require("./genre/routes")
router.use("/genre", genre)






module.exports= router