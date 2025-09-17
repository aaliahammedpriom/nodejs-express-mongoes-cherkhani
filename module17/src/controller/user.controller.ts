import { Request, Response, Router } from "express";
import { Schema, Types, model } from "mongoose";
import User from "../model/user.model";

const userRoutes = Router();

userRoutes.get('/', async (req: Request, res: Response) => {
    const result = await User.find({})
    console.log(result)
    res.send(result)
})
userRoutes.get('/:userId', async(req: Request, res: Response) => {
    const result = await User.findOne({ _id: new Types.ObjectId(req.params.userId) })
    console.log(result)
    res.send(result)
})
userRoutes.patch('/:userId', async(req: Request, res: Response) => {
    const result = await User.findByIdAndUpdate(req.params.userId,{$set: req.body},{new: true, runValidators:true})
    console.log(result)
    res.send(result)
})
userRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            isActive: req.body.isActive
        })
        const saveUser = await user.save()
        console.log(saveUser)
        res.send(saveUser)
    } catch (error: any) {
        console.log(error.code)
        res.send(error)
    }
})
export default userRoutes