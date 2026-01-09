import { Router } from "express";
import { generateCustomToken } from '../firebase/auth/generateCustomToken'
import { verifyTokenId } from '../firebase/auth/verifyTokenId'
import { validateUser } from "../middleware/validateUserMiddleware";

const router = Router()

router.post('/create-custom-token', validateUser, async (req, res) => {
    const validatedUser = req.body
    const customToken = await generateCustomToken(validatedUser)
    if (!customToken)
        return res.status(500).send({ error: 'User token not generated' })
    console.log("created custom token")
    return res.status(201).send({ customToken_token: customToken })
})

router.post('/verify-user-token', async (req, res) => {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith("Bearer "))
        return res.status(401).json({ error: "Missing authorization header" })
    const idToken = authHeader.split(" ")[1]
    const decodedToken = await verifyTokenId(idToken)
    if (!decodedToken)
        return res.status(401).send({ error: 'Invalid or expired token' })
    return res.status(202).json({
        user_id: decodedToken.uid,
        claims: decodedToken.customClaims ?? {},
    })
})

export default router