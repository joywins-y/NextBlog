'use strict';

module.exports = () => {
  return async function adminauth(ctx, next) {
    console.log('ctx=============');
    console.log(ctx.request.header.authorization);
    const openId = ctx.request.header.authorization;
    if (openId) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
    }
  };
};
