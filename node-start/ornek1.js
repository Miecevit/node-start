var http = require('http');
var x = require('./ilkmodule');

http.createServer(function(req, res){

    res.writeHead(200, {'ContentType':'text/html'});

    res.write("<h1>Hello World!</h1>");
    res.write("<p>Burada rastgele bir yazi var </p>");
    res.write("<p id='saat'></p>")

    setInterval(function(){
        res.write("<script> document.getElementById('saat').innerHTML = '" + x.Zaman() + "'; </script>");
    }, 1000);

}).listen(8080);