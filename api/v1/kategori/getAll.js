const con = require("../../../config/connection")
const baseResponse = require("../../../utils/BaseResponse")

const getAll = (req, res)=>{
        // QUERY MENAMPILKAN SEMUA ISI TABEL FILM
        con.query("SELECT * FROM tbl_kategori", (err, result)=>{
          //Jika terjadi error pada query / mysql
            if(err){
               const response = new baseResponse(5000, err.sqlMessage)
               return res.status(500).json(response)
            }
           //Jika berhasil get data
            if(result.length > 0 ){
                delete result[0].password
                const response = new baseResponse().withDataList(result)
               return res.status(200).json(response)
            } 
            //Jika data kosong !!
            else {
                const response = new baseResponse(4004,"Data Not Found")
               return res.status(404).json(response)
            }
    
        })
    }
    
    module.exports = getAll