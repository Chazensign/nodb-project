
require("dotenv").config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/Controller')

const app = express()

app.use(express.json())

app.post('/api/exercise', ctrl.addEx)
app.get('/api/all', ctrl.returnAll)
app.get("/api/exer/:id", ctrl.getExById)
app.get('/api/exercise/:muscle', ctrl.getExByCat)
app.put('/api/update/:id', ctrl.editEx)
app.delete('/api/delexer/:id', ctrl.deleteEx)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening.`))