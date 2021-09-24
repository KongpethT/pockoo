const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors");
const multer = require('multer')
const tr = require("./configure/table_routing.json")

app.use(cors())
app.use(express.json())
global.message = null;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require("./configure/database")
tr.routing.map((row, index) => {
    require(row.name)(app)
})
//require("./router/blogs_router")(app)
//require("./router/messaged_route")(app)
module.exports = app
app.listen("3001", () => {
    console.log("server is running on port 3001")
})
////
/*
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/image/cover/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})
var upload = multer({ storage: storage }).single('file')
*/
app.post("/upload", (req, res) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '../public/image/cover/')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
    const upload = multer({ storage: storage }).single('file')
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
})




////