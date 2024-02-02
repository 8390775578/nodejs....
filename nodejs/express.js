const express = require('express')
const app = express()
const port = 4000
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('heillo world')
})
app.listen(port,()=>{
    console.log(`dkfcnsdlkfj n:${port}`)
})