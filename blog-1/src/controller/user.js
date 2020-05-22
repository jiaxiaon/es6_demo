const loginCheck = (username, password) => {
    if (username === 'xiaocai' && password === '123') {
        return '登陆成功'
    }
    return false
}

module.exports = {
    loginCheck
}