const fs = require('node:fs')
const text = "Hello"
fs.writeFileSync('./hello.txt', text)
let data = fs.readFileSync('./hello.txt', { encoding: 'utf8' })
console.log(data)
console.log("priom")