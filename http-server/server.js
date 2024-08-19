//import modules http and filesystem
const http = require('http'), fs = require('fs')

//create server HTTP
http.createServer((req, res) => {
    //Header response
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'access-control-allow-origin': '*'
    })

    //Read index.html
    let readStream = fs.createReadStream(__dirname + '/index.html')
    //Send for client
    readStream.pipe(res)    
}).listen(8000);

//Info endpoint for user
console.log('Visit me: http://localhost:8000');


