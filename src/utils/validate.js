const Joi = require('joi');
const isFunction = require('lodash/isFunction');
const isObject = require('lodash/isObject');

const { SYMBOLS } = require('./../constants');

const joiOptions = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: {
    objects: true,
  },
};

const getValidators = (validators = []) => {
  if (isObject(validators) && validators.isJoi) {
    return [
      (data) => {
        return Joi.validate(data, validators, joiOptions);
      },
    ];
  }

  if (isFunction(validators)) {
    return [validators];
  }

  if (!Array.isArray(validators) || !validators.every(isFunction)) {
    throw Error(
      'Validators must be type of {Joi Rules Object}, a {Function} or {Array} of functions'
    );
  }

  return validators;
};

const validateRules = (payload, validators = []) => {
  const persistentData = payload[SYMBOLS.PERSISTENT];
  return getValidators(validators).reduce(async (result, validator) => {
    const data = await result;

    if (data.errors.length) {
      return data;
    }

    try {
      await validator(data.value, persistentData);
      return {
        errors: data.errors,
        value: data.value,
      };
    } catch (error) {
      return {
        errors: [
          ...data.errors,
          ...error.details.map((detail) => {
            return {
              field: detail.context.key,
              message: detail.message,
            };
          })],
        value: data.value,
      };
    }
  }, {
    errors: [],
    value: payload,
  });
};

module.exports = {
  validateRules,
};
