import { Request, Response, Router } from "express";
import { ObjectId } from "mongodb";
import { Schema, Types, model } from "mongoose";

const userRoutes = Router();

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, trim: true, lowercase: true, unique: true, required: true },
    role: {
        type: String,
        enum: ["student", "it", "teacher", "admin"],
        default: "student"
    },
    isActive: { type: Boolean, required: true, default: true }
});


const User = model("User", userSchema)

userRoutes.get('/', (req: Request, res: Response) => {
    res.send("User Get Route")
})
userRoutes.get('/:userId', async(req: Request, res: Response) => {
    const result = await User.findOne({ _id: new Types.ObjectId(req.params.userId) })
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