var http = require("http");
http.createServer((req, res)=>{
    res.end("Hello world")
}).listen(1234);