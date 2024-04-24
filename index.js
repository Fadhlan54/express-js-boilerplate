require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const errorController = require('./controllers/errorController')
const router = require('./routes')

const app = express()

app.use(
  cors({
    origin: [process.env.CLIENT_URL, process.env.ADMIN_URL],
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(router)

app.all('*', (req, res) =>
  res.status(404).json({
    status: 'Failed',
    message: `Halaman tidak ditemukan`,
  })
)

app.use(errorController)

module.exports = app
