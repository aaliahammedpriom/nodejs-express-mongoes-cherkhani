import { Request, Response, Router } from "express";
import { Schema, Types, model } from "mongoose";
import User from "../model/user.model";
import { userZodInput, userZodSchema } from "../zod/user.zod";
const userRoutes = Router();

userRoutes.get('/', async (req: Request, res: Response) => {
    const result = await User.find({})
    console.log(result)
    res.send(result)
})
userRoutes.get('/:userId', async (req: Request, res: Response) => {
    const result = await User.findOne({ _id: new Types.ObjectId(req.params.userId) })
    console.log(result)
    res.send(result)
})
userRoutes.patch('/:userId', async (req: Request, res: Response) => {
    const result = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true, runValidators: true })
    console.log(result)
    res.send(result)
})
userRoutes.post('/', async (req: Request, res: Response) => {
    try {
        // Validate request body with Zod
        const parsedData: userZodInput = userZodSchema.parse(req.body);
        //Create Mongoose document 
        const user = new User({
            name: parsedData.name,
            email: parsedData.email,
            role: parsedData.role,
            isActive: parsedData.isActive
        });
        await user.user_instance_hash_password(parsedData.password)
        const saveUser = await user.save();
        res.json(saveUser)
    } catch (error: any) {
        console.log(error)
        res.send(error.message)
    }
})
export default userRoutes