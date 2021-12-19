const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Working like a charm!')
})

app.listen(port, () => console.log(`Server is listening on port: http://localhost:${port}`))