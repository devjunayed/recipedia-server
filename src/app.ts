import express from 'express'

// creating app
const app = express()

app.get('/', (req, res) => {
  res.send({ message: 'testing' })
})

export default app
