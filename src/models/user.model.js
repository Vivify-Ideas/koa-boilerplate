const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: { type: String, select: false },
});

// eslint-disable-next-line
UserSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const generatedSalt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  const passwordHash = await bcrypt.hash(user.password, generatedSalt);
  user.password = passwordHash;
  return next();
});

// eslint-disable-next-line
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
