import express from 'express'
import { createDepartment, getDepartments, getDepartmentById, deleteDepartment } from "../controllers/departmentController.js"
//import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js'
 
export const departmentRoute = express.Router()

departmentRoute.post("/createDepartment", createDepartment)
departmentRoute.get("/getDepartments", getDepartments)
departmentRoute.get("/getDepartment/:id", getDepartmentById)
departmentRoute.delete("/deleteDepartment/:id", deleteDepartment)
