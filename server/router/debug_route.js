module.exports = (app) => {
    const index = require("../controller/debug_controller")
    app.post("/debug", index.debug)
}