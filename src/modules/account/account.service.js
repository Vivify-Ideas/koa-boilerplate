const pick = require('lodash/pick');
const User = require('./../../models/user.model');

const signup = (data) => {
  return User.create(pick(data, [
    'first_name', 'last_name', 'email',
  ]));
};

module.exports = {
  signup,
};
