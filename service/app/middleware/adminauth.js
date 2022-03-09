'use strict';

module.exports = () => {
  return async function adminauth(ctx, next) {
    // const openId = ctx.request.header.authorization;
    const openId = ctx.session.openId;
    if (openId) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
    }
  };
};
