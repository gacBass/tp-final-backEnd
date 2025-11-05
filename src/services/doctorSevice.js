import Doctor from "../models/doctorsModel.js"

export const createDoctorService = async (doctorData) => {
    const newDoctor = new Doctor(doctorData)

    await newDoctor.save()
    return { message: "Doctor created" }

}

export const getDoctorsService = async () => {
    const doctors = await Doctor.find()

    if (doctors.length === 0) {
        const error = new Error("there are no users to display")
        error.statusCode = 204
        throw error;

    }
    return doctors
}

export const getDoctorsById = async (id) => {

    const doctor = await Doctor.findById(id)

    return doctor
}

export const getDoctorsByDepartment = async (departmentName) => {

    const doctors = await Doctor.find({
        department: { $regex: departmentName, $options: 'i' }
    }).sort({ 
        name: 1 
    });

    if (!doctors || doctors.length === 0) {
        return {
            message: "No se encontró ningún doctor para este departamento.",
            doctors: [] 
        };
    }
    
    return {
        doctors: doctors,
        message: "Doctores encontrados con éxito." 
    };
}

export const updateDoctorById = async (userId, updateData) => {

    const updatedDoctor = await Doctor.findByIdAndUpdate(
        userId,
        updateData,
        {
            new: true,
            runValidators: true
        }
    );

    if (!updatedDoctor) {
        const error = new Error(`Doctor with ID ${id} not found.`);
        error.statusCode = 404;
        throw error;
    }
    return updatedDoctor;
}

export const deleteUserbyId = async (userId) => {

    const deletedDoctor = await Doctor.findByIdAndDelete(userId)

    if (!deletedDoctor) {
        const error = new Error(`Doctor with ID ${userId} not found.`);
        error.statusCode = 404;
        throw error;
    }
    return { message: "User deleted succesfully" }

}