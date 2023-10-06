const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello API World!')
})

// url path /yourname -> /lasse
// response -> Hello lasse
app.post('/lasse', (req, res) => {
  res.send('Hello lasse');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})