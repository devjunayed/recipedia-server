/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express'
import config from '../config'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500
  const message = 'Something went wrong!'
  const errorSources = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ]



  res.status(statusCode).json({
    success: false,
    message,
    err,
    errorMessage: errorSources,
    stack: config.node_env === 'development' ? err?.stack : null,
  })
}

export default globalErrorHandler
