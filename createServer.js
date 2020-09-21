var http = require('http');

http.createServer(function(request,response){
    //表頭寫入200代表成功，後面的是傳送文字給server
    response.writeHead(200,{"Content-Type":"text/plain"});
    //寫入的文字
    response.write('hello world!!')
    //結束
    response.end();
}).listen(8080);