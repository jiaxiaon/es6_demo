const { exec } = require('../db/mysql')
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `; // where后边写入1=1是为了防止后续报错
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `;
    }
    sql += `and state=1 order by createtime desc;`;
    return exec(sql)
}
const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}'`; // where后边写入1=1是为了防止后续报错
    return exec(sql).then(rows => {
        if(id) {
            return rows[0]; // 详情页只有一条，取一条就可以了
        } else {
            return false
        }
    })
}
const newBlog = (blogData = {}) => {
    const title = blogData.title;
    const content = blogData.content;
    const author = blogData.author;
    const createtime = Date.now();
    const sql = `
        insert into blogs (title,content,author,createtime)  values ('${title}','${content}','${author}',${createtime});
    `
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}
const upteBlogData = (blogData = {}) => {
    const title = blogData.title;
    const content = blogData.content;
    const sql = `
        update blogs set title='${title}', content='${content}' where id=${blogData.id}
    `
    return exec(sql).then(updateData => {
        // console.log(updateData);
        if(updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}
const delBlog = (blogData = {}) => {
    // const sql = `
    //     delete from blogs where id=${blogData.id} and author='${blogData.author}';
    // `
    const sql = `
        update blogs set state=0 where id=${blogData.id} and author='${blogData.author}
    `
    return exec(sql).then(delData => {
        if(delData.affectedRows > 0) {
            return true
        }
        return false
    })
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    upteBlogData,
    delBlog
}