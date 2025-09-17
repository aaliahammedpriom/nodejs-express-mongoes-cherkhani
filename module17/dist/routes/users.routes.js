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
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const userRoutes = (0, express_1.Router)();
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
userRoutes.get('/', (req, res) => {
    res.send("User Get Route");
});
userRoutes.get('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User.findOne({ _id: new mongoose_1.Types.ObjectId(req.params.userId) });
    console.log(result);
    res.send(result);
}));
userRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            isActive: req.body.isActive
        });
        const saveUser = yield user.save();
        console.log(saveUser);
        res.send(saveUser);
    }
    catch (error) {
        console.log(error.code);
        res.send(error);
    }
}));
exports.default = userRoutes;
