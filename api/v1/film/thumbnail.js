const baseResponse = require('../../../utils/BaseResponse')
const con = require ('../../../config/connection')
const req = require("express/lib/request");


const thumbnail= ( req, res)=>{
// MENGGUNAKAN PARAM KARENA PAKAI URL /:NAMA_FILM
    const id_film = req.body.id_film
    const thumbnail = req.body.thumbnail

    console.log(req.file,323232)

if(!req.file){
    const response = new baseResponse(4000, "Thumbnail Tidak ditemukan")
    return res.status(400).json(response)
}
else{  
    con.query(`UPDATE tbl_film SET thumbnail=? WHERE id_film=?`,[req.file.filename,id_film],
(err, result)=>{
    const response = new baseResponse(2000,"Berhasil Upload Thumbnail")
    return res.status(200).json(response)
}
)}}
module.exports = thumbnail
