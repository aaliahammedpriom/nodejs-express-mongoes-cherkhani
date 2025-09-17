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
const note_model_1 = require("../model/note.model");
const mongoose_1 = require("mongoose");
const noteRoutes = (0, express_1.Router)();
noteRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield note_model_1.Note.find({});
    console.log(result);
    res.send(result);
}));
noteRoutes.get('/:noteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield note_model_1.Note.findOne({ _id: new mongoose_1.Types.ObjectId(req.params.noteId) });
    console.log(result);
    res.send(result);
}));
noteRoutes.patch('/:noteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield note_model_1.Note.findByIdAndUpdate(req.params.noteId, { $set: req.body }, { new: true, runValidators: true });
    console.log(result);
    res.send(result);
}));
noteRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate privacy value
        const validPrivacy = req.body.privacy === "private" || req.body.privacy === "public" ? req.body.privacy : "public";
        const note = new note_model_1.Note({
            title: req.body.title,
            description: req.body.description,
            uid: req.body.uid,
            email: req.body.email,
            privacy: req.body.privacy
        });
        const saveNote = yield note.save();
        res.send(saveNote);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}));
exports.default = noteRoutes;
