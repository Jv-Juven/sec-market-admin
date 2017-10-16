exports.index = async function (ctx) {
    const params = ctx.params;
    const Good = ctx.model.Good;
    const result = await Good.find({
        _id: params.id
    }).exec();
    await ctx.page('goodDetails/goodDetails.js', {
        goodsData: result[0]
    });
};
