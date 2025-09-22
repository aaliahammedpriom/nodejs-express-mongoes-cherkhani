import { Model, Schema, model } from "mongoose";
import { IUser, User_Password_Instance_Method } from "../interface/user.interface";
import { isEmail } from "validator";
import { hash } from "bcrypt-ts";

const userSchema = new Schema<IUser, Model<IUser>, User_Password_Instance_Method>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
        validate: [isEmail]
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
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 6,
        maxLength: 64

    }
}, { timestamps: true }); // optional: automatically adds createdAt and updatedAt

userSchema.method("user_instance_hash_password", async function (plainPass: string) {
    const hasPass = await hash(plainPass, 10)
    this.password = hasPass;
})
const User = model("User", userSchema);

export default User;
