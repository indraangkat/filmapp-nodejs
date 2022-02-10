const baseResponse = require('../../../utils/BaseResponse')
const con = require ('../../../config/connection')
const req = require("express/lib/request");


const video= ( req, res)=>{
// MENGGUNAKAN PARAM KARENA PAKAI URL /:NAMA_FILM
    const judul_film = req.body.judul_film

if(!req.file){
    const response = new baseResponse(4000, "Video Tidak ditemukan")
    return res.status(400).json(response)
}
else{  
    con.query(`UPDATE tbl_film SET video = '${req.file.filename}'  WHERE judul_film=?`,[judul_film],
(err, result)=>{
    const response = new baseResponse(2000,"Berhasil Upload Film")
    return res.status(200).json(response)
}
)}}
module.exports = video
