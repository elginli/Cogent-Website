const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

const port = 4000
const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})