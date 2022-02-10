// load  ENV FILE CONFIG
require("dotenv").config()

// init express
const express = require('express')
const cors = require("cors")
const multer = require('multer')


const fileVideo = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./video");
    },
    filename: (req,file,cb)=>{
        const nmFile =  Date.now() + file.originalname
        console.log(nmFile)
        cb(null,nmFile)
    }
})

const fileThumbnail = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./thumbnail");
  },
  filename: (req,file,cb)=>{
      const nmFile =  Date.now() + file.originalname
      console.log(nmFile)
      cb(null,nmFile)
  }
})

const fileFilterVideo = (req, file, cb)=>{
  if(file.mimetype === 'video/mp4'){
      cb(null, true);
  } else {
      cb(null,false)
  }}

const fileFilterThumbnail = (req, file, cb)=>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    } else {
        cb(null,false)
    }}
   

// set port dari .env / ENV_PORT
const PORT = process.env.ENV_PORT
const URL = process.env.ENV_URL

// init variable express
var app = express()

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// app use multer
app.use(multer({storage: fileVideo, fileFilter:fileFilterVideo}).single('video'));

app.use(multer({storage: fileThumbnail, fileFilter:fileFilterThumbnail}).single('thumbnail'));

// app.use(
//     multer(
//       { 
//         storage: filestorage, 
//         fileFilter: fileFilter 
//       }
//     ).fields(
//       [
//         { 
//           name: 'thumbnail', 
//         }, 
//         { 
//           name: 'video', 
//         }
//       ]
//     )
// )
app.use(express.static(__dirname));


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

// MENDEFINISIKAN URL DEFAULT
const apiRouter = require(`${__dirname}/api/v1/routes`)
app.use(URL,apiRouter)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}${URL}`) //http://localhost:4000/api/v1
})
