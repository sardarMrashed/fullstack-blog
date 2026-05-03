const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

const postRoutes = require('./routes/posts')
app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
  res.send('Blog API is running')
})

const PORT = 8000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))