const fs = require("fs")

exports.debug = (req, res) => {
    const jsonObject = {
        id: "4",
        title: "Narutox",
        author: "",
        category: "",
        cover: "/image/cover/losoleveling.png"
    }
    fs.writeFileSync("blogs.json", JSON.stringify(jsonObject), (error) => {
        console.log(error);
    })
}