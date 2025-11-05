import express from 'express'
import {createDoctor, getDoctors, getDoctorById, updateDoctor, deleteDoctor, getDoctorsByDepartmentService} from '../controllers/doctorController.js'
import { verifyTokenMiddleware } from '../middlewares/verifyTokenMiddleware.js'
 
export const doctorRoute = express.Router()

//Create - update - delete necesitan el verifyTokenMiddleware que no estan agregados aca porque falta la implementacion en la web y sea mostrable

doctorRoute.post("/createDoctor", createDoctor)
doctorRoute.get("/getDoctors", getDoctors)
doctorRoute.get("/getDoctorByDepartment/:id", getDoctorsByDepartmentService)
doctorRoute.get("/getDoctors/:id", getDoctorById)
doctorRoute.put("/updateDoctor/:id",  updateDoctor)
doctorRoute.delete("/deleteDoctor/:id",  deleteDoctor)
