module.exports = app => {
    return class ListController extends app.Controller {
        async index(ctx) {
            // let Good = ctx.model.Good;
            // this.session.user = null;
            // let result = await Good.find({});
            console.log('验证函数', ctx.validator());
            // let user = this.session.user || {};
            // await this.render('list/list.js', {
            //     userName: user.userName || '游客'
            // })
        }
    }
}