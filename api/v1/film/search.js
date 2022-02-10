const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const search = (req,res)=>{
    let param = req.query.param

    // QUERY PARAM MENCARI NAMA FILM TABLE FILM
    con.query(`SELECT * FROM tbl_film WHERE judul_film LIKE '%${param}%'`,
    (err, result) =>{
        // JIKA SQL ERROR
        if(err){
            const response = new baseResponse(5000, err.sqlMessage)
            return res.status(500).json(response)
         }
        //  JIKA NAMA FILM DITEMUKAN
         if(result.length > 0 ){
            const response = new baseResponse().withDataList(result)
           return res.status(200).json(response)
        }
        // JIKA JUDUL FILM TIDAK ADA DALAM TABLE FILM
        else {
            const response = new baseResponse(4004,"Data Not Found")
           return res.status(404).json(response)
        }
    })
}

    module.exports = search