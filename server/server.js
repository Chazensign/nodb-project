
require("dotenv").config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/Controller')

const app = express()

app.use(express.json())

app.get('/api/all', ctrl.returnAll)
app.get('/api/exercise/category', ctrl.getExByCat)
app.get("/api/exercise/:id", ctrl.getExById)
app.post('/api/exercise', ctrl.addEx)
app.put('/api/exercise/:id', ctrl.editEx)
app.delete('/api/exercise/:id', ctrl.deleteEx)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening.`))