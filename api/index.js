import express from 'express'
import bodyParser from 'body-parser'
import { connectDB } from '../db.js'
import { PORT, SECRET } from '../config.js'
import { userRoute } from '../src/routes/userRoute.js'
import session from 'express-session'
import { doctorRoute } from '../src/routes/doctorRoute.js'
import cors from 'cors'
import { departmentRoute } from '../src/routes/departmentRoute.js'
import { loginRoute } from '../src/routes/loginRoute.js'


const FRONT_END = 'https://tp-final-front-end-gaston-cazaubon.vercel.app/'
// Instancia del servidor de express
const app = express()

// Cors sirve para que el backend pueda recibir solicitudes del frontend
app.use(cors({
    // Permitimos todas las conexiones de cualquier ip:puerto
    origin: FRONT_END,
    // Decidimos cuales metodos son permitidos
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))

// Conexion a la base de datos
connectDB()

//Con app.use aplicamos metodos de dependencias en nuestro servidor

// Middlewares -> Software del medio - Entre dos sistemas
// Parsear a json las solicitudes
app.use(bodyParser.json())

// Parsear el cuerpo de la solicitud para que pueda ser leida
app.use(bodyParser.urlencoded({extended: true}))

// Generamos el uso de la sesion
app.use(
    session({
        secret: SECRET, // Dato unico de nuestro sistema
        resave: false, // Evita que la sesion se vuelva a guardar si no hay datos
        saveUninitialized: false, // Evita que se guarde una sesion no inicializada
    })
)

//Rutas base - Agrupa las rutas de un recurso
app.use("/api/user", userRoute)
app.use("/api/doctor", doctorRoute)
app.use("/api/department", departmentRoute)
app.use("/api/doctor", loginRoute)

// Crear la escucha del servidor, para hacerlo correr
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})