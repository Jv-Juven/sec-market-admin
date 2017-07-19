const qiniu = require('qiniu');
module.exports = app => {
    return class QiniuController extends app.controller {
        // 七牛公钥
        _accessKey() {
            return this.config.qiniu.accessKey;
        }
        // 七牛密钥
        _secretKey() {
            return this.config.qiniu.secretKey;
        }
        // 获取七牛token
        async getToken() {
            const mac = new qiniu.auth.digest.Mac(this._accessKey, this._secretKey);
            var options = {
                scope: bucket
            };
            var putPolicy = new qiniu.rs.PutPolicy(options);
            var uploadToken = putPolicy.uploadToken(mac);
        }
    };
};