const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1589865720903,
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1589865731904,
            author: '李四'
        }
    ]
}
const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        createTime: 1589865720903,
        author: '张三',
        content: '这是内容详情1，2.3'
    }
}
const newBlog = (blogData = {}) => {
    blogData.id = 3;
    return blogData
}
const upteBlogData = (updateData = {}) => {
    return blogData
}
const delBlog = (delData) => {
    if (delData.id) {
        return delData
    } else {
        return false
    }
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    upteBlogData,
    delBlog
}