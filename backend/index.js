const connectToMongo = require('./db');
var cors = require('cors')
const express = require('express')
require('dotenv').config()
connectToMongo();
const app = express()
const port = 5000
app.use(cors(
  {
    origin:["https://digitalised-hospital-system.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
))
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/list',require('./routes/list'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Hospital Management Backend listening on port ${port}`)
})
