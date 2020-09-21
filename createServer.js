var http = require('http');

http.createServer(function(request,response){
    console.log(request)
    //表頭寫入200代表成功，後面的是傳送文字給server
    // response.writeHead(200,{"Content-Type":"text/plain"});
    // //寫入的文字
    // response.write('hello world!!')


    //若傳送html為text/html
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write('<h1>hello world!!</h1>')
    //結束
    response.end();
}).listen(8080);