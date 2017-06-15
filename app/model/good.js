module.exports = app => {
    const mongoose = app.mongoose;
    const GoodSchema = new mongoose.Schema({
        // 不建议做自增字段
        // goodsId: {
        //     type: Number,
        //     // index: true,
        //     unique: true,
        //     min: 0
        // },
        // 物品名
        goodsName: {
            type: String,
            trim: true,
            required: true
        },
        // 物品简介
        intro: {
            type: String,
            trim: true
        },
        // 价格
        price: {
            type: String,
            trim: true,
            required: true
        },
        // 昵称
        nickName: {
            type: String,
            trim: true
        },
        // 联系方式
        contactWay: {
            type: Number,
            default: 1,
            required: true
        },
        // 联系号码
        contactNum: {
            type: String,
            trim: true,
            required: true
        },
        // 手机号码
        phone: {
            type: String,
            trim: true
        },
        // 卖家留言
        sellerRemarks: {
            type: String,
            trim: true
        },
        // 物品图片
        imgs: {
            type: Array,
            default: []
        },
        // 物品状态
        status: {
            type: Number,
            default: 0,
            required: true
        }
    });
    return mongoose.model('Good', GoodSchema);
}
