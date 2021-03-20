const http = require('http');

//responses

const server = http.createServer(function(req, res){
    res.end('End\n');
});

//start listening
server.listen(3000, function(){
    console.log("server!");
});