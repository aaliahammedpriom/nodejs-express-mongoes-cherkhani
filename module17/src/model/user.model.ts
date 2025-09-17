import { Schema, model } from "mongoose";

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

export default User;