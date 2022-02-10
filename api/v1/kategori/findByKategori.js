const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const findByKategori = (req,res)=>{
    const id_kategori = req.params.id_kategori

    // CHECK MENAMPILKAN ISI TABLE USERS DENGAN BERDASARKAN ID YANG DICARI
    con.query (`SELECT tbl_kategori.nama_kategori, tbl_film.judul_film, tbl_film.thumbnail FROM tbl_film INNER JOIN tbl_kategori ON tbl_film.id_film = tbl_kategori.id_film WHERE tbl_kategori.id_kategori LIKE '%${id_kategori}%'`, 
    (err, result)=>{
    //   JIKA SQL ERROR
        if(err){
            const response = new baseResponse(5000, err.sqlMessage)
            return res.status(500).json(response)
        }
    //    JIKA ID YANG DICARI ADA 
        if(result.length > 0){

            //With Data Object Hanya menampilkan 1 data aja yang diambil dari result pada posisi pertama = [0]
            const response = new baseResponse().withDataObject (result)
            return res.status(200).json(response)
        } 
        // JIKA ID YANG DICARI TIDAK ADA
        else{
            const response = new baseResponse(4004, "Data Not Found")
            return res.status(404).json(response)
        }
    })
}
    module.exports = findByKategori