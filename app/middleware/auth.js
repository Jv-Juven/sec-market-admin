module.exports = () => {
    return async function(ctx, next) {
        // await next();
        if (ctx.session != undefined && ctx.session.user) {
            await next();
        } else {
            ctx.redirect('/');
        }
    }
}
