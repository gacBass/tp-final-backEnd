import mongoose from "mongoose";
import { isGoodPassword } from "../utils/validators.js";
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 6,
        trim: true,
        lowercase: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },

    password: {
        required: true,
        type: String,
        validate: {
            validator: function (value) {
                return isGoodPassword(value)
            },
            message: 'Pass should be between 6 and 12 characters, with at least one number, one uppercase letter and one lowercas letter'
        }
    }
},
    {
        // Cuando se cree y cuando se modifique se guardaran en los campos createdAt, updatedAt
        timestamps: true
    })

// Encriptamos la password
userSchema.pre("save", function (next) {
    // Encriptamos la password antes de guardarla
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})
export default mongoose.model("user", userSchema)