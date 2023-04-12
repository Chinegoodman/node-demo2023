const http = require('http');

const server = http.createServer((request,response)=>{
    // console.log('request',request)
    console.log('request.url',request.url)
    console.log('request method',request.method);
    const {pathname} = new URL(request.url,'http:127.0.0.1');
    console.log('request pathname',pathname);

    response.statusCode = '308';
    response.statusMessage = 'gfqwdaghfe';
    response.end('123123')
})

server.listen(9090,()=>{
    console.log('监听接口');
})
