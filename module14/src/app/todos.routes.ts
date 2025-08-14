import express, { Request, Response } from 'express'
import fs from 'fs';
import path from 'path'

const filePath = path.join(__dirname, '../../src/db/todos.json')
const todoRouter = express.Router()


todoRouter.get('/', (req: Request, res: Response) => {
    // console.log({req, res})
    const number: number[] = [1, 2, 3]
    res.send(number)
})
todoRouter.get('/data', (req: Request, res: Response) => {
    const data = JSON.parse(fs.readFileSync(filePath, { encoding: "utf-8" }))
    // console.log(typeof (data))
    res.send(data)
})
 export default todoRouter