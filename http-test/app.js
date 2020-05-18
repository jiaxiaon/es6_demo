
const http = require('http');
const querystring = require('querystring');
// GET请求
// const server = http.createServer((req, res) => {
//     // req是浏览器向服务器发送什么请求，res是服务器返回什么
//     console.log(req.method); // 请求方式
//     const url = req.url; // 获取请求完整的url
//     // console.log(url)
//     req.query = querystring.parse(url.split('?')[1]);    // 解析querystring
//     res.end(JSON.stringify(req.query));    // 将querystring返回
// });

// POST请求
// const server = http.createServer((req, res) => {
//     // req是浏览器向服务器发送什么请求，res是服务器返回什么
//     if (req.method === 'POST') {
//         console.log('content-type', req.headers['content-type']); // req数据
//         let postData = "";
//         req.on('data', chunk => { // 默认是二进制
//             postData += chunk.toString();
//         })
//         req.on('end', () => {
//             console.log(postData)
//             res.end('hello world !');
//         })
//     }
// });


// nodejs处理路由
// const server = http.createServer((req, res) => {
//     // req是浏览器向服务器发送什么请求，res是服务器返回什么
//     const url = req.url; // 获取请求完整的url
//     const path = url.split('?')[0];
//     res.end(path);
//     // console.log(url)
// });
const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const query = querystring.parse(url.split('?')[1]);
    // 设置返回格式为JSON
    res.setHeader('Content-type', 'application/json'); 
    // 返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }
    if (method === 'GET') {
        res.end(
            JSON.stringify(resData)
        )
    }
    if (method === 'POST') {
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            resData.postData = postData;
            res.end(
                JSON.stringify(resData)
            )
        })
    }
})



server.listen(8000);
console.log('ok');
// 通过http:localhost:8000/访问