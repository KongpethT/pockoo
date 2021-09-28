module.exports = (app) => {
    const index = require("../controller/upload_controller")
    app.post("/upload", index.upload)
}