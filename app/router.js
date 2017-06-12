
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/element', app.controller.home.home.element);
  app.get('/pager', app.controller.home.home.pager);
  app.get('/about', app.controller.about.about.index);
  app.get('/router', app.controller.router.router.index);
  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('/app(/.+)?', app.controller.app.app.index);
  app.get('/test', app.controller.test.test.index);
  app.get('/login', app.controller.login.login.index);
  app.get('/list', app.controller.list.list.index);
  app.get('/goodDetails', app.controller.goodDetails.goodDetails.index);
};
