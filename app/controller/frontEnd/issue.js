module.exports = app => {
    return class IssueController extends app.Controller {
        async index (ctx) {
            // 模拟数据
            // {
            //     goodsName: '森田面膜',
            //     intro: '便宜又好用',
            //     price: '49.00',
            //     nickName: 'Jance',
            //     contactWay: 2,
            //     contactNum: 'Jance312548',
            //     phone: '15745422154',
            //     sellerRemarks: '广州同城交易dd',
            //     imgs: [
            //         'http://trip-pic1.plateno.com/images/temp/index/swiper1.jpg',
            //         'http://trip-pic1.plateno.com/images/temp/index/swiper2.jpg',
            //         'http://trip-pic1.plateno.com/images/temp/index/swiper3.jpg'
            //     ]
            // }
            const Good = ctx.model.Good;
            const params = ctx.request.body;
            const result = await Good.create({
                goodsName: params.goodsName,
                intro: params.intro,
                price: params.price,
                nickName: params.nickName,
                contactWay: params.contactWay,
                contactNum: params.contactNum,
                phone: params.phone,
                sellerRemarks: params.sellerRemarks,
                imgs: params.imgs
            });
            if (result._id) {
                ctx.body = {
                    msgCode: 100,
                    message: '插入成功',
                    result: {
                        _id: result._id
                    }
                };
            } else {
                ctx.body = {
                    msgCode: 601,
                    message: '插入失败',
                    result: null
                };
            }
        }
    };
};