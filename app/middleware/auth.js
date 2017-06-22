module.exports = () => {
    return async function(ctx, next) {
        if (ctx.session != undefined && ctx.session.user) {
            console.log('ddd');
            await next();
        } else {
            ctx.redirect('/');
        }
    }
}