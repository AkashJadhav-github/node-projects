var http = require(‘http’);
http.createServer(function (req, res) {
 res.writeHead(200, {‘Content-Type’: ‘text/html’});
var number1 = 1;
var number2 = 2;
var sum;
sum = number1 + number2
res.end(‘Sum = ’+sum);
}).listen(8080);
