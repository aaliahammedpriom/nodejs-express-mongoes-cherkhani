import express, { Application, json } from "express"
import userRoutes from "./controller/user.controller";
import noteRoutes from "./controller/note.controller";
const app: Application = express();

// middleware
app.use(json())
app.use('/users', userRoutes)
app.use('/notes', noteRoutes)

app.get('/', async (req, res)=>{
    res.send("Hello Bangladesh")
})

export default app;