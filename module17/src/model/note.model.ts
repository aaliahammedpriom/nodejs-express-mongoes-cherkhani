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
    privacy:{
        type:String,
        enum:["private", "public"],
        default: "private"
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
    
},{
    timestamps:true
})

export const Note = model("Note", noteSchema)