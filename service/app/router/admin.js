'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth;

  router.get('/admin/index', controller.admin.main.index);
  router.get('/admin/checkOpenId', controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
};
