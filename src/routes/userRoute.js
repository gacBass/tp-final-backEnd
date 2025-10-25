import express from 'express'
import { createUser, deleteService, getUsers, validate } from '../controllers/userControllers.js'
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js'

export const userRoute = express.Router()

// los endpoints -> http//localhost:3000/user/create

//endpoints

userRoute.post('/create', createUser)  //si fuera solo user directamente queria en blanco con los ''
userRoute.get('/getUsers', getUsers)
userRoute.delete('/deleteUser/:id', verifyTokenMiddleware, deleteService)
