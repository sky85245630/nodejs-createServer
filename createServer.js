var http = require('http');

http.createServer(function(request,response){
    //寫入的status code
    response.writeHead(200);
    //寫入的文字
    response.write('hello world!!')
    //結束
    response.end();
}).listen(8080);