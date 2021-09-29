const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors");
const fileupload = require("express-fileupload")
const multer = require('multer')
const tr = require("./configure/table_routing.json")

app.use(fileupload())
app.use(cors())
app.use(express.json())
global.message = null
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require("./configure/database")
tr.routing.map((row, index) => {
    require(row.name)(app)
})

module.exports = app
app.listen("3001", () => {
    console.log("server is running on port 3001")
})


//////