

const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res) => {
    // req是浏览器向服务器发送什么请求，res是服务器返回什么
    console.log(req.method); // 请求方式
    const url = req.url; // 获取请求完整的url
    // console.log(url)
    req.query = querystring.parse(url.split('?')[1]);    // 解析querystring
    res.end(JSON.stringify(req.query));    // 将querystring返回
});
server.listen(8000);
// 通过http:localhost:8000/访问