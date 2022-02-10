const baseResponse = require('../../../utils/BaseResponse')
const con = require ('../../../config/connection')
const req = require("express/lib/request");


const video= ( req, res)=>{
// MENGGUNAKAN PARAM KARENA PAKAI URL /:NAMA_FILM
    const id_film = req.params.id_film
    const video = req.body.video

    if(!req.file){
        const response = new baseResponse(4000, "Video Tidak ditemukan")
        return res.status(400).json(response)
    }
    con.query("SELECT COUNT(*) as CNT FROM tbl_film WHERE id_film = ?", [id_film],
          (err,result) => {
            // JIKA SQL ERROR  
            if(err){
              const response = new baseResponse(5000, err.sqlMessage)
              return res.status(500).json(response)
              } 
            //   JIKA JUDUL FILM TIDAK ADA
              else{
                  if(result[0].CNT < 1){
              const response = new baseResponse(4009,"Film Tidak Ada")
              return res.status(409).json(response)
                 } 
                  
    // console.log(req.file.filename,1212121212)             
    con.query("UPDATE tbl_film SET video=? WHERE id_film =?",[req.file.filename,id_film],
         (err, result)=>{
          if(err){
            const response = new baseResponse(5000, err.sqlMessage)
            return res.status(500).json(response)
            }else{ 
            const response = new baseResponse(2000,"Berhasil Upload Film")
            return res.status(200).json(response)
        }}
    )
}})
} 

module.exports = video
