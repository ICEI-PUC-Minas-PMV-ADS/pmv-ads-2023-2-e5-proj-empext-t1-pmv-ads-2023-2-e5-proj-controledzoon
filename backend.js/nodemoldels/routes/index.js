import express from 'express'
import useRoutes from '../routes/uses.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', userRoutes)

app.listen(8800)