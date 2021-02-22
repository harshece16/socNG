var http = require('http'); // import using commonJs module

var compute = require('./compute');

var server = http.createServer( (req,res) => {
    res.write(compute.add(4,5).toString());
    res.end();
});

server.listen(3000);
