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
    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModel(listData,'success');
    }
    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id || '';
        let detailData = getDetail(id);
        return new SuccessModel(detailData)
    }
    // 新建一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const newBlogData = req.body;
        const data = newBlog(newBlogData);
        return new SuccessModel(data)
    }
    // 更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const updateData = req.body;
        if(!updateData.id) {
            return new ErrorModel('更新博客失败')
        }
        const update = upteBlogData(updateData);
        if(!update) {
            return new ErrorModel('更新博客失败');
        }
        return new SuccessModel(update)
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