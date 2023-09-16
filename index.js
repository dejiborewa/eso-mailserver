import express from 'express'
import dotenv from 'dotenv'
import mail from './routes/index.js'


dotenv.config()

const app = express()

app.use(express.json())
app.use('/', mail)


const PORT = process.env.PORT || 6000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)