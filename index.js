const http = require('http');
const url = require('url');

//responses

const server = http.createServer(function(req, res){

    // Get the url and parse it
    const parseUrl = url.pathToFileURL(req.url);

    // Get the path
    const path = parseUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g,'');

    // Send the response
    res.end('End\n');

    // Log
    console.log('path:', trimPath);
    
});

//start listening
server.listen(3000, function(){
    console.log("server!");
});