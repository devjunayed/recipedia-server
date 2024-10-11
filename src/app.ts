import express from 'express'
import { AllRoutes } from './app/routes'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { notFound } from './app/middlewares/notFound'

// creating app
const app = express()

// using cors
app.use(cors())
app.use(express.json())

// Useing all routes
app.use("/api/v1", AllRoutes)

// globla error handler
app.use(globalErrorHandler)

// not found
app.use(notFound)


export default app
