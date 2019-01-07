const { validateRules } = require('./../utils');
const { SYMBOLS } = require('./../constants');

const defaultOptions = {
  throwOnInvalid: true,
  statusCode: 422,
};

const validate = (validators = [], options = defaultOptions) =>
  async (ctx, next) => {
    const {
      throwOnInvalid,
      statusCode,
    } = {
      ...defaultOptions,
      ...options,
    };

    const payload = {
      ...ctx.request.body,
      ...ctx.query,
      ...ctx.params,
      [SYMBOLS.PERSISTENT]: ctx,
    };

    const result = await validateRules(payload, validators);
    if (throwOnInvalid && result.errors.length) {
      ctx.status = statusCode || 400;
      ctx.body = {
        errors: result.errors,
      };

      return;
    }

    ctx.validatedRequest = result;
    await next();
  };

module.exports = validate;
