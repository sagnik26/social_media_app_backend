const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8080

var corsOptions = {
    origin: 'https://localhost:3000/'
}

// Middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./routes/postRoutes')
app.use('/api/posts', router)

// testing api
app.get('/', (req,res) => {
    res.json({ message: 'hello from api' })
})

// server
app.listen(PORT, () => {
    console.log(`server listening from port ${PORT}`)
})
