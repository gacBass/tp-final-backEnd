import { createDepartmentService, getDepartmentsService, getDepartmentsById, deleteDepartmentById } from "../services/departmentService.js"

export const createDepartment = async (req, res) => {

    try {
        const response = await createDepartmentService(req.body)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error: error.message })
    }
}

export const getDepartments = async (req, res) => {
    try {
        const departments = await getDepartmentsService()
        if (departments && departments.length === 0) {
            return res.status(404).json({
                error: "Missing or empty request body.",
                details: "A non-empty request body is required for this operation."
            });
        }
        else {
            return res.status(200).json(departments)
        }

    } catch (error) {
        if (error.statusCode === 204) {
            return res.sendStatus(204)
        }

        return res.status(500).json({ message: "Internal server error", error: error.message })

    }
}

export const getDepartmentById = async (req, res) => {
    try {
        const departmentId = req.params.id;
        const department = await getDepartmentsById(departmentId);

        if (!department) {
            return res.status(404).json({ message: `Department with ID ${departmentId} not found.` });
        }

        return res.status(200).json(department);
    } catch (error) {

        console.error("Error retrieving department:", error);
        return res.status(500).json({
            message: "Internal server error while fetching department.",
            error: error.message
        });
    }
}

export const deleteDepartment = async(req, res) => {
    try {
        const userId = req.params.id
        const result = await deleteDepartmentById(userId)
        return res.status(200).json(result)
    } catch (error) {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({ message: error.message })
        }
        return res.status(500).json({ message: "Internal server error", error: error.message })
   
    }
}