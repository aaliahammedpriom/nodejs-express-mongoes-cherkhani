export interface IUser {
    name: string,
    email: string,
    role: "student" | "it" | "teacher" | "admin",
    isActive: boolean
}