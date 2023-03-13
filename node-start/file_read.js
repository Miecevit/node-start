var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile('deneme.html', function(err, data){
        
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);

        res.write("<script>document.getElementById('yazi').innerHTML = 'MERT';</script>");

        return res.end();
        
    });
  
}).listen(8080);