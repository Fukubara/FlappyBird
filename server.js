const express = require('express')
const app = express()

const porta = 3003

express.static('.')
app.listen(porta)