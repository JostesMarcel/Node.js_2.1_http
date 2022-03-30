const http = require("http")
const fs = require("fs")
const PORT = 9001

// const cssPage = fs.readFileSync("./style.css")

const server = http.createServer((req, res) => {
    const path = (req.url === "/") ? "/index.html" : req.url
    console.log(req.url);
    fs.readFile(`.${path}`, (err, data) => {
        if(err) {
            res.write("Error")
        } else {
            res.write(data)
        }
        res.end()
    })
    // fs.readFile("./style.css", (err, data) => {
    //     if(err){
    //         res.write("Error")
    //     } else {
    //         res.write(data)
    //     }
    //     res.end()
    // })
})

server.listen(PORT)