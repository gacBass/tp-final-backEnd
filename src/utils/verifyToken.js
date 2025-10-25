// vamos a usar para verificar los tokens

import jwt from "jsonwebtoken"
import { SECRET } from "../../config.js"

// creamos una funcion que verifica y valida que el token sea correcto y funcional sin estar vencido

export function verifyToken(token) {
    try {
        //decodificamos el token
       const decoded =  jwt.verify(token, SECRET)
       return decoded;
    } catch (error) {
        throw new Error("Invalid token")
    }
}