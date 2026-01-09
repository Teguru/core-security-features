import express from 'express'
import indexRoute from './routes/index'

const app = express()
const PORT = process.env.PORT || 3005

app.use(express.json())
app.use('/api', indexRoute)

app.get('/', (_, res) => {
    return res.status(200).send("Welcome to the core-security-api home route")
})

app.listen(PORT, () => {
    console.log(`Server running on PORT: http://127.0.0.1:${PORT}/`)
})
