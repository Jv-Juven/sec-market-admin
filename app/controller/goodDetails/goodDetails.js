exports.index = async function (ctx) {
    let params = ctx.params;
    let Good = ctx.model.Good;
    let result = await Good.find({
        _id: params.id
    }).exec();
    await ctx.page('goodDetails/goodDetails.js', {
        goodsData: result[0]
    });
}
