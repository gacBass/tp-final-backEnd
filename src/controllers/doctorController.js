import { createDoctorService, getDoctorsService, getDoctorsById, updateDoctorById , getDoctorsByDepartment, deleteUserbyId} from "../services/doctorSevice.js"

export const createDoctor = async (req, res) => {

    try {
        const response = await createDoctorService(req.body)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error: error.message })
    }
}

export const getDoctors = async (req, res) => {
    try {
        const doctors = await getDoctorsService()
        if (doctors && doctors.length === 0) {
            // 400 Bad Request is the standard for client errors like missing data
            return res.status(404).json({
                error: "Missing or empty request body.",
                details: "A non-empty request body is required for this operation."
            });
        }
        else {
            return res.status(200).json(doctors)
        }

    } catch (error) {
        if (error.statusCode === 204) {
            return res.sendStatus(204)
        }

        return res.status(500).json({ message: "Internal server error", error: error.message })

    }
}

export const getDoctorById = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctor = await getDoctorsById(doctorId);

        if (!doctor) {
            return res.status(404).json({ message: `Doctor with ID ${doctorId} not found.` });
        }

        return res.status(200).json(doctor);
    } catch (error) {

        console.error("Error retrieving doctor:", error);
        return res.status(500).json({
            message: "Internal server error while fetching doctor.",
            error: error.message
        });
    }
}

export const updateDoctor = async(req, res) => {

    try {
        const userId = req.params.id
        const updatedUser = await updateDoctorById(userId, req.body)
        return res.status(201).json(updatedUser)
    } catch (error) {
        if(error.statusCode === 404){
            return res.status(404).json({ message: error.message })
        }
        return res.status(500).json({ message: "Internal server error", error: error.message })
    
        
    }
}

export const deleteDoctor = async(req, res) => {
    try {
        const userId = req.params.id
        const result = await deleteUserbyId(userId)
        return res.status(200).json(result)
    } catch (error) {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({ message: error.message })
        }
        return res.status(500).json({ message: "Internal server error", error: error.message })
   
    }
}

// Controller: getDoctorsByDepartmentService
export const getDoctorsByDepartmentService = async(req,res) => {

    try {
        // NOTE: If your route uses '/doctors/department/:name', change this to req.params.name
        const departmentName = req.params.id; 
        
        // The service now accepts the name (or the ID, but it treats it as a name string)
        const result = await getDoctorsByDepartment(departmentName);

        // This check is now safe because the service is guaranteed to return { doctors: [...] }
        if (result.doctors.length === 0) {
            // Success status (200), but no results found
            return res.status(200).json(result); 
        }

        // Success status (200), with results found
        return res.status(200).json(result);
    } catch (error) {

        console.error("Error retrieving doctors by department:", error);
        return res.status(500).json({
            message: "Internal server error while fetching doctors.",
            error: error.message
        });
    }

}