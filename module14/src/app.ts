import express, { Application, Request, Response } from 'express';
import todoRouter from './app/todos.routes';

const app: Application = express();
app.use(express.json())
app.use('/todos', todoRouter)



export default app
