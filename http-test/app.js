
const http = require('http');
// GET请求
// const querystring = require('querystring');
// const server = http.createServer((req, res) => {
//     // req是浏览器向服务器发送什么请求，res是服务器返回什么
//     console.log(req.method); // 请求方式
//     const url = req.url; // 获取请求完整的url
//     // console.log(url)
//     req.query = querystring.parse(url.split('?')[1]);    // 解析querystring
//     res.end(JSON.stringify(req.query));    // 将querystring返回
// });

// POST请求
const server = http.createServer((req, res) => {
    // req是浏览器向服务器发送什么请求，res是服务器返回什么
    if (req.method === 'post') {
        console.log('content-type', req.headers['content-type']); // req数据
        let postData = "";
        req.on('data', chunk => { // 默认是二进制
            postData += chunk.toString();
        })
        req.on('end', () => {
            console.log(postData)
            res.end('hello world !');
        })
    }
});


// nodejs处理路由
// const server = http.createServer((req, res) => {
//     // req是浏览器向服务器发送什么请求，res是服务器返回什么
//     const url = req.url; // 获取请求完整的url
//     const path = url.split('?')[0];
//     res.end(path);
//     // console.log(url)
// });




server.listen(8000);
console.log('ok');
// 通过http:localhost:8000/访问