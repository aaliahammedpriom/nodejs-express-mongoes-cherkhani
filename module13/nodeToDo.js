const fs = require('fs');
const http = require('http');

const data = JSON.parse(fs.readFileSync('./user.json', { encoding: 'utf-8' }))



const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`)
    if (url.pathname === "/" && req.method === "GET") {
        res.end("priom")
    }
    else if (url.pathname === "/todos" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(data, null, 2))
    }
    else if (url.pathname === "/todo" && req.method === "POST") {
        const name = url.searchParams.get("name")

        const find = data.find(dat => dat.name === name)
        console.log(find)
        res.end(JSON.stringify(find,null,2))
    }
    else if (url.pathname === "/todo" && req.method === "DELETE") {
        const name = url.searchParams.get("name")

        const find = data.find(dat => dat.name === name)
        const index = data.findIndex(item => item.id === find.id)
        data.splice(index,1)
        fs.writeFileSync('./user.json', JSON.stringify(data, null, 2))
        res.end(JSON.stringify(data,null,2))
    }
    else if (url.pathname === "/todos/create" && req.method === "POST") {
        const newData = {
            "id": data.length + 1,
            "name": "priom",
            "email": "priom@example.com",
            "age": 28,
            "city": "New York",
            "isActive": true
        }
        data.push(newData)

        fs.writeFileSync('./user.json', JSON.stringify(data, null, 2))

        res.end("data added")

    }
    else {
        res.end("Response Not Found")

    }



})

server.listen(3000, () => {

})