const mongoose = require('mongoose');

const newUserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('User', newUserSchema);

module.exports = { UserModel };
