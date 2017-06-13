exports.index = function* (ctx) {
    yield ctx.model.User.create({
        userName: '李承晚',
        password: '123456'
    });
    yield this.render('login/login.js', {
        message: '登录页面'
    });
}
