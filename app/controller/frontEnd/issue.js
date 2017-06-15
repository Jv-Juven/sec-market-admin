module.exports = app => {
    return class IssueControll extends app.Controller {
        async index (ctx) {
            const Good = ctx.model.Good;
            let result = await Good.create({
                goodsName: '森田面膜',
                intro: '便宜又好用',
                price: '49.00',
                nickName: 'Jance',
                contactWay: 2,
                contactNum: 'Jance312548',
                phone: '15745422154',
                sellerRemarks: '广州同城交易',
                imgs: [
                    'http://trip-pic1.plateno.com/images/temp/index/swiper1.jpg',
                    'http://trip-pic1.plateno.com/images/temp/index/swiper2.jpg',
                    'http://trip-pic1.plateno.com/images/temp/index/swiper3.jpg'
                ]
            });
            ctx.body = result;
        }
    }
}
