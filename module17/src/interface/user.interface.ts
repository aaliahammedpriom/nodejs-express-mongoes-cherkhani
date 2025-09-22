export interface IUser {
    name: string,
    email: string,
    role: "student" | "it" | "teacher" | "admin",
    isActive: boolean,
    password: string
}

export interface User_Password_Instance_Method{
    user_instance_hash_password(plainPAss: string): void
}