exports.index = function* (ctx) {
    // yield ctx.model.User.create({
    //     userName: '李承晚',
    //     password: '123456'
    // });
    yield this.render('login/login.js', {
        message: '登录页面'
    });
}

exports.register = function* (ctx) {
    let {userName, password} = ctx.request.body;
    let userModel = ctx.model.User;
    console.log(userName, password);
    let result = yield userModel.create({
        userName,
        password
    });
    ctx.body = {
        msgCode: 100,
        message: '插入成功',
        result: result
    };
}
