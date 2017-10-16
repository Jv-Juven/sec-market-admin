module.exports = app => {
    return class GoodsController extends app.Controller {
        async update (ctx) {
            const { id } = ctx.params;
            const { status, ids } = ctx.request.body;
            const Good = ctx.model.Good;
            let result;
            if (status == null || status === undefined) {
                ctx.body = {
                    msgCode: 406,
                    message: 'id或status缺失',
                    result: null
                };
                return;
            }
            if (id) {
                result = await Good.update({
                    _id: id
                }, {
                    $set: {
                        status
                    }
                }).exec();
            } else {
                result = await Good.updateMany({
                    _id: ids
                }, {
                    $set: {
                        status
                    }
                }).exec();
            }
            if (!result.ok) {
                ctx.body = {
                    msgCode: 500,
                    message: '插入失败',
                    result
                };
                return;
            }
            ctx.body = {
                msgCode: 100,
                message: '更改状态成功',
                result
            };
        }
    };
};
