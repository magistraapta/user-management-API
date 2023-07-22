const { UserModel } = require('../models/userModel');

async function getUser(req, res) {
  try {
    const user = await UserModel.find();
    return res.status(200).json({
      message: 'success',
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'internal error',
    });
  }
}

async function addUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'plase complete the users form',
      });
    }

    const user = UserModel({ name, email, password }).save();
    res.status(200).json({
      message: 'success',
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'internal error',
    });
  }
}

module.exports = { getUser, addUser };
