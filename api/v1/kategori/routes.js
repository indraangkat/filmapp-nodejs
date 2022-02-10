const express = require('express');
const router = express.Router();

const findByKategori = require("./findByKategori")
const getAll = require("./getAll")


router.get('/:id_kategori',findByKategori)
router.get('',getAll)






module.exports = router 
