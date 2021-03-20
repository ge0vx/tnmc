const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res){

    // Get the url and parse it
    const parseUrl = url.pathToFileURL(req.url);

    // Get the path
    const path = parseUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g,'');

    const method = req.method.toLowerCase();

    // Send the response
    res.end('End\n');

    console.log('path:', trimPath, method);
    
});

server.listen(3000, function(){
    console.log("server!");
});