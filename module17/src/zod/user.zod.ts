import * as z from "zod";

export const userZodSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),
  role: z.enum(["student", "it", "teacher", "admin"]),
  isActive: z.boolean(),
  password: z.string()
});

// ✅ the parsed result is validated and type safe!
export type userZodInput = z.infer<typeof userZodSchema>


