module.exports = () => {
    return async function (ctx, next) {
        if (ctx.session != undefined && ctx.session.user) {
            await next();
        } else {
            ctx.redirect('/');
        }
    }
}
