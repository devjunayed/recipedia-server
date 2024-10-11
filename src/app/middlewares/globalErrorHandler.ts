/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express'
import config from '../config'
import handleDuplicateError from '../errors/handleDuplicateError'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500
  let message = 'Something went wrong!'
  let errorSources = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ]


  if(err.code === 11000){
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources
  }


  res.status(statusCode).json({
    success: false,
    message,
    err,
    errorMessage: errorSources,
    stack: config.node_env === 'development' ? err?.stack : null,
  })
}

export default globalErrorHandler
