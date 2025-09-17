"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, trim: true, lowercase: true, unique: true, required: true },
    role: {
        type: String,
        enum: ["student", "it", "teacher", "admin"],
        default: "student"
    },
    isActive: { type: Boolean, required: true, default: true }
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
