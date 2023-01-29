const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just  a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)