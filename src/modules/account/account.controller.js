const accountService = require('./account.service');

const signup = async (ctx) => {
  const user = await accountService.signup(ctx.validatedRequest.value);
  ctx.body = user;
};

const login = async (ctx) => {
  const user = await accountService.login(ctx.validatedRequest.value);
  if (!user) {
    ctx.throw(401, { message: 'Unauthorized' });
  }
  ctx.body = user;
};

module.exports = {
  signup,
  login,
};
