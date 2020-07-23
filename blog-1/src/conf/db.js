// process是nodejs进程的一些信息
const env = process.env.NODE_ENV // 环境变量
// 配置
let MYSQL_CONF = {}

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',  // 如果为线上即为线上地址
        user: 'root', // 账号
        password: 'jxn199711.', // 密码
        port: '3308', // 安装时候的端口
        database: 'myblog'  // 使用新建的数据库
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: '47.98.134.187',  // 如果为线上即为线上地址
        user: 'root', // 账号
        password: 'jxn199711.', // 密码
        port: '3306', // 安装时候的端口
        database: 'blog'  // 使用新建的数据库
    }
}

module.exports = {
    MYSQL_CONF
}