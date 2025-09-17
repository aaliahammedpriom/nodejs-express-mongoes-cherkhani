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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const user_model_1 = __importDefault(require("../model/user.model"));
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find({});
    console.log(result);
    res.send(result);
}));
userRoutes.get('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne({ _id: new mongoose_1.Types.ObjectId(req.params.userId) });
    console.log(result);
    res.send(result);
}));
userRoutes.patch('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true, runValidators: true });
    console.log(result);
    res.send(result);
}));
userRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_model_1.default({
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
