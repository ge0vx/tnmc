const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res){

    // Get the url and parse it
    const parseUrl = url.parse(req.url,true);

    // Get the path
    const path = parseUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();

    const query = parseUrl.query;

    // Send the response
    res.end('End\n');

    console.log('path:', trimPath, method, query);
    
});

server.listen(3000, function(){
    console.log("server!");
});