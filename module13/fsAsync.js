const fs = require('fs');
console.log("task 1")
fs.writeFile('./hello.txt', "bangladesh",{encoding: 'utf-8'}, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("success")
    }
})
fs.readFile('./hello.txt', {encoding: 'utf-8'}, (err, data)=>{
    if(err){
        console.log( err)
        return
    }
    else{
        console.log(data)
    }
})
console.log("task 2")

