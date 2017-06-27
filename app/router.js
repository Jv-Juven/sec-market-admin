module.exports = app => {
    // app.get('/', app.controller.home.home.index);
    app.get('/element', app.controller.home.home.element);
    app.get('/pager', app.controller.home.home.pager);
    app.get('/about', app.controller.about.about.index);
    app.get('/router', app.controller.router.router.index);
    app.get('/app/api/article/list', app.controller.app.app.list);
    app.get('/app/api/article/:id', app.controller.app.app.detail);
    app.get('/app(/.+)?', app.controller.app.app.index);
    app.get('/test', app.controller.test.test.index);
    app.get('/login', app.controller.login.login.index);
    app.redirect('/', '/login', 302);
    app.post('/login/api/register', app.controller.login.login.postRegister);
    app.post('/login/api/login', app.controller.login.login.postLogin);
    app.get('/list', app.middlewares.auth(), app.controller.list.list.index);
    app.get('/goodDetails/:id', app.middlewares.auth(), app.controller.goodDetails.goodDetails.index);
    app.post('/app/api/issue/index', app.controller.frontEnd.issue.index);
    app.resources('goods', '/api/v1/goods', app.controller.v1.goods.index);
};
