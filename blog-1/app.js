const querystring = require('querystring'); // nodejs提供的原生模块
const handBlogRouter = require('./src/router/blog');
const handUserRouter = require('./src/router/user');
const mysql = require('mysql');

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if(req.method !== 'POST') {
            resolve({});
            return
        }
        if(req.headers['content-type'] !== 'application/json') {
            resolve({});
            return
        }
        let postData = "";
        req.on('data', chunk => { // 默认是二进制
            postData += chunk.toString();
        })
        req.on('end', () => {
            if (!postData) { // 没数据
                resolve({});
                return
            }
            resolve(
                JSON.parse(postData)
            );
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    const url = req.url;
    req.path = url.split('?')[0];
    // 解析query
    req.query = querystring.parse(url.split('?')[1]);

    // 处理post data
    getPostData(req).then(postData => {
        req.body = postData;
        // 处理blog路由
        const blogData = handBlogRouter(req, res);
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return
        }
        // 处理user路由
        const userData = handUserRouter(req, res);
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }
        // 未命中路由，返回404
        res.writeHead(404, {"Content-type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
    })
}

module.exports = serverHandle;

// process.env.NODE_ENV