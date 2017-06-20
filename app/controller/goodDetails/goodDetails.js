exports.index = function* (ctx) {
    let Good = ctx.model.Good;
    let result = yield Good.find({}).exec();
    yield this.render('goodDetails/goodDetails.js', {
        goodsData: result[0]
    });
}
