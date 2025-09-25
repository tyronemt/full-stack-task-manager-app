require('dotenv').config()

const express = require('express')
const tasksRoutes = require('./routes/tasks')
const mongoose = require('mongoose')


const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/tasks', tasksRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen on port
    app.listen(process.env.PORT, () => {
    console.log('Connected to DB')
    console.log('Server is running on port ' + process.env.PORT)
})

  })
  .catch((error) => {
    console.log(error)
  })


