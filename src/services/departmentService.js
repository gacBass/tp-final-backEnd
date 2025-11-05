import Department from "../models/departmentModel.js"

export const createDepartmentService = async (departmentData) => {
    const newDepartment = new Department(departmentData)

    await newDepartment.save()
    return { message: "Department created" }

}

export const getDepartmentsService = async () => {
    const Departments = await Department.find().sort({ 
        name: 1 
    })

    if (Departments.length === 0) {
        const error = new Error("there are no departments to show")
        error.statusCode = 204
        throw error;

    }
    return Departments
}

export const getDepartmentsById = async (id) => {
    const department = await Department.findById(id)

    return department
}

export const deleteDepartmentById = async (Id) => {

    const deletedDepartment = await Department.findByIdAndDelete(Id)
    if (!deletedDepartment) {
        const error = new Error(`Department with ID ${Id} not found.`);
        error.statusCode = 404;
        throw error;
    }
    return { message: "Department deleted succesfully" }

}