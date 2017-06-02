exports.index = function* () {
    yield this.render('login/login.js', {
        message: '登录页面'
    });
}
