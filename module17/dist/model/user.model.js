"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
