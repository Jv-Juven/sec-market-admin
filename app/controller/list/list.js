// module.exports = app => {
//     return class ListController extends app.Controller {
//         async index(ctx) {
//             console.log('render', ctx.render);
//             // let Good = ctx.model.Good;
//             // this.session.user = null;
//             // let result = await Good.find({});
//             // console.log('验证函数', ctx.validator());
//             // let user = ctx.session.user || {};
//             // await ctx.render('list/list.js', {
//             //     userName: user.userName || '游客'
//             // });
//             await ctx.render('list/list.js');
//         }
//     }
// }

exports.index = async function (ctx) {
    const Good = ctx.model.Good;
    // this.session.user = null;
    const result = await Good.find({}, '_id createdAt goodsName status')
        .sort({
            'createdAt': '-1'
        })
        .exec();
    const user = ctx.session.user || {};
    await ctx.page('list/list.js', {
        userName: user.userName || '游客',
        goodsList: result
    });
}
let delEmptyAttrs = function (obj) {
    for (let item in obj) {
        if (obj[item] === null || obj[item] === undefined || obj[item] === '') {
            delete obj[item];
        } 
    }
    return obj;
}
// 筛选数据   兼容多条件查询-----待优化
exports.getListData = async function (ctx) {
    const Good = ctx.model.Good;
    let conditions = ctx.query || {};
    // let conditions = {};
    // if (query.length > 0) {
    //     conditions = { status: query.split(',') };
    // }
    delEmptyAttrs(conditions);
    const result = await Good.find(conditions, '_id createdAt goodsName status')
        .sort({
            'createdAt': '-1'
        })
        .exec();
    if (result.length >= 0) {
        ctx.body = {
            msgCode: 100,
            message: '查询成功',
            result
        };
    } else {
        ctx.body = {
            msgCode: 601,
            message: '查询失败',
            result: null
        };
    }
}
