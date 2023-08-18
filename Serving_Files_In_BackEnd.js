const http = require("http")

const fs = require("fs")
const { type } = require("os")

const file = fs.readFileSync("Forms_And_Inputs.html")

const server = http.createServer((request,respond) =>
{
    respond.writeHead(200,{"Content-type":"text/html"})
    respond.end(file)
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listen on port 80")
})