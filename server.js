const http = require('http');

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello<h1/>');
})

server.listen(5000, ()=> {
    console.log('The server is running at http://localhost:5000/');
});

// server runs on port 5000