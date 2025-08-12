const fs = require('fs');

const readStreamBuffer = fs.createReadStream('./hello.txt', { encoding: 'utf-8' })
const writeStreamBuffer = fs.createWriteStream('./hello2.txt', { encoding: 'utf-8' })

readStreamBuffer.on('data', (data) => {
    writeStreamBuffer.write(data, (err) => {
        if (err) {
            console.log(err)
        }
    })
})




