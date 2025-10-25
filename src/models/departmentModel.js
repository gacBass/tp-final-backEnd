import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        maxlength: 30,
        minlength: 2
    }

}, {
    // Cuando se cree y cuando se modifique se guardaran en los campos createdAt, updatedAt
    timestamps: true
})

export default mongoose.model("department", departmentSchema)