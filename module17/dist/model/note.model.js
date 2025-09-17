"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    uid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    privacy: {
        type: String,
        enum: ["private", "public"],
        default: "private"
    }
});
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
