const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
  res.sendFile('/src/index.html')
})

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`)
})

