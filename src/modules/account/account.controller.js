const accountService = require('./account.service');

const signup = async (ctx) => {
  const user = await accountService.signup(ctx.validatedRequest.value);
  ctx.body = user;
};

module.exports = {
  signup,
};
