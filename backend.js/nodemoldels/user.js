import express from 'express'
//import { getUsers } from '../../controlllers/user.js'

const router = express.Router()

router.get('/', getUsers)

export default router
