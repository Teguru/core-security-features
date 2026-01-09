import { z } from 'zod'

export const UserSchema = z.object({
    email: z.email(),
    emailVerified: z.boolean(),
    phoneNumber: z
    .string()
    .regex(/^\+\d{10,15}$/, "Invalid phone number format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    displayName: z.string().min(1),
    photoURL:z.url(),
    disabled: z.boolean() 
})