import { auth } from "../admin";
import type { DecodedIdToken } from "firebase-admin/auth";

export const verifyTokenId = async(tokenId: string): Promise<DecodedIdToken | null> => {
    try {
        const decodedIdToken = await auth.verifyIdToken(tokenId)
        return decodedIdToken
    } catch (e) {
        console.error("failed to verify token id:", e)
        return null
    }
}