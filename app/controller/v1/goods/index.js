module.exports = app => {
    return class GoodsController extends app.Controller {
        async update (ctx) {
            let { id } = ctx.params;
            let { status } = ctx.request.body;
            if (!id || status == null || status == undefined) {
                ctx.body = {
                    msgCode: 406,
                    message: 'id或status缺失',
                    result: null
                }
                return;
            }
            let result = await ctx.model.Good.update({
                _id: id
            }, {
                $set: {
                    status: status
                }
            }).exec();
            ctx.body = {
                msgCode: 100,
                message: '更改状态成功',
                result: result
            };
        }
    }
}
