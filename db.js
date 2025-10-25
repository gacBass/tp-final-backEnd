// importar mongoose para mapear la db


import mongoose from "mongoose"
import { MONGODB_URI } from "./config.js"

export const connectDB = async () => {

    try {
        await mongoose.connect(`${MONGODB_URI}`)
        console.log("database connected")
    }catch(error)
    {
        console.error("Error conectando a la db ", error)
        // para salir de la ejecucion
        process.exit(1)
    }
}