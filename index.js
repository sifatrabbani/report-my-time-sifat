const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const responseObject = {'message': 'Hello World!'}
  res.send(responseObject)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})