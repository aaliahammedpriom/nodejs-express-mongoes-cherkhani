"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, '../../src/db/todos.json');
const todoRouter = express_1.default.Router();
todoRouter.get('/', (req, res) => {
    // console.log({req, res})
    const number = [1, 2, 3];
    res.send(number);
});
todoRouter.get('/data', (req, res) => {
    const data = JSON.parse(fs_1.default.readFileSync(filePath, { encoding: "utf-8" }));
    // console.log(typeof (data))
    res.send(data);
});
exports.default = todoRouter;
