// This is your hypothetical Login Service
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; 
import bcrypt from 'bcryptjs';
import { SECRET } from "../../config.js"


// import User model, bcrypt, etc.

export const loginUserService = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        const err = new Error("Invalid Credentials");
        err.statusCode = 401; // Unauthorized
        throw err;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        const err = new Error("Invalid Credentials");
        err.statusCode = 401;
        throw err;
    }

    const payload = { userId: user._id, role: user.role }; 

    const token = jwt.sign(payload, SECRET, { 
        expiresIn: '1h' 
    });

    return { 
        user: { id: user._id, email: user.email },
        token: token 
    };
}