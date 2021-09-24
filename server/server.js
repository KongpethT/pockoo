const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors");
const multer = require('multer')
app.use(cors())
app.use(express.json())
let message = null;

const EventEmitter = require("events")
const emitter = new EventEmitter()





const conn = mysql.createConnection(
    {
        host: "58.82.141.196",
        //host: "10.180.0.1",
        //host: "localhost",
        user: "root",
        password: "@Ishow2010",
        database: "blogsdb",
        port: "13306",
        //pool: {max: 5,min: 0,acquire: 30000,idel: 10000}
    }
)



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/image/cover/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

var upload = multer({ storage: storage }).single('file')
app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
})

app.post("/debugs", (req, res) => {
    console.log(req.body);

})
app.get("/blogs", (req, res) => {

    conn.query("select * from blogs order by created_at desc", (error, result) => {
        if (error) {
            res.send({
                develop: "pockoo",
                connected: false,
                message: error
            })
        } else {
            res.send(result)
        }
    })
})

app.post("/blogs", (req, res) => {
    const code = req.body.code
    const title = req.body.title
    const author = req.body.author
    const category = req.body.category
    const cover = req.body.text
    //console.log(req.body);
    conn.query("insert into blogs (code, title, author, category,cover) values (?,?,?,?,?)",
        [code, title, author, category, cover], (error, result) => {
            if (error) {
                message =
                {
                    develop: "pockoo",
                    connected: true,
                    error: true,
                    message: error,
                    state: "unsuccessful"
                }
            } else {
                message =
                {
                    develop: "pockoo",
                    connected: true,
                    error: false,
                    message: result,
                    state: "successfully"
                }
            }
        })
    setTimeout(() => { message = null }, 30000)
})

app.get("/message", (req, res) => {
    res.send({
        develop: "pockoo",
        error: message
    })
})

// Register a listenner
emitter.on("messageLoged", () => {
    console.log("Listener called");

})
//Raise an event
emitter.emit("messageLogged")

app.listen("3001", () => {
    console.log("server is running on port 3001");
})
////