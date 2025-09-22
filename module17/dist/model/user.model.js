"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = require("validator");
const bcrypt_ts_1 = require("bcrypt-ts");
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
        required: [true, "Email is required"],
        validate: [validator_1.isEmail]
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
userSchema.method("user_instance_hash_password", function (plainPass) {
    return __awaiter(this, void 0, void 0, function* () {
        const hasPass = yield (0, bcrypt_ts_1.hash)(plainPass, 10);
        this.password = hasPass;
    });
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
