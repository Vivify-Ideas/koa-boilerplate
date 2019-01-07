const accountService = require('./account.service');

const signup = async (ctx) => {
  const user = await accountService.signup(ctx.params);
  ctx.body = user;
};

module.exports = {
  signup,
};
