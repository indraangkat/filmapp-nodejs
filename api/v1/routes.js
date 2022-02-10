const express = require('express')
const router = express.Router()

const film = require ("./film/routes")
router.use("/film", film)

const kategori = require("./kategori/routes")
router.use("/kategori", kategori)

const genre = require("./genre/routes")
router.use("/genre", genre)

const thumbnail = require("./uploadthumbnail/routes")
router.use("/thumbnail", thumbnail)

const video = require("./uploadvideo/routes")
router.use("/video", video)





module.exports= router