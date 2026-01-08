import { auth } from "../admin"
import { User } from '../../types'
import type { UserRecord } from "firebase-admin/auth"

const user: User = {
    email: 'user_2@example.com',
    emailVerified: false,
    phoneNumber: '+112345679678',
    password: 'secretPassword',
    displayName: 'Jannet Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
}

export const createUser = async (): Promise<UserRecord | null> => {
    try {
        const newUser: UserRecord = await auth.createUser(user) 
        console.log(`user ${newUser?.uid} created`)
        return newUser
    } catch (e) {
        console.error("failed to create user:", e)
        return null
    }
}