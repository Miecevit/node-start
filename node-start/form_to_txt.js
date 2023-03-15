var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res){

    fs.readFile("form.html", function(err,data){

        if (err){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 - Dosya bulunamadi.");
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();

    })

    var bilgi = url.parse(req.url, true).query;

    if(req.url.length > 1 ){
        console.log(bilgi.isim);
        console.log(bilgi.soyisim);
        console.log(bilgi.favori);
    

    fs.appendFile("form_icerigi.txt", "İsim : "+bilgi.isim+" \nSoyisim: "+bilgi.soyisim+" \nFavori Yiyecek: "+bilgi.favori+"\n\n", function(err){
        if(err) throw err;
        console.log("Bilgiler Kaydedildi.");
        return res.end();
    })

}

    





}).listen(8080);