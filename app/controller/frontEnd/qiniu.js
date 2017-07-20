const qiniu = require('qiniu');
module.exports = app => {
    return class QiniuController extends app.Controller {
        // 七牛公钥
        get _accessKey () {
            return this.config.qiniu.accessKey;
        }
        // 七牛密钥
        get _secretKey () {
            return this.config.qiniu.secretKey;
        }
        // 获取七牛token
        async getToken (ctx) {
            const mac = new qiniu.auth.digest.Mac(this._accessKey, this._secretKey);
            const options = {
                scope: 'sjjxsm'
                // scope: 'weplatform'
            };
            const putPolicy = new qiniu.rs.PutPolicy(options);
            const uploadToken = putPolicy.uploadToken(mac);
            ctx.body = {
                uptoken: uploadToken
            };
            // ctx.body = {
            //     msgCode: 100,
            //     message: '获取token成功',
            //     result: uploadToken
            // };
        }
    };
};