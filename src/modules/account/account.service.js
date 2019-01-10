const jwt = require('jsonwebtoken');
const pick = require('lodash/pick');
const User = require('./../../models/user.model');
const { jwtSecret, jwtExpiration } = require('./../../config');

const signup = async (data) => {
  const user = new User(pick(data, [
    'first_name', 'last_name', 'email', 'password',
  ]));
  await user.save();
  const userData = user.toObject();
  delete userData.password;
  return userData;
};

const login = async (data) => {
  const user = await User.findOne()
    .where('email', data.email)
    .select('+password')
    .exec();

  if (!user) {
    return null;
  }

  const isPasswordMatched = await user.comparePassword(data.password);
  if (isPasswordMatched) {
    const userData = user.toObject();
    delete userData.password;

    const token = jwt.sign({
      data: {
        _id: user._id,
      },
    }, jwtSecret, { expiresIn: jwtExpiration });

    return {
      user: userData,
      token,
    };
  }
  return null;
};

module.exports = {
  signup,
  login,
};
