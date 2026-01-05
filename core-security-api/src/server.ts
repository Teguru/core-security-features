import express from 'express'
import { json } from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3005

app.use(json())

app.get('/check', (_, res) => {
    res.send('hi')
})

app.listen(PORT, () => {
    console.log(`Server running on PORT: http://127.0.0.1:${PORT}/check`)
})
