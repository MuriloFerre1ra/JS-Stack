const app = require('express')()
const path = require('path')

//Create route
app.get('/', (req,res) => {
    //send index.html for client
    res.sendFile(path.join(__dirname + '/index.html'))
})

//init server the in port 8001
app.listen(8001)
console.log('8001 is the port magic')