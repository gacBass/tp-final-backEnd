import express from 'express'
import { createDepartment, getDepartments, getDepartmentById, deleteDepartment } from "../controllers/departmentController.js"
//import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js'
 
export const departmentRoute = express.Router()

//Create - delete necesitan el verifyTokenMiddleware que no estan agregados aca porque falta la implementacion en la web y sea mostrable

departmentRoute.post("/createDepartment", createDepartment)
departmentRoute.get("/getDepartments", getDepartments)
departmentRoute.get("/getDepartment/:id", getDepartmentById)
departmentRoute.delete("/deleteDepartment/:id", deleteDepartment)
