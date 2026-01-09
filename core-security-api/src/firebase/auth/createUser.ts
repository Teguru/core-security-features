import { auth } from "../admin-setup"
import { UserType } from '../../utils/types'
import type { UserRecord } from "firebase-admin/auth"

export const createUser = async (user: UserType): Promise<UserRecord | null> => {
    try {
        const newUser: UserRecord = await auth.createUser(user) 
        console.log(`user ${newUser?.uid} created`)
        return newUser
    } catch (e) {
        console.error("failed to create user:", e)
        return null
    }
}