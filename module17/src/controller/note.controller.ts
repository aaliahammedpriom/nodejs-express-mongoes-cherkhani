import { Request, Response, Router } from "express";
import { Note } from "../model/note.model";
import { Types } from "mongoose";

const noteRoutes = Router()
noteRoutes.get('/', async (req: Request, res: Response) => {
    const result = await Note.find({})
    console.log(result)
    res.send(result)
})
noteRoutes.get('/:noteId', async (req: Request, res: Response) => {
    const result = await Note.findOne({ _id: new Types.ObjectId(req.params.noteId) })
    console.log(result)
    res.send(result)
})
noteRoutes.patch('/:noteId', async (req: Request, res: Response) => {
    const result = await Note.findByIdAndUpdate(req.params.noteId, { $set: req.body }, { new: true, runValidators: true })
    console.log(result)
    res.send(result)
})
noteRoutes.post('/', async (req: Request, res: Response) => {
    try {
        // Validate privacy value
        const validPrivacy = req.body.privacy === "private" || req.body.privacy === "public" ? req.body.privacy : "public";
        const note = new Note({
            title: req.body.title,
            description: req.body.description,
            uid: req.body.uid,
            email: req.body.email,
            privacy: req.body.privacy
        })
        const saveNote = await note.save()
        res.send(saveNote)
    } catch (error: any) {
        console.log(error)
        res.send(error)
    }
})
export default noteRoutes