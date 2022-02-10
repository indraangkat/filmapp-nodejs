const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const findByGenre = (req,res)=>{
    const id_genre = req.params.id_genre;

    // CHECK MENAMPILKAN ISI TABLE USERS DENGAN BERDASARKAN ID YANG DICARI
    con.query (`SELECT tbl_genre.nama_genre, tbl_film.judul_film, tbl_film.thumbnail FROM tbl_genre INNER JOIN tbl_film ON tbl_genre.id_film = tbl_film.id_film WHERE tbl_genre.id_genre LIKE '%${id_genre}%'`, (err, result)=>{
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
    module.exports = findByGenre