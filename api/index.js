require('dotenv').config()
const http = require('http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const port = 4200

mongoose.connect('mongodb+srv://thomasstibling:root@api.z6z9txp.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')

const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use('/users', userRoutes)
app.use('/posts', postRoutes)

app.get('/', (req, res) => {
  res.json({
    api: 'api',
    version: process.env.VERSION
  })
})

app.listen(port, () => {
  console.log(`Api listening on port ${port}`)
})