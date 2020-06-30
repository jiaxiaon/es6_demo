const mysql = require('mysql');

// 创建连接对象
const con = mysql.createConnection({
    host: 'localhost',  // 如果为线上即为线上地址
    user: 'root', // 账号
    password: 'jxn199711.', // 密码
    port: '3308', // 安装时候的端口
    database: 'myblog'  // 使用新建的数据库
})


// 开始连接
con.connect();


// 执行sql语句
// const sql = 'select * from users;';
const sql = `update users set realname='李四' where realname='李四2';`;
con.query(sql, (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result)
})


// 关闭连接
con.end();