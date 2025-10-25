import { loginUserService } from "../services/loginService.js";


export const loginUser = async (req, res) => {
    try {
        const { user, token } = await loginUserService(req.body); 

        res.cookie('authToken', token, {
            httpOnly: false, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict', 
            maxAge: 3600000, 
        });

        return res.status(200).json({ 
            message: "Login successful",
            user: user, 
        });

    } catch (error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json({ message: error.message });
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie('authToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/'
        });

        return res.status(200).json({ message: "Logout successful" });

    } catch (error) {
        return res.status(500).json({ message: "Logout failed", error: error.message });
    }
};