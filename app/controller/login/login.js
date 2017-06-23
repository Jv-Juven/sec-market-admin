exports.index = function*(ctx) {
    // yield ctx.model.User.create({
    //     userName: '李承晚',
    //     password: '123456'
    // });
    yield this.render('login/login.js', {
        message: '登录页面'
    });
}

exports.postRegister = async function(ctx) {
    let { userName, password } = ctx.request.body;
    let userModel = ctx.model.User;
    let exist = await userModel.find({ userName: userName });
    console.log('查询结果', exist);
    if (!!exist[0]) {
        ctx.body = {
            msgCode: 601,
            message: '已存在用户名',
            result: null
        }
        return;
    }
    let result = await userModel.create({
        userName,
        password,
        createdAt: Date.now()
    });
    if (result._id) {
        ctx.session.user = {
            _id: result._id,
            userName: result.userName
        }
        ctx.body = {
            msgCode: 100,
            message: '插入成功',
            result: null
        };
    } else {
        ctx.body = {
            msgCode: 600,
            message: '插入失败',
            result: null
        };
    }
}
exports.postLogin = async function(ctx) {
    let { userName, password } = ctx.request.body;

    let userModel = ctx.model.User;
    let exist = await userModel.find({ userName: userName });
    let result = exist[0];
    if (!result) {
        ctx.body = {
            msgCode: 602,
            message: '用户名不正确',
            result: null
        }
    } else if (password !== result.password) {
        ctx.body = {
            msgCode: 603,
            message: '密码不正确',
            result: null
        }
    } else {
        ctx.body = {
            msgCode: 100,
            message: '登录成功',
            result: null
        };
        ctx.session.user = {
            _id: result._id,
            userName: result.userName
        }
    }
}