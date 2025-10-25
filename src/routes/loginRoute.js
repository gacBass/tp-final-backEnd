import express from 'express'
import { loginUser, logoutUser } from '../controllers/loginController.js'

export const loginRoute = express.Router()

loginRoute.post("/login", loginUser)
loginRoute.post('/logout', logoutUser);
