const express = require('express')
const userRoutes = require(__dirname + '/user.js')
const cors = require('cors')

const index = express()

index.use(express.json())
index.use(cors())

index.use('/', userRoutes)

index.listen(3000)
console.log(__dirname)