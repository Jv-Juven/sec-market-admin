module.exports = () => {
    return async function (ctx, next) {
        ctx.body = '该页面已关闭...';
    }
}
