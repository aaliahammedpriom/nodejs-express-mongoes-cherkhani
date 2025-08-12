const eventEmitter = require('node:events')
class SchoolBell extends eventEmitter{}
 const mySchoolBell = new SchoolBell()
 mySchoolBell.on('ring', ()=>{
    console.log("Hurraahhhh")
 })
 mySchoolBell.on('ring', ()=>{
    console.log("Aj ki class sesh hbena?")
 })
 mySchoolBell.on('notring', ()=>{
    console.log("ohhhh")
 })
 mySchoolBell.on('notring', ()=>{
    console.log("noooo")
 })

 mySchoolBell.emit('ring')
 mySchoolBell.emit('notring')