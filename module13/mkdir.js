const fs = require('fs');
fs.writeFile('./tmp/a/apple/p.txt',"{recursive: true}", (err) => {
    if (err) throw err;
})