const handBlogRouter = require('./src/router/blog')
const handUserRouter = require('./src/router/user')
const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    const url = req.url;
    req.path = url.split('?')[0];
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
}

module.exports = serverHandle;

// process.env.NODE_ENV