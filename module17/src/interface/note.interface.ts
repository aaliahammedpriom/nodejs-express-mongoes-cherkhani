import { Types } from "mongoose";

export interface INote {
    title: string,
    description: string,
    privacy: "private" | "public",
    userId: Types.ObjectId

}