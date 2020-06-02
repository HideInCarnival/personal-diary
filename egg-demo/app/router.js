'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jsonp = app.jsonp();
  router.get('/', jsonp, controller.home.index);
  router.get('/list', controller.home.list);
  router.get('/detail/:id', controller.home.searchById);
  router.post('/add', controller.home.add);
  router.post('/update', controller.home.update);
  router.post('/delete', controller.home.deleteById);
};
