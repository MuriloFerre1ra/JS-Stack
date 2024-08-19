const express = require('express')
const app = express()
const path = require('path')

//Create route
app.get('/', (req,res) => {
    //send index.html for client
    res.sendFile(path.join(__dirname + '/index.html'))
})

//Call instancie for router
var adminRouter = express.Router();

//create route
//home page (https://localhost:8000/admin)
adminRouter.get('/', function(req, res) {
    res.send('I am dashboard!')
});

//users page (https://localhost:8000/admin/users)
adminRouter.get('/users', function(req,res) {
    res.send('List all users!')
});

//posts pages (https://localhost:8000/admin/posts)
adminRouter.get('/posts', function(req,res) {
    res.send('Here we will see all the posts');
})

//add routes in the principal app
app.use('/admin', adminRouter)

//init server the in port 8001
app.listen(8000)
console.log('8000 is the port magic')