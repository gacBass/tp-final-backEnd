import { createUserService, deleteUserService, getUsersService, validateUserService } from "../services/userService.js"

export const createUser = async (req, res) => {
    try {
        const response = await createUserService(req.body)
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

export const getUsers = async (req, res) => {
    try {
       const users = await getUsersService()
       res.status(200).json(users)
    } catch (error) {
        if(error.statusCode === 204){
            return res.sendStatus(error.statusCode)
        }
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

export const deleteService = async (req, res) => {
    try {
        const userId = req.params.id
        const result = await deleteUserService(userId)
        return res.status(200).json(result)
    } catch (error) {
        if(error.statusCode === 404){
            return res.status(error.statusCode).json({ message: error.message })
        }
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}


export const validate = async (req, res) => {
    try {
    const { email, password } = req.body;
    const result = await validateUserService(email, password)
    console.log({result} )
        return res.status(200).json(result)
    } catch (error) {
        if(error.statusCode === 400){
            return res.status(error.statusCode).json({message: error.message})
        }
        return res.status(500).json({message: "Internal server error", error: error.message})
    }
}