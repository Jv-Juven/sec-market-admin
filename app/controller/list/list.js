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

exports.index = async function(ctx) {
    let Good = ctx.model.Good;
    // this.session.user = null;
    let result = await Good.find({}, '_id createdAt goodsName status');
    let user = ctx.session.user || {};
    await ctx.page('list/list.js', {
        userName: user.userName || '游客',
        goodsList: result
    });
}
