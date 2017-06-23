const co = require('co');
module.exports = {
    async page(...params) {
        // console.log(params);
        let result = await co(this.render(...params));
        // return result;
        // return co.wrap(this.render)(...params);
    }
}