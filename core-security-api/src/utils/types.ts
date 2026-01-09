import {z} from 'zod'
import { UserSchema } from "./schemas";

export type UserType = z.infer<typeof UserSchema>