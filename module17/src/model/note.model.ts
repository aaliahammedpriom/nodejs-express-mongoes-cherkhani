import { Schema, model } from "mongoose";
import { INote } from "../interface/note.interface";

const noteSchema = new Schema<INote>({
    title:{
        type: String,
        required: true,

    },
    description:{
        type:String,
        default:'',
    },
    uid: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    privacy:{
        type:String,
        enum:["private", "public"],
        default: "private"
    }
    
})

export const Note = model("Note", noteSchema)