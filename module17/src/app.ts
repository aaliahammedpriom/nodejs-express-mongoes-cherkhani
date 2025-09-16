import express, { Application, json } from "express"
const app: Application = express()

// middleware
app.use(json())

app.get('/', async (req, res)=>{
    res.send("Hello Bangladesh")
})

export default app;