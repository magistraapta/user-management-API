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

async function deleteUser(req, res) {
    try {
        const {id} = req.params
        const checkUser = await UserModel.findById(id);
        if (!checkUser) {
            res.status(400).json({
                message: "user not found!"
            })
        }

        const user = await UserModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "data has been deleted",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports = { getUser, addUser, deleteUser };
