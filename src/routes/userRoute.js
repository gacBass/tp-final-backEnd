import express from 'express'
import { createUser, deleteService, getUsers, validate } from '../controllers/userControllers.js'
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js'

export const userRoute = express.Router()

userRoute.post('/create', verifyTokenMiddleware, createUser)  
userRoute.get('/getUsers', getUsers)
userRoute.delete('/deleteUser/:id', verifyTokenMiddleware, deleteService)
