const { 
    getList, 
    getDetail,
    newBlog,
    upteBlogData,
    delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method; // GET  POST
    const id = req.query.id || '';
    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        // const listData = getList(author, keyword);
        // return new SuccessModel(listData,'success');
        const result = getList(author, keyword);
        return result.then(listData => {
            return new SuccessModel(listData,'success');
        })
    }
    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const result = getDetail(id);
        return result.then(detailData => {
            if(detailData.data) {
                return new SuccessModel(detailData)
            } else {
                return new ErrorModel(detailData)
            }
        })
    }
    // 新建一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        req.body.author = '王五';
        const newBlogData = req.body;
        const result = newBlog(newBlogData);
        return result.then(insertData => {
            return new SuccessModel(insertData)
        })
    }
    // 更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = upteBlogData(req.body);
        return result.then(val => {
            if(val) {
                return new SuccessModel(val)
            } else {
                return new ErrorModel('更新博客失败');
            }
        })
    }
    // 删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        const delBlogData = req.body;
        console.log(delBlogData)
        const result = delBlog(delBlogData)
        if (result) {
            return new SuccessModel(result)
        } else {
            return new ErrorModel('删除博客失败');
        }
    }
}
module.exports = handleBlogRouter;