var http = require('http');
var x = require('./ilkmodule');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<p>Su anki saat ve tarih: ' + x.Zaman() + ' </p>');
    res.end();

}).listen(8080);