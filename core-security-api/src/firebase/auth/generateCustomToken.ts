import { auth } from "../admin-setup"
import { createUser } from "./createUser"
import { UserType } from "../../utils/types"

export const generateCustomToken = async (validatedUser: UserType): Promise<string | null> => {
    try {
        const user = await createUser(validatedUser)
        if (!user) return null

        const custom_token = await auth.createCustomToken(user.uid)
        return custom_token
    } catch (e) {
        console.log("failed to create custom token:", e)
        return null
    }
} 