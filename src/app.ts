import express from 'express'
import { AllRoutes } from './app/routes'
import cors from 'cors'

// creating app
const app = express()

// using cors
app.use(cors())
app.use(express.json())

// Useing all routes
app.use("/api/v1", AllRoutes)

export default app
