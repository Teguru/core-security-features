import { auth } from "../admin"
import { createUser } from "./createUser"

export const generateCustomToken = async (): Promise<string | null> => {
    try {
        const user = await createUser()
        if (!user) return null

        const custom_token = await auth.createCustomToken(user.uid)
        return custom_token
    } catch (e) {
        console.log("failed to create custom token:", e)
        return null
    }
} 