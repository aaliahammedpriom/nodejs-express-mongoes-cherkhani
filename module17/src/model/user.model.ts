import { Schema, model } from "mongoose";
import { IUser } from "../interface/user.interface";

const userSchema = new Schema<IUser>({
    name: { 
        type: String, 
        required: [true, "Name is required"] 
    },
    email: { 
        type: String, 
        trim: true, 
        lowercase: true, 
        unique: [true, "Email already exists"], 
        required: [true, "Email is required"] 
    },
    role: {
        type: String,
        enum: {
            values: ["student", "it", "teacher", "admin"],
            message: "{VALUE} is not a valid role"
        },
        default: "student"
    },
    isActive: { 
        type: Boolean, 
        required: [true, "Status is required"], 
        default: true 
    }
}, { timestamps: true }); // optional: automatically adds createdAt and updatedAt

const User = model("User", userSchema);

export default User;
