import express, { Application, json } from "express"
import userRoutes from "./routes/users.routes";
const app: Application = express();

// middleware
app.use(json())
app.use('/users', userRoutes)

app.get('/', async (req, res)=>{
    res.send("Hello Bangladesh")
})

export default app;