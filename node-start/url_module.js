var url = require('url');

var adres = "http://localhost:8080/sayfa.html?username=mert&password=123";

var q = url.parse(adres, true);

console.log(q.host); // 'localhost:8080'
console.log(q.pathname); // '/sayfa.html
console.log(q.search); // '?username=mert&password=123'
console.log(q.query); // object {username : mert, password : 123}

var bilgi = q.query;

console.log(bilgi.username);
console.log(bilgi.password);




