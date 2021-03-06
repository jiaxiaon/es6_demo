const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handlUserRouter = (req, res) => {
    const method = req.method; // GET  POST
    // 登录
    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body;
        const result = loginCheck(username, password);
        return result.then(data => {
            if(data.username) {
                return new SuccessModel(data)
            }
            return new ErrorModel('登录失败');
        })
    }
}
module.exports = handlUserRouter;