import express from 'express'
import { json } from 'body-parser'
import { generateCustomToken } from './firebase/auth/generateCustomToken'
import { verifyTokenId } from './firebase/auth/verifyTokenId'

const app = express()
const PORT = process.env.PORT || 3005

app.use(json())

app.get('/', (_, res) => {
    return res.status(200).send("Welcome to the core-security-api home route")
})

app.get('/create-custom-token', async (_, res) => {
    const customToken = await generateCustomToken()
    if (!customToken)
        return res.status(500).send({ error: 'User token not generated' })
    console.log("created custom token")
    return res.status(201).send({ customToken_token: customToken })
})

app.post('/verify-user-token', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server running on PORT: http://127.0.0.1:${PORT}/`)
})
