exports.upload = (req, res, next) => {
    //console.log(req.files); //checking files 
    const file = req.files.photo
    file.mv("../public/image/cover/" + file.name, (error, result) => { if (error) { res.send(error) } })
}