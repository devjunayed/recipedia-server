import mongoose from 'mongoose'
import app from './app'
import config from './app/config'
import { Server } from 'http'

let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    server = app.listen(config.port, () => {
      console.log(`Server is running at ${config.api_url}:${config.port} `)
    })
  } catch (error) {
    console.log(error)
  }
}

// process.on('unhandledRejection', () => {
//   console.log('unhandled rejection is detected, shutting down')
//   if (server) {
//     server.close(() => {
//       process.exit(1)
//     })
//   }
// })

// process.on('uncaughtException', () => {
//   console.log('uncaughtExcepton is detected, shutting down')
//   process.exit(1)
// })
main()
