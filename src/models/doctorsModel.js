import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
        minlength: 2
    },
    department: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 2
    },
    city: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2
    },
    country: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2
    },
    avatar: {
        type: String,
        maxlength: 100
    }
})

export default mongoose.model("doctor", doctorSchema)